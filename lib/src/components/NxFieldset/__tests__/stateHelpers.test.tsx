/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render } from '@testing-library/react';
import { userEvent } from '../../../__testutils__/rtlUtils';

import '../../../__testutils__/rtlUtils';

import {
  radioGroupInitialState,
  radioGroupUserInput,
  useRadioGroupState,
  useCheckboxGroupState,
  useTransferListState,
  checkboxGroupInitialState,
  checkboxGroupUserInput,
  RadioValidator,
  CheckboxValidator,
  CheckboxInitValues,
  CheckboxState,
  TransferListValidator
} from '../stateHelpers';

describe('NxFieldset stateHelpers', function() {
  describe('radioGroupInitialState', function() {
    describe('when called with no arguments', function() {
      it('returns an object with null value, isPristine set to true, and null validationErrors', function() {
        expect(radioGroupInitialState()).toEqual({ value: null, isPristine: true, validationErrors: null });
      });
    });

    describe('when called with one argument', function() {
      it('returns an object with the value, isPristine set to true, and null validationErrors', function() {
        expect(radioGroupInitialState('foo')).toEqual({ value: 'foo', isPristine: true, validationErrors: null });
      });

      it('normalizes an undefined value to null', function() {
        expect(radioGroupInitialState(undefined)).toEqual({ value: null, isPristine: true, validationErrors: null });
      });
    });

    describe('when called with two arguments', function() {
      it('returns an object with the value, isPristine set to true, and validationErrors according to the ' +
         'validator function when given the value', function() {
        const validator = jest.fn().mockReturnValue('qwerty');

        expect(radioGroupInitialState('foo', validator)).toEqual({
          value: 'foo',
          isPristine: true,
          validationErrors: 'qwerty'
        });

        expect(validator).toHaveBeenCalledWith('foo');
      });

      it('calls the validator with null when passed an undefined value', function() {
        const validator = jest.fn().mockReturnValue('qwerty');

        expect(radioGroupInitialState(undefined, validator)).toEqual({
          value: null,
          isPristine: true,
          validationErrors: 'qwerty'
        });

        expect(validator).toHaveBeenCalledWith(null);
      });
    });
  });

  describe('radioGroupUserInput', function() {
    describe('when called with one argument', function() {
      it('returns an object with the value, isPristine set to false, and null validationErrors', function() {
        expect(radioGroupUserInput('foo')).toEqual({ value: 'foo', isPristine: false, validationErrors: null });
      });
    });

    describe('when called with two arguments', function() {
      it('returns an object with the value, isPristine set to false, and validationErrors according to the ' +
         'validator function when given the value', function() {
        const validator = jest.fn().mockReturnValue('qwerty');

        expect(radioGroupUserInput('foo', validator)).toEqual({
          value: 'foo',
          isPristine: false,
          validationErrors: 'qwerty'
        });

        expect(validator).toHaveBeenCalledWith('foo');

        expect(radioGroupUserInput(null, validator)).toEqual({
          value: null,
          isPristine: false,
          validationErrors: 'qwerty'
        });

        expect(validator).toHaveBeenCalledWith(null);
      });
    });
  });

  describe('checkboxGroupInitialState', function() {
    describe('when called with one argument', function() {
      it('returns an object with the values, isPristine set to true, and null validationErrors', function() {
        expect(checkboxGroupInitialState(['foo', 'bar'])).toEqual({
          values: ['foo', 'bar'],
          isPristine: true,
          validationErrors: null
        });

        expect(checkboxGroupInitialState([])).toEqual({ values: [], isPristine: true, validationErrors: null });
      });
    });

    describe('when called with two arguments', function() {
      it('returns an object with the values, isPristine set to true, and validationErrors according to the ' +
         'validator function when given the value', function() {
        const validator = jest.fn().mockReturnValue('qwerty');

        expect(checkboxGroupInitialState(['foo', 'bar'], validator)).toEqual({
          values: ['foo', 'bar'],
          isPristine: true,
          validationErrors: 'qwerty'
        });

        expect(validator).toHaveBeenCalledWith(['foo', 'bar']);

        expect(checkboxGroupInitialState([], validator)).toEqual({
          values: [],
          isPristine: true,
          validationErrors: 'qwerty'
        });

        expect(validator).toHaveBeenCalledWith([]);
      });

    });
  });

  describe('checkboxGroupUserInput', function() {
    describe('when the toggledValue is not already in the previous CheckboxStateProps', function() {
      describe('when called with two arguments', function() {
        it('returns an object with the values including the toggledValue, isPristine set to false, and null ' +
          'validationErrors', function() {
          const retval = checkboxGroupUserInput(
              { values: ['foo', 'bar'], isPristine: true, validationErrors: 'asdfa' },
              'baz'
          );

          expect(retval.isPristine).toBe(false);
          expect(retval.validationErrors).toBe(null);

          // note: order doesn't matter
          expect(new Set(retval.values)).toEqual(new Set(['foo', 'bar', 'baz']));
        });
      });

      describe('when called with three arguments', function() {
        it('returns an object with the values including the toggledValue, isPristine set to false, and ' +
           'validationErrors according to the validator function when given the new values', function() {
          const validator = jest.fn().mockReturnValue('qwerty');

          const retval = checkboxGroupUserInput(
              { values: ['foo', 'bar'], isPristine: true, validationErrors: 'asdfa' },
              'baz',
              validator
          );

          expect(retval.isPristine).toBe(false);
          expect(retval.validationErrors).toBe('qwerty');
          expect(new Set(retval.values)).toEqual(new Set(['foo', 'bar', 'baz']));

          expect(new Set(validator.mock.calls[0][0])).toEqual(new Set(['foo', 'bar', 'baz']));
        });
      });
    });

    describe('when the toggledValue is already in the previous CheckboxStateProps', function() {
      describe('when called with two arguments', function() {
        it('returns an object with the values excluding the toggledValue, isPristine set to false, and null ' +
          'validationErrors', function() {
          const retval = checkboxGroupUserInput(
              { values: ['foo', 'bar'], isPristine: true, validationErrors: 'asdfa' },
              'bar'
          );

          expect(retval.isPristine).toBe(false);
          expect(retval.validationErrors).toBe(null);
          expect(retval.values).toEqual(['foo']);
        });
      });

      describe('when called with three arguments', function() {
        it('returns an object with the values including the toggledValue, isPristine set to false, and ' +
           'validationErrors according to the validator function when given the new values', function() {
          const validator = jest.fn().mockReturnValue('qwerty');

          const retval = checkboxGroupUserInput(
              { values: ['foo', 'bar'], isPristine: true, validationErrors: 'asdfa' },
              'bar',
              validator
          );

          expect(retval.isPristine).toBe(false);
          expect(retval.validationErrors).toBe('qwerty');
          expect(retval.values).toEqual(['foo']);

          expect(validator).toHaveBeenCalledWith(['foo']);
        });
      });
    });
  });

  describe('useRadioGroupState', function() {
    interface FixtureProps {
      initialValue?: string;
      validator?: RadioValidator;
    }

    function Fixture({ initialValue, validator }: FixtureProps) {
      const [state, setter] = useRadioGroupState(initialValue, validator);

      return (
        <button onClick={() => setter('asdf')}>
          <span data-testid="value">{state.value ?? 'null'}</span>
          <span data-testid="isPristine">{state.isPristine.toString()}</span>
          <span data-testid="validationErrors">{JSON.stringify(state.validationErrors)}</span>
        </button>
      );
    }

    describe('when called with zero arguments', function() {
      it('intially returns a state object with the null value, isPristine set to true, and null validation errors',
          function() {
            const component = render(<Fixture />);

            expect(component.queryByTestId('value')).toHaveTextContent('null');
            expect(component.queryByTestId('isPristine')).toHaveTextContent('true');
            expect(component.queryByTestId('validationErrors')).toHaveTextContent('null');
          }
      );
    });

    describe('when called with one argument', function() {
      it('intially returns a state object with the given value, isPristine set to true, and null validation errors',
          function() {
            const component = render(<Fixture initialValue="foo" />);

            expect(component.queryByTestId('value')).toHaveTextContent('foo');
            expect(component.queryByTestId('isPristine')).toHaveTextContent('true');
            expect(component.queryByTestId('validationErrors')).toHaveTextContent('null');
          }
      );
    });

    describe('when called with two arguments', function() {
      it('intially returns a state object with the given value, isPristine set to true, and validation errors ' +
          'according to the validator function', function() {
        const validator = jest.fn().mockReturnValue('qwerty'),
            component = render(<Fixture initialValue="foo" validator={validator} />);

        expect(component.queryByTestId('value')).toHaveTextContent('foo');
        expect(component.queryByTestId('isPristine')).toHaveTextContent('true');
        expect(component.queryByTestId('validationErrors')).toHaveTextContent('qwerty');
        expect(validator).toHaveBeenCalledWith('foo');
      });
    });

    describe('when the setter function is called', function() {
      describe('when a validator is not specified', function() {
        it('updates the state object to the new value, isPristine false, and null validation errors', async function() {
          const user = userEvent.setup(),
              component = render(<Fixture initialValue="foo" />);

          await user.click(component.container.firstElementChild!);

          expect(component.queryByTestId('value')).toHaveTextContent('asdf');
          expect(component.queryByTestId('isPristine')).toHaveTextContent('false');
          expect(component.queryByTestId('validationErrors')).toHaveTextContent('null');
        });
      });

      describe('when a validator is specified', function() {
        it('updates the state object to the new value, isPristine false, and validation errors according to ' +
            'the validator', async function() {
          const user = userEvent.setup(),
              validator = jest.fn().mockReturnValue('qwerty'),
              component = render(<Fixture initialValue="foo" validator={validator} />);

          await user.click(component.container.firstElementChild!);

          expect(component.queryByTestId('value')).toHaveTextContent('asdf');
          expect(component.queryByTestId('isPristine')).toHaveTextContent('false');
          expect(component.queryByTestId('validationErrors')).toHaveTextContent('"qwerty"');
          expect(validator).toHaveBeenCalledWith('foo');
          expect(validator).toHaveBeenCalledWith('asdf');
        });
      });
    });
  });

  describe('useCheckboxGroupState', function() {
    interface FixtureProps<K extends string> {
      initialValues: CheckboxInitValues<K>;
      validator?: CheckboxValidator;
    }

    function Fixture<K extends string>({ initialValues, validator }: FixtureProps<K>) {
      const { states, isPristine, validationErrors } = useCheckboxGroupState(initialValues, validator);

      return (
        <>
          <span data-testid="isPristine">{isPristine.toString()}</span>
          <span data-testid="validationErrors">{JSON.stringify(validationErrors)}</span>
          { Object.entries<CheckboxState>(states).map(([name, [value, toggler]]) => (
            <button key={name} data-testid={name} onClick={toggler}>
              <span data-testid="value">{value.toString()}</span>
            </button>
          ))}
        </>
      );
    }

    describe('when called with one argument', function() {
      it('intially returns an object with keys matching the initialValue and values being tuples containing ' +
          'the corresponding initialValue and a toggle function, along with a single top level isPristine set ' +
          'to true and validationErrors set to null', function() {
        const component = render(<Fixture initialValues={{ foo: true, bar: false }} />);

        expect(component.queryByTestId('foo')).toHaveTextContent('true');
        expect(component.queryByTestId('bar')).toHaveTextContent('false');
        expect(component.queryByTestId('isPristine')).toHaveTextContent('true');
        expect(component.queryByTestId('validationErrors')).toHaveTextContent('null');
      });
    });

    describe('when called with two arguments', function() {
      it('intially returns an object with keys matching the initialValue and values being tuples containing ' +
          'the corresponding initialValue and a toggle function, along with a single top level isPristine set ' +
          'to true and validationErrors set according to the validator function', function() {
        const validator = jest.fn().mockReturnValue('qwerty'),
            component = render(<Fixture initialValues={{ foo: true, bar: false }} validator={validator} />);

        expect(component.queryByTestId('foo')).toHaveTextContent('true');
        expect(component.queryByTestId('bar')).toHaveTextContent('false');
        expect(component.queryByTestId('isPristine')).toHaveTextContent('true');
        expect(component.queryByTestId('validationErrors')).toHaveTextContent('qwerty');
        expect(validator).toHaveBeenCalledWith(['foo']);
      });
    });

    describe('when a toggler function is called', function() {
      describe('when a validator is not specified', function() {
        it('updates the state object with the opposite value for the corresponding name, isPristine false, ' +
            'and null validation errors', async function() {
          const user = userEvent.setup(),
              component = render(<Fixture initialValues={{ foo: true, bar: false }} />);

          await user.click(component.queryByTestId('foo')!);
          expect(component.queryByTestId('foo')).toHaveTextContent('false');
          expect(component.queryByTestId('bar')).toHaveTextContent('false');
          expect(component.queryByTestId('isPristine')).toHaveTextContent('false');
          expect(component.queryByTestId('validationErrors')).toHaveTextContent('null');

          await user.click(component.queryByTestId('bar')!);
          expect(component.queryByTestId('foo')).toHaveTextContent('false');
          expect(component.queryByTestId('bar')).toHaveTextContent('true');
          expect(component.queryByTestId('isPristine')).toHaveTextContent('false');
          expect(component.queryByTestId('validationErrors')).toHaveTextContent('null');
        });
      });

      describe('when a validator is specified', function() {
        it('updates the state object with the opposite value for the corresponding name, isPristine false, ' +
            'and validation errors according to the validator function', async function() {
          const user = userEvent.setup(),
              validator = jest.fn()
                  .mockImplementation((values: string[]) => values.includes('bar') ? 'cannot bar' : null),
              component = render(<Fixture initialValues={{ foo: true, bar: false }} validator={validator} />);

          await user.click(component.queryByTestId('foo')!);
          expect(component.queryByTestId('foo')).toHaveTextContent('false');
          expect(component.queryByTestId('bar')).toHaveTextContent('false');
          expect(component.queryByTestId('isPristine')).toHaveTextContent('false');
          expect(component.queryByTestId('validationErrors')).toHaveTextContent('null');
          expect(validator).toHaveBeenCalledWith([]);

          await user.click(component.queryByTestId('bar')!);
          expect(component.queryByTestId('foo')).toHaveTextContent('false');
          expect(component.queryByTestId('bar')).toHaveTextContent('true');
          expect(component.queryByTestId('isPristine')).toHaveTextContent('false');
          expect(component.queryByTestId('validationErrors')).toHaveTextContent('cannot bar');
          expect(validator).toHaveBeenCalledWith(['bar']);

          await user.click(component.queryByTestId('foo')!);
          expect(component.queryByTestId('foo')).toHaveTextContent('true');
          expect(component.queryByTestId('bar')).toHaveTextContent('true');
          expect(component.queryByTestId('isPristine')).toHaveTextContent('false');
          expect(component.queryByTestId('validationErrors')).toHaveTextContent('cannot bar');
          expect(new Set(validator.mock.calls[3][0])).toEqual(new Set(['foo', 'bar']));
        });
      });
    });
  });

  describe('useTransferListState', function() {
    interface FixtureProps<K> {
      initialValue: K;
      validator?: TransferListValidator<K>;
    }

    function Fixture({ initialValue, validator }: FixtureProps<number[]>) {
      const {
        isPristine,
        validationErrors,
        state: [selectedItems, setSelectedItems]
      } = useTransferListState<number[]>(initialValue, validator);

      return (
        <>
          <span data-testid="isPristine">{isPristine.toString()}</span>
          <span data-testid="validationErrors">{JSON.stringify(validationErrors)}</span>
          <span data-testid="selectedItems">{JSON.stringify(selectedItems)}</span>
          <button data-testid="triggerSetSelectedItems0" onClick={() => setSelectedItems([1, 2])}></button>
          <button data-testid="triggerSetSelectedItems1" onClick={() => setSelectedItems([1, 2, 3])}></button>
          <button data-testid="triggerSetSelectedItems2" onClick={() => setSelectedItems([1, 2, 3, 4])}></button>
        </>
      );
    }

    describe('when called with one argument', function() {
      it('intially returns an object with state value equal to the given initialValue, ' +
          'isPristine is set to true and validationErrors set to null', function() {
        const component = render(<Fixture initialValue={[1]} />);

        expect(component.queryByTestId('selectedItems')).toHaveTextContent('[1]');
        expect(component.queryByTestId('isPristine')).toHaveTextContent('true');
        expect(component.queryByTestId('validationErrors')).toHaveTextContent('null');
      });
    });

    describe('when called with two arguments', function() {
      it('intially returns the selectedItems to the initialValue, isPristine to true, ' +
         'and sets validationErrors value when it is specified', function() {
        const validator = jest.fn().mockReturnValue('qwerty'),
            component = render(<Fixture initialValue={[1]} validator={validator} />);

        expect(component.queryByTestId('selectedItems')).toHaveTextContent('[1]');
        expect(component.queryByTestId('isPristine')).toHaveTextContent('true');
        expect(component.queryByTestId('validationErrors')).toHaveTextContent('qwerty');
      });
    });

    describe('when setSelectedItems is triggered', function() {
      it('intially returns an object with state value equal to the initialValue, ' +
         'isPristine is true, then sets it to the setSelectedItems value, isPristine to false, ' +
         'when it is triggered', async function() {
        const user = userEvent.setup(),
            component = render(<Fixture initialValue={[1]} />);

        expect(component.queryByTestId('selectedItems')).toHaveTextContent('[1]');
        expect(component.queryByTestId('isPristine')).toHaveTextContent('true');
        expect(component.queryByTestId('validationErrors')).toHaveTextContent('null');

        await user.click(component.queryByTestId('triggerSetSelectedItems1')!);

        expect(component.queryByTestId('selectedItems')).toHaveTextContent('[1,2,3]');
        expect(component.queryByTestId('isPristine')).toHaveTextContent('false');
        expect(component.queryByTestId('validationErrors')).toHaveTextContent('null');
      });
    });

    describe('when a validator is specified', function() {
      it('updates the state object with the selectedItems value, isPristine false, ' +
         'and validation errors according to the validator function', async function() {
        const user = userEvent.setup(),
            validator = jest.fn()
                .mockImplementation((values: number[]) => values.includes(3) ? '3 is not allowed' : null),
            component = render(<Fixture initialValue={[1]} validator={validator} />);

        await user.click(component.queryByTestId('triggerSetSelectedItems0')!);

        expect(component.queryByTestId('selectedItems')).toHaveTextContent('[1,2]');
        expect(component.queryByTestId('isPristine')).toHaveTextContent('false');
        expect(component.queryByTestId('validationErrors')).toHaveTextContent('null');
        expect(validator).toHaveBeenCalledWith([1, 2]);

        await user.click(component.queryByTestId('triggerSetSelectedItems1')!);

        expect(component.queryByTestId('selectedItems')).toHaveTextContent('[1,2,3]');
        expect(component.queryByTestId('isPristine')).toHaveTextContent('false');
        expect(component.queryByTestId('validationErrors')).toHaveTextContent('3 is not allowed');

        expect(validator).toHaveBeenCalledWith([1, 2, 3]);

        await user.click(component.queryByTestId('triggerSetSelectedItems2')!);

        expect(component.queryByTestId('selectedItems')).toHaveTextContent('[1,2,3,4]');
        expect(component.queryByTestId('isPristine')).toHaveTextContent('false');
        expect(component.queryByTestId('validationErrors')).toHaveTextContent('3 is not allowed');

        expect(validator).toHaveBeenCalledWith([1, 2, 3, 4]);
      });
    });
  });
});
