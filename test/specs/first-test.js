describe('Ecommerce App', async() => {
  
  it('Login fail page', async() => {
    // open browser
    await browser.url('https://www.rahulshettyacademy.com/loginpagePractise/');
    console.log(await browser.getTitle());
    
  });
});
