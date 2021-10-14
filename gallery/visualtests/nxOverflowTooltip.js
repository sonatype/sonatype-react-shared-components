/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxOverflowTooltip', function() {
  const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest, getPage } =
      setupBrowser('#/pages/NxOverflowTooltip');

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

  async function wait1Sec() {
    return new Promise(resolve => {
      setTimeout(resolve, 1000);
    });
  }

  async function openDropdownAndHoverButton(btnSelector) {
    const [dropdownEl] = await waitAndGetElements(dropdownSelector);

    await dropdownEl.click();

    const [btnEl] = await waitAndGetElements(btnSelector);

    await btnEl.hover();
    await wait1Sec();
  }

  async function isInDocument(el) {
    return el.evaluate(e => e.isConnected);
  }

  it('does not display a tooltip when a non-overflowing element is hovered', async function() {
    const [item1] = await waitAndGetElements(item1Selector);

    await item1.hover();
    await wait1Sec();

    const [tooltipEl] = await waitAndGetElements(tooltipSelector);

    expect(await isInDocument(tooltipEl)).toBe(false);
  });

  it('displays a tooltip with the full text when an overflowing element is hovered', async function() {
    const [item2] = await waitAndGetElements(item2Selector);

    await item2.hover();
    await wait1Sec();

    const [tooltipEl] = await waitAndGetElements(tooltipSelector);

    expect(await isInDocumen(tooltipEl)).toBe(true);
    expect(await tooltipEl.getText()).toBe( 'List item 2 - this text is long and should truncate with a tooltip ' +
        'this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip');
  });

  it('displays a tooltip with explicit title when the element is overflowing and hovered', async function() {
    const [item4] = await waitAndGetElements(item4Selector);

    await item4.hover();
    await wait1Sec();

    const [tooltipEl] = await waitAndGetElements(tooltipSelector);

    expect(await isInDocument(tooltipEl)).toBe(true);
    expect(await tooltipEl.getText()).toBe('Foo Bar 2 - this text is long and should truncate with a tooltip ' +
        'this text is long and should truncate with a tooltip this text is long and should truncate with a tooltip');
  });

  it('activates tooltip display when an already existing element gains text overflow due to more content',
      async function() {
        const [inputEl, targetEl] = await waitAndGetElements(
          dynamicExampleTextInputSelector,
          dynamicExampleTooltipTargetSelector
        );

        expect(await getPage().$(tooltipSelector)).toBe(false);

        await inputEl.focus();
        await getPage().keyboard.type(maxBeforeOverflowStr + 'W');

        expect(await getPage().$(tooltipSelector)).toBe(false);

        await targetEl.hover();

        await wait1Sec();
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
        await getPage().keyboard.type(maxBeforeOverflowStr + 'W');
        await targetEl.hover();

        await wait1Sec();
        const [tooltipEl] = await waitAndGetElements(tooltipSelector);

        await inputEl.focus();
        await getPage().keyboard.press('Backspace');
        await getPage().keyboard.type(maxBeforeOverflowStr);

        await wait1Sec();
        expect(await isInDocument(tooltipEl)).toBe(false);
      }
  );

  it('activates tooltip display when an already existing element gains text overflow due to width decrease',
      async function() {
        const [inputEl, targetEl] = await waitAndGetElements(
          browser.$(dynamicExampleTextInputSelector),
          browser.$(dynamicExampleTooltipTargetSelector)
        );

        await getPage().setViewport({ width: 1400, height: 1000 });
        await inputEl.focus();
        await getPage().keyboard.type(maxBeforeOverflowStr + 'W');
        await targetEl.hover();

        const [tooltipEl] = await waitAndGetElements(tooltipSelector);

        await getPage().setViewport({ width: 1366, height: 1000 });
        await targetEl.hover();

        await wait1Sec();
        expect(await isInDocument(tooltipEl)).toBe(true);
        expect(await tooltipEl.evaluate(e => e.innerText)).toBe(maxBeforeOverflowStr + 'W');
      }
  );

  it('deactivates tooltip display when an already overflowing element loses text overflow due to width increase',
      async function() {
        const [inputEl, targetEl] = await waitAndGetElements(
          browser.$(dynamicExampleTextInputSelector),
          browser.$(dynamicExampleTooltipTargetSelector)
        );

        await inputEl.focus();
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
    await wait1Sec();

    const [tooltipEl] = await waitAndGetElements(tooltipSelector);

    expect(await tooltipEl.evaluate(e => e.innerText)).toBe(
        'List item 2 - this text is long and should truncate with a tooltip this text is long and should truncate ' +
        'with a tooltip this text is long and should truncate with a tooltip'
    );
  });
});
