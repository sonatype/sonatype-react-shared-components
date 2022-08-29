/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render } from '@testing-library/react';
import * as rtlUtils from '../../../__testutils__/rtlUtils';

import userEvent from '@testing-library/user-event';

import NxCombobox, {Props} from '../NxCombobox';

describe('NxCombobox', function() {
  const minimalProps: Props<string | number> = {
        value: '',
        onChange: () => {},
        onSearch: () => {},
        matches: []
      },
      rtlRender = rtlUtils.rtlRender(NxCombobox, minimalProps);

  //mock scrollIntoView function using jest
  window.HTMLElement.prototype.scrollIntoView = jest.fn();

  it('renders a div with the nx-combobox class and the specified attributes', function() {
    const { container } = rtlRender({ title: 'bar' }),
        component = container.firstElementChild!;

    expect(component.tagName).toBe('DIV');
    expect(component).toHaveClass('nx-combobox');
    expect(component).toHaveAttribute('title', 'bar');
  });

  it('adds the ref to the div', function() {
    const ref = React.createRef<HTMLDivElement>(),
        domNode = render(<NxCombobox { ...minimalProps } ref={ref} />).container.firstElementChild!;

    expect(ref.current).toBeDefined();
    expect(ref.current).toBe(domNode);
  });

  it('renders an input child with the combobox role', function() {
    const { getByRole } = rtlRender(),
        inputElement = getByRole('combobox');

    expect(inputElement.tagName).toBe('INPUT');
    expect(inputElement).toHaveAttribute('role', 'combobox');
  });

  it('sets the value as the value of the input', function() {
    const { getByRole } = rtlRender({ value: 'foo' }),
        inputElement = getByRole('combobox');

    expect(inputElement).toHaveValue('foo');
  });

  it('sets aria-autocomplete on the input to list as default and to both if `autoComplete` prop is set to true',
      function() {
        const { getByRole, rerender } = rtlRender(),
            inputElement = getByRole('combobox');

        expect(inputElement).toHaveAttribute('aria-autocomplete', 'list');

        rerender(<NxCombobox {...minimalProps} autoComplete={true} />);

        expect(inputElement).toHaveAttribute('aria-autocomplete', 'both');
      });

  it('sets a completion string of the selected suggestion from matches when `autoComplete` prop is set to true',
      async function() {
        const onChange = jest.fn(),
            { getByRole } = rtlRender({ autoComplete: true,
              matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }],
              onChange}),
            inputElement = getByRole('combobox');

        inputElement.focus();
        await userEvent.type(inputElement, 'f');
        expect(onChange).toBeCalledWith('Foo');
      });

  it('sets aria-expanded on the input to true when the dropdown displayed which has aria-hidden set to false',
      async function() {
        const { getByRole } = rtlRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
            inputElement = getByRole('combobox'),
            dropdownElement = getByRole('listbox', { hidden: true });

        expect(inputElement).toHaveAttribute('aria-expanded', 'false');
        expect(dropdownElement).toHaveAttribute('aria-hidden', 'true');
        await userEvent.type(inputElement, 'f');
        expect(inputElement).toHaveAttribute('aria-expanded', 'true');
        expect(dropdownElement).toHaveAttribute('aria-hidden', 'false');
      });

  it('calls onChange whenver the input\'s onChange event fires', async function() {
    const onChange = jest.fn(),
        { getByRole } = rtlRender({ onChange }),
        inputElement = getByRole('combobox');

    expect(onChange).not.toHaveBeenCalled();
    await userEvent.type(inputElement, 'a');
    expect(onChange).toHaveBeenCalledWith('a');
  });

  it('calls onSearch whenver the input\'s onChange event fires with a value that differs after trimming, ' +
    'passing the trimmed value', async function() {
    const onSearch = jest.fn(),
        { getByRole } = rtlRender({ value: 'foo', onSearch }),
        inputElement = getByRole('combobox');

    expect(onSearch).not.toHaveBeenCalled();
    await userEvent.type(inputElement, ' ');
    expect(onSearch).not.toHaveBeenCalled();
    await userEvent.type(inputElement, 'f');
    expect(onSearch).toHaveBeenCalledWith('foof');
  });

  it('adds the nx-text-input--long class to the div if set', function() {
    expect(rtlRender().container.querySelector('.nx-combobox')).not.toHaveClass('nx-text-input--long');
    expect(rtlRender({ className: 'nx-text-input--long' }).container.querySelector('.nx-combobox'))
        .toHaveClass('nx-text-input--long');
  });

  it('adds the nx-text-input--short class to the div if set', function() {
    expect(rtlRender().container.querySelector('.nx-combobox')).not.toHaveClass('nx-text-input--short');
    expect(rtlRender({ className: 'nx-text-input--short' }).container.querySelector('.nx-combobox'))
        .toHaveClass('nx-text-input--short');
  });

  it('passes the disabled prop to the input and buttons', function() {
    const { getByRole, rerender } = rtlRender(),
        inputElement = getByRole('combobox');

    expect(inputElement).toHaveProperty('disabled', false);

    rerender(<NxCombobox {...minimalProps} disabled={undefined} />);
    expect(inputElement).toHaveProperty('disabled', false);

    rerender(<NxCombobox {...minimalProps} disabled={false} />);
    expect(inputElement).toHaveProperty('disabled', false);

    rerender(<NxCombobox {...minimalProps} matches={[{ id: '1', displayName: 'Foo' }]} disabled={false} />);
    expect(getByRole('option', { hidden: true })).toHaveProperty('disabled', false);

    rerender(<NxCombobox {...minimalProps} matches={[{ id: '1', displayName: 'Foo' }]} disabled={true} />);
    expect(getByRole('option', { hidden: true })).toHaveProperty('disabled', true);
  });

  it('renders a dropdown with the nx-combobox__menu class', async function() {
    const { getByRole } = rtlRender({ matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
        dropdownElement = getByRole('listbox', { hidden: true });

    expect(dropdownElement).toHaveClass('nx-combobox__menu');
  });

  it('sets the listbox role on the dropdown', function() {
    const { getByRole } = rtlRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
        dropdownElement = getByRole('listbox', { hidden: true });

    expect(dropdownElement).toHaveAttribute('role', 'listbox');
  });

  it('sets an id on the dropdown and references it in the combobox input aria-controls', function() {
    const { getByRole } = rtlRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
        inputElement = getByRole('combobox'),
        dropdownElement = getByRole('listbox', { hidden: true });

    expect(dropdownElement).toHaveAttribute('id');
    expect(inputElement).toHaveAttribute('aria-controls', dropdownElement.id);
  });

  it('renders an alert dropdown with nx_combobox__alert class', function() {
    const { container } = rtlRender(),
        alertDropdownElement = container.querySelector('.nx-combobox__alert');

    expect(alertDropdownElement).toBeTruthy();
    expect(alertDropdownElement).toHaveClass('nx-combobox__alert');
  });

  it('sets the alert role on the alert dropdown when it is in loading, error, or empty states', function() {
    expect(rtlRender({ matches: [] }).container.querySelector('.nx-combobox__alert')).toHaveAttribute('role', 'alert');
    expect(rtlRender({ loading: true }).container.querySelector('.nx-combobox__alert'))
        .toHaveAttribute('role', 'alert');
    expect(rtlRender({ loadError: 'boo' }).container.querySelector('.nx-combobox__alert'))
        .toHaveAttribute('role', 'alert');
  });

  it('sets an id on the alert dropdown and references it in the combobox input aria-describedby', function() {
    const { getByRole, container } = rtlRender(),
        inputElement = getByRole('combobox'),
        alertDropdownElement = container.querySelector('.nx-combobox__alert')!;

    expect(alertDropdownElement).toHaveAttribute('id');
    expect(inputElement).toHaveAttribute('aria-describedby', alertDropdownElement.id);
  });

  it('sets aria-live on the alert dropdown to "polite"', function() {
    expect(rtlRender().container.querySelector('.nx-combobox__alert')).toHaveAttribute('aria-live', 'polite');
  });

  it('sets aria-busy on the alert dropdown if loading is true', function() {
    expect(rtlRender().container.querySelector('.nx-combobox__alert')).toHaveAttribute('aria-busy', 'false');
    expect(rtlRender({ loading: true }).container.querySelector('.nx-combobox__alert'))
        .toHaveAttribute('aria-busy', 'true');
  });

  it('renders a loading spinner when the `loading` prop is true', function() {
    const { container } = rtlRender({ loading: true }),
        loadingElement = container.querySelector('.nx-loading-spinner');
    expect(loadingElement).toBeTruthy();
  });

  it('renders error when the `loadError` prop is set', function() {
    const { container } = rtlRender({ loadError: 'err' }),
        errorElement = container.querySelector('.nx-alert--load-error');
    expect(errorElement).toBeTruthy();
  });

  it('fires onSearch with the search text when the retry button is clicked', async function() {
    const onSearch = jest.fn(),
        { container } = rtlRender({ loadError: 'err', onSearch }),
        retryBtn = container.querySelector('.nx-load-error__retry')!;

    expect(onSearch).not.toHaveBeenCalled();
    await userEvent.click(retryBtn);
    expect(onSearch).toHaveBeenCalled();
  });

  it('fires onChange when the button with role option is clicked', async function() {
    const onChange = jest.fn(),
        { getByRole, getAllByRole } = rtlRender({
          matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }], onChange }),
        inputElement = getByRole('combobox');

    await userEvent.type(inputElement, 'o');
    const optionBtns = getAllByRole('option');
    await userEvent.click(optionBtns[1]);
    expect(onChange).toHaveBeenCalledWith('Boo');
  });

  it('renders empty message if there are no results', function() {
    const { container } = rtlRender(),
        emptyMessage = container.querySelector('.nx-combobox__empty-message');

    expect(emptyMessage).toBeTruthy();
    expect(emptyMessage).toHaveTextContent('No Results Found');
  });

  it('sets the empty message from the `emptyMessage` prop', function() {
    const { container } = rtlRender({ emptyMessage: 'asdfasdf' }),
        emptyMessage = container.querySelector('.nx-combobox__empty-message');

    expect(emptyMessage).toHaveTextContent('asdfasdf');
  });

  it('calls onSearch with the current trimmed search text if focus enters the component from elsewhere on the page ' +
  'while there is an error', function() {
    const onSearch = jest.fn(),
        { getByRole} = rtlRender({ value: 'f', loadError: 'err', onSearch }),
        inputElement = getByRole('combobox'),
        anotherElement = document.createElement('button');

    document.body.append(anotherElement);
    anotherElement.focus();

    expect(onSearch).not.toHaveBeenCalled();
    inputElement.focus();
    expect(onSearch).toHaveBeenCalledWith('f');
  });

  it('does not call onSearch if focus moves within the component while there is an error', function() {
    const onSearch = jest.fn(),
        { getByRole } = rtlRender({ value: 'f', loadError: 'err', onSearch }),
        inputElement = getByRole('combobox');

    expect(onSearch).not.toHaveBeenCalled();
    inputElement.focus();
    expect(onSearch).not.toHaveBeenCalled();

    const retryBtn = getByRole('button', {name: /retry/i });
    retryBtn.focus();

    expect(onSearch).not.toHaveBeenCalled();
    inputElement.focus();
    expect(onSearch).not.toHaveBeenCalled();
  });

  it('does not call onSearch if focus moves into the component from an outside window while there is an error',
      function() {
        const onSearch = jest.fn(),
            { getByRole } = rtlRender({ value: 'f', loadError: 'err', onSearch }),
            inputElement = getByRole('combobox');

        expect(onSearch).not.toHaveBeenCalled();
        inputElement.focus();
        expect(onSearch).not.toHaveBeenCalled();
        (document.activeElement as HTMLElement).blur();
        expect(onSearch).not.toHaveBeenCalled();
        inputElement.focus();
        expect(onSearch).not.toHaveBeenCalled();
      });

  describe('Keyboard Support', function() {
    it('sets aria-activeddescendant on the combobox and refers to the focused element id' +
    'when the element has visual focus', async function() {
      const { getByRole, getAllByRole } = rtlRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox');

      inputElement.focus();
      await userEvent.keyboard('[ArrowDown]');
      const optionBtns = getAllByRole('option');
      expect(inputElement).toHaveAttribute('aria-activedescendant', optionBtns[0].id);
    });

    it('places the editing cursor at the begining of the input field when Home key is pressed', async function() {
      const onChange = jest.fn(),
          { getByRole } = rtlRender({ value: 'f', onChange }),
          inputElement = getByRole('combobox');

      inputElement.focus();
      await userEvent.keyboard('[Home]o');
      expect(onChange).toBeCalledWith('of');
    });

    it('places the editing cursor at the end of the input field when End key is pressed', async function() {
      const onChange = jest.fn(),
          { getByRole} = rtlRender({ value: 'f', onChange }),
          inputElement = getByRole('combobox');

      inputElement.focus();
      await userEvent.keyboard('[Home][End]o');
      expect(onChange).toBeCalledWith('fo');
    });

    it('should open dropdown and move visual focus to the first option with aria-selected set to true' +
      'if dropdown is closed and there are matches when down arrow key is pressed', async function() {
      const { getByRole, getAllByRole, container} = rtlRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox'),
          dropdownElement = container.querySelector('.nx-combobox__menu');

      expect(dropdownElement).toHaveAttribute('aria-hidden', 'true');
      inputElement.focus();
      await userEvent.keyboard('[ArrowDown]');
      expect(dropdownElement).toHaveAttribute('aria-hidden', 'false');
      const optionBtns = getAllByRole('option');
      expect(optionBtns[0]).toHaveAttribute('aria-selected', 'true');
    });

    it('should move visual focus to the next option if dropdown is open' +
      'and the down arrow key is pressed', async function() {
      const { getByRole, getAllByRole } = rtlRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox');

      inputElement.focus();
      await userEvent.keyboard('[ArrowDown]');
      const firstOptBtn = getAllByRole('option')[0],
          secondOptBtn = getAllByRole('option')[1];

      expect(firstOptBtn).toHaveAttribute('aria-selected', 'true');
      await userEvent.keyboard('[ArrowDown]');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'false');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'true');
    });

    it('should open dropdown and move visual focus to the last option if dropdown is closed' +
      'and there are matches when up arrow key is pressed', async function() {
      const { getByRole, getAllByRole, container} = rtlRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox'),
          dropdownElement = container.querySelector('.nx-combobox__menu');

      expect(dropdownElement).toHaveAttribute('aria-hidden', 'true');
      inputElement.focus();
      await userEvent.keyboard('[ArrowUp]');
      expect(dropdownElement).toHaveAttribute('aria-hidden', 'false');
      const optionBtns = getAllByRole('option');
      expect(optionBtns[1]).toHaveAttribute('aria-selected', 'true');
    });

    it('should move visual focus to the previous option if dropdown is open' +
      'and the up arrow key is pressed', async function() {
      const { getByRole, getAllByRole } = rtlRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox');

      inputElement.focus();
      await userEvent.keyboard('[ArrowUp]');
      const firstOptBtn = getAllByRole('option')[0],
          secondOptBtn = getAllByRole('option')[1];

      expect(secondOptBtn).toHaveAttribute('aria-selected', 'true');
      await userEvent.keyboard('[ArrowUp]');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'false');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'true');
    });

    it('should close dropdown when Escape key is pressed', async function() {
      const { getByRole, container} = rtlRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox'),
          dropdownElement = container.querySelector('.nx-combobox__menu');

      inputElement.focus();
      await userEvent.keyboard('[ArrowDown]');
      expect(dropdownElement).toHaveAttribute('aria-hidden', 'false');
      await userEvent.keyboard('[Escape]');
      expect(dropdownElement).toHaveAttribute('aria-hidden', 'true');
    });

    it('should clear input text if dropdown is close when Escape key is pressed', async function() {
      const onChange = jest.fn(),
          { getByRole } = rtlRender({ value: 'a',
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }],
            onChange}),
          inputElement = getByRole('combobox');

      inputElement.focus();
      await userEvent.keyboard('[Escape]');
      expect(onChange).toBeCalledWith('');
    });
  });
});
