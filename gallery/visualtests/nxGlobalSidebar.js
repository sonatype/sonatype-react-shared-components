/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('nx-global-sidebar', function() {
  const {
    getPage,
    waitAndGetElements,
    checkFullPageScreenshot,
    a11yTest,
    hoverTest,
    clickTest,
    focusTest,
    simpleTest,
    focusAndHoverTest
  } = setupBrowser('#/NxGlobalSidebarExample', false);

  beforeEach(async function() {
    await getPage().setViewport({ width: 1366, height: 1000 });
  });

  it('looks right', async function() {
    await checkFullPageScreenshot();
  });

  it('looks right when closed', async function() {
    const sidebarToggle = '.nx-global-sidebar .nx-global-sidebar__toggle';
    const [targetElement] = await waitAndGetElements(sidebarToggle);

    await targetElement.click();

    await checkFullPageScreenshot();
  });

  describe('navigation link', function() {
    const defaultLink = '.nx-global-sidebar__navigation-link:nth-of-type(1)',
        selectedLink = '.nx-global-sidebar__navigation-link:nth-of-type(4)';

    it('looks right', simpleTest(defaultLink));
    it('has a grey background when hovered', hoverTest(defaultLink));
    it('has a light grey background when clicked', clickTest(defaultLink));
    it('has a blue outline when focused', focusTest(defaultLink));
    it('has a blue outline and grey background when hovered and focused', focusAndHoverTest(defaultLink));
    it('has a gradient background when selected', simpleTest(selectedLink));
    it('has a gradient background and white outline when selected and focused', focusTest(selectedLink));
  });

  describe('sidebar toggle', function() {
    const sidebarToggle = '.nx-global-sidebar .nx-global-sidebar__toggle';

    it('looks right', simpleTest(sidebarToggle));
    it('has a grey background when hovered', hoverTest(sidebarToggle));
    it('has a light grey background when clicked', clickTest(sidebarToggle));
    it('has a blue outline when focused', focusTest(sidebarToggle));
    it('has a blue outline and grey background when hovered and focused', focusAndHoverTest(sidebarToggle));

    it('has an "Expand Menu" tooltip when collapsed', async function() {
      const [targetElement] = await waitAndGetElements(sidebarToggle);
      await targetElement.click();

      await hoverTest('body', sidebarToggle, true)();
    });
  });

  it('passes a11y checks', a11yTest(null, true));
});
