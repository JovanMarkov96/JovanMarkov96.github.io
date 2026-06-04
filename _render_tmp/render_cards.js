const puppeteer=require('puppeteer'),fs=require('fs'),path=require('path');
const SITE=path.resolve(__dirname,'..','_site'),OUT=__dirname,HOST='https://jovanmarkov96.github.io';
const MIME={'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.webp':'image/webp','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.json':'application/json'};
function lf(u){let p=decodeURIComponent(u.split('?')[0].split('#')[0]);if(p.endsWith('/'))p+='index.html';return path.join(SITE,p);}
(async()=>{const b=await puppeteer.launch({args:['--no-sandbox']});
for(const t of ['light','dark']){const pg=await b.newPage();await pg.setViewport({width:1440,height:1000});
await pg.setRequestInterception(true);pg.on('request',q=>{const u=q.url();if(u.startsWith(HOST)){const f=lf(u.slice(HOST.length)||'/');fs.readFile(f,(e,d)=>e?q.respond({status:404,body:'x'}):q.respond({status:200,contentType:MIME[path.extname(f)]||'application/octet-stream',body:d}));}else q.continue();});
await pg.evaluateOnNewDocument(x=>localStorage.setItem('theme',x),t);
await pg.goto(HOST+'/',{waitUntil:'networkidle2',timeout:30000});await new Promise(r=>setTimeout(r,800));
await pg.evaluate(()=>{const g=document.querySelector('.home-grid');if(g)g.scrollIntoView();});await new Promise(r=>setTimeout(r,400));
const g=await pg.$('.home-grid');await g.screenshot({path:path.join(OUT,`cards_${t}.png`)});await pg.close();}
await b.close();console.log('DONE');})();
