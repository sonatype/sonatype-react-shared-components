import { TextEncoder, TextDecoder } from 'util';
import $JSDOMEnvironment from 'jest-environment-jsdom';
// import type { JestEnvironmentConfig, EnvironmentContext } from '@jest/environment';

// https://github.com/jsdom/jsdom/issues/2524
// TextEncoder/ TextDecoder is not included, and needs to be directly imported
export default class JSDOMEnvironment extends $JSDOMEnvironment {
  constructor(...args) {
    const { global } = super(...args);
    if (!global.TextEncoder) {
      global.TextEncoder = TextEncoder;
    }
    if (!global.TextDecoder) {
      global.TextDecoder = TextDecoder;
    }
  }
}
