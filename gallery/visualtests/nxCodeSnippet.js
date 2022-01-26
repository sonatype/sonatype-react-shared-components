/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { Region, Target } = require('@applitools/eyes-webdriverio');

const { clickTest, focusTest, focusAndHoverTest, hoverTest, simpleTest } = require('./testUtils');

describe('NxCodeSnippet', function() {
  beforeEach(async function() {
    await browser.url('#/pages/NxCodeSnippet');
  });

  const multipleSnippetSelector = '#nx-code-snippet-simple-example .gallery-example-live',
      complexSnippetExample = '#complex-nx-code-snippet',
      textareaSelector = `${complexSnippetExample} textarea`,
      copyBtnSelector = `${complexSnippetExample} .nx-btn`;

  it('looks right including distance to other components', simpleTest(multipleSnippetSelector));
  it('looks no different when the text area is hovered', hoverTest(complexSnippetExample, textareaSelector));
  it('has a blue border around the text area when it is focused', focusTest(complexSnippetExample, textareaSelector));
  it('has a blue border around the text area when it is focused and hovered',
      focusAndHoverTest(complexSnippetExample, textareaSelector));

  it('selects the text when the button is clicked', async function() {
    const [codeSnippet, copyBtn] = await Promise.all([browser.$(complexSnippetExample), browser.$(copyBtnSelector)]);

    await codeSnippet.scrollIntoView({ block: 'center' });

    try {
      await copyBtn.click();
    }
    finally {
      if (await browser.isAlertOpen()) {
        await browser.acceptAlert();
      }
    }

    await codeSnippet.moveTo({ xOffset: -10, yOffset: -10 });

    await browser.eyesRegionSnapshot(null, Target.region(codeSnippet));
  });

  it('copies the text to the clipboard when the button is clicked', async function() {
    const [codeSnippet, copyBtn] = await Promise.all([browser.$(complexSnippetExample), browser.$(copyBtnSelector)]);

    await codeSnippet.scrollIntoView({ block: 'center' });

    try {
      await copyBtn.click();
    }
    finally {
      if (await browser.isAlertOpen()) {
        await browser.acceptAlert();
      }
    }

    const clipboardText = await browser.executeAsync(function(done) {
      return window.navigator.clipboard.readText().then(done);
    });

    expect(clipboardText).toBe(
String.raw`#define _ -F<00||--F-OO--;
int F=00,OO=00;main(){F_OO();printf("%1.3f\n",4.*-F/OO/OO);}F_OO()
{
            _-_-_-_
       _-_-_-_-_-_-_-_-_
    _-_-_-_-_-_-_-_-_-_-_-_
  _-_-_-_-_-_-_-_-_-_-_-_-_-_
 _-_-_-_-_-_-_-_-_-_-_-_-_-_-_
 _-_-_-_-_-_-_-_-_-_-_-_-_-_-_
_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
_-_-_-_-_-_-_-_-_-_-_-_-_-_-_-_
 _-_-_-_-_-_-_-_-_-_-_-_-_-_-_
 _-_-_-_-_-_-_-_-_-_-_-_-_-_-_
  _-_-_-_-_-_-_-_-_-_-_-_-_-_
    _-_-_-_-_-_-_-_-_-_-_-_
        _-_-_-_-_-_-_-_
            _-_-_-_
}`
    );
  });
});
