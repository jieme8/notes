const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://juejin.im/entry/5c0dcd5c5188255a004ca240');
  await page.screenshot({path: 'example.png'});

  await browser.close();
})();