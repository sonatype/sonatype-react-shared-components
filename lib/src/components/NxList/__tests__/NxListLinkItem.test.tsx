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

  const minimalProps: NxListLinkItemProps = {};
  const getShallow = getShallowComponent(NxList.LinkItem, minimalProps);
  const getMounted = getMountedComponent(NxList.LinkItem, minimalProps);

  it('renders the classNames given to it', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>
    ];
    const contentEl = getShallow({children, className: 'customClassName'});
    expect(contentEl).toExist();
    expect(contentEl.find('li')).toMatchSelector('.nx-list__item.nx-list__item--clickable');
    expect(contentEl.find('a')).toMatchSelector('.nx-list__link.customClassName');
  });

  it('renders a clickable link whose list item element has prop disabled and is disabled', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>
    ];
    const contentEl = getMounted({children, href: 'www.sonatype.com', disabled: true});
    expect(contentEl).toExist();
    expect(contentEl).toHaveProp('href');
    expect(contentEl).toHaveProp('disabled');
    expect(contentEl).toBeDisabled();
  });

  it('renders a clickable link whose list item element has prop selected and is selected', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>
    ];
    const contentEl = getMounted({children, href: 'www.sonatype.com', selected: true});
    expect(contentEl).toExist();
    expect(contentEl).toHaveProp('href');
    expect(contentEl.find('a')).toHaveClassName('selected');
  });
});
