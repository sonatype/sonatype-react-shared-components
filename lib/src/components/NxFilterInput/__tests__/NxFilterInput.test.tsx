/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { waitFor } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import userEvent from '@testing-library/user-event';

import NxFilterInput, { Props } from '../NxFilterInput';

describe('NxFilterInput', function() {
  const minimalProps = { value: '' },
      quickRender = rtlRender<Props>(NxFilterInput, minimalProps),
      renderEl = rtlRenderElement<Props>(NxFilterInput, minimalProps);

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

    expect(input).not.toHaveAttribute('validatable', true);
    expect(input).not.toHaveAttribute('validationErrors', 'It\'s all wrong');
    expect(input).not.toHaveAttribute('type', 'textarea');
  });

  it('sets ref on the Input', function() {
    const ref = React.createRef<HTMLDivElement>(),
        el = renderEl({ ref } as Partial<Props>);

    expect(ref.current).toBe(el);
  });

  it('renders a filter icon when searchIcon is undefined', function() {
    const icons = quickRender().getAllByRole('img', { hidden: true });

    expect(icons[0]).toHaveAttribute('data-icon', 'filter');
  });

  it('renders a search icon when searchIcon is true', function() {
    const icons = quickRender({ searchIcon: true }).getAllByRole('img', { hidden: true });

    expect(icons[0]).toHaveAttribute('data-icon', 'search');
  });

  it('renders a button with an accessible name of "Clear filter" when searchIcon is undefined', async function() {
    const clearBtn = quickRender().getByRole('button');

    expect(clearBtn).toBeInTheDocument();
    await waitFor(() => expect(clearBtn).toHaveAccessibleName('Clear filter'));
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
