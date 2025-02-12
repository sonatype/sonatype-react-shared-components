/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const path = require('path');

const { setupBrowser } = require('./testUtils');

describe('NxMultiFileUpload', function() {
  const {
    setupUploadableFiles,
    checkScreenshot,
    isInDocument,
    waitAndGetElements,
    isFocused,
    clickTest,
    focusTest,
    focusAndHoverTest,
    getPage,
    hoverTest,
    simpleTest,
    a11yTest
  } = setupBrowser('#/pages/Multiple File Upload');

  const complexExampleSelector = '#nx-multi-file-upload-complex-example .gallery-example-live',
      btnSelector = `${complexExampleSelector} .nx-file-upload__select-btn`;

  // Files of varying sizes to test the file size display in the component.  Due to the size
  // of the largest of these files, there are problems with storing them in git so they
  // are generated on the fly in beforeAll.
  const getFiles = setupUploadableFiles();

  it('looks right', simpleTest(complexExampleSelector));
  it('looks right when focused', focusTest(complexExampleSelector, btnSelector));
  it('looks right when hovered', hoverTest(complexExampleSelector, btnSelector));
  it('looks right when focused and hovered', focusAndHoverTest(complexExampleSelector, btnSelector));
  it('looks right when clicked', clickTest(complexExampleSelector, btnSelector));

  it('passes a11y checks', a11yTest());

  describe('when files are selected', function() {
    async function displaySelectedFiles(...selectedFiles) {
      const [input] = await waitAndGetElements(`${complexExampleSelector} input[multiple]`);
      await input.uploadFile(...selectedFiles);
      const [complexExample] = await waitAndGetElements(complexExampleSelector);
      await checkScreenshot(complexExample);
    }

    it('shows selected files', async function() {
      const files = getFiles();
      await displaySelectedFiles(files.bytes, files.kilobytes);
    });

    it('scrolls to last file if number of files exceeds container\'s space', async function() {
      const files = getFiles();
      await displaySelectedFiles(files.bytes, files.kilobytes, files.megabytes, files.gigabytes);
    });

    it('passes a11y checks', async function() {
      const files = getFiles();
      const [input] = await waitAndGetElements(`${complexExampleSelector} input[multiple]`);
      await input.uploadFile(files.bytes, files.kilobytes);
      a11yTest();
    });

    describe('file dismiss button', function() {
      beforeEach(async function() {
        const files = getFiles();
        const [input] = await waitAndGetElements(`${complexExampleSelector} input[multiple]`);
        await input.uploadFile(files.bytes);
      });

      const btnSelector = `${complexExampleSelector} .nx-selected-file__dismiss-btn`;

      it('has thick blue outline when focused', focusTest(complexExampleSelector, btnSelector, 0, true));
      it('has dark outline and dark background when hovered', hoverTest(complexExampleSelector, btnSelector, true));
      it('has thick blue outline and dark background when hovered and focused',
          focusAndHoverTest(complexExampleSelector, btnSelector, true));
      it('has normal outline and white background when clicked', clickTest(complexExampleSelector, btnSelector, 0, true));
    });
  });

  describe('when required but empty and non-pristine', function() {
    it('shows the validation error and the "No file selected" text turns red and gets and icon', async function() {
      const files = getFiles();
      const [input] = await waitAndGetElements(`${complexExampleSelector} input[multiple]`);
      await input.uploadFile(files.bytes);

      const [dismissBtn] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file__dismiss-btn`);
      await dismissBtn.click();

      expect(await isInDocument(dismissBtn)).toBe(false);

      const [complexExample] = await waitAndGetElements(complexExampleSelector);
      await checkScreenshot(complexExample);
    });
  });

  describe('functionality', function() {
    async function openFileChooser(files) {
      const [button] = await waitAndGetElements(`${complexExampleSelector} .nx-file-upload__select-btn`);
      const [fileChooser] = await Promise.all([getPage().waitForFileChooser(), button.click()]);
      await fileChooser.accept(files);
    }

    it('opens file picker when the button is clicked, and displays all selected files', async function() {
      const files = getFiles();
      await openFileChooser([files.bytes, files.kilobytes]);

      const [selectedFile1, selectedFile2] = await waitAndGetElements(
          `${complexExampleSelector} li:nth-child(1) .nx-selected-file`,
          `${complexExampleSelector} li:nth-child(2) .nx-selected-file`);

      const textContent1 = await selectedFile1.evaluate(e => e.textContent),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      expect(textContent1).toMatch(path.basename(files.bytes));
      expect(textContent1).not.toMatch(path.dirname(files.bytes));
      expect(textContent1).toMatch('14.0 B');

      expect(textContent2).toMatch(path.basename(files.kilobytes));
      expect(textContent2).not.toMatch(path.dirname(files.kilobytes));
      expect(textContent2).toMatch('2.0 kB');
    });

    it('adds to selected files when file picker opened more than once', async function() {
      const files = getFiles();
      await openFileChooser([files.bytes]);
      await openFileChooser([files.kilobytes]);

      const [selectedFile1, selectedFile2] = await waitAndGetElements(
          `${complexExampleSelector} li:nth-child(1) .nx-selected-file`,
          `${complexExampleSelector} li:nth-child(2) .nx-selected-file`);

      const textContent1 = await selectedFile1.evaluate(e => e.textContent),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      expect(textContent1).toMatch('14.0 B');
      expect(textContent2).toMatch('2.0 kB');
    });

    it('correctly displays varying file sizes', async function() {
      const files = getFiles();
      await openFileChooser([files.bytes, files.kilobytes, files.megabytes, files.gigabytes]);

      const [selectedFile1, selectedFile2, selectedFile3, selectedFile4] = await waitAndGetElements(
          `${complexExampleSelector} li:nth-child(1) .nx-selected-file`,
          `${complexExampleSelector} li:nth-child(2) .nx-selected-file`,
          `${complexExampleSelector} li:nth-child(3) .nx-selected-file`,
          `${complexExampleSelector} li:nth-child(4) .nx-selected-file`
      );

      const textContent1 = await selectedFile1.evaluate(e => e.textContent),
          textContent2 = await selectedFile2.evaluate(e => e.textContent),
          textContent3 = await selectedFile3.evaluate(e => e.textContent),
          textContent4 = await selectedFile4.evaluate(e => e.textContent);

      expect(textContent1).toMatch('14.0 B');
      expect(textContent2).toMatch('2.0 kB');
      expect(textContent3).toMatch('1.5 MB');
      expect(textContent4).toMatch('1.2 GB');
    });

    it('removes the selected file when the dismiss button is clicked', async function() {
      const files = getFiles();
      await openFileChooser([files.bytes, files.kilobytes]);

      const [selectedFile1, dismissBtn1, selectedFile2] = await waitAndGetElements(
          `${complexExampleSelector} li:nth-child(1) .nx-selected-file`,
          `${complexExampleSelector} li:nth-child(1) .nx-selected-file .nx-selected-file__dismiss-btn`,
          `${complexExampleSelector} li:nth-child(2) .nx-selected-file`
      );

      const textContent1 = await selectedFile1.evaluate(e => e.textContent),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      // confirm layout of selected files
      expect(textContent1).toMatch('14.0 B');
      expect(textContent2).toMatch('2.0 kB');

      await dismissBtn1.click();

      // confirm the correct file was removed
      expect(await isInDocument(selectedFile1)).toBe(false);
      expect(await isInDocument(selectedFile2)).toBe(true);
      expect(textContent2).toMatch('2.0 kB');
    });

    it('sets the no File Selected message when the last selected file is removed', async function() {
      const files = getFiles();
      await openFileChooser([files.bytes]);

      const [selectedFile, dismissBtn] = await waitAndGetElements(
          `${complexExampleSelector} li:nth-child(1) .nx-selected-file`,
          `${complexExampleSelector} li:nth-child(1) .nx-selected-file .nx-selected-file__dismiss-btn`
      );

      await dismissBtn.click();

      const [noFileSelectedMessage] = await waitAndGetElements('.nx-file-upload__no-file-message'),
          textContent = await noFileSelectedMessage.evaluate(e => e.textContent);

      expect(await isInDocument(selectedFile)).toBe(false);
      expect(await isInDocument(noFileSelectedMessage)).toBe(true);
      expect(textContent).toBe('No file selected');
    });

    describe('focus behavior', function() {
      it('sets focus on the appropriate dismiss button once a file is removed', async function() {
        const files = getFiles();
        await openFileChooser([files.bytes, files.kilobytes, files.megabytes, files.gigabytes]);

        const [
          selectedFile1,
          dismissBtn1,
          selectedFile2,
          dismissBtn2,
          selectedFile3,
          dismissBtn3,
          selectedFile4,
          dismissBtn4
        ] = await waitAndGetElements(
            `${complexExampleSelector} li:nth-child(1) .nx-selected-file`,
            `${complexExampleSelector} li:nth-child(1) .nx-selected-file .nx-selected-file__dismiss-btn`,
            `${complexExampleSelector} li:nth-child(2) .nx-selected-file`,
            `${complexExampleSelector} li:nth-child(2) .nx-selected-file .nx-selected-file__dismiss-btn`,
            `${complexExampleSelector} li:nth-child(3) .nx-selected-file`,
            `${complexExampleSelector} li:nth-child(3) .nx-selected-file .nx-selected-file__dismiss-btn`,
            `${complexExampleSelector} li:nth-child(4) .nx-selected-file`,
            `${complexExampleSelector} li:nth-child(4) .nx-selected-file .nx-selected-file__dismiss-btn`
        );

        // certify all 4 files are indeed uploaded
        expect(await isInDocument(selectedFile1)).toBe(true);
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(true);
        expect(await isInDocument(selectedFile4)).toBe(true);

        // remove the first file
        await dismissBtn1.click();

        // confirm a file was removed
        expect(await isInDocument(selectedFile1)).toBe(false);
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(true);
        expect(await isInDocument(selectedFile4)).toBe(true);

        // focus has moved to subsequent dismiss button after file removed
        expect(await isFocused(dismissBtn2)).toBe(true);

        // remove the last file
        await dismissBtn4.click();

        // confirm a file was removed
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(true);
        expect(await isInDocument(selectedFile4)).toBe(false);

        //focus has moved to the next last dismiss button
        expect(await isFocused(dismissBtn3)).toBe(true);
      });

      it('sets focus on input when last file is removed', async function() {
        const files = getFiles();
        await openFileChooser([files.bytes]);

        const [input, selectedFile, dismissBtn] = await waitAndGetElements(
            `${complexExampleSelector} input[multiple]`,
            `${complexExampleSelector} li:nth-child(1) .nx-selected-file`,
            `${complexExampleSelector} li:nth-child(1) .nx-selected-file .nx-selected-file__dismiss-btn`
        );

        expect(await isInDocument(selectedFile)).toBe(true);

        await dismissBtn.click();

        expect(await isInDocument(selectedFile)).toBe(false);
        expect(await isFocused(input)).toBe(true);
      });
    });
  });

  describe('stateful functionality', function() {
    const { waitAndGetElements, isInDocument, dismissResultingDialog, getPage }
    = setupBrowser('#/pages/Stateful Multiple File Upload');

    const statefulExampleSelector = '#nx-multi-file-upload-stateful-example';

    async function openFileChooser(files) {
      const [button] = await waitAndGetElements(`${statefulExampleSelector} .nx-file-upload__select-btn`);
      const [fileChooser] = await Promise.all([getPage().waitForFileChooser(), button.click()]);
      await dismissResultingDialog(async () => {
        await fileChooser.accept(files);
      });
    }

    it('opens file picker when the button is clicked, and displays all selected files', async function() {
      const files = getFiles();
      await openFileChooser([files.bytes, files.kilobytes]);

      const [selectedFile1, selectedFile2] = await waitAndGetElements(
          `${statefulExampleSelector} li:nth-child(1) .nx-selected-file`,
          `${statefulExampleSelector} li:nth-child(2) .nx-selected-file`);

      const textContent1 = await selectedFile1.evaluate(e => e.textContent),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      expect(textContent1).toMatch(path.basename(files.bytes));
      expect(textContent1).not.toMatch(path.dirname(files.bytes));
      expect(textContent1).toMatch('14.0 B');

      expect(textContent2).toMatch(path.basename(files.kilobytes));
      expect(textContent2).not.toMatch(path.dirname(files.kilobytes));
      expect(textContent2).toMatch('2.0 kB');
    });

    it('adds to selected files when file picker opened more than once', async function() {
      const files = getFiles();
      await openFileChooser([files.bytes]);
      await openFileChooser([files.kilobytes]);

      const [selectedFile1, selectedFile2] = await waitAndGetElements(
          `${statefulExampleSelector} li:nth-child(1) .nx-selected-file`,
          `${statefulExampleSelector} li:nth-child(2) .nx-selected-file`);

      const textContent1 = await selectedFile1.evaluate(e => e.textContent),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      expect(textContent1).toMatch('14.0 B');
      expect(textContent2).toMatch('2.0 kB');
    });

    it('correctly displays varying file sizes', async function() {
      const files = getFiles();
      await openFileChooser([files.bytes, files.kilobytes, files.megabytes, files.gigabytes]);

      const [selectedFile1, selectedFile2, selectedFile3, selectedFile4] = await waitAndGetElements(
          `${statefulExampleSelector} li:nth-child(1) .nx-selected-file`,
          `${statefulExampleSelector} li:nth-child(2) .nx-selected-file`,
          `${statefulExampleSelector} li:nth-child(3) .nx-selected-file`,
          `${statefulExampleSelector} li:nth-child(4) .nx-selected-file`
      );

      const textContent1 = await selectedFile1.evaluate(e => e.textContent),
          textContent2 = await selectedFile2.evaluate(e => e.textContent),
          textContent3 = await selectedFile3.evaluate(e => e.textContent),
          textContent4 = await selectedFile4.evaluate(e => e.textContent);

      expect(textContent1).toMatch('14.0 B');
      expect(textContent2).toMatch('2.0 kB');
      expect(textContent3).toMatch('1.5 MB');
      expect(textContent4).toMatch('1.2 GB');
    });

    it('removes the selected file when the dismiss button is clicked', async function() {
      const files = getFiles();
      await openFileChooser([files.bytes, files.kilobytes]);

      const [selectedFile1, dismissBtn1, selectedFile2] = await waitAndGetElements(
          `${statefulExampleSelector} li:nth-child(1) .nx-selected-file`,
          `${statefulExampleSelector} li:nth-child(1) .nx-selected-file .nx-selected-file__dismiss-btn`,
          `${statefulExampleSelector} li:nth-child(2) .nx-selected-file`
      );

      const textContent1 = await selectedFile1.evaluate(e => e.textContent),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      // confirm layout of selected files
      expect(textContent1).toMatch('14.0 B');
      expect(textContent2).toMatch('2.0 kB');

      await dismissResultingDialog(async () => {
        await dismissBtn1.click();
      });

      // confirm the correct file was removed
      expect(await isInDocument(selectedFile1)).toBe(false);
      expect(await isInDocument(selectedFile2)).toBe(true);
      expect(textContent2).toMatch('2.0 kB');
    });

    it('sets the no File Selected message when the last selected file is removed', async function() {
      const files = getFiles();
      await openFileChooser([files.bytes]);

      const [selectedFile, dismissBtn] = await waitAndGetElements(
          `${statefulExampleSelector} li:nth-child(1) .nx-selected-file`,
          `${statefulExampleSelector} li:nth-child(1) .nx-selected-file .nx-selected-file__dismiss-btn`
      );

      await dismissResultingDialog(async () => {
        await dismissBtn.click();
      });

      const [noFileSelectedMessage] = await waitAndGetElements('.nx-file-upload__no-file-message'),
          textContent = await noFileSelectedMessage.evaluate(e => e.textContent);

      expect(await isInDocument(selectedFile)).toBe(false);
      expect(await isInDocument(noFileSelectedMessage)).toBe(true);
      expect(textContent).toBe('No file selected');
    });

    describe('focus behavior', function() {
      it('sets focus on the appropriate dismiss button once a file is removed', async function() {
        const files = getFiles();
        await openFileChooser([files.bytes, files.kilobytes, files.megabytes, files.gigabytes]);

        const [
          selectedFile1,
          dismissBtn1,
          selectedFile2,
          dismissBtn2,
          selectedFile3,
          dismissBtn3,
          selectedFile4,
          dismissBtn4
        ] = await waitAndGetElements(
            `${statefulExampleSelector} li:nth-child(1) .nx-selected-file`,
            `${statefulExampleSelector} li:nth-child(1) .nx-selected-file .nx-selected-file__dismiss-btn`,
            `${statefulExampleSelector} li:nth-child(2) .nx-selected-file`,
            `${statefulExampleSelector} li:nth-child(2) .nx-selected-file .nx-selected-file__dismiss-btn`,
            `${statefulExampleSelector} li:nth-child(3) .nx-selected-file`,
            `${statefulExampleSelector} li:nth-child(3) .nx-selected-file .nx-selected-file__dismiss-btn`,
            `${statefulExampleSelector} li:nth-child(4) .nx-selected-file`,
            `${statefulExampleSelector} li:nth-child(4) .nx-selected-file .nx-selected-file__dismiss-btn`
        );

        // certify all 4 files are indeed uploaded
        expect(await isInDocument(selectedFile1)).toBe(true);
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(true);
        expect(await isInDocument(selectedFile4)).toBe(true);

        // remove the first file
        await dismissResultingDialog(async () => {
          await dismissBtn1.click();
        });

        // confirm a file was removed
        expect(await isInDocument(selectedFile1)).toBe(false);
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(true);
        expect(await isInDocument(selectedFile4)).toBe(true);

        // focus has moved to subsequent dismiss button after file removed (now first)
        expect(await isFocused(dismissBtn2)).toBe(true);

        // remove the last file
        await dismissResultingDialog(async () => {
          await dismissBtn4.click();
        });

        // confirm a file was removed
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(true);
        expect(await isInDocument(selectedFile4)).toBe(false);

        //focus has moved to the next last dismiss button
        expect(await isFocused(dismissBtn3)).toBe(true);
      });

      it('sets focus on input when last file is removed', async function() {
        const files = getFiles();
        await openFileChooser([files.bytes]);

        const [input, selectedFile, dismissBtn] = await waitAndGetElements(
            `${statefulExampleSelector} input[multiple]`,
            `${statefulExampleSelector} li:nth-child(1) .nx-selected-file`,
            `${statefulExampleSelector} li:nth-child(1) .nx-selected-file .nx-selected-file__dismiss-btn`
        );

        expect(await isInDocument(selectedFile)).toBe(true);

        await dismissResultingDialog(async () => {
          await dismissBtn.click();
        });

        expect(await isInDocument(selectedFile)).toBe(false);
        expect(await isFocused(input)).toBe(true);
      });
    });
  });

  describe('when disabled', function() {
    const disabledExampleSelector = '#nx-multi-file-upload-disabled-example .gallery-example-live';

    it('looks right', simpleTest(disabledExampleSelector));
  });
});
