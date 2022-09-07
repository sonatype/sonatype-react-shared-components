/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import userEvent from '@testing-library/user-event';

import NxCombobox, { Props } from '../NxCombobox';

describe('NxCombobox', function() {
  const minimalProps: Props<string | number> = {
        value: '',
        onChange: () => {},
        onSearch: () => {},
        matches: []
      },
      quickRender = rtlRender(NxCombobox, minimalProps),
      renderEl = rtlRenderElement(NxCombobox, minimalProps);

  it('sets specified classNames and attributes on the top-level element', function() {
    const component = renderEl({ className: 'foo', title: 'bar' });

    expect(component).toHaveClass('foo');
    expect(component).toHaveAttribute('title', 'bar');
  });

  it('adds the ref to the top-level element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        domNode = render(<NxCombobox { ...minimalProps } ref={ref} />).container.firstElementChild!;

    expect(ref.current).toBeDefined();
    expect(ref.current).toBe(domNode);
  });

  it('renders an input child with the combobox role', function() {
    const inputElement = quickRender().getByRole('combobox');

    expect(inputElement.tagName).toBe('INPUT');
    expect(inputElement).toBeInTheDocument();
  });

  it('sets the value as the value of the input', function() {
    expect(quickRender({ value: 'foo' }).getByRole('combobox')).toHaveValue('foo');
  });

  it('sets aria-autocomplete on the input to list as default and to both if `autoComplete` prop is set to true',
      function() {
        const { getByRole, rerender } = quickRender(),
            inputElement = getByRole('combobox');

        expect(inputElement).toHaveAttribute('aria-autocomplete', 'list');

        rerender(<NxCombobox { ...minimalProps } autoComplete={true}/>);
        expect(inputElement).toHaveAttribute('aria-autocomplete', 'both');
      });

  it('sets a completion string of the selected suggestion from matches when `autoComplete` prop is set to true',
      async function() {
        const { getByRole, rerender } = quickRender({
              autoComplete: true,
              matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }]
            }),
            inputElement = getByRole('combobox');

        await userEvent.type(inputElement, 'f');
        rerender(
          <NxCombobox { ...minimalProps }
                      autoComplete={true}
                      matches={ [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }/>);
        expect(inputElement).toHaveValue('Foo');
      });

  it('sets aria-expanded on the input to true when the dropdown displayed which has aria-hidden set to false',
      async function() {
        const { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
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
        inputElement = quickRender({ onChange }).getByRole('combobox');

    expect(onChange).not.toHaveBeenCalled();
    await userEvent.type(inputElement, 'a');
    expect(onChange).toHaveBeenCalledWith('a');
  });

  it('does not call onSearch whenever the input\'s onChange event fires with a value that does not differ' +
    'after trimming', async function() {
    const onSearch = jest.fn(),
        { getByRole } = quickRender({ value: 'foo', onSearch }),
        inputElement = getByRole('combobox');

    await userEvent.type(inputElement, ' ');
    expect(onSearch).not.toHaveBeenCalled();
  });

  it('calls onSearch whenever the input\'s onChange event fires with a value that differs after trimming, ' +
    'passing the trimmed value', async function() {
    const onSearch = jest.fn(),
        { getByRole } = quickRender({ value: 'foo', onSearch }),
        inputElement = getByRole('combobox');

    await userEvent.type(inputElement, 'f');
    expect(onSearch).toHaveBeenCalledWith('foof');
  });

  it('passes the disabled prop to the input and buttons', function() {
    const { getByRole, rerender } = quickRender(),
        inputElement = getByRole('combobox');

    expect(inputElement).not.toBeDisabled();

    rerender(<NxCombobox { ...minimalProps } disabled={undefined}/>);
    expect(inputElement).not.toBeDisabled();

    rerender(<NxCombobox { ...minimalProps } disabled={false}/>);
    expect(inputElement).not.toBeDisabled();

    rerender(<NxCombobox { ...minimalProps } disabled={true}/>);
    expect(inputElement).toBeDisabled();

    rerender(<NxCombobox { ...minimalProps } matches={ [{ id: '1', displayName: 'Foo' }] } disabled={false}/>);
    expect(inputElement).not.toBeDisabled();

    rerender(<NxCombobox { ...minimalProps } matches={ [{ id: '1', displayName: 'Foo' }] } disabled={true}/>);
    expect(inputElement).toBeDisabled();
  });

  it('sets the listbox role on the dropdown', function() {
    const { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
        dropdownElement = getByRole('listbox', { hidden: true });

    expect(dropdownElement).toBeInTheDocument();
  });

  it('sets an id on the dropdown and references it in the combobox input aria-controls', function() {
    const { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
        inputElement = getByRole('combobox'),
        dropdownElement = getByRole('listbox', { hidden: true });

    expect(dropdownElement).toHaveAttribute('id');
    expect(inputElement).toHaveAttribute('aria-controls', dropdownElement.id);
  });

  it('sets the alert role on the alert dropdown when it is in loading, error, or empty states', function() {
    const { getAllByRole, rerender } = quickRender({ value: 'f' }),
        alertDropdownElement = getAllByRole('alert', { hidden: true })[1];

    expect(alertDropdownElement).toBeInTheDocument();

    rerender(<NxCombobox { ...minimalProps } loading={true} />);
    expect(alertDropdownElement).toBeInTheDocument();

    rerender(<NxCombobox { ...minimalProps } loadError={'boo'} />);
    expect(alertDropdownElement).toBeInTheDocument();
  });

  it('sets aria-live on the alert dropdown to "polite"', function() {
    expect(quickRender().getAllByRole('alert', { hidden: true })[1]).toHaveAttribute('aria-live', 'polite');
  });

  it('sets aria-busy on the alert dropdown if loading is true', function() {
    const { getAllByRole, rerender } = quickRender(),
        alertDropdownElement = getAllByRole('alert', { hidden: true })[1];

    expect(alertDropdownElement).toHaveAttribute('aria-busy', 'false');

    rerender(<NxCombobox { ...minimalProps } loading={true} />);
    expect(alertDropdownElement).toHaveAttribute('aria-busy', 'true');
  });

  it('renders error and textcontent when the `loadError` prop is set', function() {
    const alertDropdownElement = quickRender({ loadError: 'err' }).getAllByRole('alert', { hidden: true })[1];

    expect(alertDropdownElement).toBeInTheDocument();
    expect(alertDropdownElement).toHaveTextContent('err');
  });

  it('fires onSearch with the search text when the retry button is clicked', async function() {
    const onSearch = jest.fn(),
        { getByRole } = quickRender({ loadError: 'err', onSearch }),
        inputElement = getByRole('combobox');

    expect(onSearch).not.toHaveBeenCalled();
    await userEvent.type(inputElement, 'f');
    const retryBtn = getByRole('button', { name: /retry/i });
    await userEvent.click(retryBtn);
    expect(onSearch).toHaveBeenCalledWith('f');
  });

  it('fires onChange when the button with role option is clicked', async function() {
    const onChange = jest.fn(),
        { getByRole, getAllByRole } = quickRender({
          matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }], onChange }),
        inputElement = getByRole('combobox');

    await userEvent.type(inputElement, 'o');
    const optionBtns = getAllByRole('option');
    await userEvent.click(optionBtns[1]);
    expect(onChange).toHaveBeenCalledWith('Boo');
  });

  it('renders empty message if there are no results', function() {
    const emptyMessage = quickRender().getAllByRole('alert', { hidden: true })[1];

    expect(emptyMessage).toBeInTheDocument();
    expect(emptyMessage).toHaveTextContent('No Results Found');
  });

  it('sets the empty message from the `emptyMessage` prop', function() {
    const emptyMessage = quickRender({ emptyMessage: 'asdfasdf' }).getAllByRole('alert', { hidden: true })[1];

    expect(emptyMessage).toBeInTheDocument();
    expect(emptyMessage).toHaveTextContent('asdfasdf');
  });

  it('calls onSearch with the current trimmed search text if focus enters the component from elsewhere on the page ' +
    'while there is an error', function() {
    const onSearch = jest.fn(),
        jsx =
          <>
            <NxCombobox { ...minimalProps } value="f" loadError="err" onSearch={onSearch}/>
            <button type='button'>Click</button>
          </>,
        component = render(jsx),
        inputElement = component.getByRole('combobox'),
        anotherElement = component.getByRole('button', { name: /click/i });

    anotherElement.focus();
    expect(onSearch).not.toHaveBeenCalled();
    inputElement.focus();
    expect(onSearch).toHaveBeenCalledWith('f');
  });

  it('does not call onSearch if focus moves within the component while there is an error', function() {
    const onSearch = jest.fn(),
        { getByRole } = quickRender({ value: 'f', loadError: 'err', onSearch }),
        inputElement = getByRole('combobox');

    expect(onSearch).not.toHaveBeenCalled();
    inputElement.focus();
    expect(onSearch).not.toHaveBeenCalled();

    const retryBtn = getByRole('button', { name: /retry/i });
    retryBtn.focus();

    expect(onSearch).not.toHaveBeenCalled();
    inputElement.focus();
    expect(onSearch).not.toHaveBeenCalled();
  });

  it('does not call onSearch if focus moves into the component from an outside window while there is an error',
      function() {
        const onSearch = jest.fn(),
            { getByRole } = quickRender({ value: 'f', loadError: 'err', onSearch }),
            inputElement = getByRole('combobox');

        inputElement.focus();
        (document.activeElement as HTMLElement).blur();
        inputElement.focus();
        expect(onSearch).not.toHaveBeenCalled();
      });

  describe('Accessible Description', function() {
    it('sets alert message as the accessible description of the combobox when there is an alert with empty message',
        async function() {
          const inputElement = quickRender({ emptyMessage: 'Sorry! No Results Found' }).getByRole('combobox');

          expect(inputElement).not.toHaveAccessibleDescription();
          await userEvent.type(inputElement, 'f');
          expect(inputElement).toHaveAccessibleDescription('Sorry! No Results Found');
        });

    it('sets alert message as the accessible description of the combobox when there is an alert with loading',
        async function() {
          const inputElement = quickRender({ loading: true }).getByRole('combobox');

          expect(inputElement).not.toHaveAccessibleDescription();
          await userEvent.type(inputElement, 'f');
          expect(inputElement).toHaveAccessibleDescription('Loading…');
        });

    it('sets alert message as the accessible description of the combobox when there is an alert with error',
        async function() {
          const inputElement = quickRender({ loadError: 'err' }).getByRole('combobox');

          expect(inputElement).not.toHaveAccessibleDescription();
          await userEvent.type(inputElement, 'f');
          expect(inputElement).toHaveAccessibleDescription('An error occurred loading data. err Retry');
        });

    it('sets the message in addition to internal alert description if the message has an id and' +
      'is referenced by aria-describedby passed in the combobox', async function() {
      const jsx =
        <>
          <span id="label">Combobox</span>
          <NxCombobox { ...minimalProps } aria-describedby="label"/>
        </>,
          component = render(jsx),
          inputElement = component.getByRole('combobox');

      expect(inputElement).toHaveAccessibleDescription('Combobox');
      await userEvent.type(inputElement, 'f');
      expect(inputElement).toHaveAccessibleDescription('Combobox No Results Found');
    });
  });

  describe('Keyboard Support', function() {
    beforeEach(function() {
      //mock scrollIntoView function using jest
      window.HTMLElement.prototype.scrollIntoView = jest.fn();
    });

    it('sets aria-activedescendant on the combobox and refers to the focused element id' +
    'when the element has visual focus', async function() {
      const { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox');

      inputElement.focus();
      await userEvent.keyboard('[ArrowDown]');
      const optionBtns = getAllByRole('option');
      expect(inputElement).toHaveAttribute('aria-activedescendant', optionBtns[0].id);
    });

    it('places the editing cursor at the begining of the input field when Home key is pressed with focus in combobox',
        async function() {
          const onChange = jest.fn(),
              { getByRole } = quickRender({ value: 'f', onChange }),
              inputElement = getByRole('combobox');

          inputElement.focus();
          await userEvent.keyboard('[Home]o');
          expect(onChange).toBeCalledWith('of');
        });

    it('places the editing cursor at the end of the input field when End key is pressed with focus in combobox',
        async function() {
          const onChange = jest.fn(),
              { getByRole} = quickRender({ value: 'f', onChange }),
              inputElement = getByRole('combobox');

          inputElement.focus();
          await userEvent.keyboard('[Home][End]o');
          expect(onChange).toBeCalledWith('fo');
        });

    it('places the editing cursor at the begining of the input field when Home key is pressed with focus in dropdown',
        async function() {
          const onChange = jest.fn(),
              { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }], value: 'f', onChange }),
              inputElement = getByRole('combobox'),
              optionBtn = getByRole('option', { hidden: true });

          inputElement.focus();
          await userEvent.keyboard('[ArrowDown]');
          expect(optionBtn).toHaveAttribute('aria-selected', 'true');
          await userEvent.keyboard('[Home]o');
          expect(onChange).toBeCalledWith('of');
          expect(optionBtn).toHaveAttribute('aria-selected', 'false');
        });

    it('places the editing cursor at the end of the input field when End key is pressed with focus in dropdown',
        async function() {
          const onChange = jest.fn(),
              { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }], value: 'f', onChange }),
              inputElement = getByRole('combobox'),
              optionBtn = getByRole('option', { hidden: true });

          inputElement.focus();
          await userEvent.keyboard('[ArrowUp]');
          expect(optionBtn).toHaveAttribute('aria-selected', 'true');
          await userEvent.keyboard('[Home][End]o');
          expect(onChange).toBeCalledWith('fo');
          expect(optionBtn).toHaveAttribute('aria-selected', 'false');
        });

    it('should open dropdown and move visual focus to the first option with aria-selected set to true' +
      'if dropdown is closed and there are matches when down arrow key is pressed', async function() {
      const { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox'),
          dropdownElement = getByRole('listbox', { hidden: true }),
          firstOptBtn = getAllByRole('option', { hidden: true })[0];

      expect(dropdownElement).toHaveAttribute('aria-hidden', 'true');
      inputElement.focus();
      await userEvent.keyboard('[ArrowDown]');
      expect(dropdownElement).toHaveAttribute('aria-hidden', 'false');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'true');
    });

    it('should move visual focus to the next option if dropdown is open' +
      'and the down arrow key is pressed', async function() {
      const { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox'),
          firstOptBtn = getAllByRole('option', { hidden: true })[0],
          secondOptBtn = getAllByRole('option', { hidden: true })[1];

      inputElement.focus();
      await userEvent.keyboard('[ArrowDown]');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'true');
      await userEvent.keyboard('[ArrowDown]');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'false');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'true');
    });

    it('should move visual focus to the first option if current focus is on the last option' +
      'and the down arrow key is pressed', async function() {
      const { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox'),
          firstOptBtn = getAllByRole('option', { hidden: true })[0],
          secondOptBtn = getAllByRole('option', { hidden: true })[1];

      inputElement.focus();
      await userEvent.keyboard('[ArrowUp]');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'true');
      await userEvent.keyboard('[ArrowDown]');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'false');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'true');
    });

    it('should open dropdown and move visual focus to the last option if dropdown is closed' +
      'and there are matches when up arrow key is pressed', async function() {
      const { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox'),
          dropdownElement = getByRole('listbox', { hidden: true }),
          lastOptBtn = getAllByRole('option', { hidden: true })[1];

      expect(dropdownElement).toHaveAttribute('aria-hidden', 'true');
      inputElement.focus();
      await userEvent.keyboard('[ArrowUp]');
      expect(dropdownElement).toHaveAttribute('aria-hidden', 'false');
      expect(lastOptBtn).toHaveAttribute('aria-selected', 'true');
    });

    it('should move visual focus to the previous option if dropdown is open' +
      'and the up arrow key is pressed', async function() {
      const { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox'),
          firstOptBtn = getAllByRole('option', { hidden: true })[0],
          secondOptBtn = getAllByRole('option', { hidden: true })[1];

      inputElement.focus();
      await userEvent.keyboard('[ArrowUp]');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'true');
      await userEvent.keyboard('[ArrowUp]');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'false');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'true');
    });

    it('should move visual focus to the last option if current focus is on the first option' +
      'and the up arrow key is pressed', async function() {
      const { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox'),
          firstOptBtn = getAllByRole('option', { hidden: true })[0],
          secondOptBtn = getAllByRole('option', { hidden: true })[1];

      inputElement.focus();
      await userEvent.keyboard('[ArrowDown]');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'true');
      await userEvent.keyboard('[ArrowUp]');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'false');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'true');
    });

    it('should close dropdown when Escape key is pressed', async function() {
      const { getByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox'),
          dropdownElement = getByRole('listbox', { hidden: true });

      inputElement.focus();
      await userEvent.keyboard('[ArrowDown]');
      expect(dropdownElement).toHaveAttribute('aria-hidden', 'false');
      await userEvent.keyboard('[Escape]');
      expect(dropdownElement).toHaveAttribute('aria-hidden', 'true');
    });

    it('sets the value to be backspaced text when backspace is pressed', async function() {
      const onChange = jest.fn(),
          { getByRole } = quickRender({ value: 'foo', onChange }),
          inputElement = getByRole('combobox') as HTMLInputElement;

      inputElement.focus();
      inputElement.setSelectionRange(1, 2);
      await userEvent.keyboard('[Delete]');
      expect(onChange).toHaveBeenCalledWith('fo');
    });

    it('should clear input text if dropdown is close when Escape key is pressed', async function() {
      const onChange = jest.fn(),
          { getByRole } = quickRender({
            value: 'a',
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }],
            onChange}),
          inputElement = getByRole('combobox');

      inputElement.focus();
      await userEvent.keyboard('[Escape]');
      expect(onChange).toBeCalledWith('');
    });
  });
});
