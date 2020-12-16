/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { initialState, userInput } from '../stateHelpers';

describe('NxTextInput state helpers', function() {
  describe('initialState', function() {
    it('produces a StateProps with isPristine set to true', function() {
      expect(initialState('').isPristine).toBe(true);
    });

    it('produces a StateProps with the specified value', function() {
      expect(initialState('foo').value).toBe('foo');
    });

    it('produces a StateProps with validationErrors from the given validator', function() {
      const validator = () => 'Invalid';

      expect(initialState('').validationErrors).toBeNull();
      expect(initialState('', validator).validationErrors).toBe('Invalid');
    });

    it('produces a StateProps with a trimmedValue resulting from trimming the specified value', function() {
      expect(initialState('foo').trimmedValue).toBe('foo');
      expect(initialState('  foo').trimmedValue).toBe('foo');
      expect(initialState('foo  ').trimmedValue).toBe('foo');
      expect(initialState('\n\tfoo \r\f \u00a0').trimmedValue).toBe('foo');
      expect(initialState('\n\t \f \u00a0').trimmedValue).toBe('');
    });
  });

  describe('userInput', function() {
    it('produces a StateProps with isPristine set to false', function() {
      expect(userInput(null, '').isPristine).toBe(false);
    });

    it('produces a StateProps with the specified value', function() {
      expect(userInput(null, 'foo').value).toBe('foo');
    });

    it('produces a StateProps with a trimmedValue resulting from trimming the specified value', function() {
      expect(userInput(null, 'foo').trimmedValue).toBe('foo');
      expect(userInput(null, '  foo').trimmedValue).toBe('foo');
      expect(userInput(null, 'foo woo ').trimmedValue).toBe('foo woo');
      expect(userInput(null, '\n\tfoo \r\f \u00a0').trimmedValue).toBe('foo');
      expect(userInput(null, '\n\t \f \u00a0').trimmedValue).toBe('');
    });

    it('produces a StateProps with no validationErrors when the validator is not specified', function() {
      expect(userInput(null, 'foo').validationErrors).toBeNull();
    });

    it('produces a StateProp with the validationErrors determined by running the trimmed input through the validator',
        function() {
          const validationErrors = ['foo isn\'t bar', 'no foo allowed'],
              validator = jest.fn().mockReturnValue(validationErrors);

          expect(userInput(validator, 'foo   ').validationErrors).toEqual(validationErrors);
          expect(validator).toHaveBeenCalledWith('foo');
        }
    );

    it('can be partially applied to one argument at a time', function() {
      const validationErrors = ['foo isn\'t bar', 'no foo allowed'],
          validator = jest.fn().mockReturnValue(validationErrors);

      expect(userInput(validator)('foo')).toEqual({
        value: 'foo',
        trimmedValue: 'foo',
        isPristine: false,
        validationErrors
      });
    });
  });
});
