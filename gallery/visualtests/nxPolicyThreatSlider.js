/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxPolicyThreatSlider', function() {
  const { focusTest, simpleTest, getPage, waitAndGetElements, scrollIntoView, a11yTest } =
      setupBrowser('#/pages/Policy%20Threat%20Slider');

  const exampleSelector = '#nx-policy-threat-slider-example .gallery-example-live',
      disabledExampleSelector = '#nx-policy-threat-slider-disabled-example .nx-policy-threat-slider',
      lowerSliderSelector =
          `${exampleSelector} .nx-policy-threat-slider__value-label .MuiSlider-thumb`,
      upperSliderSelector =
          `${exampleSelector} .nx-policy-threat-slider__value-label ~ .nx-policy-threat-slider__value-label .MuiSlider-thumb`;

  async function dragSliderHandle(sliderElement, spaces) {
    const { mouse } = getPage(),
        sliderElementBox = await sliderElement.boundingBox(),
        sliderElementCenter = {
          x: sliderElementBox.x + (sliderElementBox.width / 2),
          y: sliderElementBox.y + (sliderElementBox.height / 2)
        };

    await mouse.move(sliderElementCenter.x, sliderElementCenter.y);
    await mouse.down();
    await mouse.move(sliderElementCenter.x + (20 * spaces), sliderElementCenter.y);
    await mouse.up();
  }

  function testSlider(spacesFromDefault) {
    return async () => {
      const [targetElement, lowerSliderElement, upperSliderElement] =
          await waitAndGetElements(exampleSelector, lowerSliderSelector, upperSliderSelector);

      await scrollIntoView(targetElement);
      await dragSliderHandle(lowerSliderElement, spacesFromDefault);
      await dragSliderHandle(upperSliderElement, -(spacesFromDefault));

      // click off of the slider
      await targetElement.click({ offset: { x: -50, y: -50 } });

      await simpleTest(exampleSelector)();
    };
  }

  it('looks right at 0 and 10', simpleTest(exampleSelector));
  it('looks right at 1 and 9', testSlider(1));
  it('looks right at 2 and 8', testSlider(2));
  it('looks right at 3 and 7', testSlider(3));
  it('looks right at 4 and 6', testSlider(4));
  it('looks right at 5 and 5', testSlider(5));

  it('looks right when a slider is focused', focusTest(exampleSelector, upperSliderSelector));

  describe('Disabled NxPolicyThreatSlider', function() {
    it('looks right', simpleTest(disabledExampleSelector));
  });

  it('passes a11y checks', a11yTest());
});
