/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import { faCrow } from '@fortawesome/free-solid-svg-icons';
import { screen, within } from '@testing-library/react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';

import NxGlobalSidebar2NavigationLink, { NxGlobalSidebar2NavigationLinkProps as Props }
  from '../NxGlobalSidebar2NavigationLink';

describe('NxGlobalSidebar2NavigationLink', function() {
  const minimalProps: Props = {
        icon: faCrow,
        text: 'textLink',
        href: '#someurl'
      },
      quickRender = rtlRender<Props>(NxGlobalSidebar2NavigationLink, minimalProps),
      renderEl = rtlRenderElement<Props>(NxGlobalSidebar2NavigationLink, minimalProps);

  describe('tooltips', function () {
    it('renders a tooltip on hover if link text overflow occurs', async function() {
      // Supress overflow tooltip warnings
      jest.spyOn(console, 'warn').mockImplementation(() => {});

      // Mock layout methods imported from NxOverflowTooltip RTL test.
      jest.spyOn(Element.prototype, 'getBoundingClientRect').mockReturnValue({
        x: 0,
        y: 0,
        width: 1,
        height: 1,
        top: 0,
        right: 1,
        bottom: 1,
        left: 0
      } as DOMRect);

      // mock that text extends 1px farther than container
      jest.spyOn(Range.prototype, 'getBoundingClientRect').mockReturnValue({
        x: 0,
        y: 0,
        width: 2,
        height: 1,
        top: 0,
        right: 2,
        bottom: 1,
        left: 0
      } as DOMRect);

      const view = quickRender(),
          link = view.getByRole('link'),
          user = userEvent.setup();

      await user.hover(link);

      const tooltip = await screen.findByRole('tooltip');

      expect(tooltip).toBeInTheDocument();
      expect(tooltip).toHaveTextContent('textLink');
    });

    it('does not render a tooltip on hover if link text overflow doesn\'t occur', async function() {
      const view = quickRender(),
          link = view.getByRole('link'),
          user = userEvent.setup();

      await user.hover(link);

      expect(screen.queryByRole('tooltip')).not.toBeInTheDocument();
    });

  });

  it('renders a link with the passed href and classes', function() {
    const el = renderEl({ className: 'extra-class' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('extra-class');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }

    expect(el).toHaveAttribute('href', '#someurl');
  });

  it('passes additional specified attrs to the <a>', function() {
    const link = quickRender({ id: 'foo', lang: 'en_US' }).getByRole('link');

    expect(link).toHaveAttribute('id', 'foo');
    expect(link).toHaveAttribute('lang', 'en_US');
  });

  it('renders the specified text inside the link', function () {
    expect(quickRender().getByRole('link')).toHaveTextContent('textLink');
  });

  it('renders the specified icon inside the link', function() {
    const link = quickRender().getByRole('link');
    expect(within(link).getByRole('img', { hidden: true })).toBeInTheDocument();
  });
});
