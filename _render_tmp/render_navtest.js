const puppeteer=require('puppeteer'),fs=require('fs'),path=require('path');
const SITE=path.resolve(__dirname,'..','_site'),OUT=__dirname,HOST='https://jovanmarkov96.github.io';
const MIME={'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.webp':'image/webp','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.json':'application/json'};
function lf(u){let p=decodeURIComponent(u.split('?')[0].split('#')[0]);if(p.endsWith('/'))p+='index.html';return path.join(SITE,p);}
(async()=>{const b=await puppeteer.launch({args:['--no-sandbox']});
for(const t of ['light','dark']){
 for(const w of [1536,1440,1360,1280,1180,1100,1024]){
  const pg=await b.newPage();await pg.setViewport({width:w,height:300,deviceScaleFactor:1});
  await pg.setRequestInterception(true);pg.on('request',q=>{const u=q.url();if(u.startsWith(HOST)){const f=lf(u.slice(HOST.length)||'/');fs.readFile(f,(e,d)=>e?q.respond({status:404,body:'x'}):q.respond({status:200,contentType:MIME[path.extname(f)]||'application/octet-stream',body:d}));}else q.continue();});
  await pg.evaluateOnNewDocument(x=>localStorage.setItem('theme',x),t);
  await pg.goto(HOST+'/',{waitUntil:'networkidle2',timeout:30000});
  await pg.evaluate(async()=>{ if(document.fonts&&document.fonts.ready){await document.fonts.ready;} });
  await new Promise(r=>setTimeout(r,400));
  const m=await pg.evaluate(()=>{
    const bar=document.querySelector('.masthead').getBoundingClientRect();
    const iw=document.querySelector('.masthead__inner-wrap');
    const title=document.querySelector('.site-title');
    const nav=document.querySelector('#nav-links');
    const acts=document.querySelector('.masthead__actions');
    const tr=title.getBoundingClientRect(), nr=nav.getBoundingClientRect(), ar=acts.getBoundingClientRect();
    const fontUsed=getComputedStyle(title).fontFamily;
    return {
      brandTrunc: title.scrollWidth>title.clientWidth+1,
      hOverflow: iw.scrollWidth>iw.clientWidth+1,
      brandTabsOverlap: tr.right > nr.left+1,
      tabsActsOverlap: nr.right > ar.left+1,
      topGap: Math.round(nr.top-bar.top),
      bottomGap: Math.round(bar.bottom-nr.bottom),
      navOffset: Math.round((nr.left+nr.width/2)-(bar.left+bar.width/2)),
    };
  });
  console.log(`${t} ${w}  trunc=${m.brandTrunc} overflow=${m.hOverflow} overlap(b/t=${m.brandTabsOverlap},t/a=${m.tabsActsOverlap}) vGap(top=${m.topGap},bot=${m.bottomGap}) navOff=${m.navOffset}`);
  if(w===1440||w===1280) await pg.screenshot({path:path.join(OUT,`fix_${t}_${w}.png`),clip:{x:0,y:0,width:w,height:96}});
  await pg.close();
 }
}
await b.close();console.log('DONE');})();
