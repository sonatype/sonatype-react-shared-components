/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ValidationErrors } from '../components/NxTextInput/types';
import { reject, isNil, flatten } from 'ramda';

export { ValidationErrors };

/**
 * @return whether this ValidationErrors object contains an error
 */
export const hasValidationErrors = (validationErrors: ValidationErrors | undefined) => {
  if (validationErrors == null) {
    return false;
  }
  else if (Array.isArray(validationErrors)) {
    return validationErrors.length !== 0;
  }
  else {
    return true;
  }
};

/**
 * @return The first error string contained within this ValidationErrors object, or null if there isn't one
 */
export function getFirstValidationError(validationErrors: ValidationErrors | undefined): string | null {
  if (validationErrors == null) {
    return null;
  }
  else if (Array.isArray(validationErrors)) {
    if (validationErrors.length) {
      return validationErrors[0];
    }
    else {
      return null;
    }
  }
  else {
    return validationErrors;
  }
}

export function combineValidationErrors(...validationErrors: (ValidationErrors | undefined)[]): ValidationErrors {
  return reject(isNil, flatten(validationErrors)) as ValidationErrors;
}
