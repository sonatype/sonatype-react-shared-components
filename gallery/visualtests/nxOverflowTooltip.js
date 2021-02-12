/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');
const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxOverflowTooltip', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxOverflowTooltip');
    await browser.refresh();
  });

  afterEach(async function() {
    await browser.setWindowSize(1366, 1000);
  });

  const listSelector = '#nx-overflow-tooltip-simple-example .nx-list',
      descendantOverflowListSelector = '#nx-overflow-tooltip-descendant-example .nx-list',
      item1Selector = `${listSelector} .nx-list__item:nth-child(1) .nx-list__text`,
      item2Selector = `${listSelector} .nx-list__item:nth-child(2) .nx-list__text`,
      item4Selector = `${listSelector} .nx-list__item:nth-child(4) .nx-list__text`,
      dynamicExampleSelector = '#nx-overflow-tooltip-dynamic-example',
      dynamicExampleTextInputSelector = `${dynamicExampleSelector} .nx-text-input input`,
      dynamicExampleTooltipTargetSelector = `${dynamicExampleSelector} .gallery-example-live .nx-p`,
      tooltipSelector = '.nx-tooltip';
      maxBeforeOverflowStr = 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      descendantOverflowItemSelector = `${descendantOverflowListSelector} .nx-list__item:nth-child(2)`;

  async function openDropdownAndHoverButton(btnSelector) {
    const dropdownEl = await browser.$(dropdownSelector);

    await dropdownEl.scrollIntoView({ block: 'center' });
    await dropdownEl.click();

    const btnEl = await browser.$(btnSelector);

    await btnEl.moveTo();
    await browser.pause(1000);
  }

  it('does not display a tooltip when a non-overflowing element is hovered', async function() {
    const item1 = await browser.$(item1Selector);

    await item1.scrollIntoView({ block: 'center' });
    await item1.moveTo();
    await browser.pause(1000);

    const tooltipEl = await browser.$(tooltipSelector);

    expect(await tooltipEl.isDisplayed()).toBe(false);
  });

  it('displays a tooltip with the full text when an overflowing element is hovered', async function() {
    const item2 = await browser.$(item2Selector);

    await item2.scrollIntoView({ block: 'center' });
    await item2.moveTo();
    await browser.pause(1000);

    const tooltipEl = await browser.$(tooltipSelector);

    expect(await tooltipEl.isDisplayed()).toBe(true);
    expect(await tooltipEl.getText()).toBe( 'List item 2 - this text is long and should truncate with a tooltip ' +
        'this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip');
  });

  it('displays a tooltip with explicit title when the element is overflowing and hovered', async function() {
    const item4 = await browser.$(item4Selector);

    await item4.scrollIntoView({ block: 'center' });
    await item4.moveTo();
    await browser.pause(1000);

    const tooltipEl = await browser.$(tooltipSelector);

    expect(await tooltipEl.isDisplayed()).toBe(true);
    expect(await tooltipEl.getText()).toBe('Foo Bar 2 - this text is long and should truncate with a tooltip ' +
        'this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip');
  });

  it('activates tooltip display when an already existing element gains text overflow due to more content',
      async function() {
        const [inputEl, targetEl, tooltipEl] = await Promise.all([
          browser.$(dynamicExampleTextInputSelector),
          browser.$(dynamicExampleTooltipTargetSelector),
          browser.$(tooltipSelector)
        ]);

        expect(await tooltipEl.isExisting()).toBe(false);

        await inputEl.setValue(maxBeforeOverflowStr + 'W');

        expect(await tooltipEl.isExisting()).toBe(false);

        await targetEl.moveTo();

        await browser.pause(1000);
        expect(await tooltipEl.isExisting()).toBe(true);
        expect(await tooltipEl.getText()).toBe(maxBeforeOverflowStr + 'W');
      }
  );

  it('deactivates tooltip display when an already overflowing element loses text overflow due to less content',
      async function() {
        const [inputEl, targetEl, tooltipEl] = await Promise.all([
          browser.$(dynamicExampleTextInputSelector),
          browser.$(dynamicExampleTooltipTargetSelector),
          browser.$(tooltipSelector)
        ]);

        await inputEl.setValue(maxBeforeOverflowStr + 'W');
        await targetEl.moveTo();

        await browser.pause(1000);
        expect(await tooltipEl.isExisting()).toBe(true);

        await inputEl.setValue(maxBeforeOverflowStr);

        await browser.pause(1000); // tooltip takes a bit to go away
        expect(await tooltipEl.isExisting()).toBe(false);
      }
  );

  it('activates tooltip display when an already existing element gains text overflow due to width decrease',
      async function() {
        const [inputEl, targetEl, tooltipEl] = await Promise.all([
          browser.$(dynamicExampleTextInputSelector),
          browser.$(dynamicExampleTooltipTargetSelector),
          browser.$(tooltipSelector)
        ]);

        await browser.setWindowSize(1400, 1000);
        await inputEl.setValue(maxBeforeOverflowStr + 'W');
        await targetEl.moveTo();

        expect(await tooltipEl.isExisting()).toBe(false);

        await browser.setWindowSize(1366, 1000);
        await targetEl.moveTo();

        await browser.pause(1000);
        expect(await tooltipEl.isExisting()).toBe(true);
        expect(await tooltipEl.getText()).toBe(maxBeforeOverflowStr + 'W');
      }
  );

  it('deactivates tooltip display when an already overflowing element loses text overflow due to width increase',
      async function() {
        const [inputEl, targetEl, tooltipEl] = await Promise.all([
          browser.$(dynamicExampleTextInputSelector),
          browser.$(dynamicExampleTooltipTargetSelector),
          browser.$(tooltipSelector)
        ]);

        await inputEl.setValue(maxBeforeOverflowStr + 'W');
        await targetEl.moveTo();

        await browser.pause(1000);
        expect(await tooltipEl.isExisting()).toBe(true);

        await browser.setWindowSize(1400, 1000);
        await targetEl.moveTo();

        await browser.pause(1000); // tooltip takes a bit to go away
        expect(await tooltipEl.isExisting()).toBe(false);
      }
  );

  it('displays a tooltip with the full text when an element with an overflowing child is hovered', async function() {
    const item = await browser.$(descendantOverflowItemSelector);

    await item.scrollIntoView({ block: 'center' });
    await item.moveTo();
    await browser.pause(1000);

    const tooltipEl = await browser.$(tooltipSelector);

    expect(await tooltipEl.isDisplayed()).toBe(true);
    expect(await tooltipEl.getText()).toBe( 'List item 2 - this text is long and should truncate with a tooltip ' +
        'this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip');
  });
});
