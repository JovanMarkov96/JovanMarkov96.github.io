const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const SITE = path.resolve(__dirname, '..', '_site');
const OUT = __dirname;
const HOST = 'https://jovanmarkov96.github.io';

const MIME = {
  '.html': 'text/html', '.css': 'text/css', '.js': 'application/javascript',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.ico': 'image/x-icon',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.eot': 'application/vnd.ms-fontobject',
  '.json': 'application/json', '.xml': 'application/xml'
};

function localFile(urlPath) {
  let p = decodeURIComponent(urlPath.split('?')[0].split('#')[0]);
  if (p.endsWith('/')) p += 'index.html';
  return path.join(SITE, p);
}

const targets = [
  { name: 'landing', url: HOST + '/' },
  { name: 'cv', url: HOST + '/cv/' },
  { name: 'portfolio', url: HOST + '/portfolio/' },
  { name: 'publications', url: HOST + '/publications/' },
  { name: 'blog-index', url: HOST + '/year-archive/' },
  { name: 'post', url: HOST + '/posts/2012/08/trapped-ions-2d-chain/' },
  { name: 'post-toc', url: HOST + '/posts/2023/10/useful-links-trapped-ion-quantum-computing/' },
];

const viewports = {
  desktop: { width: 1440, height: 1000 },
  mobile: { width: 390, height: 844, isMobile: true },
};

(async () => {
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });

  for (const theme of ['light', 'dark']) {
    for (const [vpName, vp] of Object.entries(viewports)) {
      if (vpName === 'mobile' && theme === 'light') { /* keep set small but still do it */ }
      const page = await browser.newPage();
      await page.setViewport(vp);
      await page.setRequestInterception(true);
      page.on('request', (req) => {
        const u = req.url();
        if (u.startsWith(HOST)) {
          const file = localFile(u.slice(HOST.length) || '/');
          fs.readFile(file, (err, body) => {
            if (err) { req.respond({ status: 404, body: 'not found: ' + file }); return; }
            req.respond({ status: 200, contentType: MIME[path.extname(file)] || 'application/octet-stream', body });
          });
        } else {
          req.continue(); // CDN fonts/icons -> network
        }
      });
      await page.evaluateOnNewDocument((t) => {
        localStorage.setItem('theme', t);
      }, theme);
      page.on('pageerror', (e) => console.log('PAGEERR', e.message));
      page.on('console', (m) => { if (m.type() === 'error') console.log('CONSOLE-ERR', m.text()); });

      for (const t of targets) {
        if (vpName === 'mobile' && !['landing', 'blog-index', 'post', 'post-toc'].includes(t.name)) continue;
        try {
          await page.goto(t.url, { waitUntil: 'networkidle2', timeout: 30000 });
          await new Promise(r => setTimeout(r, 900));
          const out = path.join(OUT, `${t.name}_${theme}_${vpName}.png`);
          await page.screenshot({ path: out, fullPage: true });
          console.log('OK', path.basename(out));
        } catch (e) {
          console.log('FAIL', t.name, theme, vpName, e.message);
        }
      }
      await page.close();
    }
  }

  await browser.close();
  console.log('DONE');
})();
