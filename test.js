const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  page.setViewport({
    width: 1366,
    height: 768
  });
  await page.goto('https://web.fangliju.com/login.html')

  var loginName = await page.$('#txtLoginName')
  await loginName.focus()
  await loginName.type('4400001', { delay: 100 })

  var password = await page.$('#txtLoginPassword')
  // console.log('password', password);

  await password.focus();
  await password.type('123456', { delay: 100 })

  var autoBtn = await page.$('#login_button')
  // console.log('autoBtn', autoBtn);

  await autoBtn.click()


  // var search = await page.$('.SearchBar-input input')
  // console.log('search', search);
  // await search.focus()
  // await page.type('.SearchBar-input input', 'github', {delay: 20})
  // await page.keyboard.up('Enter');
})();