const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();
  // page.setViewport({
  //   width: 1920,
  //   height: 1080
  // });
  await page.goto('https://www.zhihu.com/question/20962496')

  var login = await page.$('.AppHeader-login')
  
  await login.click()
  var loginPhoneOrEmail = await page
    .waitForSelector('.SignFlow-accountInput Input')
  
  // var loginPhoneOrEmail = await page.$('.SignFlow-accountInput Input')
  await console.log('loginPhoneOrEmail', loginPhoneOrEmail);
  await loginPhoneOrEmail.focus()
  await loginPhoneOrEmail.type('673944632@qq.com', {delay: 20})

  var password = await page
  .waitForSelector('[name=password]')
  console.log('password', password);
  
  await password.focus('[name=password]');
  await password.type('huangzifeng1993', {delay: 20})

  var autoBtn = await page.$('.SignFlow-submitButton')
  console.log('autoBtn', autoBtn);
  
  await autoBtn.click()


  // var search = await page.$('.SearchBar-input input')
  // console.log('search', search);
  // await search.focus()
  // await page.type('.SearchBar-input input', 'github', {delay: 20})
  // await page.keyboard.up('Enter');
})();