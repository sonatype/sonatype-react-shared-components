/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
const nodeCrypto = require('crypto');

// typescript doesn't like this which is why it's in a JS file
window.crypto = {
  getRandomValues: function(buffer) { return nodeCrypto.randomFillSync(buffer); }
};
