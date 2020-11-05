/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import AbstractNxPageHeader, { Props, HeaderLink, HeaderLinkProps } from '../AbstractNxPageHeader';

describe('AbstractNxPageHeader', function() {
  const minimalProps = {
        logo: <img src="foo.png" className="test-image-class"/>
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(AbstractNxPageHeader, minimalProps);

  it('renders a nx-page-header <header> with nx-page-header__inner child', function() {
    expect(getShallowComponent()).toMatchSelector('header.nx-page-header');
    expect(getShallowComponent()).toContainExactlyOneMatchingElement('.nx-page-header__inner');
  });

  it('renders an nx-product within the nx-page-header__inner, minimally containing the logo', function() {
    expect(getShallowComponent().find('.nx-page-header__inner')).toContainMatchingElement('.nx-product');
    expect(getShallowComponent().find('.nx-product')).toContainMatchingElement('.nx-product__logo');

    expect(getShallowComponent().find('.test-image-class')).toHaveProp('src', 'foo.png');
  });

  it('wraps the logo in a link iff the homeLink prop is specified', function() {
    expect(getShallowComponent()).not.toContainMatchingElement('.nx-product__home-link');
    expect(getShallowComponent({ homeLink: 'foo' })).toContainMatchingElement('.nx-product__home-link');
    expect(getShallowComponent({ homeLink: 'foo' }).find('.nx-product__home-link'))
        .toContainMatchingElement('.test-image-class');

    expect(getShallowComponent({ homeLink: 'foo' }).find('.nx-product__home-link')).toHaveProp('href', 'foo');
  });

  it('includes the productInfoContent within the .nx-product section if provided', function() {
    const component = getShallowComponent({
      ...minimalProps,
      productInfoContent: <div className="test-class">Super Awesome Product!</div>
    });

    expect(component.find('.nx-product').find('.test-class')).toMatchElement(<div>Super Awesome Product!</div>);
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
