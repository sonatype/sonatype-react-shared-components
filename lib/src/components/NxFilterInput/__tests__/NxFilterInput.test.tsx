/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { createEvent, fireEvent, waitFor, render } from '@testing-library/react';
import { rtlRender, rtlRenderElement, runTimers } from '../../../__testutils__/rtlUtils';
import { userEvent } from '../../../__testutils__/rtlUtils';

import NxFilterInput, { Props } from '../NxFilterInput';
import NxForm from '../../NxForm/NxForm';

describe('NxFilterInput', function() {
  const minimalProps: Props & RefAttributes<HTMLDivElement> = { value: '' },
      quickRender = rtlRender(NxFilterInput, minimalProps),
      renderEl = rtlRenderElement(NxFilterInput, minimalProps);

  it('renders an Input with type="text"', function() {
    expect(quickRender().getByRole('textbox').tagName).toBe('INPUT');
    expect(quickRender().getByRole('textbox')).toHaveAttribute('type', 'text');
  });

  it('sets the value to the Input as specified', function() {
    expect(quickRender({ value: 'foo' }).getByRole('textbox')).toHaveAttribute('value', 'foo');
  });

  it('adds specified classNames to the top-level element in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes additional attrs to the Input', function() {
    const input = quickRender({ id: 'foo', lang: 'en-US' }).getByRole('textbox');

    expect(input).toHaveAttribute('id', 'foo');
    expect(input).toHaveAttribute('lang', 'en-US');
  });

  it('does not pass validatable, validationErrors, or type props to the Input', function() {
    const input = quickRender({
      validatable: true,
      validationErrors: 'It\'s all wrong',
      type: 'textarea'
    } as Partial<Props>).getByRole('textbox');

    expect(input).not.toHaveAttribute('type', 'textarea');
    expect(input).not.toHaveAttribute('aria-invalid');
    expect(input).not.toHaveErrorMessage('It\'s all wrong');
  });

  it('sets ref on the Input', function() {
    const ref = React.createRef<HTMLDivElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('sets disabled on the Input when the disabled prop is true', function() {
    expect(quickRender().getByRole('textbox')).not.toBeDisabled();
    expect(quickRender({ disabled: undefined }).getByRole('textbox')).not.toBeDisabled();
    expect(quickRender({ disabled: false }).getByRole('textbox')).not.toBeDisabled();
    expect(quickRender({ disabled: true }).getByRole('textbox')).toBeDisabled();
  });

  it('calls onKeyPress with the key value whenever the input\'s onKeyPress event fires', async function() {
    const user = userEvent.setup(),
        onKeyPress = jest.fn(),
        input = quickRender({ onKeyPress }).getByRole('textbox');

    expect(onKeyPress).not.toHaveBeenCalled();

    await user.type(input, 'a');

    expect(onKeyPress).toHaveBeenCalledWith('a');
  });

  it('calls onChange with the value whenever the input\'s onChange event fires', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn().mockImplementation((_, evt) => { evt.persist(); }),
        input = quickRender({ onChange }).getByRole('textbox');

    expect(onChange).not.toHaveBeenCalled();

    await user.type(input, 'a');

    expect(onChange).toHaveBeenCalledWith('a', expect.objectContaining({ target: input }));
  });

  it('renders a button with an accessible name of "Clear filter" when searchIcon is undefined, false or null',
      async function() {
        const clearBtn = quickRender().getByRole('button'),
            clearBtnWithSearchIconFalse = quickRender({ searchIcon: false }).getByRole('button'),
            clearBtnWithSearchIconNull = quickRender({ searchIcon: null }).getByRole('button');

        expect(clearBtn).toBeInTheDocument();
        await waitFor(() => expect(clearBtn).toHaveAccessibleName('Clear filter'));

        expect(clearBtnWithSearchIconFalse).toBeInTheDocument();
        await waitFor(() => expect(clearBtnWithSearchIconFalse).toHaveAccessibleName('Clear filter'));

        expect(clearBtnWithSearchIconNull).toBeInTheDocument();
        await waitFor(() => expect(clearBtnWithSearchIconNull).toHaveAccessibleName('Clear filter'));
      });

  it('renders a button with an accessible name of "Clear search" when searchIcon is true', async function() {
    const clearBtn = quickRender({ searchIcon: true }).getByRole('button');

    expect(clearBtn).toBeInTheDocument();
    await waitFor(() => expect(clearBtn).toHaveAccessibleName('Clear search'));
  });

  it('assigns type=button to the "Clear filter" or "Clear search" button', async function() {
    const filterView = quickRender(),
        searchView = quickRender({ searchIcon: true });

    await runTimers();

    const clearFilterBtn = filterView.getByRole('button', { name: 'Clear filter' }),
        clearSearchBtn = searchView.getByRole('button', { name: 'Clear search' });

    expect(clearFilterBtn).toHaveAttribute('type', 'button');
    expect(clearSearchBtn).toHaveAttribute('type', 'button');
  });

  it('does not submit the form when the clear button is clicked', async function() {
    const user = userEvent.setup(),
        onSubmit = jest.fn(),
        view = render(
          <NxForm onSubmit={onSubmit} showValidationErrors={false} >
            <NxFilterInput { ...minimalProps } value="a"/>
          </NxForm>
        );

    await runTimers();
    const clearBtn = view.getByRole('button', { name: 'Clear filter' });
    expect(onSubmit).not.toHaveBeenCalled();

    await user.click(clearBtn);
    expect(onSubmit).not.toHaveBeenCalled();
  });

  it('fires onChange with the empty string when the Escape key is pressed', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        el = quickRender({ value: 'a', onChange }),
        input = el.getByRole('textbox');

    expect(onChange).not.toHaveBeenCalled();

    input.focus();
    await user.keyboard('[Escape]');

    expect(onChange).toHaveBeenCalledWith('');
  });

  it('fires onChange with the empty string when the clear filter button is clicked', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        el = quickRender({ value: 'a', onChange }),
        clearBtn = el.getByRole('button');

    expect(onChange).not.toHaveBeenCalled();

    await user.click(clearBtn);

    expect(onChange).toHaveBeenCalledWith('');
  });

  it('calls preventDefault on the event when Escape key is pressed and the value is not empty', function() {
    const { getByRole } = quickRender({ value: 'a' }),
        inputElement = getByRole('textbox'),
        keyEvent = createEvent.keyDown(inputElement, { cancelable: true, key: 'Escape' });

    inputElement.focus();
    fireEvent(inputElement, keyEvent);

    expect(keyEvent.defaultPrevented).toBe(true);
  });

  it('does not call preventDefault on the event when Escape key is pressed and the value is empty', () => {
    const { getByRole } = quickRender(),
        inputElement = getByRole('textbox'),
        keyEvent = createEvent.keyDown(inputElement, { cancelable: true, key: 'Escape' });

    inputElement.focus();
    fireEvent(inputElement, keyEvent);

    expect(keyEvent.defaultPrevented).toBe(false);
  });
});
