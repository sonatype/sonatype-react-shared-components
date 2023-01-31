/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import NxPageHeader from '../NxPageHeader';

import { screen } from '@testing-library/react';
import { rtlRenderElement } from '../../../__testutils__/rtlUtils';

describe('NxPageHeader', function() {

  const renderEl = rtlRenderElement(NxPageHeader, {});

 it('renders a top-level banner element', function() {
    const el = renderEl();
    const header = screen.getByRole('banner');
    expect(header).toBe(el);
  });

  it('renders the default logo within the header', function() {
    renderEl();
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
  });

  it('renders a custom logo instead of the default one when given logo prop', function() {
    renderEl({ logo: { path: 'foo', alt: 'bar' } });
    const logo = screen.getByRole('img');

    expect(logo).toHaveAttribute('src', 'foo');
    expect(logo).toHaveAttribute('alt', 'bar');
  });

  it('renders logo link when given homeLink prop', function() {
    renderEl({ homeLink: '#home' });
    const homeLink = screen.getByRole('link', {name: 'Home'}),
      homeLinkLogo = screen.getByRole('img');

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href','#home');
    expect(homeLinkLogo).toBeInTheDocument();
  });

  it('renders links in header when given links prop', function() {
    renderEl({links: [{ name: 'foo', href: '#bar' }, { name: 'baz', href: '#qux', current: true }]});
    const link1 = screen.getByRole('link', {name: 'foo'}),
      link2 = screen.getByRole('link', {name: 'baz'})

    expect(link1).toBeInTheDocument();
    expect(link1).toHaveAttribute('href', '#bar');
    expect(link2).toBeInTheDocument();
    expect(link2).toHaveAttribute('href', '#qux');
    expect(link2).toHaveAttribute('aria-current', 'page');
  });

  it('renders the product name if provided', function() {
    const props = {
          productInfo: {
            name: 'test app'
          }
        };
    renderEl(props);
    const name = screen.getByText('test app');

    expect(name).toBeInTheDocument();
  });

  it('renders the product version if provided', function() {
    const props = {
          productInfo: {
            name: 'test app',
            version: '1.2.3'
          }
        };
    renderEl(props);
    const version = screen.getByText('Version: 1.2.3');

    expect(version).toBeInTheDocument();
  });

  it('renders children when passed as prop', function() {
    const props = {
          children: [<h1 key={1}>Foo</h1>, <button key={2}>Click Here For a Free iPhone</button>]
        };
    renderEl(props);
    const header = screen.getByText('Foo'),
    button = screen.getByRole('button', {name: 'Click Here For a Free iPhone'});

    expect(header).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders homeLink, link, productInfo and children when passed as props', function() {
    const props = {
          links: [{ name: 'foo', href: '#bar' }],
          homeLink: '#home',
          productInfo: { name: 'test app', version: '1.2.3' },
          children: <button>Click Here For a Free iPhone</button>
        };
    renderEl(props);

    const link = screen.getByRole('link',{name: 'foo'}),
        homeLink = screen.getByRole('link', {name: 'Home'}),
        homeLinkLogo = screen.getByRole('img'),
        productName = screen.getByText('test app'),
        productVersion = screen.getByText('Version: 1.2.3'),
        button = screen.getByRole('button', {name: 'Click Here For a Free iPhone'});
    expect(link).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(homeLinkLogo).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(productVersion).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
