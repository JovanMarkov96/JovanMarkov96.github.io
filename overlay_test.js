const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Enable dark mode for a cooler screenshot
    await page.emulateMediaFeatures([{ name: 'prefers-color-scheme', value: 'dark' }]);
    
    await page.setViewport({ width: 375, height: 812, isMobile: true });
    await page.goto('http://localhost:4000', { waitUntil: 'networkidle2' });
    
    // Let Jekyll catch up if needed
    await new Promise(r => setTimeout(r, 2000));
    
    // Click the native mode nav overlay toggle
    await page.click('#nav-toggle');
    
    // Wait for the .is-visible staggered animation to finish
    await new Promise(r => setTimeout(r, 1500));
    
    const outPath = path.join('C:', 'Users', 'jovanm', '.gemini', 'antigravity', 'brain', '9079e256-a236-441c-a70c-272069b7ac71', 'overlay_menu_dark.png');
    await page.screenshot({ path: outPath });
    
    console.log(`Saved new native overlay menu screenshot to ${outPath}`);
    await browser.close();
})();
