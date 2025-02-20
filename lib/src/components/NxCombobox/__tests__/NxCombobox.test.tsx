/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { screen, fireEvent, render, within, createEvent } from '@testing-library/react';
import { runTimers, userEvent, rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxCombobox, { Props } from '../NxCombobox';
import NxForm from '../../NxForm/NxForm';

type RenderProps = Props & RefAttributes<HTMLDivElement>;

describe('NxCombobox', function() {
  const minimalProps: Props = {
        value: '',
        onChange: () => {},
        onSearch: () => {},
        matches: []
      },
      quickRender = rtlRender<RenderProps>(NxCombobox, minimalProps),
      renderEl = rtlRenderElement<RenderProps>(NxCombobox, minimalProps);

  it('sets specified classNames and attributes on the top-level element', function() {
    const component = renderEl()!,
        customizedComponent = renderEl({ className: 'foo', title: 'bar' });

    expect(customizedComponent).toHaveClass('foo');
    expect(customizedComponent).toHaveAttribute('title', 'bar');

    for (const cls of Array.from(component.classList)) {
      expect(customizedComponent).toHaveClass(cls);
    }
  });

  it('adds the ref to the top-level element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        domNode = renderEl({ ref });

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

  it('sets autocomplete="off" on the input', function() {
    expect(quickRender().getByRole('combobox')).toHaveAttribute('autocomplete', 'off');
  });

  it('sets aria-autocomplete on the input to list as default and to both if `autoComplete` prop is set to true',
      function() {
        const { getByRole, rerender } = quickRender(),
            inputElement = getByRole('combobox');

        expect(inputElement).toHaveAttribute('aria-autocomplete', 'list');

        rerender(<NxCombobox { ...minimalProps } autoComplete={true} />);
        expect(inputElement).toHaveAttribute('aria-autocomplete', 'both');
      });

  it('sets a completion string of the selected suggestion from matches when `autoComplete` prop is set to true',
      async function() {
        const user = userEvent.setup(),
            props = {
              autoComplete: true,
              matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Fooo' }]
            },
            { getByRole, rerender } = quickRender(props),
            inputElement = getByRole('combobox');

        await user.click(inputElement);
        rerender(<NxCombobox { ...minimalProps } { ...props } value="f" />);
        expect(inputElement).toHaveValue('Foo');
      });

  describe('aria-expanded', function() {
    it('sets aria-expanded to true on the input when initially focused and there are matches', async function() {
      const user = userEvent.setup(),
          { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
          inputElement = getByRole('combobox');

      expect(inputElement).toHaveAttribute('aria-expanded', 'false');

      // initial focus of the input
      await user.click(inputElement);
      expect(inputElement).toHaveAttribute('aria-expanded', 'true');

      // visibility of dropdown when focused is tested in visual tests
    });

    it('set aria-expanded to false on the input if there are no matches, even if focused', async function() {
      const user = userEvent.setup(),
          { rerender, getByRole } = quickRender(),
          inputElement = getByRole('combobox');

      expect(inputElement).toHaveAttribute('aria-expanded', 'false');

      await user.click(inputElement);
      expect(inputElement).toHaveAttribute('aria-expanded', 'false');

      rerender(<NxCombobox {...minimalProps} value="foo" />);
      expect(inputElement).toHaveAttribute('aria-expanded', 'false');

      rerender(<NxCombobox {...minimalProps} loading={true}/>);
      expect(inputElement).toHaveAttribute('aria-expanded', 'false');

      rerender(<NxCombobox { ...minimalProps } loadError={'boo'} />);
      expect(inputElement).toHaveAttribute('aria-expanded', 'false');
    });

    it('sets aria-expanded to false when input loses focus without selection', async function() {
      const user = userEvent.setup(),
          { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
          inputElement = getByRole('combobox');

      expect(inputElement).toHaveAttribute('aria-expanded', 'false');

      // initial focus of the input
      await user.click(inputElement);
      expect(inputElement).toHaveAttribute('aria-expanded', 'true');

      //force input to lose focus
      await user.tab();
      expect(inputElement).toHaveAttribute('aria-expanded', 'false');
    });

    it('sets aria-expanded to false when a dropdown item is selected by click', async function() {
      const user = userEvent.setup(),
          { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
          inputElement = getByRole('combobox');

      await user.click(inputElement);
      expect(inputElement).toHaveAttribute('aria-expanded', 'true');

      // selection is made via click
      const optionBtn = getByRole('option');
      await user.click(optionBtn);
      expect(inputElement).toHaveAttribute('aria-expanded', 'false');
    });

    it('sets aria-expanded to true after a dropdown item is selected and the input is clicked without losing focus',
        async function() {
          const user = userEvent.setup(),
              { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
              inputElement = getByRole('combobox');

          await user.click(inputElement);
          expect(inputElement).toHaveAttribute('aria-expanded', 'true');

          // selection is made via click
          const optionBtn = getByRole('option');
          await user.click(optionBtn);
          expect(inputElement).toHaveAttribute('aria-expanded', 'false');

          // input is clicked without losing focus
          expect(inputElement).toHaveFocus();
          await user.click(inputElement);
          expect(inputElement).toHaveAttribute('aria-expanded', 'true');
        });

    it('sets aria-expanded to true when the input is refocused after dropdown selection and blur', async function() {
      const user = userEvent.setup();
      render(
        <div>
          <div>Outside Combobox</div>
          <NxCombobox matches= {[{ id: '1', displayName: 'Foo' }]}
                      value=""
                      onChange= {() => {}}
                      onSearch= {() => {}} />
        </div>
      );

      const inputElement = screen.getByRole('combobox'),
          outsideDiv = screen.getByText('Outside Combobox');

      await user.click(inputElement);
      const optionBtn = screen.getByRole('option');

      // selection is made via click
      await user.click(optionBtn);
      expect(inputElement).toHaveFocus();
      expect(inputElement).toHaveAttribute('aria-expanded', 'false');

      // click outside of input to lose focus
      await user.click(outsideDiv);
      expect(inputElement).not.toHaveFocus();
      expect(inputElement).toHaveAttribute('aria-expanded', 'false');

      // focus input again
      await user.click(inputElement);
      expect(inputElement).toHaveFocus();
      expect(inputElement).toHaveAttribute('aria-expanded', 'true');
    });
  });

  it('calls onChange whenever the input\'s onChange event fires', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        inputElement = quickRender({ onChange }).getByRole('combobox');

    expect(onChange).not.toHaveBeenCalled();
    await user.type(inputElement, 'a');
    expect(onChange).toHaveBeenCalledWith('a');
  });

  it('does not call onSearch whenever the input\'s onChange event fires with a value that does not differ' +
    'after converting to lowercase value', async function() {
    const onSearch = jest.fn(),
        { getByRole } = quickRender({ value: 'foo', onSearch }),
        inputElement = getByRole('combobox');

    fireEvent.change(inputElement, {target: {value: 'Foo'}});
    expect(onSearch).not.toHaveBeenCalled();
  });

  it('calls onSearch whenever the input\'s onChange event fires with a value that differs after converting' +
    'to lowercase value', async function() {
    const onSearch = jest.fn(),
        { getByRole } = quickRender({ value: 'foo', onSearch }),
        inputElement = getByRole('combobox');

    fireEvent.change(inputElement, {target: {value: 'boo'}});
    expect(onSearch).toHaveBeenCalledWith('boo');
  });

  it('passes the disabled prop to the input', function() {
    const { getByRole, rerender } = quickRender(),
        inputElement = getByRole('combobox');

    expect(inputElement).not.toBeDisabled();

    rerender(<NxCombobox { ...minimalProps } disabled={undefined} />);
    expect(inputElement).not.toBeDisabled();

    rerender(<NxCombobox { ...minimalProps } disabled={false} />);
    expect(inputElement).not.toBeDisabled();

    rerender(<NxCombobox { ...minimalProps } disabled={true} />);
    expect(inputElement).toBeDisabled();
  });

  it('sets the listbox role on the dropdown', async function() {
    const user = userEvent.setup(),
        { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
        inputElement = getByRole('combobox');

    await user.click(inputElement);
    const dropdownElement = getByRole('listbox');
    expect(dropdownElement).toBeInTheDocument();
  });

  it('sets an id on the dropdown and references it in the combobox input aria-controls', async function() {
    const user = userEvent.setup(),
        { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
        inputElement = getByRole('combobox');

    await user.click(inputElement);
    const dropdownElement = getByRole('listbox');

    expect(dropdownElement).toHaveAttribute('id');
    expect(inputElement).toHaveAttribute('aria-controls', dropdownElement.id);
  });

  it('renders an alert dropdown with the alert role when it is in loading, error, or empty states', async function() {
    const user = userEvent.setup(),
        { getByRole, rerender } = quickRender({ value: 'f' }),
        inputElement = getByRole('combobox');

    await user.click(inputElement);
    const alertDropdownElement = getByRole('alert');

    expect(alertDropdownElement).toBeInTheDocument();

    rerender(<NxCombobox { ...minimalProps } loading={true} />);
    expect(alertDropdownElement).toBeInTheDocument();

    rerender(<NxCombobox { ...minimalProps } loadError={'boo'} />);
    expect(alertDropdownElement).toBeInTheDocument();

    rerender(<NxCombobox { ...minimalProps } matches={ [{ id: '1', displayName: 'Foo' }] } />);
    expect(alertDropdownElement).not.toBeInTheDocument();
  });

  it('sets aria-live on the alert dropdown to "polite"', async function() {
    const user = userEvent.setup(),
        { getByRole, rerender } = quickRender({ loading: true }),
        inputElement = getByRole('combobox');

    await user.click(inputElement);
    expect(getByRole('alert')).toHaveAttribute('aria-live', 'polite');

    rerender(<NxCombobox { ...minimalProps } loadError={'boo'} />);
    expect(getByRole('alert')).toHaveAttribute('aria-live', 'polite');

    rerender(<NxCombobox { ...minimalProps } value="f" />);
    expect(getByRole('alert')).toHaveAttribute('aria-live', 'polite');
  });

  it('sets aria-busy on the alert dropdown if loading is true', async function() {
    const user = userEvent.setup(),
        { getByRole, queryByRole, rerender } = quickRender({ loading: true }),
        inputElement = getByRole('combobox');

    await user.click(inputElement);
    let alertDropdownElement: Element | null = getByRole('alert');

    expect(alertDropdownElement).toHaveAttribute('aria-busy', 'true');

    rerender(<NxCombobox { ...minimalProps } loading={false} />);
    alertDropdownElement = queryByRole('alert');

    expect(alertDropdownElement).not.toBeInTheDocument();
  });

  it('renders error and textcontent when the `loadError` prop is set', async function() {
    const user = userEvent.setup(),
        { getByRole } = quickRender({ loadError: 'err' }),
        inputElement = getByRole('combobox');

    await user.click(inputElement);
    const errorElement = getByRole('alert');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('err');
  });

  it('fires onSearch with the search text when the retry button is clicked', async function() {
    const user = userEvent.setup(),
        onSearch = jest.fn(),
        { getByRole } = quickRender({ value: 'f', loadError: 'err', onSearch }),
        inputElement = getByRole('combobox');

    await user.click(inputElement);
    const retryBtn = getByRole('button', { name: /retry/i });

    expect(onSearch).toHaveBeenCalledTimes(1);
    await user.click(retryBtn);
    expect(onSearch).toHaveBeenNthCalledWith(2, 'f');
  });

  it('fires onChange when the button with role option is clicked and passes the DataItem as a second arg',
      async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            { getAllByRole, getByRole } = quickRender({
              matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }], onChange }),
            inputElement = getByRole('combobox');

        await user.click(inputElement);
        const optionBtns = getAllByRole('option');

        await user.click(optionBtns[1]);
        expect(onChange).toHaveBeenCalledWith('Boo', { id: '2', displayName: 'Boo' });
      }
  );

  it('does not render the empty message if there are no results and the value is empty', function() {
    const { queryByRole } = quickRender(),
        emptyMessage = queryByRole('alert');

    expect(emptyMessage).not.toBeInTheDocument();
  });

  it('renders empty message if there are no results and the value is not empty', async function() {
    const user = userEvent.setup(),
        { getByRole } = quickRender({ value: 'foo' }),
        inputElement = getByRole('combobox');

    await user.click(inputElement);
    const emptyMessage = getByRole('alert');

    expect(emptyMessage).toBeInTheDocument();
    expect(emptyMessage).toHaveTextContent('No Results Found');
  });

  it('sets the empty message from the `emptyMessage` prop', async function() {
    const user = userEvent.setup(),
        { getByRole } = quickRender({ emptyMessage: 'asdfasdf', value: 'foo' }),
        inputElement = getByRole('combobox');

    await user.click(inputElement);
    const emptyMessage = getByRole('alert');

    expect(emptyMessage).toBeInTheDocument();
    expect(emptyMessage).toHaveTextContent('asdfasdf');
  });

  it('calls onSearch with the current search text if focus enters the component from elsewhere on the page ' +
    'while there is an error', async function() {
    const user = userEvent.setup(),
        onSearch = jest.fn(),
        jsx =
          <>
            <NxCombobox { ...minimalProps } value="f" loadError="err" onSearch={onSearch}/>
            <button type="button">Click</button>
          </>,
        component = render(jsx),
        inputElement = component.getByRole('combobox'),
        anotherElement = component.getByRole('button', { name: /click/i });

    await user.click(anotherElement);
    expect(onSearch).not.toHaveBeenCalled();
    await user.click(inputElement);
    expect(onSearch).toHaveBeenCalledWith('f');
  });

  it('does not call onSearch if focus moves within the component while there is an error', async function() {
    const user = userEvent.setup(),
        onSearch = jest.fn(),
        { getByRole } = quickRender({ value: 'f', loadError: 'err', onSearch }),
        inputElement = getByRole('combobox');

    await user.click(inputElement);
    expect(onSearch).toHaveBeenCalledTimes(1);

    const retryBtn = getByRole('button', { name: /retry/i });
    await user.tab();
    expect(document.activeElement).toBe(retryBtn);
    expect(onSearch).toHaveBeenCalledTimes(1);

    await user.click(inputElement);
    expect(onSearch).toHaveBeenCalledTimes(1);
  });

  it('does not call onSearch if focus moves into the component from an outside window while there is an error',
      async function() {
        const user = userEvent.setup(),
            onSearch = jest.fn(),
            { getByRole } = quickRender({ value: 'f', loadError: 'err', onSearch }),
            inputElement = getByRole('combobox');

        await user.click(inputElement);
        expect(onSearch).toHaveBeenCalledTimes(1);
        await user.tab();
        await user.click(inputElement);
        expect(onSearch).toHaveBeenCalledTimes(1);
      });

  it('places tooltips on each dropdown item if itemTooltip is defined', async function() {
    const user = userEvent.setup(),
        view = quickRender({
          itemTooltip: ({ displayName }) => `${displayName} tooltipp`,
          matches: [{ id: '1', displayName: 'Foo' }]
        }),
        inputElement = view.getByRole('combobox');

    await user.click(inputElement);
    const btn = view.getByRole('option');

    await user.hover(btn);
    const tooltip = await screen.findByRole('tooltip');

    expect(tooltip).toHaveTextContent('Foo tooltipp');
  });

  it('does not put tooltips on the dropdown items if itemTooltip is not defined', async function() {
    const user = userEvent.setup(),
        view = quickRender({
          matches: [{ id: '1', displayName: 'Foo' }]
        }),
        inputElement = view.getByRole('combobox');

    await user.click(inputElement);
    const btn = view.getByRole('option');

    await user.hover(btn);
    const tooltipPromise = screen.findAllByRole('tooltip');

    await expect(tooltipPromise).rejects.toBeTruthy();
  });

  describe('Accessible Description', function() {
    it('sets alert message as the accessible description of the combobox when there is an alert with empty message',
        async function() {
          const user = userEvent.setup(),
              inputElement = quickRender({ value: 'f', emptyMessage: 'Sorry! No Results Found' }).getByRole('combobox');

          await user.click(inputElement);
          expect(inputElement).toHaveAccessibleDescription('Sorry! No Results Found');
        });

    it('sets alert message as the accessible description of the combobox when there is an alert with loading',
        async function() {
          const user = userEvent.setup(),
              inputElement = quickRender({ value: 'f', loading: true }).getByRole('combobox');

          await user.click(inputElement);
          expect(inputElement).toHaveAccessibleDescription('Loading…');
        });

    it('sets alert message as the accessible description of the combobox when there is an alert with error',
        async function() {
          const user = userEvent.setup(),
              inputElement = quickRender({ value: 'f', loadError: 'err' }).getByRole('combobox');

          await user.click(inputElement);
          expect(inputElement).toHaveAccessibleDescription('An error occurred loading data. err Retry');
        });

    it('sets the message in addition to internal alert description if the message has an id and' +
      'is referenced by aria-describedby passed in the combobox', async function() {
      const user = userEvent.setup(),
          jsx = (
            <>
              <span id="label">Combobox</span>
              <NxCombobox { ...minimalProps } value="f" aria-describedby="label"/>
            </>
          ),
          component = render(jsx),
          inputElement = component.getByRole('combobox');

      await user.click(inputElement);
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
      const user = userEvent.setup(),
          { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox');

      await user.click(inputElement);
      await user.keyboard('[ArrowDown]');
      const optionBtns = getAllByRole('option');
      expect(inputElement).toHaveAttribute('aria-activedescendant', optionBtns[0].id);
    });

    it('sets aria-expanded to false when a dropdown item is selected by Enter key', async function() {
      const user = userEvent.setup(),
          { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
          inputElement = getByRole('combobox');

      // initial focus of the input
      await user.tab();
      expect(inputElement).toHaveAttribute('aria-expanded', 'true');

      // selection is made with Enter key
      const optionBtn = getByRole('option');
      await user.keyboard('[ArrowDown]');
      expect(optionBtn).toHaveAttribute('aria-selected', 'true');
      await user.keyboard('[Enter]');
      expect(inputElement).toHaveAttribute('aria-expanded', 'false');
    });

    it('sets aria-expanded to true when the input receives focus after dropdown selection and blur', async function() {
      const user = userEvent.setup(),
          { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
          inputElement = getByRole('combobox');

      await user.tab();
      await user.keyboard('[ArrowDown]');
      await user.keyboard('[Enter]');

      expect(inputElement).toHaveAttribute('aria-expanded', 'false');
      expect(inputElement).toHaveFocus();

      // force input to lose focus
      await user.tab();
      expect(inputElement).not.toHaveFocus();
      expect(inputElement).toHaveAttribute('aria-expanded', 'false');

      // focus input again
      await user.tab({ shift: true });
      expect(inputElement).toHaveFocus();
      expect(inputElement).toHaveAttribute('aria-expanded', 'true');
    });

    it('places the editing cursor at the begining of the input field when Home key is pressed with focus in combobox',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              { getByRole } = quickRender({ value: 'f', onChange }),
              inputElement = getByRole('combobox');

          await user.click(inputElement);
          await user.keyboard('[Home]o');
          expect(onChange).toBeCalledWith('of');
        });

    it('places the editing cursor at the end of the input field when End key is pressed with focus in combobox',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              { getByRole} = quickRender({ value: 'f', onChange }),
              inputElement = getByRole('combobox');

          await user.click(inputElement);
          await user.keyboard('[Home][End]o');
          expect(onChange).toBeCalledWith('fo');
        });

    it('places the editing cursor at the begining of the input field when Home key is pressed with focus in dropdown',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }], value: 'f', onChange }),
              inputElement = getByRole('combobox');

          await user.click(inputElement);
          const optionBtn = getByRole('option');

          await user.keyboard('[ArrowDown]');
          expect(optionBtn).toHaveAttribute('aria-selected', 'true');
          await user.keyboard('[Home]o');
          expect(onChange).toBeCalledWith('of');
          expect(optionBtn).toHaveAttribute('aria-selected', 'false');
        });

    it('places the editing cursor at the end of the input field when End key is pressed with focus in dropdown',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }], value: 'f', onChange }),
              inputElement = getByRole('combobox');

          await user.click(inputElement);
          const optionBtn = getByRole('option');

          await user.keyboard('[ArrowUp]');
          expect(optionBtn).toHaveAttribute('aria-selected', 'true');
          await user.keyboard('[Home][End]o');
          expect(onChange).toBeCalledWith('fo');
          expect(optionBtn).toHaveAttribute('aria-selected', 'false');
        });

    it('should move visual focus to the next option if dropdown is open' +
      'and the down arrow key is pressed', async function() {
      const user = userEvent.setup(),
          { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox');

      await user.click(inputElement);
      const firstOptBtn = getAllByRole('option')[0],
          secondOptBtn = getAllByRole('option')[1];

      await user.keyboard('[ArrowDown]');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'true');
      expect(inputElement).toHaveAttribute('aria-activedescendant', firstOptBtn.id);
      await user.keyboard('[ArrowDown]');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'false');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'true');
      expect(inputElement).toHaveAttribute('aria-activedescendant', secondOptBtn.id);
    });

    it('should move visual focus to the first option if current focus is on the last option' +
      'and the down arrow key is pressed', async function() {
      const user = userEvent.setup(),
          { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox');

      await user.click(inputElement);
      const firstOptBtn = getAllByRole('option')[0],
          secondOptBtn = getAllByRole('option')[1];

      await user.keyboard('[ArrowUp]');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'true');
      expect(inputElement).toHaveAttribute('aria-activedescendant', secondOptBtn.id);
      await user.keyboard('[ArrowDown]');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'false');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'true');
      expect(inputElement).toHaveAttribute('aria-activedescendant', firstOptBtn.id);
    });

    it('should move visual focus to the previous option if dropdown is open' +
      'and the up arrow key is pressed', async function() {
      const user = userEvent.setup(),
          { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox');

      await user.click(inputElement);
      const firstOptBtn = getAllByRole('option')[0],
          secondOptBtn = getAllByRole('option')[1];

      await user.keyboard('[ArrowUp]');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'true');
      expect(inputElement).toHaveAttribute('aria-activedescendant', secondOptBtn.id);
      await user.keyboard('[ArrowUp]');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'false');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'true');
      expect(inputElement).toHaveAttribute('aria-activedescendant', firstOptBtn.id);
    });

    it('should move visual focus to the last option if current focus is on the first option' +
      'and the up arrow key is pressed', async function() {
      const user = userEvent.setup(),
          { getByRole, getAllByRole } = quickRender({
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }] }),
          inputElement = getByRole('combobox');

      await user.click(inputElement);
      const firstOptBtn = getAllByRole('option')[0],
          secondOptBtn = getAllByRole('option')[1];

      await user.keyboard('[ArrowDown]');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'true');
      expect(inputElement).toHaveAttribute('aria-activedescendant', firstOptBtn.id);
      await user.keyboard('[ArrowUp]');
      expect(firstOptBtn).toHaveAttribute('aria-selected', 'false');
      expect(secondOptBtn).toHaveAttribute('aria-selected', 'true');
      expect(inputElement).toHaveAttribute('aria-activedescendant', secondOptBtn.id);
    });

    it('sets the value to be backspaced text when backspace is pressed', async function() {
      const user = userEvent.setup(),
          onChange = jest.fn(),
          { getByRole } = quickRender({ value: 'foo', onChange }),
          inputElement = getByRole('combobox') as HTMLInputElement;

      await user.click(inputElement);
      inputElement.setSelectionRange(1, 2);
      await user.keyboard('[Backspace]');
      expect(onChange).toHaveBeenCalledWith('fo');
    });

    it('should clear input text if dropdown is close when Escape key is pressed', async function() {
      const user = userEvent.setup(),
          onChange = jest.fn(),
          { getByRole } = quickRender({
            value: 'a',
            matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }],
            onChange}),
          inputElement = getByRole('combobox');

      await user.click(inputElement);
      await user.keyboard('[Escape]');
      expect(onChange).toBeCalledWith('');
    });

    it('calls preventDefault on the event when Escape key is pressed and the value is not empty', async function() {
      const user = userEvent.setup(),
          { getByRole } = quickRender({ value: 'a' }),
          inputElement = getByRole('combobox'),
          keyEvent = createEvent.keyDown(inputElement, { cancelable: true, key: 'Escape' });

      await user.click(inputElement);
      fireEvent(inputElement, keyEvent);

      expect(keyEvent.defaultPrevented).toBe(true);
    });

    it('does not call preventDefault on the event when Escape key is pressed and the value is empty', async function() {
      const user = userEvent.setup(),
          { getByRole } = quickRender(),
          inputElement = getByRole('combobox'),
          keyEvent = createEvent.keyDown(inputElement, { cancelable: true, key: 'Escape' });

      await user.click(inputElement);
      fireEvent(inputElement, keyEvent);

      expect(keyEvent.defaultPrevented).toBe(false);
    });
  });

  describe('when not validatable', function() {
    const nonValidatableMinimalProps = { ...minimalProps, validatable: false };

    describe('when pristine', function() {
      const pristineMinimalProps = { ...nonValidatableMinimalProps, isPristine: true };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps:Props = pristineMinimalProps,
            quickRender = rtlRender<RenderProps>(NxCombobox, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the combobox', function() {
          expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxCombobox { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the combobox', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps:Props =
            { ...pristineMinimalProps, validationErrors: 'foo', id: '1' },
            multiValidationErrorsMinimalProps:Props =
            { ...pristineMinimalProps, validationErrors: ['bar', 'foo'], id: '2' },
            singleRender = rtlRenderElement<RenderProps>(NxCombobox, singleValidationErrorsMinimalProps),
            multiRender = rtlRenderElement<RenderProps>(NxCombobox, multiValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const singleError = within(singleRender() as HTMLElement),
              multiError = within(multiRender() as HTMLElement);

          expect(singleError.queryByRole('alert')).not.toBeInTheDocument();
          expect(singleError.getByRole('combobox')).not.toHaveErrorMessage();

          expect(multiError.queryByRole('alert')).not.toBeInTheDocument();
          expect(multiError.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the combobox', function() {
          const singleError = within(singleRender() as HTMLElement),
              multiError = within(multiRender() as HTMLElement);

          expect(singleError.getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          expect(multiError.getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxCombobox { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the combobox', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });

    describe('when not pristine', function() {
      const nonPristineMinimalProps = { ...nonValidatableMinimalProps, isPristine: false };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps:Props = nonPristineMinimalProps,
            quickRender = rtlRender<RenderProps>(NxCombobox, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the combobox', function() {
          expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxCombobox { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the combobox', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps:Props =
            { ...nonPristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps:Props =
            { ...nonPristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRenderElement<RenderProps>(NxCombobox, singleValidationErrorsMinimalProps),
            multiRender = rtlRenderElement<RenderProps>(NxCombobox, multiValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const singleError = within(singleRender() as HTMLElement),
              multiError = within(multiRender() as HTMLElement);

          expect(singleError.queryByRole('alert')).not.toBeInTheDocument();
          expect(singleError.getByRole('combobox')).not.toHaveErrorMessage();

          expect(multiError.queryByRole('alert')).not.toBeInTheDocument();
          expect(multiError.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the combobox', function() {
          const singleError = within(singleRender() as HTMLElement),
              multiError = within(multiRender() as HTMLElement);

          expect(singleError.getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          expect(multiError.getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxCombobox { ...nonValidatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the combobox', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });
  });

  describe('when validatable', function() {
    const validatableMinimalProps = { ...minimalProps, validatable: true };

    describe('when pristine', function() {
      const pristineMinimalProps = { ...validatableMinimalProps, isPristine: true };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps:Props = pristineMinimalProps,
            quickRender = rtlRender<RenderProps>(NxCombobox, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the combobox', function() {
          expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxCombobox { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the combobox', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps:Props =
            { ...pristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps:Props =
            { ...pristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRender<RenderProps>(NxCombobox, singleValidationErrorsMinimalProps),
            multiRender = rtlRender<RenderProps>(NxCombobox, multiValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.queryByRole('alert')).not.toBeInTheDocument();
          expect(singleError.getByRole('combobox')).not.toHaveErrorMessage();

          expect(multiError.queryByRole('alert')).not.toBeInTheDocument();
          expect(multiError.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the combobox', function() {
          const singleError = singleRender(),
              multiError = multiRender();

          expect(singleError.getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          expect(multiError.getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxCombobox { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          const singleRender = () => quickRender(singleValidationErrorsMinimalProps),
              multiRender = () => quickRender(multiValidationErrorsMinimalProps);

          it('has non-empty validation alert and a11y error message based on the first error', function() {
            const singleError = singleRender(),
                multiError = multiRender();

            expect(singleError.getByRole('alert')).toHaveTextContent('foo');
            expect(singleError.getByRole('combobox')).toHaveErrorMessage('foo');

            expect(multiError.getByRole('alert')).toHaveTextContent('bar');
            expect(multiError.getByRole('combobox')).toHaveErrorMessage('bar');
          });

          it('sets aria-invalid on the combobox', function() {
            const singleError = singleRender(),
                multiError = multiRender();

            expect(singleError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
            expect(multiError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });

    describe('when not pristine', function() {
      const nonPristineMinimalProps = { ...validatableMinimalProps, isPristine: false };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps:Props = nonPristineMinimalProps,
            quickRender = rtlRender<RenderProps>(NxCombobox, noValidationErrorsMinimalProps);

        it('has no validation alert and no a11y error message', function() {
          const component = quickRender();

          expect(component.queryByRole('alert')).not.toBeInTheDocument();
          expect(component.getByRole('combobox')).not.toHaveErrorMessage();
        });

        it('does not set aria-invalid on the combobox', function() {
          expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxCombobox { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          it('has no validation alert and no a11y error message', function() {
            const component = quickRender();

            expect(component.queryByRole('alert')).not.toBeInTheDocument();
            expect(component.getByRole('combobox')).not.toHaveErrorMessage();
          });

          it('does not set aria-invalid on the combobox', function() {
            expect(quickRender().getByRole('combobox')).not.toHaveAttribute('aria-invalid', 'true');
          });
        });
      });

      describe('when there are validation errors', function() {
        const singleValidationErrorsMinimalProps:Props =
            { ...nonPristineMinimalProps, validationErrors: 'foo' },
            multiValidationErrorsMinimalProps:Props =
            { ...nonPristineMinimalProps, validationErrors: ['bar', 'foo'] },
            singleRender = rtlRenderElement<RenderProps>(NxCombobox, singleValidationErrorsMinimalProps),
            multiRender = rtlRenderElement<RenderProps>(NxCombobox, multiValidationErrorsMinimalProps);

        it('has non-empty validation alert and a11y error message based on the first error', function() {
          const singleError = within(singleRender() as HTMLElement),
              multiError = within(multiRender() as HTMLElement);

          expect(singleError.getByRole('alert')).toHaveTextContent('foo');
          expect(singleError.getByRole('combobox')).toHaveErrorMessage('foo');

          expect(multiError.getByRole('alert')).toHaveTextContent('bar');
          expect(multiError.getByRole('combobox')).toHaveErrorMessage('bar');
        });

        it('sets aria-invalid on the combobox', function() {
          const singleError = within(singleRender() as HTMLElement),
              multiError = within(multiRender() as HTMLElement);

          expect(singleError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
          expect(multiError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
        });

        describe('when in a form with showValidationErrors', function() {
          function quickRender(extraProps?: Partial<Props>) {
            const renderResult = render(
              <NxForm showValidationErrors onSubmit={() => {}}>
                <NxCombobox { ...validatableMinimalProps } { ...extraProps } />
              </NxForm>
            );

            const boundQueries = within(renderResult.container);

            return { ...renderResult, ...boundQueries };
          }

          const singleRender = () => quickRender(singleValidationErrorsMinimalProps),
              multiRender = () => quickRender(multiValidationErrorsMinimalProps);

          it('has non-empty validation alert and a11y error message based on the first error', function() {
            const singleError = singleRender(),
                multiError = multiRender();

            expect(singleError.getByRole('alert')).toHaveTextContent('foo');
            expect(singleError.getByRole('combobox')).toHaveErrorMessage('foo');

            expect(multiError.getByRole('alert')).toHaveTextContent('bar');
            expect(multiError.getByRole('combobox')).toHaveErrorMessage('bar');
          });

          it('sets aria-invalid on the combobox', function() {
            const singleError = singleRender(),
                multiError = multiRender();

            expect(singleError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
            expect(multiError.getByRole('combobox')).toHaveAttribute('aria-invalid', 'true');
          });
        });
      });
    });
  });

  describe('filterInput prop', function() {
    describe('when false, null, or undefined', function() {
      it('does not render a clear button', async function() {
        const unsetNoValue = quickRender(),
            unsetWithValue = quickRender({ value: 'a' }),
            undefinedNoValue = quickRender({ filterInput: undefined }),
            undefinedWithValue = quickRender({ filterInput: undefined, value: 'a' }),
            nullNoValue = quickRender({ filterInput: null }),
            nullWithValue = quickRender({ filterInput: null, value: 'a' }),
            falseNoValue = quickRender({ filterInput: false }),
            falseWithValue = quickRender({ filterInput: false, value: 'a' });

        await runTimers();

        expect(unsetNoValue.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();
        expect(unsetWithValue.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();

        expect(undefinedNoValue.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();
        expect(undefinedWithValue.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();

        expect(nullNoValue.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();
        expect(nullWithValue.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();

        expect(falseNoValue.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();
        expect(falseWithValue.queryByRole('button', { name: /clear/i })).not.toBeInTheDocument();
      });
    });

    describe('when true', function() {
      const quickRender = rtlRender<RenderProps>(NxCombobox, { ...minimalProps, filterInput: true });

      // Note: the button only being visible when a value is entered is implemented in CSS and so not
      // tested here

      it('renders a clear button with "Clear filter" as the tooltip and a11y name', async function() {
        const user = userEvent.setup(),
            view = quickRender({ value: 'a' });

        await runTimers();

        const clearButton = await view.findByRole('button', { name: 'Clear filter' });

        expect(clearButton).toBeInTheDocument();

        await user.hover(clearButton);
        await runTimers();

        expect(screen.getByRole('tooltip')).toHaveTextContent('Clear filter');
      });

      it('does not submit the form when the clear button is clicked', async function() {
        const user = userEvent.setup(),
            onSubmit = jest.fn(),
            view = render(
              <NxForm onSubmit={onSubmit} showValidationErrors={false} >
                <NxCombobox {...minimalProps} filterInput={true} value="a" />
              </NxForm>
            );

        await runTimers();
        const clearBtn = view.getByRole('button', { name: /clear/i });
        expect(onSubmit).not.toHaveBeenCalled();

        await user.click(clearBtn);
        expect(onSubmit).not.toHaveBeenCalled();
      });

      it('still clears the input and triggers a search on the empty string when Escape key is pressed', async () => {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            onSearch = jest.fn(),
            { getByRole } = quickRender({
              value: 'a',
              matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }],
              onChange,
              onSearch
            }),
            inputElement = getByRole('combobox');

        await runTimers();

        await user.click(inputElement);
        await user.keyboard('[Escape]');
        expect(onChange).toBeCalledWith('');
        expect(onChange).toBeCalledTimes(1);

        expect(onSearch).toBeCalledWith('');
        expect(onSearch).toBeCalledTimes(1);
      });

      it('clears the input when the clear button is clicked', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            onSearch = jest.fn(),
            view = quickRender({
              value: 'a',
              matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }],
              onChange,
              onSearch
            });

        await runTimers();

        const clearButton = view.getByRole('button', { name: /clear/i });

        await user.click(clearButton);
        expect(onChange).toBeCalledWith('');
        expect(onChange).toBeCalledTimes(1);

        expect(onSearch).toBeCalledWith('');
        expect(onSearch).toBeCalledTimes(1);
      });

      it('calls preventDefault on the event when Escape key is pressed and the value is not empty', async function() {
        const user = userEvent.setup(),
            { getByRole } = quickRender({ value: 'a' }),
            inputElement = getByRole('combobox'),
            keyEvent = createEvent.keyDown(inputElement, { cancelable: true, key: 'Escape' });

        await user.click(inputElement);
        fireEvent(inputElement, keyEvent);

        expect(keyEvent.defaultPrevented).toBe(true);
      });

      it('does not call preventDefault on the event when Escape key is pressed and the value is empty', async () => {
        const user = userEvent.setup(),
            { getByRole } = quickRender(),
            inputElement = getByRole('combobox'),
            keyEvent = createEvent.keyDown(inputElement, { cancelable: true, key: 'Escape' });

        await user.click(inputElement);
        fireEvent(inputElement, keyEvent);

        expect(keyEvent.defaultPrevented).toBe(false);
      });
    });

    describe('when set to "search"', function() {
      const quickRender = rtlRender<Props>(NxCombobox, { ...minimalProps, filterInput: 'search' });

      it('renders a clear button with "Clear search" as the tooltip and a11y name', async function() {
        const user = userEvent.setup(),
            view = quickRender({ value: 'a' });

        await runTimers();

        const clearButton = await view.findByRole('button', { name: 'Clear search' });

        expect(clearButton).toBeInTheDocument();

        await user.hover(clearButton);
        await runTimers();

        expect(screen.getByRole('tooltip')).toHaveTextContent('Clear search');
      });

      it('does not submit the form when the clear button is clicked', async function() {
        const user = userEvent.setup(),
            onSubmit = jest.fn(),
            view = render(
              <NxForm onSubmit={onSubmit} showValidationErrors={false} >
                <NxCombobox {...minimalProps} filterInput={true} value="a"/>
              </NxForm>
            );

        await runTimers();
        const clearBtn = view.getByRole('button', { name: /clear/i });
        expect(onSubmit).not.toHaveBeenCalled();

        await user.click(clearBtn);
        expect(onSubmit).not.toHaveBeenCalled();
      });

      it('still clears the input and triggers a search on the empty string when Escape key is pressed', async () => {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            onSearch = jest.fn(),
            { getByRole } = quickRender({
              value: 'a',
              matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }],
              onChange,
              onSearch
            }),
            inputElement = getByRole('combobox');

        await runTimers();

        await user.click(inputElement);
        await user.keyboard('[Escape]');
        expect(onChange).toBeCalledWith('');
        expect(onChange).toBeCalledTimes(1);

        expect(onSearch).toBeCalledWith('');
        expect(onSearch).toBeCalledTimes(1);
      });

      it('clears the input when the clear button is clicked', async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            onSearch = jest.fn(),
            view = quickRender({
              value: 'a',
              matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }],
              onChange,
              onSearch
            });

        await runTimers();

        const clearButton = view.getByRole('button', { name: /clear/i });

        await user.click(clearButton);
        expect(onChange).toBeCalledWith('');
        expect(onChange).toBeCalledTimes(1);

        expect(onSearch).toBeCalledWith('');
        expect(onSearch).toBeCalledTimes(1);
      });

      it('calls preventDefault on the event when Escape key is pressed and the value is not empty', async function() {
        const user = userEvent.setup(),
            { getByRole } = quickRender({ value: 'a' }),
            inputElement = getByRole('combobox'),
            keyEvent = createEvent.keyDown(inputElement, { cancelable: true, key: 'Escape' });

        await user.click(inputElement);
        fireEvent(inputElement, keyEvent);

        expect(keyEvent.defaultPrevented).toBe(true);
      });

      it('does not call preventDefault on the event when Escape key is pressed and the value is empty', async () => {
        const user = userEvent.setup(),
            { getByRole } = quickRender(),
            inputElement = getByRole('combobox'),
            keyEvent = createEvent.keyDown(inputElement, { cancelable: true, key: 'Escape' });

        await user.click(inputElement);
        fireEvent(inputElement, keyEvent);

        expect(keyEvent.defaultPrevented).toBe(false);
      });
    });
  });
});
