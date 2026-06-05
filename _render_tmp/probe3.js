const puppeteer=require('puppeteer'),fs=require('fs'),path=require('path');
const SITE=path.resolve(__dirname,'..','_site'),HOST='https://jovanmarkov96.github.io';
const MIME={'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.svg':'image/svg+xml','.woff':'font/woff','.woff2':'font/woff2','.json':'application/json'};
function lf(u){let p=decodeURIComponent(u.split('?')[0].split('#')[0]);if(p.endsWith('/'))p+='index.html';return path.join(SITE,p);}
(async()=>{const b=await puppeteer.launch({args:['--no-sandbox']});const pg=await b.newPage();await pg.setViewport({width:1440,height:300});
await pg.setRequestInterception(true);pg.on('request',q=>{const u=q.url();if(u.startsWith(HOST)){const f=lf(u.slice(HOST.length)||'/');fs.readFile(f,(e,d)=>e?q.respond({status:404,body:'x'}):q.respond({status:200,contentType:MIME[path.extname(f)]||'application/octet-stream',body:d}));}else q.continue();});
await pg.goto(HOST+'/',{waitUntil:'networkidle2',timeout:30000});
await pg.evaluate(async()=>{if(document.fonts&&document.fonts.ready)await document.fonts.ready;});
await new Promise(r=>setTimeout(r,400));
const o=await pg.evaluate(()=>{
  const mh=document.querySelector('.masthead'),iw=document.querySelector('.masthead__inner-wrap');
  const mcs=getComputedStyle(mh),ics=getComputedStyle(iw);
  return {
    mh_h:Math.round(mh.getBoundingClientRect().height), mh_minH:mcs.minHeight, mh_display:mcs.display, mh_padB:mcs.paddingBottom, mh_border:mcs.borderBottomWidth,
    iw_h:Math.round(iw.getBoundingClientRect().height), iw_rows:ics.gridTemplateRows, iw_rowGap:ics.rowGap, iw_alignContent:ics.alignContent, iw_padB:ics.paddingBottom, iw_display:ics.display,
    childCount: iw.children.length,
    children: [...iw.children].map(c=>c.className+':'+Math.round(c.getBoundingClientRect().height)),
  };
});
console.log(JSON.stringify(o,null,2));
await b.close();})();
