/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import NxList from '../NxList';
import { NxListLinkItemProps } from '../types';
import { getMountedComponent, getShallowComponent } from '../../../__testutils__/enzymeUtils';

describe('NxListLinkItem', function() {

  const minimalProps: NxListLinkItemProps = { href: 'www.sonatype.com' };
  const getShallow = getShallowComponent(NxList.LinkItem, minimalProps);
  const getMounted = getMountedComponent(NxList.LinkItem, minimalProps);

  it('renders a correctly structured element - an a within an li', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>
    ];
    const contentEl = getShallow({children});
    expect(contentEl).toExist();
    expect(contentEl.find('li')).toMatchSelector('.nx-list__item.nx-list__item--clickable');
    expect(contentEl.find('a')).toMatchSelector('.nx-list__link');
    expect(contentEl.find('a').parent().is('li'));
  });

  it('renders the classNames given to both the li and the a', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>
    ];
    const contentEl = getShallow({children, className: 'customClassLi', anchorClassName: 'customClassAnchor'});
    expect(contentEl).toExist();
    expect(contentEl.find('li')).toMatchSelector('.nx-list__item.nx-list__item--clickable.customClassLi');
    expect(contentEl.find('a')).toMatchSelector('.nx-list__link.customClassAnchor');
  });

  it('renders a clickable link whose list item element has prop disabled and is disabled', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>
    ];
    const contentEl = getMounted({children, disabled: true});
    expect(contentEl).toExist();
    expect(contentEl).toHaveProp('href');
    expect(contentEl).toHaveProp('disabled');
    expect(contentEl).toBeDisabled();
  });

  it('renders a clickable link whose list item element has prop selected and is selected', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>
    ];
    const contentEl = getMounted({children, selected: true});
    expect(contentEl).toExist();
    expect(contentEl).toHaveProp('href');
    expect(contentEl.find('a')).toHaveClassName('selected');
  });

  it('renders children correctly', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>,
      <NxList.Subtext key="2">Test Item 1 Subtext</NxList.Subtext>
    ];
    const contentEl = getMounted({children});
    expect(contentEl).toExist();
    expect(contentEl.find('span').at(0)).toMatchSelector('span.nx-list__text');
    expect(contentEl.find('span').at(0)).toHaveText('Test Item 1 Text');
    expect(contentEl.find('span').at(1)).toMatchSelector('span.nx-list__subtext');
    expect(contentEl.find('span').at(0)).toHaveText('Test Item 1 Text');
  });
});
