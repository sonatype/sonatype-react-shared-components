/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { focusTest, simpleTest } = require('./testUtils');

describe('NxPolicyThreatSlider', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxPolicyThreatSlider');
    await browser.refresh();
  });

  const exampleSelector = '#nx-policy-threat-slider-example .nx-policy-threat-slider',
      disabledExampleSelector = '#nx-policy-threat-slider-disabled-example .nx-policy-threat-slider',
      lowerSliderSelector = `${exampleSelector} .nx-policy-threat-slider__value-label[index="0"] .MuiSlider-thumb`,
      upperSliderSelector = `${exampleSelector} .nx-policy-threat-slider__value-label[index="1"] .MuiSlider-thumb`;

  async function dragSliderHandle(browser, sliderElement, spaces) {
    await browser.performActions([{
      id: 'pointer1',
      type: 'pointer',
      parameters: {
        pointerType: 'mouse'
      },
      actions: [{
        type: "pointerMove",
        duration: 0,
        origin: sliderElement,
        x: 0,
        y: 0
      }, {
        type: 'pointerDown',
        button: 0
      }, {
        type: 'pointerMove',
        duration: 0,
        origin: 'pointer',
        x: 20 * spaces,
        y: 0
      }, {
        type: 'pointerUp',
        button: 0
      }]
    }]);
  }

  function testSlider(spacesFromDefault) {
    return async () => {
      const [targetElement, lowerSliderElement, upperSliderElement] =
          await Promise.all([browser.$(exampleSelector), browser.$(lowerSliderSelector), browser.$(upperSliderSelector)]);

      await targetElement.scrollIntoView({ block: 'center' });
      await dragSliderHandle(browser, lowerSliderElement, spacesFromDefault);
      await dragSliderHandle(browser, upperSliderElement, -(spacesFromDefault));

      // click off of the slider
      await targetElement.click({ x: -50, y: -50 });

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
});
