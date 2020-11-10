/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxNexusPageHeader, { Props } from '../NxNexusPageHeader';
import AbstractNxPageHeader from '../../AbstractNxPageHeader/AbstractNxPageHeader';

describe('NxNexusPageHeader', function() {
  const minimalProps = {
        productInfo: {
          name: 'Foo Product'
        }
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxNexusPageHeader, minimalProps);

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

  it('passes a logo with a webpack-generated path and .nx-product__logo-image by default', function() {
    const logo = shallow(getShallowComponent().prop('logo'));

    // this path comes from imgMock.ts
    expect(logo).toHaveProp('src', 'path/to/asset.png');
    expect(logo).toHaveClassName('nx-product__logo-image');
  });

  it('passes a logo with the specified logoPath and .nx-product__logo-image', function() {
    const logo = shallow(getShallowComponent({ logoPath: 'foo.png' }).prop('logo'));

    expect(logo).toHaveProp('src', 'foo.png');
    expect(logo).toHaveClassName('nx-product__logo-image');
  });

  it('includes the productInfo.name in the productInfoContent', function() {
    const productInfoContent = shallow(getShallowComponent().prop('productInfoContent'));

    expect(productInfoContent.find('.nx-product__name')).toHaveText('Foo Product');
  });

  it('includes the productInfo.meta in the productInfoContent .nx-product__meta element if provided', function() {
    const props = {
          productInfo: {
            ...minimalProps.productInfo,
            meta: 'Professional'
          }
        },
        noMetaProductInfoContent = shallow(getShallowComponent().prop('productInfoContent')),
        richProductInfoContent = shallow(getShallowComponent(props).prop('productInfoContent'));

    expect(noMetaProductInfoContent).not.toContainMatchingElement('.nx-product__meta');
    expect(richProductInfoContent).toContainMatchingElement('.nx-product__meta');
    expect(richProductInfoContent.find('.nx-product__meta')).toHaveText('Professional');
  });

  it('includes the productInfo.version in the productInfoContent .nx-product__meta element if provided', function() {
    const props = {
          productInfo: {
            ...minimalProps.productInfo,
            version: '1.2.3'
          }
        },
        noVersionProductInfoContent = shallow(getShallowComponent().prop('productInfoContent')),
        richProductInfoContent = shallow(getShallowComponent(props).prop('productInfoContent'));

    expect(noVersionProductInfoContent).not.toContainMatchingElement('.nx-product__meta');
    expect(richProductInfoContent).toContainMatchingElement('.nx-product__meta');
    expect(richProductInfoContent.find('.nx-product__meta')).toHaveText('1.2.3');
  });

  it('includes the productInfo version and meta in the productInfoContent .nx-product__meta element if provided',
      function() {
        const props = {
              productInfo: {
                ...minimalProps.productInfo,
                version: '1.2.3',
                meta: 'Professional'
              }
            },
            richProductInfoContent = shallow(getShallowComponent(props).prop('productInfoContent'));

        expect(richProductInfoContent.find('.nx-product__meta')).toHaveText('Professional 1.2.3');
      }
  );
});
