const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:4000/', {
    waitUntil: 'networkidle2',
  });
  await page.pdf({ path: 'pdf/cv.pdf', format: 'a4' });

  await browser.close();
})();