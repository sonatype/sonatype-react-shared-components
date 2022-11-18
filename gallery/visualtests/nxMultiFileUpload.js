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
    getPage,
    waitAndGetElements,
    isInDocument,
    simpleTest
  } = setupBrowser('#/pages/Multiple File Upload');

  const complexExampleSelector = '#nx-multi-file-upload-complex-example .gallery-example-live';

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

  describe('when a file is selected', function() {

    it('testing uploadFiles', async function() {
      const [input] = await waitAndGetElements(`${complexExampleSelector} input[multiple]`);

      // successful - uploadFile uploads the two separate files with their own info
      const file = [files.gigabytes, files.kilobytes];
      await input.uploadFile(...file);
      simpleTest(complexExampleSelector);
    });
  });

  describe('functionality', function() {

    it('testing fileChooser for multiple files uploaded', async function() {
      const [button] = await waitAndGetElements(`${complexExampleSelector} .nx-multi-file-upload__select-btn`);

      // make sure input that selects multiple files is present
      const [input] = await waitAndGetElements(`${complexExampleSelector} input[multiple]`);
      expect(await isInDocument(input)).toBe(true);

      const [fileChooser] = await Promise.all([
        getPage().waitForFileChooser(), button.click()]);

      // check that FileChooser can accept multiple files
      expect(await fileChooser.isMultiple()).toBe(true);

      await fileChooser.accept([files.kilobytes, files.gigabytes]);

      const [selectedFile1] = (await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(1)`)),
          textContent1 = await selectedFile1.evaluate(e => e.textContent);

      const [selectedFile2] = (await waitAndGetElements(`${complexExampleSelector} .nx-selected-file:nth-child(2)`)),
          textContent2 = await selectedFile1.evaluate(e => e.textContent);

      expect(await isInDocument(selectedFile1)).toBe(true);
      expect(await isInDocument(selectedFile2)).toBe(true);
      expect(textContent1).toMatch('2.0 kB');
      // current this receives files.kilobytes text, not 1.2GB
      expect(textContent2).toMatch('1.2 GB');
    });
  });
});
