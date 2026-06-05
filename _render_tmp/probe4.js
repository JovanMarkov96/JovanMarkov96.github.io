const puppeteer=require('puppeteer'),fs=require('fs'),path=require('path');
const SITE=path.resolve(__dirname,'..','_site'),HOST='https://jovanmarkov96.github.io';
const MIME={'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.svg':'image/svg+xml','.woff':'font/woff','.woff2':'font/woff2','.json':'application/json'};
function lf(u){let p=decodeURIComponent(u.split('?')[0].split('#')[0]);if(p.endsWith('/'))p+='index.html';return path.join(SITE,p);}
(async()=>{const b=await puppeteer.launch({args:['--no-sandbox']});
for(const w of [1280,1100,1024]){
const pg=await b.newPage();await pg.setViewport({width:w,height:300});
await pg.setRequestInterception(true);pg.on('request',q=>{const u=q.url();if(u.startsWith(HOST)){const f=lf(u.slice(HOST.length)||'/');fs.readFile(f,(e,d)=>e?q.respond({status:404,body:'x'}):q.respond({status:200,contentType:MIME[path.extname(f)]||'application/octet-stream',body:d}));}else q.continue();});
await pg.goto(HOST+'/',{waitUntil:'networkidle2',timeout:30000});
await pg.evaluate(async()=>{if(document.fonts&&document.fonts.ready)await document.fonts.ready;});
await new Promise(r=>setTimeout(r,300));
const o=await pg.evaluate(()=>{
  const t=document.querySelector('.site-title').getBoundingClientRect();
  const n=document.querySelector('#nav-links').getBoundingClientRect();
  const a=document.querySelector('.masthead__actions').getBoundingClientRect();
  const iw=document.querySelector('.masthead__inner-wrap').getBoundingClientRect();
  const navContent=document.querySelector('#nav-links').scrollWidth;
  return {brandW:Math.round(t.width), navW:Math.round(n.width), navContentW:navContent, actsW:Math.round(a.width), innerW:Math.round(iw.width),
          bt_overlap:Math.round(t.right-n.left), ta_overlap:Math.round(n.right-a.left)};
});
console.log(w, JSON.stringify(o));
await pg.close();
}
await b.close();})();
