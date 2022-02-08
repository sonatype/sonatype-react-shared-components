describe('SSR Test Page', function() {
  it('renders without error', async function() {
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
  });
});
