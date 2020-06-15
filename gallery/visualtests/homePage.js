describe('Home Page', function() {
  it('looks right', function() {
    browser.url('#/pages/NxAlert');
    browser.saveScreenshot('/tmp/screenshot.png');
  });
});
