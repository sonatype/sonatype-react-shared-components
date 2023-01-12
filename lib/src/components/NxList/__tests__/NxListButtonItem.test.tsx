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
import 'jest-enzyme';

describe('NxListButtonItem', function() {

  const minimalProps: NxListButtonItemProps = {};
  const getShallow = getShallowComponent(NxList.ButtonItem, minimalProps);
  const getMounted = getMountedComponent(NxList.ButtonItem, minimalProps);

  it('renders a correctly structured element - a button within an li', function() {
    const contentEl = getShallow();

    expect(contentEl).toExist();
    expect(contentEl).toMatchSelector('.nx-list__item.nx-list__item--clickable');
    expect(contentEl.find('button')).toMatchSelector('.nx-list__btn');
    expect(contentEl.find('button').parent().is('li'));
  });

  it('renders the classNames given to both the li and the button', function() {
    const contentEl = getShallow({className: 'customClassLi', buttonClassName: 'customClassBtn'});

    expect(contentEl).toExist();
    expect(contentEl).toMatchSelector('.nx-list__item.nx-list__item--clickable.customClassLi');
    expect(contentEl.find('button')).toMatchSelector('.nx-list__btn.customClassBtn');
  });

  it('renders a clickable list whose list item element has prop disabled and is disabled', function() {
    const contentEl = getMounted({disabled: true});

    expect(contentEl).toExist();
    expect(contentEl).toHaveProp('disabled');
    expect(contentEl).toBeDisabled();
  });

  it('renders a clickable list whose list item element has prop selected and is selected', function() {
    const contentEl = getMounted({selected: true});

    expect(contentEl).toExist();
    expect(contentEl).toHaveProp('selected');
    expect(contentEl.find('button')).toHaveClassName('selected');
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
    expect(contentEl.find('span').at(1)).toHaveText('Test Item 1 Subtext');

  });

  it('sets aria-selected and aria-current to true iff selected is true', function() {
    expect(getShallow()).toHaveProp('aria-selected', undefined);
    expect(getShallow()).toHaveProp('aria-current', undefined);

    expect(getShallow({ selected: true })).toHaveProp('aria-selected', true);
    expect(getShallow({ selected: true })).toHaveProp('aria-current', true);

    expect(getShallow({ selected: false })).toHaveProp('aria-selected', false);
    expect(getShallow({ selected: false })).toHaveProp('aria-current', false);

    expect(getShallow({ selected: null })).toHaveProp('aria-selected', undefined);
    expect(getShallow({ selected: null })).toHaveProp('aria-current', undefined);
  });
});
