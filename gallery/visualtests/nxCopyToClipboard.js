/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxCopyToClipboard', function() {
  const {
    focusTest,
    focusAndHoverTest,
    hoverTest,
    simpleTest,
    a11yTest,
    waitAndGetElements,
    dismissResultingDialog,
    getPage,
    checkScreenshot
  } = setupBrowser('#/pages/Copy%20To%20Clipboard');

  const multipleCopySelector = '#nx-copy-to-clipboard-simple-example .gallery-example-live',
      sizingCopySelector = '#nx-copy-to-clipboard-custom-sizing-example .gallery-example-live',
      widthConstrainedSelector = '#nx-copy-to-clipboard-width-constrained-example .gallery-example-live',
      complexCopyExample = '#complex-nx-copy-to-clipboard',
      textareaSelector = `${complexCopyExample} textarea`,
      copyBtnSelector = `${complexCopyExample} .nx-btn`;

  it('looks right including distance to other components', simpleTest(multipleCopySelector));
  describe('with rows=1', function() {
    it('renders with a single-line textarea', simpleTest(sizingCopySelector));
  });
  it('has a dark grey border when the text area is hovered', hoverTest(complexCopyExample, textareaSelector));
  it('has a blue inner outline around the text area when focused', focusTest(complexCopyExample, textareaSelector));
  it('has a dark grey border and blue inner outline when focused and hovered',
      focusAndHoverTest(complexCopyExample, textareaSelector));

  it('selects the text when the button is clicked', async function() {
    const [codeSnippet, copyBtn] = await waitAndGetElements(complexCopyExample, copyBtnSelector);

    await dismissResultingDialog(async () => {
      await copyBtn.click();
    }, 500);

    await getPage().mouse.move(0, 0);

    await checkScreenshot(codeSnippet);
  });

  it('copies the text to the clipboard when the button is clicked', async function() {
    const [copyBtn] = await waitAndGetElements(complexCopyExample, copyBtnSelector);

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

  it('looks right with constrained width', simpleTest(widthConstrainedSelector));

  it('passes a11y checks', a11yTest());
});
