/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser, TOOLTIP_WAIT } = require('./testUtils');

describe('NxBreadcrumb', function() {
  const { simpleTest, a11yTest, waitAndGetElements, checkScreenshot, wait, checkScreenshotCoordinates } =
      setupBrowser('#/pages/Breadcrumb');

  const simpleExampleSelector = '#nx-breadcrumb-simple-example .gallery-example-live',
      longSegmentsExample = '#nx-breadcrumb-long-segments-example .gallery-example-live',
      constrainedWidthExample = '#nx-breadcrumb-constrained-width-example .gallery-example-live',
      manySegmentsExample = '#nx-breadcrumb-many-segments-example .gallery-example-live',
      manyLongSegmentsExample = '#nx-breadcrumb-many-long-segments-example .gallery-example-live',
      oneSegmentExample = '#nx-breadcrumb-one-segment-example .gallery-example-live',
      fourSegmentsExample = '#nx-breadcrumb-four-segments-example .gallery-example-live',
      fiveSegmentsExample = '#nx-breadcrumb-five-segments-example .gallery-example-live';

  it('looks right in the simple case', simpleTest(simpleExampleSelector));
  it('looks right with long overflowing segments but no dropdown', simpleTest(longSegmentsExample));
  it('looks right with long overflowing segments but no dropdown in a smaller container',
      simpleTest(constrainedWidthExample));
  it('looks right with a dropdown', simpleTest(manySegmentsExample));
  it('looks right with long segments and a dropdown', simpleTest(manyLongSegmentsExample));
  it('renders nothing with one segment', simpleTest(oneSegmentExample));
  it('renders no dropdown with four segments', simpleTest(fourSegmentsExample));
  it('renders a dropdown with five segments', simpleTest(fiveSegmentsExample));

  it('looks right with a narrow dropdown', async function() {
    const [example, dropdownBtn] = await waitAndGetElements(
        manySegmentsExample,
        `${manySegmentsExample} .nx-icon-dropdown__toggle`
    );

    await dropdownBtn.click();
    await wait(TOOLTIP_WAIT);

    await checkScreenshot(example, 848, 364);
  });

  it('looks right with a wide dropdown', async function() {
    const [example, dropdownBtn] = await waitAndGetElements(
        manyLongSegmentsExample,
        `${manyLongSegmentsExample} .nx-icon-dropdown__toggle`
    );

    await dropdownBtn.click();
    await wait(TOOLTIP_WAIT);

    await checkScreenshot(example, 848, 396);
  });

  it('shows overflow tooltips on inline links', async function() {
    const [example, link] = await waitAndGetElements(
        longSegmentsExample,
        `${longSegmentsExample} .nx-breadcrumb__list-item:nth-child(2) a`
    );

    await link.hover();
    await wait(TOOLTIP_WAIT);

    const { x, y, width, height } = await example.boundingBox();

    await checkScreenshotCoordinates(x, y - 21, width, height + 21);
  });

  it('shows overflow tooltips on dropdown links', async function() {
    const [example, dropdownBtn] = await waitAndGetElements(
        manyLongSegmentsExample,
        `${manyLongSegmentsExample} .nx-icon-dropdown__toggle`
    );

    await dropdownBtn.click();

    const [link] = await waitAndGetElements(`${manyLongSegmentsExample} .nx-dropdown-link`);
    await link.hover();
    await wait(500);

    await checkScreenshot(example, 848, 396);
  });

  it('shows a "more…" tooltip on the dropdown button', async function() {
    const [example, dropdownBtn] = await waitAndGetElements(
        manySegmentsExample,
        `${manySegmentsExample} .nx-icon-dropdown__toggle`
    );

    await dropdownBtn.hover();
    await wait(500);

    const { x, y, width, height } = await example.boundingBox();

    await checkScreenshotCoordinates(x, y - 21, width, height + 21);
  });

  it('passes a11y checks', a11yTest());
});
