
/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import 'jest-enzyme';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

import NxTreeItem from '../NxTreeItem';
import NxTreeItemLabel from '../NxTreeItemLabel';
import { ItemProps as Props, TreeKeyNavContextType } from '../types';
import TreeKeyNavContext from '../TreeKeyNavContext';

const keyNavContext: TreeKeyNavContextType = {
  focusedChild: null,
  focusParent: () => {},
  focusPrev: () => {},
  focusNext: () => {},
  focusFirst: () => {},
  focusLast: () => {},
  navigationDirection: 'down',
  setNavigationDirection: () => {},
  getTreeRoot: () => null
};

describe('NxTreeItem', function() {
  function getMountedComponent(extraProps?: Props) {
    return mount(
      <TreeKeyNavContext.Provider value={keyNavContext}>
        <NxTreeItem { ...extraProps } />
      </TreeKeyNavContext.Provider>
    ).children();
  }

  const getMountedCollapsible = (extraProps?: Partial<Props>) => getMountedComponent({
    collapsible: true,
    isOpen: false,
    onToggleCollapse: () => {},
    ...extraProps
  });

  it('renders an li with the nx-tree__item class', function() {
    expect(getMountedComponent()).toMatchSelector('li.nx-tree__item');
  });

  it('allows additional classNames', function() {
    const component = getMountedComponent({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-tree__item');
  });

  it('allows additional attributes', function() {
    const component = getMountedComponent({ id: 'foo', lang: 'en-us' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('lang', 'en-us');
  });

  it('sets the treeitem role', function() {
    expect(getMountedComponent()).toHaveProp('role', 'treeitem');
  });

  it('adds the children to the li', function() {
    const component = getMountedComponent({ children: <><span id="foo"/><div id="bar"/></> });

    expect(component).toContainMatchingElement('span#foo');
    expect(component).toContainMatchingElement('div#bar');
  });

  describe('when not collapsible', function() {
    // note that there isn't much use in testing this in a lot of detail here, a visual test will be better
    it('contains some lines', function() {
      const component = getMountedComponent(),
          intersectionSvg = component.find('svg.nx-tree__line-intersection'),
          dropLineSvg = component.find('svg.nx-tree__line-drop');

      expect(intersectionSvg).toExist();
      expect(intersectionSvg).toContainMatchingElement('line.nx-tree__top-line');
      expect(intersectionSvg).toContainMatchingElement('line.nx-tree__right-line');
      expect(intersectionSvg).toContainMatchingElement('line.nx-tree__bottom-line');

      expect(dropLineSvg).toExist();
      expect(dropLineSvg).toContainMatchingElement('line');
    });

    it('does not contain an icon', function() {
      expect(getMountedComponent()).not.toContainMatchingElement('.nx-icon');
    });

    it('does not contain a label nor a checkbox', function() {
      const component = getMountedComponent();

      expect(component).not.toContainMatchingElement('label');
      expect(component).not.toContainMatchingElement('input');
    });
  });

  describe('when collapsible', function() {
    it('still contains the top and right lines but not the bottom line', function() {
      const component = getMountedCollapsible(),
          intersectionSvg = component.find('svg.nx-tree__line-intersection'),
          dropLineSvg = component.find('svg.nx-tree__line-drop');

      expect(intersectionSvg).toExist();
      expect(intersectionSvg).toContainMatchingElement('line.nx-tree__top-line');
      expect(intersectionSvg).toContainMatchingElement('line.nx-tree__right-line');
      expect(intersectionSvg).not.toContainMatchingElement('line.nx-tree__bottom-line');

      expect(dropLineSvg).toExist();
      expect(dropLineSvg).toContainMatchingElement('line');
    });

    describe('when isOpen is true', function() {
      it('contains a faMinusSquare icon within the intersection svg', function() {
        const icon = getMountedCollapsible({ isOpen: true })
            .find('.nx-tree__line-intersection').find(NxFontAwesomeIcon);

        expect(icon).toHaveProp('icon', faMinusSquare);
      });
    });

    describe('when isOpen is false', function() {
      it('contains a faPlusSquare icon within the intersection svg', function() {
        const icon = getMountedCollapsible({ isOpen: false })
            .find('.nx-tree__line-intersection').find(NxFontAwesomeIcon);

        expect(icon).toHaveProp('icon', faPlusSquare);
      });
    });

    it('adds the `open` class when isOpen is true', function() {
      expect(getMountedCollapsible()).not.toHaveClassName('open');
      expect(getMountedCollapsible({ isOpen: true })).toHaveClassName('open');
    });

    it('adds the nx-tree__item--collapsible class', function() {
      expect(getMountedComponent()).not.toHaveClassName('nx-tree__item--collapsible');
      expect(getMountedCollapsible()).toHaveClassName('nx-tree__item--collapsible');
    });

    it('attaches onToggleCollapse to the .nx-tree__collapse-click\'s onChange', function() {
      const onToggleCollapse = jest.fn(),
          component = getMountedCollapsible({ onToggleCollapse });

      expect(onToggleCollapse).not.toHaveBeenCalled();

      component.find('.nx-tree__collapse-click').simulate('click');

      expect(onToggleCollapse).toHaveBeenCalled();
    });
  });

  it('calls onActivate when Enter is pressed while focused', function() {
    const onActivate = jest.fn(),
        component = getMountedComponent({ onActivate });

    expect(onActivate).not.toHaveBeenCalled();

    component.simulate('keydown', { key: 'Enter' });

    expect(onActivate).toHaveBeenCalled();
  });

  describe('aria-expanded', function() {
    it('is set to true when the item is not collapsible', function() {
      expect(getMountedComponent()).toHaveProp('aria-expanded', true);
    });

    it('is set to true when the item is collapsible and currently open', function() {
      expect(getMountedCollapsible({ isOpen: true })).toHaveProp('aria-expanded', true);
    });

    it('is set to false when the item is collapsible and not currently open', function() {
      expect(getMountedCollapsible()).toHaveProp('aria-expanded', false);
    });
  });

  it('adds the id of the child itemlabel to the aria-labelledby prop', function() {
    const component1 = getMountedComponent({
          'aria-labelledby': 'foo',
          children: <NxTreeItemLabel id="bar" />
        }),
        component2 = getMountedComponent({
          'aria-labelledby': 'foo',
          children: <NxTreeItemLabel />
        }),
        component3 = getMountedComponent({
          children: <NxTreeItemLabel id="bar" />
        }),
        component4 = getMountedComponent({
          children: <NxTreeItemLabel />
        });

    expect(component1).toHaveProp('aria-labelledby', 'foo bar');
    expect(component3).toHaveProp('aria-labelledby', 'bar');

    expect(component2).toHaveProp('aria-labelledby');
    const labelledBy2 = component2.prop('aria-labelledby').split(' ');
    expect(labelledBy2[0]).toBe('foo');
    expect(labelledBy2[1]).toBe(component2.find('.nx-tree__item-label').prop('id'));

    expect(component4).toHaveProp('aria-labelledby');
    const labelledBy4 = component4.prop('aria-labelledby');
    expect(labelledBy4).toBe(component4.find('.nx-tree__item-label').prop('id'));
  });
});
