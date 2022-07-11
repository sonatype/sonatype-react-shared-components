/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';

/**
 * Custom PropType that allows values to be string or null but explicitly excludes undefined.
 * Returns `TypeError` if `props[propName]` is anything other than string or null.
 *
 * @param props Object - the Props passed to the component
 * @param propName string - the name of the prop to validate
 * @param componentName string - the name of the component we're validating
 */

/* eslint-disable @typescript-eslint/no-explicit-any */
interface Props {
  [k: string]: any;
}
/* eslint-enable @typescript-eslint/no-explicit-any */

export const requiredNullableString: PropTypes.Validator<string> =
  function requiredNullableStringValidator(props: Props, propName: string, componentName: string): Error | null {
    if (props[propName] === null || typeof props[propName] === 'string') {
      return null;
    }
    const err = `${componentName}: prop "${propName}" must be null or string; received ${typeof props[propName]}`;
    return new TypeError(err);
  };

function requiredPercentNumberValidator(props: Props, propName: string, componentName: string): Error | null {
  const value = props[propName];
  if (typeof value === 'number' && value >= 0 && value <= 100) {
    return null;
  }
  const err = `${componentName}: prop "${propName}" must be a number between 0 and 100 inclusive; received ${value}`;
  return new TypeError(err);
}

export const requiredPercentNumber: PropTypes.Validator<number> = requiredPercentNumberValidator;

export const optionalPercentNumber: PropTypes.Validator<number> =
  function optionalPercentNumberValidator(props: Props, propName: string, componentName: string): Error | null {
    const value = props[propName];
    if (value === undefined || value === null) {
      return null;
    }
    return requiredPercentNumberValidator(props, propName, componentName);
  };
