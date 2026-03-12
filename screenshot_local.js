const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    
    // Mobile Page
    const mobilePage = await browser.newPage();
    await mobilePage.setViewport({ width: 375, height: 812, isMobile: true });
    await mobilePage.goto('http://localhost:4000/', { waitUntil: 'networkidle0' });
    await mobilePage.screenshot({ path: 'C:\\Users\\jovanm\\.gemini\\antigravity\\brain\\9079e256-a236-441c-a70c-272069b7ac71\\homepage_mobile_no_profile.png' });
    
    // Desktop Page
    const desktopPage = await browser.newPage();
    await desktopPage.setViewport({ width: 1440, height: 900 });
    await desktopPage.goto('http://localhost:4000/', { waitUntil: 'networkidle0' });
    await desktopPage.screenshot({ path: 'C:\\Users\\jovanm\\.gemini\\antigravity\\brain\\9079e256-a236-441c-a70c-272069b7ac71\\homepage_desktop_with_profile.png' });

    await browser.close();
})();
