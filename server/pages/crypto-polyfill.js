// Polyfill Webcrypto APIs expected by @sonatype/react-shared-components

// Without this conditional, webpack will polyfill the nodejs crypto library on the client using crypto-browserify.
// This pulls in a huge amount of dependency code that is 100% unneeded
if (!process.browser) {
  const nodeCrypto = require('crypto');

  global.crypto = {
    getRandomValues(typedArray) {
      nodeCrypto.randomFillSync(typedArray);
    }
  };
}
