/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxTabs', function() {
  const {
    isFocused,
    clickTest,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    waitAndGetElements,
    checkScreenshot,
    getPage,
    a11yTest
  } = setupBrowser('#/pages/Tabs?noCheckeredBackground');

  function hasClass(element, cls) {
    return element.evaluate((el, cls) => el.classList.contains(cls), cls);
  }

  function getId(element) {
    return element.evaluate(el => el.getAttribute('id'));
  }

  const tabTileExampleSelector = '#nx-tab-tile-example .nx-tile',
      tabTileNoHeaderExampleSelector = '#nx-tab-tile-no-header-example .nx-tile',
      tabOutsideTileExampleSelector = '#nx-tab-tile-no-header-example .nx-tile',
      tabModalExampleSelector = '#nx-tab-modal-example',
      tabModalNoHeaderExampleSelector = '#nx-tab-modal-no-header-example',
      tabSimpleExampleSelector = '#nx-tab-simple-example .gallery-example-live';

  it('looks right in a Tile', simpleTest(tabTileExampleSelector));
  it('looks right in a Tile with no header', simpleTest(tabTileNoHeaderExampleSelector));

  it('looks right outside of a Tile', simpleTest(tabOutsideTileExampleSelector));

  describe('Check tab styles', function() {
    const selector = '#nx-tab-tile-example .nx-tab:nth-child(2)';

    it('has regular text and no border by default', simpleTest(selector));
    it('has semi-bold text when hovered',
        hoverTest(
            tabSimpleExampleSelector,
            `${tabSimpleExampleSelector} .nx-tab:nth-child(2)`));
    it('has a light blue border and semi-bold text when clicked',
        clickTest(
            tabSimpleExampleSelector,
            `${tabSimpleExampleSelector} .nx-tab:nth-child(2)`));
    it('has a light blue border when focused',
        focusTest(
            tabSimpleExampleSelector,
            `${tabSimpleExampleSelector} .nx-tab:nth-child(2)`));
    it('has a light blue border and semi-bold text when focused and hovered',
        focusAndHoverTest(
            tabSimpleExampleSelector,
            `${tabSimpleExampleSelector} .nx-tab:nth-child(2)`));
  });

  describe('Check tab panel', function() {
    it('has a light blue border when focused',
        focusTest(
            tabSimpleExampleSelector,
            `${tabSimpleExampleSelector} .nx-tab-panel`));
  });

  function simpleModalTest(exampleSelector) {
    return async function() {
      const openModalBtnSelector = `${exampleSelector} button`,
          modalSelector = `${exampleSelector} .nx-modal`;

      const [openModalBtn] = await waitAndGetElements(openModalBtnSelector);

      await openModalBtn.click();

      const [targetElement] = await waitAndGetElements(modalSelector);

      await checkScreenshot(targetElement);
    };
  }

  describe('Tabs in an NxModal', function() {
    it('looks right', simpleModalTest(tabModalExampleSelector));
  });

  describe('Tabs in an NxModal with no header', function() {
    it('looks right', simpleModalTest(tabModalNoHeaderExampleSelector));
  });

  describe('keyboard navigation', function() {
    it('focuses on the tab when it is clicked', async function() {
      const [example] = await waitAndGetElements(tabSimpleExampleSelector);

      const secondTab = await example.$('.nx-tab:nth-child(2)');

      expect(await isFocused(secondTab)).toBe(false);

      await secondTab.click();

      expect(await isFocused(secondTab)).toBe(true);
    });

    it('focuses on the nx-tab-panel and link inside the panel after tabbing from nx-tab', async function() {
      const [example] = await waitAndGetElements(tabSimpleExampleSelector);
      const page = getPage();

      const activeTab = await example.$('.nx-tab:nth-child(1)');
      const tabPanel = await example.$('.nx-tab-panel');

      await activeTab.focus();

      expect(await isFocused(activeTab)).toBe(true);

      await page.keyboard.press('Tab');

      expect(await isFocused(tabPanel)).toBe(true);

      const tabPanelAnchor = await example.$('.nx-tab-panel a');

      await page.keyboard.press('Tab');

      expect(await isFocused(tabPanelAnchor)).toBe(true);
    });

    it('focuses back on active nx-tab from nx-tab-panel when shift+tab is activated', async function() {
      const [example] = await waitAndGetElements(tabSimpleExampleSelector);
      const page = getPage();

      const activeTab = await example.$('.nx-tab:nth-child(1)');
      const tabPanel = await example.$('.nx-tab-panel');

      await activeTab.focus();

      expect(await isFocused(activeTab)).toBe(true);

      await page.keyboard.press('Tab');

      expect(await isFocused(tabPanel)).toBe(true);

      await page.keyboard.down('Shift');
      await page.keyboard.press('Tab');
      await page.keyboard.up('Shift');

      expect(await isFocused(activeTab)).toBe(true);
    });

    it('focuses on the correct tab when arrow right is pressed but '
      + 'does not activate it when in manual activation mode', async function() {
      const [example] = await waitAndGetElements(tabSimpleExampleSelector);
      const page = getPage();

      const firstTab = await example.$('.nx-tab:nth-child(1)');
      const thirdTab = await example.$('.nx-tab:nth-child(3)');
      const fourthTab = await example.$('.nx-tab:nth-child(4)');

      await thirdTab.click();

      expect(await isFocused(thirdTab)).toBe(true);
      expect(await hasClass(thirdTab, 'active')).toBe(true);

      await page.keyboard.press('ArrowRight');

      expect(await isFocused(fourthTab)).toBe(true);
      expect(await hasClass(fourthTab, 'active')).toBe(false);

      await page.keyboard.press('ArrowRight');

      expect(await isFocused(firstTab)).toBe(true);
      expect(await hasClass(firstTab, 'active')).toBe(false);

      const panel = await example.$('.nx-tab-panel');
      expect(await getId(panel)).toMatch(/^nx-tabs-[0-9]+-tabpanel-2$/);
    });

    it('focuses on the correct tab when arrow left is pressed but '
    + 'does not activate it when in manual activation mode', async function() {
      const [example] = await waitAndGetElements(tabSimpleExampleSelector);
      const page = getPage();

      const firstTab = await example.$('.nx-tab:nth-child(1)');
      const secondTab = await example.$('.nx-tab:nth-child(2)');
      const fourthTab = await example.$('.nx-tab:nth-child(4)');

      await secondTab.click();

      expect(await isFocused(secondTab)).toBe(true);
      expect(await hasClass(secondTab, 'active')).toBe(true);

      await page.keyboard.press('ArrowLeft');

      expect(await isFocused(firstTab)).toBe(true);
      expect(await hasClass(firstTab, 'active')).toBe(false);

      await page.keyboard.press('ArrowLeft');

      expect(await isFocused(fourthTab)).toBe(true);
      expect(await hasClass(fourthTab, 'active')).toBe(false);

      const panel = await example.$('.nx-tab-panel');
      expect(await getId(panel)).toMatch(/^nx-tabs-[0-9]+-tabpanel-1$/);
    });

    it('focuses on the first tab when home key is pressed '
    + 'but does not activate it when activation mode is manual', async function() {
      const [example] = await waitAndGetElements(tabSimpleExampleSelector);
      const page = getPage();

      const firstTab = await example.$('.nx-tab:nth-child(1)');
      const fourthTab = await example.$('.nx-tab:nth-child(4)');

      await fourthTab.click();

      expect(await isFocused(fourthTab)).toBe(true);
      expect(await hasClass(fourthTab, 'active')).toBe(true);

      await page.keyboard.press('Home');

      expect(await isFocused(firstTab)).toBe(true);
      expect(await hasClass(firstTab, 'active')).toBe(false);

      const panel = await example.$('.nx-tab-panel');
      expect(await getId(panel)).toMatch(/^nx-tabs-[0-9]+-tabpanel-3$/);
    });

    it('focuses on the last tab when End key is pressed '
    + 'but does not activate it when activation mode is manual', async function() {
      const [example] = await waitAndGetElements(tabSimpleExampleSelector);
      const page = getPage();

      const firstTab = await example.$('.nx-tab:nth-child(1)');
      const fourthTab = await example.$('.nx-tab:nth-child(4)');

      await firstTab.click();

      expect(await isFocused(firstTab)).toBe(true);
      expect(await hasClass(firstTab, 'active')).toBe(true);

      await page.keyboard.press('End');

      expect(await isFocused(fourthTab)).toBe(true);
      expect(await hasClass(fourthTab, 'active')).toBe(false);

      const panel = await example.$('.nx-tab-panel');
      expect(await getId(panel)).toMatch(/^nx-tabs-[0-9]+-tabpanel-0$/);
    });
  });

  it('passes a11y checks', a11yTest());
});
