/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const fs = require('fs');
const path = require('path');
const tmp = require('tmp-promise');

const { setupBrowser } = require('./testUtils');

async function fillFile(path, numBytes) {
  const MAX_BUFFER_SIZE = 1 << 20, // 1 MiB
      writeStream = fs.createWriteStream(path);

  let buffer;

  for (let i = 0; i < numBytes; i += MAX_BUFFER_SIZE) {
    const bufferSize = Math.min(MAX_BUFFER_SIZE, numBytes - i);

    if (!(buffer && buffer.length === bufferSize)) {
      buffer = await Buffer.alloc(bufferSize);
    }

    writeStream.write(buffer);
  }

  return new Promise((resolve, reject) => {
    writeStream.on('finish', resolve);
    writeStream.on('error', reject);

    writeStream.end();
  });
}

describe('NxMultiFileUpload', function() {
  const {
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
      btnSelector = `${complexExampleSelector} .nx-multi-file-upload__select-btn`;

  // Files of varying sizes to test the file size display in the component.  Due to the size
  // of the largest of these files, there are problems with storing them in git so they
  // are generated on the fly in beforeAll.
  let files, tmpDir;

  beforeAll(async function() {
    tmpDir = await tmp.dir({ unsafeCleanup: true });

    files = {
      bytes: path.join(tmpDir.path, 'bytes'),
      kilobytes: path.join(tmpDir.path, 'kilobytes'),
      megabytes: path.join(tmpDir.path, 'megabytes'),
      gigabytes: path.join(tmpDir.path, 'gigabytes-gigalongname')
    };

    const bytesPromise = fillFile(files.bytes, 14),
        kilobytesPromise = fillFile(files.kilobytes, 2000),
        megabytesPromise = fillFile(files.megabytes, 1500100),
        gigabytesPromise = fillFile(files.gigabytes, 1200000100);

    await Promise.all([bytesPromise, kilobytesPromise, megabytesPromise, gigabytesPromise]);
  });

  afterAll(async function() {
    await tmpDir.cleanup();
  });

  it('looks right when pristine', simpleTest(complexExampleSelector));
  it('has a blue glow around the button when focused', focusTest(complexExampleSelector, btnSelector));
  it('has a dark border around the button when hovered', hoverTest(complexExampleSelector, btnSelector));
  it('has a blue glow when focused and hovered', focusAndHoverTest(complexExampleSelector, btnSelector));
  it('has a dark border and grey background when clicked', clickTest(complexExampleSelector, btnSelector));

  it('passes a11y checks', a11yTest());

  describe('when files are selected', function() {
    function displaySelectedFiles(...selectedFileSize) {
      return async function() {
        const [input] = await waitAndGetElements(`${complexExampleSelector} input[multiple]`);
        await input.uploadFile(...selectedFileSize.map(type => files[type]));
        const [complexExample] = await waitAndGetElements(complexExampleSelector);
        await checkScreenshot(complexExample);
      };
    }

    it('shows selected files', displaySelectedFiles('bytes', 'kilobytes'));

    it('scrolls to last file if number of files exceeds container\'s space',
        displaySelectedFiles('bytes', 'kilobytes', 'megabytes', 'gigabytes'));

    it('passes a11y checks', async function() {
      displaySelectedFiles('bytes', 'kilobytes');
      a11yTest();
    });

    describe('file dismiss button', function() {
      beforeEach(async function() {
        const [input] = await waitAndGetElements(`${complexExampleSelector} input[multiple]`);
        await input.uploadFile(files.bytes);
      });

      const btnSelector = `${complexExampleSelector} .nx-selected-file__dismiss-btn`;

      it('has a blue glow when focused', focusTest(complexExampleSelector, btnSelector));
      it('has a dark border when hovered', hoverTest(complexExampleSelector, btnSelector));
      it('has a dark border and blue glow when focused and hovered',
          focusAndHoverTest(complexExampleSelector, btnSelector));
      it('has a dark border and grey background when clicked', clickTest(complexExampleSelector, btnSelector));
    });
  });

  describe('when required but empty and non-pristine', function() {
    beforeEach(async function() {
      const [input] = await waitAndGetElements(`${complexExampleSelector} input[multiple]`);
      await input.uploadFile(files.bytes);

      const [dismissBtn] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file__dismiss-btn`);
      await dismissBtn.click();

      expect(await isInDocument(dismissBtn)).toBe(false);
    });

    it('shows the validation error and the "No file selected" text turns red and gets and icon',
        simpleTest(complexExampleSelector));
  });

  describe('functionality', function() {
    async function openFileChooser(files) {
      const [button] = await waitAndGetElements(`${complexExampleSelector} .nx-multi-file-upload__select-btn`);
      const [fileChooser] = await Promise.all([getPage().waitForFileChooser(), button.click()]);
      await fileChooser.accept(files);
    }

    it('opens file picker when the button is clicked, and displays all selected files', async function() {
      await openFileChooser([files.bytes, files.kilobytes]);

      const [selectedFile1] = (await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(1)`)),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      expect(textContent1).toMatch(path.basename(files.bytes));
      expect(textContent1).not.toMatch(path.dirname(files.bytes));
      expect(textContent1).toMatch('14.0 B');

      const [selectedFile2] = (await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(2)`)),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      expect(textContent2).toMatch(path.basename(files.kilobytes));
      expect(textContent2).not.toMatch(path.dirname(files.kilobytes));
      expect(textContent2).toMatch('2.0 kB');
    });

    it('adds to selected files when file picker opened more than once', async function() {
      await openFileChooser([files.bytes]);

      const [selectedFile1] = (await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(1)`)),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      expect(textContent1).toMatch('14.0 B');

      await openFileChooser([files.kilobytes]);

      const [selectedFile2] = (await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(2)`)),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      expect(textContent2).toMatch('2.0 kB');
    });

    it('correctly displays varying file sizes', async function() {
      await openFileChooser([files.bytes, files.kilobytes, files.megabytes, files.gigabytes]);

      const [selectedFile1] = (await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(1)`)),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      const [selectedFile2] = (await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(2)`)),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      const [selectedFile3] = (await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(3)`)),
          textContent3 = await selectedFile3.evaluate(e => e.textContent);

      const [selectedFile4] = (await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(4)`)),
          textContent4 = await selectedFile4.evaluate(e => e.textContent);

      expect(textContent1).toMatch('14.0 B');
      expect(textContent2).toMatch('2.0 kB');
      expect(textContent3).toMatch('1.5 MB');
      expect(textContent4).toMatch('1.2 GB');
    });

    it('removes the selected file when the dismiss button is clicked', async function() {
      await openFileChooser([files.bytes, files.kilobytes]);

      let [selectedFile1, dismissBtn1] = await waitAndGetElements(
              `${complexExampleSelector} .nx-selected-file:nth-child(1)`,
              `${complexExampleSelector} .nx-selected-file:nth-child(1) .nx-selected-file__dismiss-btn`
          ),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      const [selectedFile2] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(2)`),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      // confirm layout of selected files
      expect(textContent1).toMatch('14.0 B');
      expect(textContent2).toMatch('2.0 kB');

      await dismissBtn1.click();

      [selectedFile1] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(1)`);
      textContent1 = await selectedFile1.evaluate(e => e.textContent);

      // confirm the correct file was removed
      expect(await isInDocument(selectedFile2)).toBe(false);
      expect(await isInDocument(selectedFile1)).toBe(true);
      expect(textContent1).toMatch('2.0 kB');
    });

    it('sets the no File Selected message when the last selected file is removed', async function() {
      await openFileChooser([files.bytes]);

      const [selectedFile, dismissBtn] = await waitAndGetElements(
          `${complexExampleSelector} .nx-selected-file`,
          `${complexExampleSelector} .nx-selected-file .nx-selected-file__dismiss-btn`
      );

      await dismissBtn.click();

      const [noFileSelectedMessage] = await waitAndGetElements('.nx-multi-file-upload__no-file-message'),
          textContent = await noFileSelectedMessage.evaluate(e => e.textContent);

      expect(await isInDocument(selectedFile)).toBe(false);
      expect(await isInDocument(noFileSelectedMessage)).toBe(true);
      expect(textContent).toBe('No file selected');
    });

    describe('focus behavior', function() {
      it('sets focus on the appropriate dismiss button once a file is removed', async function() {
        await openFileChooser([files.bytes, files.kilobytes, files.megabytes, files.gigabytes]);

        let [selectedFile1, dismissBtn1] = await waitAndGetElements(
            `${complexExampleSelector} .nx-selected-file:nth-child(1)`,
            `${complexExampleSelector} .nx-selected-file:nth-child(1) .nx-selected-file__dismiss-btn`
        );

        let [selectedFile2, dismissBtn2] = await waitAndGetElements(
            `${complexExampleSelector} .nx-selected-file:nth-child(2)`,
            `${complexExampleSelector} .nx-selected-file:nth-child(2) .nx-selected-file__dismiss-btn`
        );

        let [selectedFile3, dismissBtn3] = await waitAndGetElements(
            `${complexExampleSelector} .nx-selected-file:nth-child(3)`,
            `${complexExampleSelector} .nx-selected-file:nth-child(3) .nx-selected-file__dismiss-btn`
        );

        const [selectedFile4] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(4)`);

        // certify all 4 files are indeed uploaded
        expect(await isInDocument(selectedFile1)).toBe(true);
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(true);
        expect(await isInDocument(selectedFile4)).toBe(true);

        // remove the first file
        await dismissBtn1.click();

        [selectedFile1, dismissBtn1] = await waitAndGetElements(
            `${complexExampleSelector} .nx-selected-file:nth-child(1)`,
            `${complexExampleSelector} .nx-selected-file:nth-child(1) .nx-selected-file__dismiss-btn`
        );
        [selectedFile2, dismissBtn2] = await waitAndGetElements(
            `${complexExampleSelector} .nx-selected-file:nth-child(2)`,
            `${complexExampleSelector} .nx-selected-file:nth-child(2) .nx-selected-file__dismiss-btn`
        );
        [selectedFile3, dismissBtn3] = await waitAndGetElements(
            `${complexExampleSelector} .nx-selected-file:nth-child(3)`,
            `${complexExampleSelector} .nx-selected-file:nth-child(3) .nx-selected-file__dismiss-btn`
        );

        // confirm a file was removed
        expect(await isInDocument(selectedFile1)).toBe(true);
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(true);
        expect(await isInDocument(selectedFile4)).toBe(false);

        // focus has moved to subsequent dismiss button after file removed (now first)
        expect(await isFocused(dismissBtn1)).toBe(true);

        // remove the last file
        await dismissBtn3.click();

        // confirm a file was removed
        expect(await isInDocument(selectedFile1)).toBe(true);
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(false);

        //focus has moved to the next last dismiss button
        expect(await isFocused(dismissBtn2)).toBe(true);
      });

      it('sets focus on input when last file is removed', async function() {
        await openFileChooser([files.bytes]);

        const [input] = await waitAndGetElements(`${complexExampleSelector} input[multiple]`);

        const [selectedFile, dismissBtn] = await waitAndGetElements(
            `${complexExampleSelector} .nx-selected-file`,
            `${complexExampleSelector} .nx-selected-file .nx-selected-file__dismiss-btn`
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
      const [button] = await waitAndGetElements(`${statefulExampleSelector} .nx-multi-file-upload__select-btn`);
      const [fileChooser] = await Promise.all([getPage().waitForFileChooser(), button.click()]);
      await dismissResultingDialog(async () => {
        await fileChooser.accept(files);
      });
    }

    it('opens file picker when the select button is clicked, and displays all selected files', async function() {
      await openFileChooser([files.bytes, files.kilobytes]);

      const [selectedFile1] = (await waitAndGetElements(`${statefulExampleSelector} .nx-selected-file:nth-child(1)`)),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      expect(textContent1).toMatch(path.basename(files.bytes));
      expect(textContent1).not.toMatch(path.dirname(files.bytes));
      expect(textContent1).toMatch('14.0 B');

      const [selectedFile2] = (await waitAndGetElements(`${statefulExampleSelector} .nx-selected-file:nth-child(2)`)),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      expect(textContent2).toMatch(path.basename(files.kilobytes));
      expect(textContent2).not.toMatch(path.dirname(files.kilobytes));
      expect(textContent2).toMatch('2.0 kB');
    });

    it('adds to selected files when file picker opened more than once', async function() {
      await openFileChooser([files.bytes]);

      const [selectedFile1] = (await waitAndGetElements(`${statefulExampleSelector} .nx-selected-file:nth-child(1)`)),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      expect(textContent1).toMatch('14.0 B');

      await openFileChooser([files.kilobytes]);

      const [selectedFile2] = (await waitAndGetElements(`${statefulExampleSelector} .nx-selected-file:nth-child(2)`)),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      expect(textContent2).toMatch('2.0 kB');
    });

    it('correctly displays varying file sizes', async function() {
      await openFileChooser([files.bytes, files.kilobytes, files.megabytes, files.gigabytes]);

      const [selectedFile1] = (await waitAndGetElements(`${statefulExampleSelector} .nx-selected-file:nth-child(1)`)),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      const [selectedFile2] = (await waitAndGetElements(`${statefulExampleSelector} .nx-selected-file:nth-child(2)`)),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      const [selectedFile3] = (await waitAndGetElements(`${statefulExampleSelector} .nx-selected-file:nth-child(3)`)),
          textContent3 = await selectedFile3.evaluate(e => e.textContent);

      const [selectedFile4] = (await waitAndGetElements(`${statefulExampleSelector} .nx-selected-file:nth-child(4)`)),
          textContent4 = await selectedFile4.evaluate(e => e.textContent);

      expect(textContent1).toMatch('14.0 B');
      expect(textContent2).toMatch('2.0 kB');
      expect(textContent3).toMatch('1.5 MB');
      expect(textContent4).toMatch('1.2 GB');
    });

    it('removes the selected file when the dismiss button is clicked', async function() {
      await openFileChooser([files.bytes, files.kilobytes]);

      let [selectedFile1, dismissBtn1] = await waitAndGetElements(
              `${statefulExampleSelector} .nx-selected-file:nth-child(1)`,
              `${statefulExampleSelector} .nx-selected-file:nth-child(1) .nx-selected-file__dismiss-btn`
          ),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      const [selectedFile2] = await waitAndGetElements(`${statefulExampleSelector} .nx-selected-file:nth-child(2)`),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      // confirm layout of selected files
      expect(textContent1).toMatch('14.0 B');
      expect(textContent2).toMatch('2.0 kB');

      await dismissResultingDialog(async () => {
        await dismissBtn1.click();
      });

      [selectedFile1] = await waitAndGetElements(`${statefulExampleSelector} .nx-selected-file:nth-child(1)`);
      textContent1 = await selectedFile1.evaluate(e => e.textContent);

      // confirm the correct file was removed
      expect(await isInDocument(selectedFile2)).toBe(false);
      expect(await isInDocument(selectedFile1)).toBe(true);
      expect(textContent1).toMatch('2.0 kB');
    });

    it('sets the no File Selected message when the last selected file is removed', async function() {
      await openFileChooser([files.bytes]);

      const [selectedFile, dismissBtn] = await waitAndGetElements(
          `${statefulExampleSelector} .nx-selected-file`,
          `${statefulExampleSelector} .nx-selected-file .nx-selected-file__dismiss-btn`
      );

      await dismissResultingDialog(async () => {
        await dismissBtn.click();
      });

      const [noFileSelectedMessage] = await waitAndGetElements('.nx-multi-file-upload__no-file-message'),
          textContent = await noFileSelectedMessage.evaluate(e => e.textContent);

      expect(await isInDocument(selectedFile)).toBe(false);
      expect(await isInDocument(noFileSelectedMessage)).toBe(true);
      expect(textContent).toBe('No file selected');
    });

    describe('focus behavior', function() {
      it('sets focus on the appropriate dismiss button once a file is removed', async function() {
        await openFileChooser([files.bytes, files.kilobytes, files.megabytes, files.gigabytes]);

        let [selectedFile1, dismissBtn1] = await waitAndGetElements(
            `${statefulExampleSelector} .nx-selected-file:nth-child(1)`,
            `${statefulExampleSelector} .nx-selected-file:nth-child(1) .nx-selected-file__dismiss-btn`
        );

        let [selectedFile2, dismissBtn2] = await waitAndGetElements(
            `${statefulExampleSelector} .nx-selected-file:nth-child(2)`,
            `${statefulExampleSelector} .nx-selected-file:nth-child(2) .nx-selected-file__dismiss-btn`
        );

        let [selectedFile3, dismissBtn3] = await waitAndGetElements(
            `${statefulExampleSelector} .nx-selected-file:nth-child(3)`,
            `${statefulExampleSelector} .nx-selected-file:nth-child(3) .nx-selected-file__dismiss-btn`
        );

        const [selectedFile4] = await waitAndGetElements(`${statefulExampleSelector} .nx-selected-file:nth-child(4)`);

        // certify all 4 files are indeed uploaded
        expect(await isInDocument(selectedFile1)).toBe(true);
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(true);
        expect(await isInDocument(selectedFile4)).toBe(true);

        // remove the first file
        await dismissResultingDialog(async () => {
          await dismissBtn1.click();
        });

        [selectedFile1, dismissBtn1] = await waitAndGetElements(
            `${statefulExampleSelector} .nx-selected-file:nth-child(1)`,
            `${statefulExampleSelector} .nx-selected-file:nth-child(1) .nx-selected-file__dismiss-btn`
        );
        [selectedFile2, dismissBtn2] = await waitAndGetElements(
            `${statefulExampleSelector} .nx-selected-file:nth-child(2)`,
            `${statefulExampleSelector} .nx-selected-file:nth-child(2) .nx-selected-file__dismiss-btn`
        );
        [selectedFile3, dismissBtn3] = await waitAndGetElements(
            `${statefulExampleSelector} .nx-selected-file:nth-child(3)`,
            `${statefulExampleSelector} .nx-selected-file:nth-child(3) .nx-selected-file__dismiss-btn`
        );

        // confirm a file was removed
        expect(await isInDocument(selectedFile1)).toBe(true);
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(true);
        expect(await isInDocument(selectedFile4)).toBe(false);

        // focus has moved to subsequent dismiss button after file removed (now first)
        expect(await isFocused(dismissBtn1)).toBe(true);

        // remove the last file
        await dismissResultingDialog(async () => {
          await dismissBtn3.click();
        });

        // confirm a file was removed
        expect(await isInDocument(selectedFile1)).toBe(true);
        expect(await isInDocument(selectedFile2)).toBe(true);
        expect(await isInDocument(selectedFile3)).toBe(false);

        //focus has moved to the next last dismiss button
        expect(await isFocused(dismissBtn2)).toBe(true);
      });

      it('sets focus on input when last file is removed', async function() {
        await openFileChooser([files.bytes]);

        const [input] = await waitAndGetElements(`${statefulExampleSelector} input[multiple]`);

        const [selectedFile, dismissBtn] = await waitAndGetElements(
            `${statefulExampleSelector} .nx-selected-file`,
            `${statefulExampleSelector} .nx-selected-file .nx-selected-file__dismiss-btn`
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
