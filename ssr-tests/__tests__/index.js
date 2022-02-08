describe('SSR Test Page', function() {
  async function renderTest() {
    await browser.refresh();
    await browser.url('/');

    const mainEl = await browser.$('.nx-page-main'),
      logs = await browser.getLogs('browser'),
      errorLogs = logs.filter(({ level }) => level === 'SEVERE');

    if (logs.length) {
      console.log('logs', logs);
    }

    expect(mainEl).toBeDefined();

    // hydration errors (such as id mismatches) will show up as console errors but the page will still render
    expect(errorLogs.length).toBe(0);
  }

  it('renders without error', renderTest);

  // some hydration errors might only show up during successive page loads from a single server run
  it('renders without error again', renderTest);
});
