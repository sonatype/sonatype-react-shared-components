/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
// import React, { useState } from 'react';
import React, { RefAttributes } from 'react';
import { fireEvent, render, within } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import userEvent from '@testing-library/user-event';

import NxCombobox, { Props } from '../NxCombobox';
import NxForm from '../../NxForm/NxForm';

describe('NxCombobox', function() {
  const minimalProps: Props = {
        value: '',
        onChange: () => {},
        onSearch: () => {},
        matches: []
      },
      quickRender = rtlRender<Props & RefAttributes<HTMLDivElement>>(NxCombobox, minimalProps),
      renderEl = rtlRenderElement<Props & RefAttributes<HTMLDivElement>>(NxCombobox, minimalProps);

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
        const props = {
              autoComplete: true,
              matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Fooo' }]
            },
            { getByRole, rerender } = quickRender(props),
            inputElement = getByRole('combobox');

        inputElement.focus();
        rerender(<NxCombobox { ...minimalProps } { ...props } value="f" />);
        expect(inputElement).toHaveValue('Foo');
      });

  it('sets aria-expanded on the input to true when focused',
      async function() {
        const { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
            inputElement = getByRole('combobox');

        expect(inputElement).toHaveAttribute('aria-expanded', 'false');
        inputElement.focus();
        expect(inputElement).toHaveAttribute('aria-expanded', 'true');

      // visibility of dropdown when focused is tested in visual tests
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

  it('sets the listbox role on the dropdown', function() {
    const { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
        dropdownElement = getByRole('listbox');

    expect(dropdownElement).toBeInTheDocument();
  });

  it('sets an id on the dropdown and references it in the combobox input aria-controls', function() {
    const { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }] }),
        inputElement = getByRole('combobox'),
        dropdownElement = getByRole('listbox');

    inputElement.focus();
    expect(dropdownElement).toHaveAttribute('id');
    expect(inputElement).toHaveAttribute('aria-controls', dropdownElement.id);
  });

  it('renders an alert dropdown with the alert role when it is in loading, error, or empty states', function() {
    const { getByRole, rerender } = quickRender({ value: 'f' }),
        alertDropdownElement = getByRole('alert');

    expect(alertDropdownElement).toBeInTheDocument();

    rerender(<NxCombobox { ...minimalProps } loading={true} />);
    expect(alertDropdownElement).toBeInTheDocument();

    rerender(<NxCombobox { ...minimalProps } loadError={'boo'} />);
    expect(alertDropdownElement).toBeInTheDocument();

    rerender(<NxCombobox { ...minimalProps } matches={ [{ id: '1', displayName: 'Foo' }] } />);
    expect(alertDropdownElement).not.toBeInTheDocument();
  });

  it('sets aria-live on the alert dropdown to "polite"', function() {
    expect(quickRender({ loading: true }).getByRole('alert')).toHaveAttribute('aria-live', 'polite');
    expect(quickRender({ loadError: 'boo' }).getByRole('alert')).toHaveAttribute('aria-live', 'polite');
    expect(quickRender({ value: 'f' }).getByRole('alert')).toHaveAttribute('aria-live', 'polite');
  });

  it('sets aria-busy on the alert dropdown if loading is true', function() {
    const { getByRole, queryByRole, rerender } = quickRender({ loading: true });
    let alertDropdownElement: Element | null = getByRole('alert');

    expect(alertDropdownElement).toHaveAttribute('aria-busy', 'true');

    rerender(<NxCombobox { ...minimalProps } loading={false} />);
    alertDropdownElement = queryByRole('alert');

    expect(alertDropdownElement).not.toBeInTheDocument();
  });

  it('renders error and textcontent when the `loadError` prop is set', function() {
    const { getByRole } = quickRender({ loadError: 'err' }),
        errorElement = getByRole('alert');

    expect(errorElement).toBeInTheDocument();
    expect(errorElement).toHaveTextContent('err');
  });

  it('fires onSearch with the search text when the retry button is clicked', async function() {
    const user = userEvent.setup(),
        onSearch = jest.fn(),
        { getByRole } = quickRender({ value: 'f', loadError: 'err', onSearch }),
        retryBtn = getByRole('button', { name: /retry/i });

    expect(onSearch).not.toHaveBeenCalled();
    await user.click(retryBtn);
    expect(onSearch).toHaveBeenCalledWith('f');
  });

  it('fires onChange when the button with role option is clicked and passes the DataItem as a second arg',
      async function() {
        const user = userEvent.setup(),
            onChange = jest.fn(),
            { getAllByRole } = quickRender({
              matches: [{ id: '1', displayName: 'Foo' }, { id: '2', displayName: 'Boo' }], onChange }),
            optionBtns = getAllByRole('option');

        await user.click(optionBtns[1]);
        expect(onChange).toHaveBeenCalledWith('Boo', { id: '2', displayName: 'Boo' });
      }
  );

  it('does not render the empty message if there are no results and the value is empty', function() {
    const { queryByRole } = quickRender(),
        emptyMessage = queryByRole('alert');

    expect(emptyMessage).not.toBeInTheDocument();
  });

  it('renders empty message if there are no results and the value is not empty', function() {
    const { getByRole } = quickRender({ value: 'foo' }),
        emptyMessage = getByRole('alert');

    expect(emptyMessage).toBeInTheDocument();
    expect(emptyMessage).toHaveTextContent('No Results Found');
  });

  it('sets the empty message from the `emptyMessage` prop', function() {
    const { getByRole } = quickRender({ emptyMessage: 'asdfasdf', value: 'foo' }),
        emptyMessage = getByRole('alert');

    expect(emptyMessage).toBeInTheDocument();
    expect(emptyMessage).toHaveTextContent('asdfasdf');
  });

  it('calls onSearch with the current search text if focus enters the component from elsewhere on the page ' +
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
        inputElement = getByRole('combobox'),
        retryBtn = getByRole('button', { name: /retry/i });

    expect(onSearch).not.toHaveBeenCalled();

    inputElement.focus();
    expect(onSearch).not.toHaveBeenCalled();

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
          const inputElement = quickRender({ value: 'f', emptyMessage: 'Sorry! No Results Found' })
              .getByRole('combobox');

          expect(inputElement).toHaveAccessibleDescription('Sorry! No Results Found');
        });

    it('sets alert message as the accessible description of the combobox when there is an alert with loading',
        async function() {
          const inputElement = quickRender({ value: 'f', loading: true }).getByRole('combobox');

          expect(inputElement).toHaveAccessibleDescription('Loading…');
        });

    it('sets alert message as the accessible description of the combobox when there is an alert with error',
        async function() {
          const inputElement = quickRender({ value: 'f', loadError: 'err' }).getByRole('combobox');

          expect(inputElement).toHaveAccessibleDescription('An error occurred loading data. err Retry');
        });

    it('sets the message in addition to internal alert description if the message has an id and' +
      'is referenced by aria-describedby passed in the combobox', async function() {
      const jsx =
        <>
          <span id="label">Combobox</span>
          <NxCombobox { ...minimalProps } value="f" aria-describedby="label"/>
        </>,
          component = render(jsx),
          inputElement = component.getByRole('combobox');

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

      inputElement.focus();
      await user.keyboard('[ArrowDown]');
      const optionBtns = getAllByRole('option');
      expect(inputElement).toHaveAttribute('aria-activedescendant', optionBtns[0].id);
    });

    it('places the editing cursor at the begining of the input field when Home key is pressed with focus in combobox',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              { getByRole } = quickRender({ value: 'f', onChange }),
              inputElement = getByRole('combobox');

          inputElement.focus();
          await user.keyboard('[Home]o');
          expect(onChange).toBeCalledWith('of');
        });

    it('places the editing cursor at the end of the input field when End key is pressed with focus in combobox',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              { getByRole} = quickRender({ value: 'f', onChange }),
              inputElement = getByRole('combobox');

          inputElement.focus();
          await user.keyboard('[Home][End]o');
          expect(onChange).toBeCalledWith('fo');
        });

    it('places the editing cursor at the begining of the input field when Home key is pressed with focus in dropdown',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              { getByRole } = quickRender({ matches: [{ id: '1', displayName: 'Foo' }], value: 'f', onChange }),
              inputElement = getByRole('combobox'),
              optionBtn = getByRole('option');

          inputElement.focus();
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
              inputElement = getByRole('combobox'),
              optionBtn = getByRole('option');

          inputElement.focus();
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
          inputElement = getByRole('combobox'),
          firstOptBtn = getAllByRole('option')[0],
          secondOptBtn = getAllByRole('option')[1];

      inputElement.focus();
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
          inputElement = getByRole('combobox'),
          firstOptBtn = getAllByRole('option')[0],
          secondOptBtn = getAllByRole('option')[1];

      inputElement.focus();
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
          inputElement = getByRole('combobox'),
          firstOptBtn = getAllByRole('option')[0],
          secondOptBtn = getAllByRole('option')[1];

      inputElement.focus();
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
          inputElement = getByRole('combobox'),
          firstOptBtn = getAllByRole('option')[0],
          secondOptBtn = getAllByRole('option')[1];

      inputElement.focus();
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

      inputElement.focus();
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

      inputElement.focus();
      await user.keyboard('[Escape]');
      expect(onChange).toBeCalledWith('');
    });
  });

  describe('when not validatable', function() {
    const nonValidatableMinimalProps = { ...minimalProps, validatable: false };

    describe('when pristine', function() {
      const pristineMinimalProps = { ...nonValidatableMinimalProps, isPristine: true };

      describe('when there are no validation errors', function() {
        const noValidationErrorsMinimalProps:Props = pristineMinimalProps,
            quickRender = rtlRender(NxCombobox, noValidationErrorsMinimalProps);

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
            singleRender = rtlRenderElement(NxCombobox, singleValidationErrorsMinimalProps),
            multiRender = rtlRenderElement(NxCombobox, multiValidationErrorsMinimalProps);

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
            quickRender = rtlRender(NxCombobox, noValidationErrorsMinimalProps);

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
            singleRender = rtlRenderElement(NxCombobox, singleValidationErrorsMinimalProps),
            multiRender = rtlRenderElement(NxCombobox, multiValidationErrorsMinimalProps);

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
            quickRender = rtlRender(NxCombobox, noValidationErrorsMinimalProps);

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
            singleRender = rtlRender(NxCombobox, singleValidationErrorsMinimalProps),
            multiRender = rtlRender(NxCombobox, multiValidationErrorsMinimalProps);

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
            quickRender = rtlRender(NxCombobox, noValidationErrorsMinimalProps);

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
            singleRender = rtlRenderElement(NxCombobox, singleValidationErrorsMinimalProps),
            multiRender = rtlRenderElement(NxCombobox, multiValidationErrorsMinimalProps);

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
});
