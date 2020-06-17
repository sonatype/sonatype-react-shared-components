/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {requiredNullableString} from '../customPropTypes';

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
});
