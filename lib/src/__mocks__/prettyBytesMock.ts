/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { identity } from 'ramda';

/**
 * pretty-bytes' package.json setup appears to trigger some sort of bug in the way jest, ts-jest, or typescript
 * import the pretty-bytes/index.js file.  Adding pretty-bytes to the `transformIgnorePatterns` in the jest.config.js
 * does not cause it to be transformed.  I have found that if the `"type": "module"` line were removed from
 * pretty-bytes' package.json, the transform would be applied and the file could be used. Without a way to really
 * make that modification however, the best option is just to mock the library. None of the unit tests rely on it anyway
 * since it is only used by NxFileUpload once a file is uploaded, and that flow already doesn't work in unit tests.
 */
const prettyBytes = identity;
export default prettyBytes;
