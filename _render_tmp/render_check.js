const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const SITE = path.resolve(__dirname, '..', '_site');
const OUT = __dirname;
const HOST = 'https://jovanmarkov96.github.io';
const MIME = { '.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.svg':'image/svg+xml','.webp':'image/webp','.ico':'image/x-icon','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.json':'application/json','.xml':'application/xml' };
function lf(u){ let p=decodeURIComponent(u.split('?')[0].split('#')[0]); if(p.endsWith('/'))p+='index.html'; return path.join(SITE,p); }

(async () => {
  const browser = await puppeteer.launch({ args:['--no-sandbox'] });
  async function mk(theme, vp){
    const page = await browser.newPage();
    await page.setViewport(vp);
    await page.setRequestInterception(true);
    page.on('request', req => { const u=req.url();
      if (u.startsWith(HOST)){ const f=lf(u.slice(HOST.length)||'/'); fs.readFile(f,(e,b)=> e?req.respond({status:404,body:'x'}):req.respond({status:200,contentType:MIME[path.extname(f)]||'application/octet-stream',body:b})); }
      else req.continue();
    });
    await page.evaluateOnNewDocument(t=>localStorage.setItem('theme',t), theme);
    page.on('pageerror',e=>console.log('PAGEERR',e.message));
    page.on('console',m=>{ if(m.type()==='error') console.log('CONSOLE-ERR',m.text()); });
    return page;
  }

  for (const theme of ['light','dark']) {
    // Landing desktop: alignment (top) + sticky (scrolled)
    const d = await mk(theme, { width:1440, height:900 });
    await d.goto(HOST+'/', { waitUntil:'networkidle2', timeout:30000 });
    await new Promise(r=>setTimeout(r,800));
    await d.screenshot({ path:path.join(OUT,`land_${theme}_top.png`), clip:{x:0,y:0,width:1440,height:520} });
    await d.evaluate(()=>window.scrollTo(0,650));
    await new Promise(r=>setTimeout(r,500));
    await d.screenshot({ path:path.join(OUT,`land_${theme}_scrolled.png`) });
    // navbar symmetry
    await d.evaluate(()=>window.scrollTo(0,0));
    await new Promise(r=>setTimeout(r,300));
    await d.screenshot({ path:path.join(OUT,`navbar_${theme}.png`), clip:{x:0,y:0,width:1440,height:100} });
    await d.close();

    // Mobile menu open (backdrop fix)
    const m = await mk(theme, { width:390, height:844, isMobile:true, hasTouch:true });
    await m.goto(HOST+'/', { waitUntil:'networkidle2', timeout:30000 });
    await new Promise(r=>setTimeout(r,800));
    await m.click('#nav-toggle');
    await new Promise(r=>setTimeout(r,650));
    // probe: is a menu link actually clickable (topmost element at its center)?
    const probe = await m.evaluate(()=>{
      var a = document.querySelector('#nav-links .masthead__menu-item a');
      if(!a) return 'no-link';
      var r = a.getBoundingClientRect();
      var el = document.elementFromPoint(r.left+r.width/2, r.top+r.height/2);
      return el ? (el.closest('#nav-links') ? 'clickable' : 'BLOCKED by '+el.className) : 'none';
    });
    console.log(theme, 'mobile menu link:', probe);
    await m.screenshot({ path:path.join(OUT,`menu_${theme}.png`) });
    await m.close();
  }
  await browser.close();
  console.log('DONE');
})();
