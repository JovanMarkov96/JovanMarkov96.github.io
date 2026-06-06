const puppeteer=require('puppeteer'),fs=require('fs'),path=require('path');
const SITE=path.resolve(__dirname,'..','_site'),OUT=__dirname,HOST='https://jovanmarkov96.github.io';
const MIME={'.html':'text/html','.css':'text/css','.js':'application/javascript','.png':'image/png','.jpg':'image/jpeg','.svg':'image/svg+xml','.webp':'image/webp','.woff':'font/woff','.woff2':'font/woff2','.ttf':'font/ttf','.json':'application/json'};
function lf(u){let p=decodeURIComponent(u.split('?')[0].split('#')[0]);if(p.endsWith('/'))p+='index.html';return path.join(SITE,p);}
(async()=>{const b=await puppeteer.launch({args:['--no-sandbox']});
for(const t of ['light','dark']){const pg=await b.newPage();await pg.setViewport({width:1280,height:1100});
await pg.setRequestInterception(true);pg.on('request',q=>{const u=q.url();if(u.startsWith(HOST)){const f=lf(u.slice(HOST.length)||'/');fs.readFile(f,(e,d)=>e?q.respond({status:404,body:'x'}):q.respond({status:200,contentType:MIME[path.extname(f)]||'application/octet-stream',body:d}));}else q.continue();});
await pg.evaluateOnNewDocument(x=>localStorage.setItem('theme',x),t);
await pg.goto(HOST+'/device-controllers/',{waitUntil:'networkidle2',timeout:30000});
await pg.evaluate(()=>document.fonts.ready);await new Promise(r=>setTimeout(r,500));
// full top with filter bar (no filter)
await pg.screenshot({path:path.join(OUT,`dcfilter_${t}_all.png`)});
// hover a chip
await pg.hover('.dc-filter__chips[data-group="type"] .dc-chip[data-value="laser"]');
await new Promise(r=>setTimeout(r,250));
await pg.screenshot({path:path.join(OUT,`dcfilter_${t}_hover.png`)});
// apply a type filter: Laser & Locking
await pg.click('.dc-filter__chips[data-group="type"] .dc-chip[data-value="laser"]');
await new Promise(r=>setTimeout(r,300));
await pg.screenshot({path:path.join(OUT,`dcfilter_${t}_laser.png`)});
// also pick a vendor that conflicts -> no results (laser + keysight)
await pg.click('.dc-filter__chips[data-group="vendor"] .dc-chip[data-value="keysight"]');
await new Promise(r=>setTimeout(r,300));
await pg.screenshot({path:path.join(OUT,`dcfilter_${t}_none.png`)});
await pg.close();}
await b.close();console.log('DONE');})();
