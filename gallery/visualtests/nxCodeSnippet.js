/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxCodeSnippet', function() {
  const {
    clickTest,
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    a11yTest,
    waitAndGetElements,
    dismissResultingDialog,
    getPage,
    checkScreenshot
  } = setupBrowser('#/pages/Code%20Snippet');

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
    const [codeSnippet, copyBtn] = await waitAndGetElements(complexSnippetExample, copyBtnSelector);

    await dismissResultingDialog(async () => {
      await copyBtn.click();
    });

    await getPage().mouse.move(0, 0);

    await checkScreenshot(codeSnippet);
  });

  it('copies the text to the clipboard when the button is clicked', async function() {
    const [codeSnippet, copyBtn] = await waitAndGetElements(complexSnippetExample, copyBtnSelector);

    await dismissResultingDialog(async () => {
      await copyBtn.click();
    });

    const clipboardText = await getPage().evaluate(() => window.navigator.clipboard.readText());

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

  it('passes a11y checks', a11yTest());
});
