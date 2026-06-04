const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SITE = path.resolve(__dirname, '..', '_site');
const OUT = __dirname;
const HOST = 'https://jovanmarkov96.github.io';
const MIME = { '.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.jpeg':'image/jpeg','.gif':'image/gif','.svg':'image/svg+xml','.webp':'image/webp','.ico':'image/x-icon','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.json':'application/json','.xml':'application/xml' };
function localFile(u){ let p=decodeURIComponent(u.split('?')[0].split('#')[0]); if(p.endsWith('/'))p+='index.html'; return path.join(SITE,p); }

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  async function newPage(theme, vp){
    const page = await browser.newPage();
    await page.setViewport(vp);
    await page.setRequestInterception(true);
    page.on('request', req => {
      const u = req.url();
      if (u.startsWith(HOST)) {
        const f = localFile(u.slice(HOST.length)||'/');
        fs.readFile(f, (e,b)=> e ? req.respond({status:404,body:'x'}) : req.respond({status:200,contentType:MIME[path.extname(f)]||'application/octet-stream',body:b}));
      } else req.continue();
    });
    await page.evaluateOnNewDocument(t => localStorage.setItem('theme', t), theme);
    page.on('pageerror', e=>console.log('PAGEERR',e.message));
    page.on('console', m=>{ if(m.type()==='error') console.log('CONSOLE-ERR', m.text()); });
    return page;
  }

  for (const theme of ['light','dark']) {
    // Desktop: top + scrolled over publication cards (glass see-through test)
    const page = await newPage(theme, { width: 1440, height: 900 });
    await page.goto(HOST + '/publications/', { waitUntil:'networkidle2', timeout:30000 });
    await new Promise(r=>setTimeout(r,800));
    await page.screenshot({ path: path.join(OUT, `nav_${theme}_top.png`), clip:{x:0,y:0,width:1440,height:120} });
    await page.evaluate(()=>window.scrollTo(0,260));
    await new Promise(r=>setTimeout(r,500));
    await page.screenshot({ path: path.join(OUT, `nav_${theme}_scrolled.png`), clip:{x:0,y:0,width:1440,height:150} });
    await page.close();

    // Mobile: closed + open menu
    const mp = await newPage(theme, { width: 390, height: 844, isMobile: true, hasTouch: true });
    await mp.goto(HOST + '/publications/', { waitUntil:'networkidle2', timeout:30000 });
    await new Promise(r=>setTimeout(r,800));
    await mp.screenshot({ path: path.join(OUT, `nav_${theme}_mobile_closed.png`), clip:{x:0,y:0,width:390,height:110} });
    await mp.click('#nav-toggle');
    await new Promise(r=>setTimeout(r,650));
    await mp.screenshot({ path: path.join(OUT, `nav_${theme}_mobile_open.png`) });
    await mp.close();
  }
  await browser.close();
  console.log('DONE');
})();
