/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {requiredNullableString, requiredPercentNumber, optionalPercentNumber} from '../customPropTypes';

describe('Custom PropTypes', function() {
  describe('requiredNullableString', function() {
    const componentName = 'Irrelevant',
        propName = 'nullableId';

    it('should return null if null is supplied', function() {
      const props = { nullableId: null },
          retVal = requiredNullableString(props, propName, componentName, '', '');

      expect(retVal).toBeNull();
    });

    it('should return null if a string is supplied', function() {
      const props = { nullableId: 'someId' },
          retVal = requiredNullableString(props, propName, componentName, '', '');

      expect(retVal).toBeNull();
    });

    it('should return an error if the prop is undefined', function() {
      const props = { nullableId: undefined },
          retVal = requiredNullableString(props, propName, componentName, '', ''),
          err = `${componentName}: prop "${propName}" must be null or string; received ${typeof props[propName]}`;

      expect(retVal).toBeInstanceOf(TypeError);
      expect(retVal).toEqual(new TypeError(err));
    });

    it('should return an error if any other type of value is supplied', function() {
      const props = { nullableId: 666 },
          retVal = requiredNullableString(props, propName, componentName, '', ''),
          err = `${componentName}: prop "${propName}" must be null or string; received ${typeof props[propName]}`;

      expect(retVal).toBeInstanceOf(TypeError);
      expect(retVal).toEqual(new TypeError(err));
    });
  });

  describe('requiredPercentNumber', function() {
    const componentName = 'Irrelevant',
        propName = 'requiredPercent';

    it('should return null if 0 is supplied', function() {
      const props = { requiredPercent: 0 },
          retVal = requiredPercentNumber(props, propName, componentName, '', '');

      expect(retVal).toBeNull();
    });

    it('should return null if 100 is supplied', function() {
      const props = { requiredPercent: 100 },
          retVal = requiredPercentNumber(props, propName, componentName, '', '');

      expect(retVal).toBeNull();
    });

    it('should return null if a number between 0 and 100 is supplied', function() {
      const props = { requiredPercent: 50 },
          retVal = requiredPercentNumber(props, propName, componentName, '', '');

      expect(retVal).toBeNull();
    });

    it('should return an error if any other type of value is supplied', function() {
      const props = { requiredPercent: '50' },
          retVal = requiredPercentNumber(props, propName, componentName, '', ''),
          err = `${componentName}: prop "${propName}" must be a number between 0 and 100 inclusive; received ` +
              props[propName];

      expect(retVal).toBeInstanceOf(TypeError);
      expect(retVal).toEqual(new TypeError(err));
    });

    it('should return an error if a value less than 0 is supplied', function() {
      const props = { requiredPercent: -1 },
          retVal = requiredPercentNumber(props, propName, componentName, '', ''),
          err = `${componentName}: prop "${propName}" must be a number between 0 and 100 inclusive; received ` +
              props[propName];

      expect(retVal).toBeInstanceOf(TypeError);
      expect(retVal).toEqual(new TypeError(err));
    });

    it('should return an error if a value greater than 100 is supplied', function() {
      const props = { requiredPercent: 101 },
          retVal = requiredPercentNumber(props, propName, componentName, '', ''),
          err = `${componentName}: prop "${propName}" must be a number between 0 and 100 inclusive; received ` +
              props[propName];

      expect(retVal).toBeInstanceOf(TypeError);
      expect(retVal).toEqual(new TypeError(err));
    });
  });

  describe('optionalPercentNumber', function() {
    const componentName = 'Irrelevant',
        propName = 'optionalPercent';

    it('should return null if undefined is supplied', function() {
      const props = { },
          retVal = optionalPercentNumber(props, propName, componentName, '', '');

      expect(retVal).toBeNull();
    });

    it('should return null if null is supplied', function() {
      const props = { optionalPercent: null },
          retVal = optionalPercentNumber(props, propName, componentName, '', '');

      expect(retVal).toBeNull();
    });
  });
});
