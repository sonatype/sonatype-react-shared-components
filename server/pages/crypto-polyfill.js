// Polyfill Webcrypto APIs expected by @sonatype/react-shared-components

const nodeCrypto = require('crypto');

global.crypto = {
  getRandomValues(typedArray) {
    nodeCrypto.randomFillSync(typedArray);
  }
};
