const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    // Listen for console errors
    page.on('console', msg => console.log('PAGE LOG:', msg.text()));
    page.on('pageerror', err => console.log('PAGE ERROR:', err.stack || err.toString()));

    await page.setViewport({ width: 375, height: 812, isMobile: true });
    
    console.log("Navigating to https://jovanmarkov.com...");
    await page.goto('https://jovanmarkov.com', { waitUntil: 'networkidle2' });
    
    await new Promise(r => setTimeout(r, 2000));
    
    console.log("Checking if #nav-toggle exists...");
    const toggle = await page.$('#nav-toggle');
    if (!toggle) {
        console.log("ERROR: #nav-toggle NOT FOUND!");
    } else {
        const isVisible = await page.evaluate(el => {
            const style = window.getComputedStyle(el);
            return style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
        }, toggle);
        console.log("#nav-toggle is visible:", isVisible);
        
        console.log("Clicking #nav-toggle...");
        await toggle.click();
    }
    
    await new Promise(r => setTimeout(r, 1500));
    
    const linksVisible = await page.evaluate(() => {
        const links = document.getElementById('nav-links');
        if (!links) return "NO LINKS";
        const style = window.getComputedStyle(links);
        return {
            classes: links.className,
            display: style.display,
            visibility: style.visibility,
            opacity: style.opacity
        };
    });
    console.log("Nav Links State:", linksVisible);

    const outPath = path.join('C:', 'Users', 'jovanm', '.gemini', 'antigravity', 'brain', '9079e256-a236-441c-a70c-272069b7ac71', 'live_mobile_test.png');
    await page.screenshot({ path: outPath });
    
    console.log(`Saved screenshot to ${outPath}`);
    await browser.close();
})();
