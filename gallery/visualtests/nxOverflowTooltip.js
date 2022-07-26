/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxOverflowTooltip', function() {
  const {
    getPage,
    waitAndGetElements,
    wait,
    getElements,
    a11yTest
  } = setupBrowser('#/pages/Overflow%20Tooltip');

  const listSelector = '#nx-overflow-tooltip-simple-example .nx-list',
      descendantOverflowListSelector = '#nx-overflow-tooltip-descendant-example .nx-list',
      item1Selector = `${listSelector} .nx-list__item:nth-child(1) .nx-list__text`,
      item2Selector = `${listSelector} .nx-list__item:nth-child(2) .nx-list__text`,
      item4Selector = `${listSelector} .nx-list__item:nth-child(4) .nx-list__text`,
      dynamicExampleSelector = '#nx-overflow-tooltip-dynamic-example',
      dynamicExampleTextInputSelector = `${dynamicExampleSelector} .nx-text-input input`,
      dynamicExampleTooltipTargetSelector = `${dynamicExampleSelector} .gallery-example-live .nx-p`,
      tooltipSelector = '.nx-tooltip',
      maxBeforeOverflowStr = 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWW',
      descendantOverflowItemSelector = `${descendantOverflowListSelector} .nx-list__item:nth-child(2)`;

  const wait1Sec = () => wait(1000);

  async function isInDocument(el) {
    return el.evaluate(e => e.isConnected);
  }

  async function clearTextInput() {
    await getPage().keyboard.down('Control');
    await getPage().keyboard.press('A');
    await getPage().keyboard.up('Control');
    await getPage().keyboard.press('Backspace');
  }

  it('does not display a tooltip when a non-overflowing element is hovered', async function() {
    const [item1] = await waitAndGetElements(item1Selector);

    await item1.hover();
    await wait1Sec();

    expect(await getPage().$(tooltipSelector)).toBe(null);
  });

  it('displays a tooltip with the full text when an overflowing element is hovered', async function() {
    const [item2] = await waitAndGetElements(item2Selector);

    await item2.hover();

    const [tooltipEl] = await waitAndGetElements(tooltipSelector);

    expect(await isInDocument(tooltipEl)).toBe(true);
    expect(await tooltipEl.evaluate(e => e.innerText)).toBe(
        'List item 2 - this text is long and should truncate with a tooltip ' +
        'this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip');
  });

  it('displays a tooltip with explicit title when the element is overflowing and hovered', async function() {
    const [item4] = await waitAndGetElements(item4Selector);

    await item4.hover();

    const [tooltipEl] = await waitAndGetElements(tooltipSelector);

    expect(await isInDocument(tooltipEl)).toBe(true);
    expect(await tooltipEl.evaluate(e => e.innerText)).toBe(
        'Foo Bar 2 - this text is long and should truncate with a tooltip ' +
        'this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip'
    );
  });

  it('activates tooltip display when an already existing element gains text overflow due to more content',
      async function() {
        const [inputEl, targetEl] = await waitAndGetElements(
            dynamicExampleTextInputSelector,
            dynamicExampleTooltipTargetSelector
        );

        await targetEl.hover();
        await wait1Sec();
        expect(await getPage().$(tooltipSelector)).toBe(null);

        await inputEl.focus();
        await clearTextInput();
        await getPage().keyboard.type(maxBeforeOverflowStr + 'W');
        await wait1Sec();
        await targetEl.hover();

        const [tooltipEl] = await waitAndGetElements(tooltipSelector);
        expect(await tooltipEl.evaluate(e => e.innerText)).toBe(maxBeforeOverflowStr + 'W');
      }
  );

  it('deactivates tooltip display when an already overflowing element loses text overflow due to less content',
      async function() {
        const [inputEl, targetEl] = await waitAndGetElements(
            dynamicExampleTextInputSelector,
            dynamicExampleTooltipTargetSelector,
        );

        await inputEl.focus();
        await clearTextInput();
        await getPage().keyboard.type(maxBeforeOverflowStr + 'W');
        await targetEl.hover();

        await wait1Sec();
        const [tooltipEl] = await waitAndGetElements(tooltipSelector);

        await inputEl.focus();
        await getPage().keyboard.press('Backspace');

        await wait1Sec();
        expect(await isInDocument(tooltipEl)).toBe(false);
      }
  );

  it('activates tooltip display when an already existing element gains text overflow due to width decrease',
      async function() {
        const [inputEl, targetEl] = await waitAndGetElements(
            dynamicExampleTextInputSelector,
            dynamicExampleTooltipTargetSelector
        );

        await getPage().setViewport({ width: 1400, height: 1000 });
        await inputEl.focus();
        await clearTextInput();
        await getPage().keyboard.type(maxBeforeOverflowStr + 'W');
        await targetEl.hover();
        await wait1Sec();

        expect(await getPage().$(tooltipSelector)).toBe(null);

        await getPage().setViewport({ width: 1366, height: 1000 });
        await targetEl.hover();

        await wait1Sec();
        const tooltipEl = (await getElements(tooltipSelector))[0];
        expect(await isInDocument(tooltipEl)).toBe(true);
        expect(await tooltipEl.evaluate(e => e.innerText)).toBe(maxBeforeOverflowStr + 'W');
      }
  );

  it('deactivates tooltip display when an already overflowing element loses text overflow due to width increase',
      async function() {
        const [inputEl, targetEl] = await waitAndGetElements(
            dynamicExampleTextInputSelector,
            dynamicExampleTooltipTargetSelector
        );

        await inputEl.focus();
        await clearTextInput();
        await getPage().keyboard.type(maxBeforeOverflowStr + 'W');
        await targetEl.hover();

        await wait1Sec();
        const [tooltipEl] = await waitAndGetElements(tooltipSelector);

        await getPage().setViewport({ width: 1400, height: 1000 });
        await targetEl.hover();

        await wait1Sec();
        expect(await isInDocument(tooltipEl)).toBe(false);
      }
  );

  it('displays a tooltip with the full text when an element with an overflowing child is hovered', async function() {
    const [item] = await waitAndGetElements(descendantOverflowItemSelector);

    await item.hover();

    const [tooltipEl] = await waitAndGetElements(tooltipSelector);

    expect(await tooltipEl.evaluate(e => e.innerText)).toBe(
        'List item 2 - this text is long and should truncate with a tooltip this text is long and should truncate ' +
        'with a tooltip this text is long and should truncate with a tooltip'
    );
  });

  it('passes a11y checks when tooltip not active', a11yTest());
  it('passes a11y checks when tooltip is active', async function() {
    const [item2] = await waitAndGetElements(item2Selector);

    await item2.hover();

    await waitAndGetElements(tooltipSelector);

    //disabling the region rule to get around the "Some page content is not contained by landmarks" for tooltips
    await a11yTest(builder => builder.disableRules(['region', 'color-contrast']))();
  });
});
