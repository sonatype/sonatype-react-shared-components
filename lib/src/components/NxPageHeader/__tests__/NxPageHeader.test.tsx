/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxPageHeader, { HeaderLink, HeaderLinkProps } from '../NxPageHeader';

describe('NxPageHeader', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxPageHeader, {});

  it('renders a nx-page-header <header> with nx-page-header__inner child', function() {
    expect(getShallowComponent()).toMatchSelector('header.nx-page-header');
    expect(getShallowComponent()).toContainExactlyOneMatchingElement('.nx-page-header__inner');
  });

  it('renders an nx-product within the nx-page-header__inner, minimally containing the branding', function() {
    expect(getShallowComponent().find('.nx-page-header__inner')).toContainMatchingElement('.nx-product');
    expect(getShallowComponent().find('.nx-product')).toContainMatchingElement('.nx-product__branding');
    expect(getShallowComponent().find('.nx-product__branding')).toContainMatchingElement('img.nx-product__wordmark');

    // this path comes from imgMock.ts
    expect(getShallowComponent().find('.nx-product__wordmark')).toHaveProp('src', 'path/to/asset.png');
    expect(getShallowComponent().find('.nx-product__wordmark')).toHaveProp('alt', '⬡ Sonatype');
  });

  it('wraps the logo in a link iff the homeLink prop is specified', function() {
    expect(getShallowComponent()).not.toContainMatchingElement('.nx-product__home-link');
    expect(getShallowComponent({ homeLink: 'foo' })).toContainMatchingElement('.nx-product__home-link');
    expect(getShallowComponent({ homeLink: 'foo' }).find('.nx-product__home-link'))
        .toContainMatchingElement('.nx-product__wordmark');

    expect(getShallowComponent({ homeLink: 'foo' }).find('.nx-product__home-link')).toHaveProp('href', 'foo');
  });

  it('includes the productInfo.name in a .nx-product__name if provided', function() {
    const props = {
      productInfo: {
        name: 'test app'
      }
    };

    expect(getShallowComponent()).not.toContainMatchingElement('.nx-product__name');
    expect(getShallowComponent(props)).toContainMatchingElement('.nx-product__name');
    expect(getShallowComponent(props).find('.nx-product__name')).toHaveText('test app');
  });

  it('includes the productInfo.version in a .nx-product__version if provided', function() {
    const props = {
      productInfo: {
        name: 'test app',
        version: '1.2.3'
      }
    };

    expect(getShallowComponent()).not.toContainMatchingElement('.nx-product__version');
    expect(getShallowComponent(props)).toContainMatchingElement('.nx-product__version');
    expect(getShallowComponent(props).find('.nx-product__version')).toHaveText('Version: 1.2.3');
  });

  it('includes the children within a .nx-page-header__extra-content if provided', function() {
    const props = { children: <span>foobar</span> };

    expect(getShallowComponent()).not.toContainMatchingElement('.nx-page-header__extra-content');
    expect(getShallowComponent(props)).toContainMatchingElement('.nx-page-header__extra-content');
    expect(getShallowComponent(props).find('.nx-page-header__extra-content')).toContainReact(<span>foobar</span>);
  });

  it('includes a .nx-page-header__links if the links prop is provided', function() {
    const props = {
      links: [{
        name: 'foo',
        href: '#foo'
      }]
    };

    expect(getShallowComponent()).not.toContainMatchingElement('.nx-page-header__links');
    expect(getShallowComponent(props)).toContainMatchingElement('.nx-page-header__links');
  });

  it('includes a HeaderLink for each object in the links prop', function() {
    const links = [{
      name: 'foo',
      href: '#foo'
    }, {
      name: 'bar',
      href: '#bar'
    }];

    expect(getShallowComponent()).not.toContainMatchingElement('.nx-page-header__link');
    expect(getShallowComponent({ links }).find('.nx-page-header__links'))
        .toContainMatchingElements(2, HeaderLink);

    expect(getShallowComponent({ links }).find(HeaderLink).at(0).key()).toBe('foo');
    expect(getShallowComponent({ links }).find(HeaderLink).at(0)).toHaveProp(links[0]);

    expect(getShallowComponent({ links }).find(HeaderLink).at(1).key()).toBe('bar');
    expect(getShallowComponent({ links }).find(HeaderLink).at(1)).toHaveProp('href', '#bar');
  });

  describe('HeaderLink', function() {
    const minimalProps: HeaderLinkProps = { name: 'foo', href: '#foo' },
        getShallowComponent = enzymeUtils.getShallowComponent(HeaderLink, minimalProps);

    it('renders an <a> with classname nx-page-header__link', function() {
      expect(getShallowComponent()).toMatchSelector('a.nx-page-header__link');
    });

    it('adds a .nx-page-header__link--current class iff the `current` prop is set', function() {
      expect(getShallowComponent()).not.toHaveClassName('nx-page-header__link--current');
      expect(getShallowComponent({ current: undefined })).not.toHaveClassName('nx-page-header__link--current');
      expect(getShallowComponent({ current: null })).not.toHaveClassName('nx-page-header__link--current');
      expect(getShallowComponent({ current: false })).not.toHaveClassName('nx-page-header__link--current');
      expect(getShallowComponent({ current: true })).toHaveClassName('nx-page-header__link--current');
    });

    it('sets the href from the prop', function() {
      expect(getShallowComponent()).toHaveProp('href', '#foo');
    });

    it('includes the name prop value as its content and as its data-text attr', function() {
      expect(getShallowComponent()).toHaveText('foo');
      expect(getShallowComponent()).toHaveProp('data-text', 'foo');
    });
  });
});
