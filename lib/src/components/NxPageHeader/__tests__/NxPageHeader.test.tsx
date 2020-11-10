/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxPageHeader from '../NxPageHeader';
import AbstractNxPageHeader from '../../AbstractNxPageHeader/AbstractNxPageHeader';

describe('NxPageHeader', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxPageHeader, {});

  it('renders an AbstractNxPageHeader', function() {
    expect(getShallowComponent()).toMatchSelector(AbstractNxPageHeader);
  });

  it('passes its links, homeLink, and children props to the AbstractNxPageHeader', function() {
    const props = {
          links: [{ name: 'foo', href: '#bar' }],
          homeLink: '#home',
          children: <button>Click Here For a Free iPhone</button>
        },
        component = getShallowComponent(props);

    expect(component).toHaveProp('links', props.links);
    expect(component).toHaveProp('homeLink', props.homeLink);
    expect(component.children()).toMatchElement(props.children);
  });

  it('passes a logo with a webpack-generated path and proper alt tag', function() {
    const logo = shallow(getShallowComponent().prop('logo'));

    // this path comes from imgMock.ts
    expect(logo).toHaveProp('src', 'path/to/asset.png');
    expect(logo).toHaveProp('alt', '⬡ Sonatype');
    expect(logo).toHaveClassName('nx-product__logo-image');
  });

  it('includes the productInfo.name in the productInfoContent .nx-product__name if provided', function() {
    const props = {
          productInfo: {
            name: 'test app'
          }
        },
        defaultProductInfoContent = getShallowComponent().prop('productInfoContent'),
        richProductInfoContent = shallow(getShallowComponent(props).prop('productInfoContent'));

    expect(defaultProductInfoContent).toBe(null);
    expect(richProductInfoContent).toContainMatchingElement('.nx-product__name');
    expect(richProductInfoContent.find('.nx-product__name')).toHaveText('test app');
  });

  it('includes the productInfo.version in the productInfoContent if provided', function() {
    const noVersionProps = {
          productInfo: {
            name: 'test app'
          }
        },
        props = {
          productInfo: {
            name: 'test app',
            version: '1.2.3'
          }
        },
        noVersionProductInfoContent = shallow(getShallowComponent(noVersionProps).prop('productInfoContent')),
        richProductInfoContent = shallow(getShallowComponent(props).prop('productInfoContent'));

    expect(noVersionProductInfoContent).not.toContainMatchingElement('.nx-product__version');
    expect(richProductInfoContent).toContainMatchingElement('.nx-product__version');
    expect(richProductInfoContent.find('.nx-product__version')).toHaveText('Version: 1.2.3');
  });
});
