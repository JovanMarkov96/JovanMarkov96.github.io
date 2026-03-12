const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.setViewport({ width: 1440, height: 900 });
    
    console.log("Navigating to local talks page...");
    await page.goto('http://localhost:4000/talks/', { waitUntil: 'networkidle0' });
    
    const outPath = path.join('C:', 'Users', 'jovanm', '.gemini', 'antigravity', 'brain', '9079e256-a236-441c-a70c-272069b7ac71', 'talks_preview.png');
    await page.screenshot({ path: outPath, fullPage: true });
    
    console.log(`Saved talks screenshot to ${outPath}`);
    await browser.close();
})();
