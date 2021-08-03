/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxListButtonItemProps } from '../types';
import NxList from '../NxList';
import { getMountedComponent, getShallowComponent } from '../../../__testutils__/enzymeUtils';

describe('NxListButtonItem', function() {

  const minimalProps: NxListButtonItemProps = {};
  const getShallow = getShallowComponent(NxList.ButtonItem, minimalProps);
  const getMounted = getMountedComponent(NxList.ButtonItem, minimalProps);

  it('renders the classNames given to it', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>,
    ];
    const contentEl = getShallow({children, className: 'customClassName'});
    expect(contentEl).toExist();
    expect(contentEl.find('li')).toMatchSelector('.nx-list__item.nx-list__item--clickable');
    expect(contentEl.find('button')).toMatchSelector('.nx-list__btn.customClassName');
  });

  it('renders a clickable list whose list item element has prop disabled and is disabled', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>
    ];
    const contentEl = getMounted({children, disabled: true});
    expect(contentEl).toExist();
    expect(contentEl).toHaveProp('disabled');
    expect(contentEl).toBeDisabled();
  });

  it('renders a clickable list whose list item element has prop selected and is selected', function() {
    const children = [
      <NxList.Text key="1">Test Item 1 Text</NxList.Text>
    ];
    const contentEl = getMounted({children, selected: true});
    expect(contentEl).toExist();
    expect(contentEl).toHaveProp('selected');
    expect(contentEl.find('button')).toHaveClassName('selected');
  });
});
