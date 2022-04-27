/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('useScrollSpy', function() {
  const { checkScreenshot, waitForSelectors, waitAndGetElements, wait, getPage } = setupBrowser('#/pages/useScrollSpy');

  const exampleSelector = '.gallery-example-live';

  it('initially indicates that the first section is active', async function() {
    await waitForSelectors(exampleSelector);

    const page = getPage(),
        [firstSectionIndicator, secondSectionIndicator, thirdSectionIndicator] = await Promise.all([
          page.$(`${exampleSelector} > div:first-child svg`),
          page.$(`${exampleSelector} > div:nth-child(2) svg`),
          page.$(`${exampleSelector} > div:nth-child(3) svg`)
        ]);

    expect(firstSectionIndicator).not.toBe(null);
    expect(secondSectionIndicator).toBe(null);
    expect(thirdSectionIndicator).toBe(null);
  });

  it('scrolls to the second section when the appropriate button is clicked', async function() {
    const [example, secondBtn] = await waitAndGetElements(
        exampleSelector,
        `${exampleSelector} > div:nth-child(2) button`
    );

    await secondBtn.click();
    await wait(2000);

    await checkScreenshot(example);
  });

  it('scrolls to the third section when the appropriate button is clicked', async function() {
    const [example, thirdBtn] = await waitAndGetElements(
        exampleSelector,
        `${exampleSelector} > div:nth-child(3) button`
    );

    await thirdBtn.click();
    await wait(2000);

    await checkScreenshot(example);
  });

  it('scrolls back to the first section when the first button is clicked while scrolled elsewhere', async function() {
    const [example, scrollable, firstBtn] = await waitAndGetElements(
        exampleSelector,
        `${exampleSelector} > .nx-scrollable`,
        `${exampleSelector} > div:first-child button`
    );

    await scrollable.hover();

    await getPage().mouse.wheel({ deltaY: 700 });
    await wait(500);

    await firstBtn.click();
    await wait(500);

    await checkScreenshot(example);
  });

  it('indicates that the second section is active when the user scrolls to it', async function() {
    const [scrollable, firstIndicator, secondIndicator, thirdIndicator] = await waitAndGetElements(
        `${exampleSelector} > .nx-scrollable`,
        `${exampleSelector} > div:first-child`,
        `${exampleSelector} > div:nth-child(2)`,
        `${exampleSelector} > div:nth-child(3)`
    );

    await scrollable.hover();

    // still on the first paragraph, the very last pixel of it
    await getPage().mouse.wheel({ deltaY: 671 });
    await wait(500);
    expect(await firstIndicator.$('svg')).not.toBe(null);
    expect(await secondIndicator.$('svg')).toBe(null);
    expect(await thirdIndicator.$('svg')).toBe(null);

    // now off of the first paragraph, indicator should indicate the second one
    await getPage().mouse.wheel({ deltaY: 1 });
    await wait(500);
    expect(await firstIndicator.$('svg')).toBe(null);
    expect(await secondIndicator.$('svg')).not.toBe(null);
    expect(await thirdIndicator.$('svg')).toBe(null);
  });

  it('follows clicks of multiple scroll buttons in quick succession without issue', async function() {
    const [example, firstBtn, secondBtn, thirdBtn, thirdIndicator] = await waitAndGetElements(
        exampleSelector,
        `${exampleSelector} > div:first-child button`,
        `${exampleSelector} > div:nth-child(2) button`,
        `${exampleSelector} > div:nth-child(3) button`,
        `${exampleSelector} > div:nth-child(3)`
    );

    await firstBtn.click();
    await thirdBtn.click();
    await firstBtn.click();
    await secondBtn.click();
    await thirdBtn.click();
    await secondBtn.click();
    await thirdBtn.click();
    await firstBtn.click();
    await thirdBtn.click();
    await wait(2000);

    expect(await thirdIndicator.$('svg')).not.toBe(null);
    await checkScreenshot(example);
  });

  it('keeps the indicator on the last option when all sections are scrolled off the top of the view', async function() {
    const [example, scrollable, thirdP, thirdIndicator] = await waitAndGetElements(
        exampleSelector,
        `${exampleSelector} .nx-scrollable`,
        `${exampleSelector} .nx-scrollable > .nx-p:nth-child(3)`,
        `${exampleSelector} > div:nth-child(3)`
    );

    // add a bunch of space to the bottom of the scroll container
    await thirdP.evaluate(el => { el.style.marginBottom = '500px'; });
    await scrollable.hover();

    // all the way to the bottom
    await getPage().mouse.wheel({ deltaY: 10000 });
    await wait(2000);

    expect(await thirdIndicator.$('svg')).not.toBe(null);
    await checkScreenshot(example);
  });
});
