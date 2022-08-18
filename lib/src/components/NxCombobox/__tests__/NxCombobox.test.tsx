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
        searchText: '',
        onSearchTextChange: () => {},
        onSearch: () => {},
        matches: [],
        onSelect: () => {}
      },
      rtlRender = rtlUtils.rtlRender(NxCombobox, minimalProps);

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

  it('sets the searchText as the value of the input', function() {
    const { getByRole } = rtlRender({ searchText: 'foo' }),
        inputElement = getByRole('combobox');

    expect(inputElement).toHaveValue('foo');
  });

  it('sets aria-autocomplete on the input to list as default and to both if `autoComplete` prop is set to true',
      function() {
        expect(rtlRender().container!.querySelector('.nx-text-input__input'))
            .toHaveAttribute('aria-autocomplete', 'list');
        expect(rtlRender({ autoComplete: true }).container!.querySelector('.nx-text-input__input'))
            .toHaveAttribute('aria-autocomplete', 'both');
      });

  it('sets a completion string of the selected suggestion from matches when `autoComplete` prop is set to true',
      async function() {
        const onSearchTextChange = jest.fn(),
            { getByRole } = rtlRender({ autoComplete: true,
              matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }],
              onSearchTextChange}),
            inputElement = getByRole('combobox');

        inputElement.focus();
        await userEvent.type(inputElement, 'f');
        expect(onSearchTextChange).toBeCalledWith('Foo');
      });

  it('sets aria-expanded on the input to true when the dropdown displayed which has aria-hidden set to false',
      async function() {
        const { getByRole, container } = rtlRender(),
            inputElement = getByRole('combobox'),
            dropdownElement = container.querySelector('.nx-combobox__menu');

        expect(inputElement).toHaveAttribute('aria-expanded', 'false');
        expect(dropdownElement).toHaveAttribute('aria-hidden', 'true');
        await userEvent.type(inputElement, 'f');
        expect(inputElement).toHaveAttribute('aria-expanded', 'true');
        expect(dropdownElement).toHaveAttribute('aria-hidden', 'false');
      });

  it('calls onSearchTextChange whenver the input\'s onChange event fires', async function() {
    const onSearchTextChange = jest.fn(),
        { getByRole } = rtlRender({ onSearchTextChange }),
        inputElement = getByRole('combobox');

    expect(onSearchTextChange).not.toHaveBeenCalled();
    await userEvent.type(inputElement, 'a');
    expect(onSearchTextChange).toHaveBeenCalledWith('a');
  });

  it('calls onSearch whenver the input\'s onChange event fires with a value that differs after trimming, ' +
    'passing the trimmed value', async function() {
    const onSearch = jest.fn(),
        { getByRole } = rtlRender({ searchText: 'foo', onSearch }),
        inputElement = getByRole('combobox');

    expect(onSearch).not.toHaveBeenCalled();
    await userEvent.type(inputElement, ' ');
    expect(onSearch).not.toHaveBeenCalled();
    await userEvent.type(inputElement, 'f');
    expect(onSearch).toHaveBeenCalledWith('foof');
  });

  it('adds the nx-text-input--long class to the input if the `long` prop is set', function() {
    expect(rtlRender().container!.querySelector('.nx-combobox__input')).not.toHaveClass('nx-text-input--long');
    expect(rtlRender({ long: undefined }).container!.querySelector('.nx-combobox__input'))
        .not.toHaveClass('nx-text-input--long');
    expect(rtlRender({ long: null }).container!.querySelector('.nx-combobox__input'))
        .not.toHaveClass('nx-text-input--long');
    expect(rtlRender({ long: false }).container!.querySelector('.nx-combobox__input'))
        .not.toHaveClass('nx-text-input--long');
    expect(rtlRender({ long: true }).container!.querySelector('.nx-combobox__input'))
        .toHaveClass('nx-text-input--long');
  });

  it('adds the nx-text-input--short class to the input if the `short` prop is set', function() {
    expect(rtlRender().container!.querySelector('.nx-combobox__input')).not.toHaveClass('nx-text-input--short');
    expect(rtlRender({ short: undefined }).container!.querySelector('.nx-combobox__input'))
        .not.toHaveClass('nx-text-input--short');
    expect(rtlRender({ short: null }).container!.querySelector('.nx-combobox__input'))
        .not.toHaveClass('nx-text-input--short');
    expect(rtlRender({ short: false }).container!.querySelector('.nx-combobox__input'))
        .not.toHaveClass('nx-text-input--short');
    expect(rtlRender({ short: true }).container!.querySelector('.nx-combobox__input'))
        .toHaveClass('nx-text-input--short');
  });

  it('passes the disabled prop to the input and buttons', function() {
    expect(rtlRender().container!.querySelector('.nx-text-input__input')).toHaveProperty('disabled', false);
    expect(rtlRender({ disabled: undefined }).container!.querySelector('.nx-text-input__input'))
        .toHaveProperty('disabled', false);
    expect(rtlRender({ disabled: null }).container!.querySelector('.nx-text-input__input'))
        .toHaveProperty('disabled', false);
    expect(rtlRender({ disabled: false }).container!.querySelector('.nx-text-input__input'))
        .toHaveProperty('disabled', false);
    expect(rtlRender({ disabled: true }).container!.querySelector('.nx-text-input__input'))
        .toHaveProperty('disabled', true);

    expect(rtlRender({disabled: false, matches: [{ id: '1', displayName: '1' }]}).container!
        .querySelector('.nx-dropdown-button')).toHaveProperty('disabled', false);
    expect(rtlRender({disabled: true, matches: [{ id: '1', displayName: '1' }]}).container!
        .querySelector('.nx-dropdown-button')).toHaveProperty('disabled', true);
  });

  it('renders a dropdown with the nx-combobox__menu class', function() {
    const { container } = rtlRender(),
        dropdownElement = container!.querySelector('.nx-combobox__menu');

    expect(dropdownElement).toBeVisible();
    expect(dropdownElement).toHaveClass('nx-combobox__menu');
  });

  it('sets the listbox role on the dropdown when it contains results', function() {
    const { container } = rtlRender({ matches: [{ id: '1', displayName: '1' }] }),
        dropdownElement = container!.querySelector('.nx-combobox__menu');

    expect(dropdownElement).toHaveAttribute('role', 'listbox');
  });

  it('sets the alert role on the dropdown when it is in loading, error, or empty states', function() {
    expect(rtlRender({ matches: [] }).container!.querySelector('.nx-combobox__menu')).toHaveAttribute('role', 'alert');
    expect(rtlRender({ loading: true }).container!.querySelector('.nx-combobox__menu'))
        .toHaveAttribute('role', 'alert');
    expect(rtlRender({ error: 'boo' }).container!.querySelector('.nx-combobox__menu')).toHaveAttribute('role', 'alert');
  });

  it('sets an id on the dropdown and references it in the combobox input aria-controls', function() {
    const { getByRole, container } = rtlRender(),
        inputElement = getByRole('combobox'),
        dropdownElement = container.querySelector('.nx-combobox__menu')!;
    expect(dropdownElement).toHaveAttribute('id');
    expect(inputElement).toHaveAttribute('aria-controls', dropdownElement.id);
  });

  it('sets aria-live on the dropdown to "polite"', function() {
    expect(rtlRender().container!.querySelector('.nx-combobox__menu')).toHaveAttribute('aria-live', 'polite');
  });

  it('sets aria-busy on the dropdown if loading is true', function() {
    expect(rtlRender().container!.querySelector('.nx-combobox__menu')).toHaveAttribute('aria-busy', 'false');
    expect(rtlRender({ loading: true }).container!.querySelector('.nx-combobox__menu'))
        .toHaveAttribute('aria-busy', 'true');
  });

  it('renders a loading spinner when the `loading` prop is true', function() {
    const { container } = rtlRender({ loading: true }),
        loadingElement = container.querySelector('.nx-loading-spinner');
    expect(loadingElement).toBeTruthy();
  });

  it('renders error when the `error` prop is set', function() {
    const { container } = rtlRender({ error: 'err' }),
        errorElement = container.querySelector('.nx-alert--load-error');
    expect(errorElement).toBeTruthy();
  });

  it('fires onSearch with the search text when the retry button is clicked', async function() {
    const onSearch = jest.fn(),
        { container } = rtlRender({ error: 'err', onSearch }),
        retryBtn = container.querySelector('.nx-load-error__retry')!;

    expect(onSearch).not.toHaveBeenCalled();
    await userEvent.click(retryBtn);
    expect(onSearch).toHaveBeenCalled();
  });

  it('fires onSelect with the match object when the button with role option is clicked', async function() {
    const onSelect = jest.fn(),
        { getByRole, getAllByRole } = rtlRender({
          matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }], onSelect }),
        inputElement = getByRole('combobox');

    await userEvent.type(inputElement, 'o');
    const optionBtns = getAllByRole('option');
    expect(onSelect).not.toHaveBeenCalled();
    await userEvent.click(optionBtns[1]);
    expect(onSelect).toHaveBeenCalledWith({ id: '2', displayName: 'Boo' });
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
        { getByRole} = rtlRender({ searchText: 'f', error: 'err', onSearch }),
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
        { getByRole } = rtlRender({ searchText: 'f', error: 'err', onSearch }),
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
            { getByRole } = rtlRender({ searchText: 'f', error: 'err', onSearch }),
            inputElement = getByRole('combobox');

        expect(onSearch).not.toHaveBeenCalled();
        inputElement.focus();
        expect(onSearch).not.toHaveBeenCalled();
        (document.activeElement! as HTMLElement).blur();
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
      const onSearchTextChange = jest.fn(),
          { getByRole } = rtlRender({ searchText: 'f', onSearchTextChange }),
          inputElement = getByRole('combobox');

      inputElement.focus();
      await userEvent.keyboard('[Home]o');
      expect(onSearchTextChange).toBeCalledWith('of');
    });

    it('places the editing cursor at the end of the input field when End key is pressed', async function() {
      const onSearchTextChange = jest.fn(),
          { getByRole} = rtlRender({ searchText: 'f', onSearchTextChange }),
          inputElement = getByRole('combobox');

      inputElement.focus();
      await userEvent.keyboard('[Home][End]o');
      expect(onSearchTextChange).toBeCalledWith('fo');
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
      const onSearchTextChange = jest.fn(),
          { getByRole } = rtlRender({ searchText: 'a',
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }],
            onSearchTextChange}),
          inputElement = getByRole('combobox');

      inputElement.focus();
      await userEvent.keyboard('[Escape]');
      expect(onSearchTextChange).toBeCalledWith('');
    });
  });
});
