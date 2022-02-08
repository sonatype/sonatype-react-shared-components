describe('SSR Test Page', function() {
  it('renders without error', async function() {
    await browser.url('/');

    const mainEl = await browser.$('.nx-page-main');

    expect(mainEl).toBeDefined();
  });
});
