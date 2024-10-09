/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { rtlRender } from '../../../__testutils__/rtlUtils';
import { within } from '@testing-library/react';

import NxGlobalHeader2, { Props } from '../NxGlobalHeader2';

describe('NxGlobalHeader2', function() {
  const minimalProps: Props = {
    logoImg: 'logoImg',
    logoAltText: 'alt text',
    logoLink: '/ref'
  };

  const quickRender = rtlRender<Props>(NxGlobalHeader2, minimalProps);

  it('renders a banner', function() {
    const view = quickRender();
    expect(view.getByRole('banner')).toBeInTheDocument();
  });

  it('renders a link to the home page as specified by logoLink', function() {
    const view = quickRender(),
        banner = view.getByRole('banner'),
        link = within(banner).getByRole('link');

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute('href', minimalProps.logoLink);
  });

  it('renders a logo within the home page link with the specified img src and alt text', function() {
    const view = quickRender(),
        banner = view.getByRole('banner'),
        link = within(banner).getByRole('link'),
        img = within(link).getByRole('img');

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute('src', minimalProps.logoImg);
    expect(img).toHaveAttribute('alt', minimalProps.logoAltText);
    expect(img).toHaveAccessibleName(minimalProps.logoAltText);
  });

  it('renders children', function() {
    const children = <div data-testid="test-children">test children</div>,
        view = quickRender({ children }),
        banner = view.getByRole('banner');

    expect(within(banner).getByTestId('test-children')).toBeInTheDocument();
  });
});
