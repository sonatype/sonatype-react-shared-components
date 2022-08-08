/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const { setupBrowser } = require('./testUtils');

describe('NxFileUpload', function() {
  const {
    waitAndGetElements,
    isInDocument,
    getPage,
    simpleTest,
    focusTest,
    hoverTest,
    focusAndHoverTest,
    clickTest,
    a11yTest
  } = setupBrowser('#/pages/File Upload');

  const complexExampleSelector = '#nx-file-upload-complex-example .gallery-example-live',
      btnSelector = `${complexExampleSelector} .nx-file-upload__select-btn`;

  it('looks right when pristine', simpleTest(complexExampleSelector));
  it('has a blue glow around the button when focused', focusTest(complexExampleSelector, btnSelector));
  it('has a dark border around the button when hovered', hoverTest(complexExampleSelector, btnSelector));
  it('has a blue glow when focused and hovered', focusAndHoverTest(complexExampleSelector, btnSelector));
  it('has a dark border and grey background when clicked', clickTest(complexExampleSelector, btnSelector));

  it('passes a11y checks', a11yTest());

  describe('when a file is selected', function() {
    beforeEach(async function() {
      const [input] = await waitAndGetElements(`${complexExampleSelector} input[type=file]`);

      await input.uploadFile('visualtests/resources/file-upload-bytes.txt');
    });

    it('shows the selected file', simpleTest(complexExampleSelector));

    it('passes a11y checks', a11yTest());

    describe('file dismiss button', function() {
      const btnSelector = `${complexExampleSelector} .nx-selected-file__dismiss-btn`;

      it('has a blue glow when focused when focused', focusTest(complexExampleSelector, btnSelector));
      it('has a dark border when hovered', hoverTest(complexExampleSelector, btnSelector));
      it('has a dark border and blue glow  when focused and hovered',
          focusAndHoverTest(complexExampleSelector, btnSelector));
      it('has a dark border when clicked', focusAndHoverTest(complexExampleSelector, btnSelector));
    });
  });

  describe('when required but empty and non-pristine', function() {
    beforeEach(async function() {
      const [input] = await waitAndGetElements(`${complexExampleSelector} input[type=file]`);
      await input.uploadFile('visualtests/resources/file-upload-bytes.txt');

      const [dismissBtn] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file__dismiss-btn`);
      await dismissBtn.click();

      // sanity check
      expect(await isInDocument(dismissBtn)).toBe(false);
    });

    it('shows the validation error and the "No file selected" text turns red and gets and icon',
        simpleTest(complexExampleSelector));
  });

  describe('functionality', function() {
    it('opens the file picker when the select button is clicked and displays the result', async function() {
      const [button] = await waitAndGetElements(`${complexExampleSelector} .nx-file-upload__select-btn`);

      const [fileChooser] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await fileChooser.accept(['visualtests/resources/file-upload-bytes.txt']);

      const [selectedFile] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file`),
          textContent = await selectedFile.evaluate(e => e.textContent);

      expect(textContent).toMatch('file-upload-bytes.txt');
      expect(textContent).not.toMatch('visualtests/resources');
      expect(textContent).toMatch('14.0 B');
    });

    it('correctly displays varying file sizes', async function() {
      const [button] = await waitAndGetElements(`${complexExampleSelector} .nx-file-upload__select-btn`);

      const [fileChooser1] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await fileChooser1.accept(['visualtests/resources/file-upload-kilobytes.txt']);

      const [selectedFile1] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file`),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      expect(textContent1).toMatch('2.0 kB');

      const [fileChooser2] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await fileChooser2.accept(['visualtests/resources/file-upload-megabytes.txt']);

      const [selectedFile2] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file`),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      expect(textContent2).toMatch('1.5 MB');

      const [fileChooser3] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await fileChooser3.accept(['visualtests/resources/file-upload-gigabytes.txt']);

      const [selectedFile3] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file`),
          textContent3 = await selectedFile3.evaluate(e => e.textContent);

      expect(textContent3).toMatch('1.2 GB');
    });

    it('removes the selected file when the dismiss button is clicked', async function() {
      const [button] = await waitAndGetElements(`${complexExampleSelector} .nx-file-upload__select-btn`);

      const [fileChooser] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await fileChooser.accept(['visualtests/resources/file-upload-bytes.txt']);

      const [selectedFile, dismissBtn] = await waitAndGetElements(
        `${complexExampleSelector} .nx-selected-file`,
        `${complexExampleSelector} .nx-selected-file__dismiss-btn`
      );

      await dismissBtn.click();

      const [noFileMessage] = await waitAndGetElements(`${complexExampleSelector} .nx-file-upload__no-file-message`);

      expect(await isInDocument(selectedFile)).toBe(false);
      expect(await isInDocument(dismissBtn)).toBe(false);
      expect(await isInDocument(noFileMessage)).toBe(true);
    });

    it('unsets the selected file if the user opens the picker again and picks nothing', async function() {
      const [button] = await waitAndGetElements(`${complexExampleSelector} .nx-file-upload__select-btn`);

      const [fileChooser1] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await fileChooser1.accept(['visualtests/resources/file-upload-bytes.txt']);

      const [selectedFile] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file`);

      const [fileChooser2] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      // Note that exactly what this looks like IRL seems to be browser-dependent. On my system, in Chrome
      // clicking Cancel in the file picker will cause the file to become unselected. On Firefox however it won't
      await fileChooser2.accept([]);

      await getPage().screenshot({ path: '/tmp/screenshot.png' });
      const [noFileMessage] = await waitAndGetElements(`${complexExampleSelector} .nx-file-upload__no-file-message`);

      expect(await isInDocument(selectedFile)).toBe(false);
      expect(await isInDocument(noFileMessage)).toBe(true);
    });
  });
});
