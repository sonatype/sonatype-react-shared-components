/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';
import NxCloseButton from '../NxCloseButton';

describe('NxCloseButton', function() {
  const quickRender = rtlRender(NxCloseButton, {}),
      renderEl = rtlRenderElement(NxCloseButton, {});

  it('renders a button with type=button with accessible name "Close"', function() {
    const view = quickRender(),
        btn = view.getByRole('button', { name: 'Close' });

    expect(btn).toBe(view.container.firstElementChild);
    expect(btn).toHaveAccessibleName('Close');
    expect(btn).toHaveAttribute('type', 'button');
  });

  it('passes the specified classes and attributes to the button', function() {
    const el = renderEl({ className: 'foo', id: 'bar', lang: 'en' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');
    expect(el).toHaveAttribute('id', 'bar');
    expect(el).toHaveAttribute('lang', 'en');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('sets aria-disabled on the button if the className includes a disabled class', function() {
    expect(renderEl()).not.toHaveAttribute('aria-disabled', 'true');
    expect(renderEl({ className: 'disabled' })).toHaveAttribute('aria-disabled', 'true');
    expect(renderEl({ className: 'disabled foo' })).toHaveAttribute('aria-disabled', 'true');
  });

  describe('onClick', function() {
    it('fires when the button is clicked', async function() {
      const user = userEvent.setup(),
          onClick = jest.fn(),
          el = renderEl({ onClick })!;

      expect(onClick).not.toHaveBeenCalled();

      await user.click(el);

      expect(onClick).toHaveBeenCalled();
    });

    it('does not fire on click if the button is disabled by attribute', async function() {
      const user = userEvent.setup(),
          onClick = jest.fn(),
          el = renderEl({ onClick, disabled: true })!;

      expect(onClick).not.toHaveBeenCalled();

      await user.click(el);

      expect(onClick).not.toHaveBeenCalled();
    });

    it('does not fire on click if the button is disabled by class', async function() {
      const user = userEvent.setup(),
          onClick = jest.fn(),
          el = renderEl({ onClick, className: 'disabled' })!;

      expect(onClick).not.toHaveBeenCalled();

      await user.click(el);

      expect(onClick).not.toHaveBeenCalled();
    });
  });

  it('fowards a ref to the button', function() {
    const ref = React.createRef<HTMLButtonElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });
});
