const puppeteer=require('puppeteer'),fs=require('fs'),path=require('path');
const SITE=path.resolve(__dirname,'..','_site'),OUT=__dirname,HOST='https://jovanmarkov96.github.io';
const MIME={'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.svg':'image/svg+xml','.woff':'font/woff','.woff2':'font/woff2','.json':'application/json'};
function lf(u){let p=decodeURIComponent(u.split('?')[0].split('#')[0]);if(p.endsWith('/'))p+='index.html';return path.join(SITE,p);}
(async()=>{const b=await puppeteer.launch({args:['--no-sandbox']});
for(const t of ['light','dark']){const pg=await b.newPage();await pg.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
await pg.setRequestInterception(true);pg.on('request',q=>{const u=q.url();if(u.startsWith(HOST)){const f=lf(u.slice(HOST.length)||'/');fs.readFile(f,(e,d)=>e?q.respond({status:404,body:'x'}):q.respond({status:200,contentType:MIME[path.extname(f)]||'application/octet-stream',body:d}));}else q.continue();});
await pg.evaluateOnNewDocument(x=>localStorage.setItem('theme',x),t);
await pg.goto(HOST+'/',{waitUntil:'networkidle2',timeout:30000});
await pg.evaluate(async()=>{if(document.fonts&&document.fonts.ready)await document.fonts.ready;});
await new Promise(r=>setTimeout(r,400));
const vg=await pg.evaluate(()=>{const bar=document.querySelector('.masthead').getBoundingClientRect();const ti=document.querySelector('.site-title').getBoundingClientRect();return {top:Math.round(ti.top-bar.top),bot:Math.round(bar.bottom-ti.bottom),trunc:document.querySelector('.site-title').scrollWidth>document.querySelector('.site-title').clientWidth+1};});
console.log(t,'mobile vGap',JSON.stringify(vg));
await pg.screenshot({path:path.join(OUT,`mob_${t}.png`),clip:{x:0,y:0,width:390,height:90}});
await pg.close();}
await b.close();})();
