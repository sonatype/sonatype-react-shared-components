
/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

import NxTreeItem from '../NxTreeItem';
import { ItemProps as Props } from '../types';

describe('NxTreeItem', function() {
  const getShallow = getShallowComponent(NxTreeItem, {});

  it('renders an li with the nx-tree__item class', function() {
    expect(getShallow()).toMatchSelector('li.nx-tree__item');
  });

  it('allows additional classNames', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-tree__item');
  });

  it('allows additional attributes', function() {
    const component = getShallow({ id: 'foo', lang: 'en-us' });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('lang', 'en-us');
  });

  it('adds the children to the li', function() {
    const component = getShallow({ children: <><span id="foo"/><div id="bar"/></> });

    expect(component).toContainMatchingElement('span#foo');
    expect(component).toContainMatchingElement('div#bar');
  });


  describe('when not collapsible', function() {
    // note that there isn't much use in testing this in a lot of detail here, a visual test will be better
    it('contains some lines', function() {
      const component = getShallow(),
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
      expect(getShallow()).not.toContainMatchingElement('.nx-icon');
    });

    it('does not contain a label nor a checkbox', function() {
      const component = getShallow();

      expect(component).not.toContainMatchingElement('label');
      expect(component).not.toContainMatchingElement('input');
    });
  });

  describe('when collapsible', function() {
    const getShallowCollapsible = (extraProps?: Partial<Props>) => getShallow({ collapsible: true, ...extraProps });

    it('still contains all the lines', function() {
      const component = getShallowCollapsible(),
          intersectionSvg = component.find('svg.nx-tree__line-intersection'),
          dropLineSvg = component.find('svg.nx-tree__line-drop');

      expect(intersectionSvg).toExist();
      expect(intersectionSvg).toContainMatchingElement('line.nx-tree__top-line');
      expect(intersectionSvg).toContainMatchingElement('line.nx-tree__right-line');
      expect(intersectionSvg).toContainMatchingElement('line.nx-tree__bottom-line');

      expect(dropLineSvg).toExist();
      expect(dropLineSvg).toContainMatchingElement('line');
    });

    describe('when isOpen is true', function() {
      it('contains a faMinusSquare icon within the intersection svg', function() {
        const icon = getShallowCollapsible({ isOpen: true })
            .find('.nx-tree__line-intersection').find(NxFontAwesomeIcon);

        expect(icon).toHaveProp('icon', faMinusSquare);
      });
    });

    describe('when isOpen is false', function() {
      it('contains a faPlusSquare icon within the intersection svg', function() {
        const icon = getShallowCollapsible({ isOpen: false })
            .find('.nx-tree__line-intersection').find(NxFontAwesomeIcon);

        expect(icon).toHaveProp('icon', faPlusSquare);
      });
    });

    it('wraps the intersection lines in a label which also contains a checkbox input', function() {
      const component = getShallowCollapsible(),
          label = component.find('label');

      expect(label).toExist();
      expect(label).toHaveClassName('nx-tree__collapse-label');
      expect(label).toContainMatchingElement('svg.nx-tree__line-intersection');
      expect(label).not.toContainMatchingElement('svg.nx-tree__line-drop');

      const checkbox = label.find('input');
      expect(checkbox).toExist();
      expect(checkbox).toHaveProp('type', 'checkbox');
      expect(checkbox).toHaveClassName('nx-tree__collapse-input');
    });

    it('sets the checkbox checked attr from isOpen', function() {
      expect(getShallowCollapsible({ isOpen: false }).find('input')).toHaveProp('checked', false);
      expect(getShallowCollapsible({ isOpen: true }).find('input')).toHaveProp('checked', true);
    });

    it('adds the `open` class when isOpen is true', function() {
      expect(getShallowCollapsible()).not.toHaveClassName('open');
      expect(getShallowCollapsible({ isOpen: true })).toHaveClassName('open');
    });

    it('adds the nx-tree__item--collapsible class', function() {
      expect(getShallow()).not.toHaveClassName('nx-tree__item--collapsible');
      expect(getShallowCollapsible()).toHaveClassName('nx-tree__item--collapsible');
    });

    it('attaches onToggleCollapse to the input\'s onChange', function() {
      const onToggleCollapse = jest.fn(),
          component = getShallowCollapsible({ onToggleCollapse });

      expect(onToggleCollapse).not.toHaveBeenCalled();

      component.find('input').simulate('change');

      expect(onToggleCollapse).toHaveBeenCalled();
    });
  });
});
