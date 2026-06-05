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
  const mh=document.querySelector('.masthead'), iw=document.querySelector('.masthead__inner-wrap'), t=document.querySelector('.site-title');
  const mhcs=getComputedStyle(mh), iwcs=getComputedStyle(iw);
  const mr=mh.getBoundingClientRect(), ir=iw.getBoundingClientRect();
  return {
    brandWidth: Math.round(t.getBoundingClientRect().width),
    mh_height: Math.round(mr.height), mh_minH: mhcs.minHeight, mh_padT:mhcs.paddingTop, mh_padB:mhcs.paddingBottom, mh_display:mhcs.display, mh_align:mhcs.alignItems,
    iw_height: Math.round(ir.height), iw_padT:iwcs.paddingTop, iw_padB:iwcs.paddingBottom,
    iw_offsetTopInMh: Math.round(ir.top-mr.top), iw_offsetBotInMh: Math.round(mr.bottom-ir.bottom),
  };
});
console.log(JSON.stringify(o,null,2));
await b.close();})();
