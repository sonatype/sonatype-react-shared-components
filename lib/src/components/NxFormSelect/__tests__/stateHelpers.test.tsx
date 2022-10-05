/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import '../../../__testutils__/rtlUtils';

import { initialState, userInput, useNxFormSelectState } from '../stateHelpers';
import { ValidationErrors } from '../../../util/validationUtil';

describe('NxFormSelect stateHelpers', function() {
  describe('initialState', function() {
    it('returns an object that has the specified value as the value property', function() {
      expect(initialState('foo')).toMatchObject({ value: 'foo' });
      expect(initialState('foo', () => 'bad')).toMatchObject({ value: 'foo' });
    });

    it('returns an object that has isPristine set to true', function() {
      expect(initialState('foo')).toMatchObject({ isPristine: true });
      expect(initialState('foo', () => 'bad')).toMatchObject({ isPristine: true });
    });

    it('returns an object that has validationErrors set to null if the validator was not provided', function() {
      expect(initialState('foo')).toMatchObject({ validationErrors: null });
    });

    it('returns an object that has the validationErrors set to the return value of the validator', function() {
      expect(initialState('foo', () => ['bad', 'so bad'])).toMatchObject({ validationErrors: ['bad', 'so bad'] });
    });

    it('passes the value to the validator', function() {
      const validator = jest.fn();

      initialState('asdf', validator);

      expect(validator).toHaveBeenCalledWith('asdf');
    });
  });

  describe('userInput', function() {
    it('returns an object that has the specified value as the value property', function() {
      expect(userInput('foo')).toMatchObject({ value: 'foo' });
      expect(userInput('foo', () => 'bad')).toMatchObject({ value: 'foo' });
    });

    it('returns an object that has isPristine set to false', function() {
      expect(userInput('foo')).toMatchObject({ isPristine: false });
      expect(userInput('foo', () => 'bad')).toMatchObject({ isPristine: false });
    });

    it('returns an object that has validationErrors set to null if the validator was not provided', function() {
      expect(userInput('foo')).toMatchObject({ validationErrors: null });
    });

    it('returns an object that has the validationErrors set to the return value of the validator', function() {
      expect(userInput('foo', () => ['bad', 'so bad'])).toMatchObject({ validationErrors: ['bad', 'so bad'] });
    });

    it('passes the value to the validator', function() {
      const validator = jest.fn();

      userInput('asdf', validator);

      expect(validator).toHaveBeenCalledWith('asdf');
    });
  });

  describe('useNxFormSelectState', function() {
    type FixtureProps = { initialValue: string, validator: (s: string) => ValidationErrors };

    function Fixture({ initialValue, validator }: FixtureProps) {
      const [{ value, isPristine, validationErrors}, setValue] = useNxFormSelectState(initialValue, validator);

      function update() {
        setValue('bar');
      }

      return (
        <>
          <button data-testid="update" onClick={update}>Update</button>
          <span data-testid="value">{value}</span>
          <span data-testid="isPristine">{isPristine.toString()}</span>
          <span data-testid="validationErrors">{JSON.stringify(validationErrors)}</span>
        </>
      );
    }

    it('initially returns the initialValue as the value, true for isPristine, and validation errors according ' +
        'to the validator function', function() {
      const validator = jest.fn().mockReturnValueOnce(null).mockReturnValueOnce(['a', 'b']),
          { getByTestId } = render(<Fixture initialValue="foo" validator={validator} />);

      expect(getByTestId('value')).toHaveTextContent('foo');
      expect(getByTestId('isPristine')).toHaveTextContent('true');
      expect(getByTestId('validationErrors')).toHaveTextContent('null');

      const getByTestIdSecondRender =
          within(render(<Fixture initialValue="bar" validator={validator} />).container).getByTestId;

      expect(getByTestIdSecondRender('value')).toHaveTextContent('bar');
      expect(getByTestIdSecondRender('isPristine')).toHaveTextContent('true');
      expect(getByTestIdSecondRender('validationErrors')).toHaveTextContent('["a","b"]');
    });

    it('returns the new value, isPristine false, and validations errors according to the validator function when ' +
        'the setter function is called', async function() {
      const user = userEvent.setup(),
          validator = jest.fn().mockImplementation(val => val === 'bar' ? 'no bars' : null),
          { getByTestId } = render(<Fixture initialValue="foo" validator={validator} />);

      expect(getByTestId('value')).toHaveTextContent('foo');

      await user.click(getByTestId('update'));

      expect(getByTestId('value')).toHaveTextContent('bar');
      expect(getByTestId('isPristine')).toHaveTextContent('false');
      expect(getByTestId('validationErrors')).toHaveTextContent('"no bars"');
    });
  });
});
