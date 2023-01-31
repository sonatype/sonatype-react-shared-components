/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import NxPageHeader from '../NxPageHeader';

import { screen } from '@testing-library/react';
import { rtlRenderElement, rtlRender } from '../../../__testutils__/rtlUtils';

describe('NxPageHeader', function() {

  const renderEl = rtlRenderElement(NxPageHeader, {});
  const quickRender = rtlRender(NxPageHeader, {});

 it('renders a top-level banner element', function() {
    const el = renderEl();
    const header = screen.getByRole('banner');
    expect(header).toBe(el);
  });

  it('renders the default logo within the header', function() {
    const view = quickRender(),
      logo = view.getByRole('img');
    expect(logo).toBeInTheDocument();
  });

  it('renders a custom logo instead of the default one when given logo prop', function() {
    const view = quickRender({ logo: { path: 'foo', alt: 'bar' } }),
      logo = view.getByRole('img');

    expect(logo).toHaveAttribute('src', 'foo');
    expect(logo).toHaveAttribute('alt', 'bar');
  });

  it('renders logo link when given homeLink prop', function() {
    const view = quickRender({ homeLink: '#home' }),
      homeLink = view.getByRole('link', {name: 'Home'}),
      homeLinkLogo = view.getByRole('img');

    expect(homeLink).toBeInTheDocument();
    expect(homeLink).toHaveAttribute('href','#home');
    expect(homeLink).toContainElement(homeLinkLogo);
  });

  it('renders links in header when given links prop', function() {
    const view = quickRender({
        links: [{ name: 'foo', href: '#bar' }, { name: 'baz', href: '#qux' }]
    }),
      link1 = view.getByRole('link', {name: 'foo'}),
      link2 = view.getByRole('link', {name: 'baz'})

    expect(link1).toBeInTheDocument();
    expect(link1).toHaveAttribute('href', '#bar');
    expect(link2).toBeInTheDocument();
    expect(link2).toHaveAttribute('href', '#qux');
  });

  it('only adds the \'aria-current\' attribute to the current link', function() {
    const view = quickRender({
        links: [
          { name: 'foo', href: '#bar', current: true },
          { name: 'baz', href: '#qux' },
          { name: 'quux', href: '#garply', current: false },
        ]
    }),
      link1 = view.getByRole('link', {name: 'foo'}),
      link2 = view.getByRole('link', {name: 'baz'}),
      link3 = view.getByRole('link', {name: 'quux'});

      expect(link1).toHaveAttribute('aria-current', 'page');
      expect(link2).not.toHaveAttribute('aria-current');
      expect(link3).not.toHaveAttribute('aria-current');
  });

  it('renders the product name if provided', function() {
    const props = {
          productInfo: {
            name: 'test app'
          }
        },
      view = quickRender(props),
      name = view.getByText('test app');

    expect(name).toBeInTheDocument();
  });

  it('renders the product version if provided', function() {
    const props = {
          productInfo: {
            name: 'test app',
            version: '1.2.3'
          }
        },
      view = quickRender(props),
      version = view.getByText('Version: 1.2.3');

    expect(version).toBeInTheDocument();
  });

  it('renders children when passed as prop', function() {
    const props = {
          children: [<h1 key={1}>Foo</h1>, <button key={2}>Click Here For a Free iPhone</button>]
        },
      view = quickRender(props),
      header = view.getByText('Foo'),
      button = view.getByRole('button', {name: 'Click Here For a Free iPhone'});

    expect(header).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('renders homeLink, link, productInfo and children when passed as props', function() {
    const props = {
          links: [{ name: 'foo', href: '#bar' }],
          homeLink: '#home',
          productInfo: { name: 'test app', version: '1.2.3' },
          children: <button>Click Here For a Free iPhone</button>
        },
      view = quickRender(props),
      link = view.getByRole('link',{name: 'foo'}),
      homeLink = view.getByRole('link', {name: 'Home'}),
      homeLinkLogo = view.getByRole('img'),
      productName = view.getByText('test app'),
      productVersion = view.getByText('Version: 1.2.3'),
      button = view.getByRole('button', {name: 'Click Here For a Free iPhone'});

    expect(link).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(homeLinkLogo).toBeInTheDocument();
    expect(productName).toBeInTheDocument();
    expect(productVersion).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
});
