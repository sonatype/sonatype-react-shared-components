/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { within } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxGlobalHeader2, { Props } from '../NxGlobalHeader2';

describe('NxGlobalHeader2', function() {
  const minimalProps: Props = {
    logoImg: 'logoImg',
    logoAltText: 'alt text',
    logoLink: '/ref'
  };

  const quickRender = rtlRender<Props>(NxGlobalHeader2, minimalProps);
  const renderEl = rtlRenderElement<Props>(NxGlobalHeader2, minimalProps);

  it('renders a banner as the top-level element', function() {
    const view = quickRender();

    expect(view.getByRole('banner')).toBeInTheDocument();
    expect(view.getByRole('banner')).toBe(view.container.firstChild);
  });

  it('adds additional props to the banner', function() {
    const el = renderEl({ id: 'test-id', lang: 'en' })!;

    expect(el).toHaveAttribute('lang', 'en');
    expect(el).toHaveAttribute('id', 'test-id');
  });

  it('merges any passed in className', function() {
    const componentWithAddedClass = renderEl({ className: 'foo' });
    const component = renderEl()!;

    expect(componentWithAddedClass).toHaveClass('foo');

    for (const cls of Array.from(component.classList)) {
      expect(componentWithAddedClass).toHaveClass(cls);
    }
  });

  it('renders a link to the home page as specified by logoLink', function() {
    const banner = renderEl()!,
        link = within(banner).getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', minimalProps.logoLink);
  });

  it('renders a logo within the home page link with the specified img src and alt text', function() {
    const banner = renderEl()!,
        link = within(banner).getByRole('link'),
        img = within(link).getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', minimalProps.logoImg);
    expect(img).toHaveAttribute('alt', minimalProps.logoAltText);
    expect(img).toHaveAccessibleName(minimalProps.logoAltText);
  });

  it('renders children', function() {
    const children = <div data-testid="test-children">test children</div>,
        banner = renderEl({ children })!;

    expect(within(banner).getByTestId('test-children')).toBeInTheDocument();
  });
});
