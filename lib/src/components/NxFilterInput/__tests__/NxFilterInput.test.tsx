/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { RefAttributes } from 'react';
import { waitFor } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import userEvent from '@testing-library/user-event';

import NxFilterInput, { Props } from '../NxFilterInput';

describe('NxFilterInput', function() {
  const minimalProps: Props & RefAttributes<HTMLDivElement> = { value: '' },
      quickRender = rtlRender(NxFilterInput, minimalProps),
      renderEl = rtlRenderElement(NxFilterInput, minimalProps);

  it('renders an Input', function() {
    expect(quickRender().getByRole('textbox').tagName).toBe('INPUT');
  });

  it('adds additional specified classNames to the top-level element', function() {
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
});
