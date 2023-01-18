/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render, within } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxSystemNotice from '../NxSystemNotice';

describe('NxSystemNotice', function() {
  describe('NxSystemNotice', function() {
    const quickRender = rtlRender(NxSystemNotice, {}),
        renderEl = rtlRenderElement(NxSystemNotice, {});

    it('renders a top-level complementary element with a default accessible name of "system notice"', function() {
      const view = quickRender(),
          complementary = view.getByRole('complementary');

      expect(complementary).toHaveAccessibleName('system notice');
      expect(complementary).toBe(view.container.firstElementChild);
    });

    it('sets the specified attrs and classes on the complementary element', function() {
      const el = renderEl({ className: 'foo', id: 'bar', lang: 'en' }),
          defaultEl = renderEl()!;

      expect(el).toHaveAttribute('id', 'bar');
      expect(el).toHaveAttribute('lang', 'en');
      expect(el).toHaveClass('foo');

      for (const cls of Array.from(defaultEl.classList)) {
        expect(el).toHaveClass(cls);
      }
    });

    it('passes a ref to the complementary element', function() {
      const ref = React.createRef<HTMLDivElement>(),
          el = renderEl({ ref });

      expect(ref.current).toBe(el);
    });

    it('allows the accessible name to be overridden via aria-label', function() {
      const el = renderEl({ 'aria-label': 'foo' });

      expect(el).toHaveAccessibleName('foo');
    });

    it('allows the accessible name to be overridden via aria-labelledby', function() {
      render(<div id="label">foo</div>);

      const el = renderEl({ 'aria-labelledby': 'label' });

      expect(el).toHaveAccessibleName('foo');
    });
  });

  describe('NxSystemNotice.Container', function() {
    it('makes a generic element with the specified children', function() {
      const view = render(
            <NxSystemNotice.Container>
              <NxSystemNotice data-testid="child" />
            </NxSystemNotice.Container>
          ),
          container = within(view.container).getByRole('generic');

      expect(container).toBeInTheDocument();
      expect(within(container).getByTestId('child')).toBeInTheDocument();
    });
  });
});
