/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {
  combineValidationErrors,
  hasValidationErrors,
  getFirstValidationError,
  combineValidators
} from '../validationUtil';

describe('validationUtil', function() {
  describe('hasValidationErrors', function() {
    it('returns false for undefined or null', function() {
      expect(hasValidationErrors(undefined)).toBe(false);
      expect(hasValidationErrors(null)).toBe(false);
    });

    it('returns false for an empty array', function() {
      expect(hasValidationErrors([])).toBe(false);
    });

    it('returns true for an array with items in it', function() {
      expect(hasValidationErrors(['this is a really big problem'])).toBe(true);
    });

    it('returns true for any string even empty ones', function() {
      expect(hasValidationErrors('')).toBe(true);
      expect(hasValidationErrors('this is a really big problem')).toBe(true);
    });

    it('returns true iff any of its arguments is or contains a string', function() {
      expect(hasValidationErrors(null, undefined, [])).toBe(false);
      expect(hasValidationErrors('foo', [], undefined)).toBe(true);
      expect(hasValidationErrors('foo', ['bar'])).toBe(true);
      expect(hasValidationErrors(['foo', 'bar'], ['asdf'], [])).toBe(true);
    });

  });

  describe('getFirstValidationError', function() {
    it('returns null for undefined or null input', function() {
      expect(getFirstValidationError(undefined)).toBe(null);
      expect(getFirstValidationError(null)).toBe(null);
    });

    it('returns null for an empty array', function() {
      expect(getFirstValidationError([])).toBe(null);
    });

    it('returns the first item for a non-empty array', function() {
      expect(getFirstValidationError(['foo', 'bar'])).toBe('foo');
    });

    it('returns the input if it is a string', function() {
      expect(getFirstValidationError('foo')).toBe('foo');
    });
  });

  describe('combineValidationErrors', function() {
    it('returns an empty array if given all valid ValidationErrors', function() {
      expect(combineValidationErrors(null, [])).toEqual([]);
      expect(combineValidationErrors()).toEqual([]);
      expect(combineValidationErrors([])).toEqual([]);
      expect(combineValidationErrors([], [])).toEqual([]);
      expect(combineValidationErrors(null)).toEqual([]);
    });

    it('combines all validation errors into an array', function() {
      expect(combineValidationErrors(null, ['foo'])).toEqual(['foo']);
      expect(combineValidationErrors('foo')).toEqual(['foo']);
      expect(combineValidationErrors(['foo'])).toEqual(['foo']);
      expect(combineValidationErrors(['foo'], ['bar'], [], null)).toEqual(['foo', 'bar']);
      expect(combineValidationErrors(['foo', 'bar'], ['baz'])).toEqual(['foo', 'bar', 'baz']);
    });
  });

  describe('combineValidators', function() {
    it('returns a function that combines the results of all the validators', function() {
      const validator1 = (val: string) => val === 'foo' ? 'foo is not allowed' : null;
      const validator2 = (val: string) => val === 'bar' ? 'bar is not allowed' : null;
      const combined = combineValidators(validator1, validator2);

      expect(combined('foo')).toEqual(['foo is not allowed']);
      expect(combined('bar')).toEqual(['bar is not allowed']);
      expect(combined('baz')).toEqual([]);
    });
  });
});
