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
    }

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

  describe('when a file is selected', function() {
    beforeEach(async function() {
      const [input] = await waitAndGetElements(`${complexExampleSelector} input[type=file]`);

      // Use the gigabytes file because it has a long filename that will cause truncation
      await input.uploadFile(files.gigabytes);
    });

    it('shows the selected file', simpleTest(complexExampleSelector));

    it('passes a11y checks', a11yTest());

    describe('file dismiss button', function() {
      const btnSelector = `${complexExampleSelector} .nx-selected-file__dismiss-btn`;

      it('has a blue glow when focused when focused', focusTest(complexExampleSelector, btnSelector));
      it('has a dark border when hovered', hoverTest(complexExampleSelector, btnSelector));
      it('has a dark border and blue glow  when focused and hovered',
          focusAndHoverTest(complexExampleSelector, btnSelector));
      it('has a dark border and grey background when clicked', clickTest(complexExampleSelector, btnSelector));
    });
  });

  describe('when required but empty and non-pristine', function() {
    beforeEach(async function() {
      const [input] = await waitAndGetElements(`${complexExampleSelector} input[type=file]`);
      await input.uploadFile(files.bytes);

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

      await fileChooser.accept([files.bytes]);

      const [selectedFile] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file`),
          textContent = await selectedFile.evaluate(e => e.textContent);

      expect(textContent).toMatch(path.basename(files.bytes));
      expect(textContent).not.toMatch(path.dirname(files.bytes));
      expect(textContent).toMatch('14.0 B');
    });

    it('correctly displays varying file sizes', async function() {
      const [button] = await waitAndGetElements(`${complexExampleSelector} .nx-file-upload__select-btn`);

      const [fileChooser1] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await fileChooser1.accept([files.kilobytes]);

      const [selectedFile1] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file`),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      expect(textContent1).toMatch('2.0 kB');

      const [fileChooser2] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await fileChooser2.accept([files.megabytes]);

      const [selectedFile2] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file`),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      expect(textContent2).toMatch('1.5 MB');

      const [fileChooser3] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await fileChooser3.accept([files.gigabytes]);

      const [selectedFile3] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file`),
          textContent3 = await selectedFile3.evaluate(e => e.textContent);

      expect(textContent3).toMatch('1.2 GB');
    });

    it('removes the selected file when the dismiss button is clicked', async function() {
      const [button] = await waitAndGetElements(`${complexExampleSelector} .nx-file-upload__select-btn`);

      const [fileChooser] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await fileChooser.accept([files.bytes]);

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

      await fileChooser1.accept([files.bytes]);

      const [selectedFile] = await waitAndGetElements(`${complexExampleSelector} .nx-selected-file`);

      const [fileChooser2] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      // Note that exactly what this looks like IRL seems to be browser-dependent. On my system, in Chrome
      // clicking Cancel in the file picker will cause the file to become unselected. On Firefox however it won't
      await fileChooser2.accept([]);

      const [noFileMessage] = await waitAndGetElements(`${complexExampleSelector} .nx-file-upload__no-file-message`);

      expect(await isInDocument(selectedFile)).toBe(false);
      expect(await isInDocument(noFileMessage)).toBe(true);
    });
  });

  describe('stateful functionality', function() {
    const {
      waitAndGetElements,
      dismissResultingDialog,
      isInDocument,
      getPage,
      simpleTest,
      focusTest,
      hoverTest,
      focusAndHoverTest,
      clickTest,
      a11yTest
    } = setupBrowser('#/pages/Stateful File Upload');

    const exampleSelector = '#nx-file-upload-stateful-example .gallery-example-live';

    it('opens the file picker when the select button is clicked and displays the result', async function() {
      const [button] = await waitAndGetElements(`${exampleSelector} .nx-file-upload__select-btn`);

      const [fileChooser] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await dismissResultingDialog(async () => {
        await fileChooser.accept([files.bytes]);
      });

      const [selectedFile] = await waitAndGetElements(`${exampleSelector} .nx-selected-file`),
          textContent = await selectedFile.evaluate(e => e.textContent);

      expect(textContent).toMatch(path.basename(files.bytes));
      expect(textContent).not.toMatch(path.dirname(files.bytes));
      expect(textContent).toMatch('14.0 B');
    });

    it('correctly displays varying file sizes', async function() {
      const [button] = await waitAndGetElements(`${exampleSelector} .nx-file-upload__select-btn`);

      const [fileChooser1] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await dismissResultingDialog(async () => {
        await fileChooser1.accept([files.kilobytes]);
      });

      const [selectedFile1] = await waitAndGetElements(`${exampleSelector} .nx-selected-file`),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      expect(textContent1).toMatch('2.0 kB');

      const [fileChooser2] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await dismissResultingDialog(async () => {
        await fileChooser2.accept([files.megabytes]);
      });

      const [selectedFile2] = await waitAndGetElements(`${exampleSelector} .nx-selected-file`),
          textContent2 = await selectedFile2.evaluate(e => e.textContent);

      expect(textContent2).toMatch('1.5 MB');

      const [fileChooser3] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await dismissResultingDialog(async () => {
        await fileChooser3.accept([files.gigabytes]);
      });

      const [selectedFile3] = await waitAndGetElements(`${exampleSelector} .nx-selected-file`),
          textContent3 = await selectedFile3.evaluate(e => e.textContent);

      expect(textContent3).toMatch('1.2 GB');
    });

    it('removes the selected file when the dismiss button is clicked', async function() {
      const [button] = await waitAndGetElements(`${exampleSelector} .nx-file-upload__select-btn`);

      const [fileChooser] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await dismissResultingDialog(async () => {
        await fileChooser.accept([files.bytes]);
      });

      const [selectedFile, dismissBtn] = await waitAndGetElements(
        `${exampleSelector} .nx-selected-file`,
        `${exampleSelector} .nx-selected-file__dismiss-btn`
      );

      await dismissResultingDialog(async () => {
        await dismissBtn.click();
      });

      const [noFileMessage] = await waitAndGetElements(`${exampleSelector} .nx-file-upload__no-file-message`);

      expect(await isInDocument(selectedFile)).toBe(false);
      expect(await isInDocument(dismissBtn)).toBe(false);
      expect(await isInDocument(noFileMessage)).toBe(true);
    });

    it('unsets the selected file if the user opens the picker again and picks nothing', async function() {
      const [button] = await waitAndGetElements(`${exampleSelector} .nx-file-upload__select-btn`);

      const [fileChooser1] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await dismissResultingDialog(async () => {
        await fileChooser1.accept([files.bytes]);
      });

      const [selectedFile] = await waitAndGetElements(`${exampleSelector} .nx-selected-file`);

      const [fileChooser2] = await Promise.all([getPage().waitForFileChooser(), button.click()]);

      await dismissResultingDialog(async () => {
        // Note that exactly what this looks like IRL seems to be browser-dependent. On my system, in Chrome
        // clicking Cancel in the file picker will cause the file to become unselected. On Firefox however it won't
        await fileChooser2.accept([]);
      });

      const [noFileMessage] = await waitAndGetElements(`${exampleSelector} .nx-file-upload__no-file-message`);

      expect(await isInDocument(selectedFile)).toBe(false);
      expect(await isInDocument(noFileMessage)).toBe(true);
    });
  });

  describe('when disabled', function() {
    const disabledExampleSelector = '#nx-file-upload-disabled-example .gallery-example-live';

    it('looks right', simpleTest(disabledExampleSelector));
  });
});
