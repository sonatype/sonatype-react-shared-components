
/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import NxCollapsibleItems, { Props } from '../NxCollapsibleItems';
import { NxTreeView, NxTreeViewChild } from '../../../index';

import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxTooltip from '../../NxTooltip/NxTooltip';
import NxIconDropdown from '../../NxIconDropdown/NxIconDropdown';
import { mount } from 'enzyme';

describe('NxCollapsibleItems', function() {
  const minimalProps = {
        isOpen: false,
        triggerContent: <span>Trigger</span>
      },
      getShallowComponent = enzymeUtils.getShallowComponent(NxCollapsibleItems, minimalProps);

  it('is aliased as NxTreeView', function() {
    expect(NxCollapsibleItems).toBe(NxTreeView);
  });

  it('aliased its Child subcomponent as NxTreeViewChild', function() {
    expect(NxCollapsibleItems.Child).toBe(NxTreeViewChild);
  });

  it('renders a div with a group role and the nx-collapsible-items class', function() {
    expect(getShallowComponent()).toMatchSelector('div.nx-collapsible-items');
    expect(getShallowComponent()).toHaveProp('role', 'group');
  });

  it('sets the specified id', function() {
    expect(getShallowComponent({ id: 'foo' })).toHaveProp('id', 'foo');
  });

  it('sets the specified classnames', function() {
    const component = getShallowComponent({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-collapsible-items');
  });

  it(
      'sets the nx-collapsible-items--expanded class iff both the isOpen prop'
      + 'is set and the collapsible items has children',
      function() {
        expect(getShallowComponent()).not.toHaveClassName('nx-collapsible-items--expanded');
        expect(getShallowComponent({ isOpen: true })).not.toHaveClassName('nx-collapsible-items--expanded');
        expect(getShallowComponent({ children: <span>child</span> }))
            .not.toHaveClassName('nx-collapsible-items--expanded');

        expect(getShallowComponent({
          children: <span>child</span>,
          isOpen: true
        })).toHaveClassName('nx-collapsible-items--expanded');
      }
  );

  it(
      'sets the nx-collapsible-items--collapsed class either isOpen'
      + 'is false or the collapsible items has no children',
      function() {
        expect(getShallowComponent()).toHaveClassName('nx-collapsible-items--collapsed');
        expect(getShallowComponent({ isOpen: true })).toHaveClassName('nx-collapsible-items--collapsed');
        expect(getShallowComponent({ children: <span>child</span> }))
            .toHaveClassName('nx-collapsible-items--collapsed');

        expect(getShallowComponent({
          children: <span>child</span>,
          isOpen: true
        })).not.toHaveClassName('nx-collapsible-items--collapsed');
      });

  it('sets the nx-collapsible-items--disabled class if the disabled prop is true', function() {
    expect(getShallowComponent()).not.toHaveClassName('nx-collapsible-items--disabled');
    expect(getShallowComponent({ disabled: undefined })).not.toHaveClassName('nx-collapsible-items--disabled');
    expect(getShallowComponent({ disabled: null })).not.toHaveClassName('nx-collapsible-items--disabled');
    expect(getShallowComponent({ disabled: false })).not.toHaveClassName('nx-collapsible-items--disabled');

    expect(getShallowComponent({ disabled: true })).toHaveClassName('nx-collapsible-items--disabled');
  });

  it('sets the nx-collapsible-items--empty class is there are no children', function() {
    expect(getShallowComponent()).toHaveClassName('nx-collapsible-items--empty');
    expect(getShallowComponent({ children: <span>foo</span> })).not.toHaveClassName('nx-collapsible-items--empty');
    expect(getShallowComponent({ children: 'foo' })).not.toHaveClassName('nx-collapsible-items--empty');
    expect(getShallowComponent({ children: [<span key="">foo</span>, 'bar'] }))
        .not.toHaveClassName('nx-collapsible-items--empty');
  });

  describe('trigger', function() {
    const getShallowTrigger = (props?: Partial<Props>) => getShallowComponent(props)
        .find('.nx-collapsible-items__trigger');

    it('is a button with the nx-collapsible-items__trigger class', function() {
      expect(getShallowTrigger()).toMatchSelector('button');
    });

    it('has type="button"', function() {
      expect(getShallowTrigger()).toHaveProp('type', 'button');
    });

    it('references the treeview children items using aria-controls', function() {
      const component = getShallowComponent({ children: <span>foo</span> }),
          childrenEl = component.find('.nx-collapsible-items__children'),
          childrenElId = childrenEl.prop('id');

      expect(component.find('.nx-collapsible-items__trigger')).toHaveProp('aria-controls', childrenElId);
    });

    it('sets aria-expanded iff both the isOpen prop is true and there are children', function() {
      expect(getShallowTrigger()).toHaveProp('aria-expanded', false);
      expect(getShallowTrigger({ isOpen: true })).toHaveProp('aria-expanded', false);
      expect(getShallowTrigger({ children: <span>child</span> })).toHaveProp('aria-expanded', false);

      expect(getShallowTrigger({
        children: <span>child</span>,
        isOpen: true
      })).toHaveProp('aria-expanded', true);
    });

    it('sets disabled if the disabled prop is set to true or there are no children', function() {
      expect(getShallowTrigger()).toHaveProp('disabled', true);
      expect(getShallowTrigger({ disabled: true })).toHaveProp('disabled', true);
      expect(getShallowTrigger({ disabled: false })).toHaveProp('disabled', true);
      expect(getShallowTrigger({ disabled: null })).toHaveProp('disabled', true);
      expect(getShallowTrigger({ disabled: undefined })).toHaveProp('disabled', true);

      expect(getShallowTrigger({
        children: <span>child</span>,
        disabled: true
      })).toHaveProp('disabled', true);

      expect(getShallowTrigger({ children: <span>child</span> })).toHaveProp('disabled', undefined);
      expect(getShallowTrigger({
        children: <span>child</span>,
        disabled: false
      })).toHaveProp('disabled', undefined);
    });

    it('fires the components onToggleCollapse when clicked', function() {
      const onToggleCollapse = jest.fn(),
          trigger = getShallowTrigger({ onToggleCollapse });

      expect(onToggleCollapse).not.toHaveBeenCalled();
      trigger.simulate('click');
      expect(onToggleCollapse).toHaveBeenCalled();
    });

    it('contains an nx-collapsible-items__twisty icon', function() {
      expect(getShallowTrigger().find(NxFontAwesomeIcon)).toHaveClassName('nx-collapsible-items__twisty');
    });

    it('renders the triggerContent as children of a nx-collapsible-items__text element', function() {
      expect(getShallowTrigger().find('.nx-collapsible-items__text')).toContainReact(minimalProps.triggerContent);
    });

    it('wraps the trigger in a tooltip with the triggerTooltip object if specified', function() {
      const component = getShallowComponent({ triggerTooltip: { title: 'tip', placement: 'right' } }),
          tooltip = component.find(NxTooltip),
          trigger = tooltip.find('.nx-collapsible-items__trigger');

      expect(tooltip).toExist();
      expect(tooltip).toHaveProp('title', 'tip');
      expect(tooltip).toHaveProp('placement', 'right');

      expect(trigger).toExist();
    });

    it('wraps the trigger in a tooltip with the triggerTooltip string if specified', function() {
      const component = getShallowComponent({ triggerTooltip: 'tip' }),
          tooltip = component.find(NxTooltip),
          trigger = tooltip.find('.nx-collapsible-items__trigger');

      expect(tooltip).toExist();
      expect(tooltip).toHaveProp('title', 'tip');

      expect(trigger).toExist();
    });
  });

  it('renders the children in an nx-collapsible-items__children element with role=list', function() {
    const component = getShallowComponent({ children: <span>foo</span> }),
        childrenEl = component.find('.nx-collapsible-items__children');

    expect(childrenEl).toExist();
    expect(childrenEl).toHaveProp('role', 'list');
    expect(childrenEl).toContainReact(<span>foo</span>);
  });

  it('sets specified role on an nx-collapsible-items__children element', function() {
    const component = getShallowComponent({ role: 'menu' }),
        childrenEl = component.find('.nx-collapsible-items__children');

    expect(childrenEl).toExist();
    expect(childrenEl).toHaveProp('role', 'menu');
  });

  describe('actionContent', function() {
    it('renders specified actionContent and does not trigger onToggleCollapse when actionContent is clicked', () => {
      const onToggleCollapse = jest.fn();
      const component = getShallowComponent({ actionContent: <NxIconDropdown isOpen={false} />, onToggleCollapse });
      const toggle = component.find(NxIconDropdown);
      expect(toggle).toExist();
      expect(onToggleCollapse).not.toHaveBeenCalled();
      toggle.simulate('click');
      expect(onToggleCollapse).not.toHaveBeenCalled();
    });
  });

  describe('NxCollapsibleItems.Child', function() {
    describe('when children is a string', function() {
      const component = mount(
        <NxCollapsibleItems.Child id="test-id" className="bar" lang="en">foo</NxCollapsibleItems.Child>),
          div = component.children().children();

      it('renders a div with the listitem role and the nx-collapsible-items__child class', function() {
        expect(component.hostNodes()).not.toExist();
        expect(component.children().hostNodes()).not.toExist();

        expect(div).toMatchSelector('div.nx-collapsible-items__child');
        expect(div).toHaveProp('role', 'listitem');
      });

      it('adds specified classnames', function() {
        expect(div).toHaveClassName('bar');
        expect(div).toHaveClassName('nx-collapsible-items__child');
      });

      it('passes through additional props', function() {
        expect(div).toHaveProp('id', 'test-id');
        expect(div).toHaveProp('lang', 'en');
      });

      it('renders the child text within the div', function() {
        expect(div).toHaveText('foo');
      });

      it('forwards a ref to the div', function() {
        const ref = React.createRef<HTMLDivElement>(),

            // note: the fragment is necessary to get around an enzyme issue:
            // https://github.com/enzymejs/enzyme/issues/1852#issuecomment-433145879
            div = mount(<><NxCollapsibleItems.Child ref={ref}>foo</NxCollapsibleItems.Child></>).children().children();

        expect(ref.current).toBe(div.getDOMNode());
      });
    });

    describe('when children is an element', function() {
      const jsx =
        <NxCollapsibleItems.Child>
          <div id="test-id" className="bar" lang="en">foo</div>
        </NxCollapsibleItems.Child>;
      const component = mount(jsx),
          div = component.children();

      it('renders an element like the children', function() {
        expect(component.hostNodes()).not.toExist();

        expect(div).toMatchSelector('div.bar');
        expect(div).toHaveText('foo');
      });

      it('adds the nx-collapsible-items__child classname', function() {
        expect(div).toHaveClassName('nx-collapsible-items__child');
      });

      it('passes through additional props', function() {
        expect(div).toHaveProp('id', 'test-id');
        expect(div).toHaveProp('lang', 'en');
      });

      it('adds the listitem role', function() {
        expect(div).toHaveProp('role', 'listitem');
      });

      it('forwards a ref to the div', function() {
        const ref = React.createRef<HTMLDivElement>(),
            div = mount(<><NxCollapsibleItems.Child ref={ref}><div>foo</div></NxCollapsibleItems.Child></>).children();

        expect(ref.current).toBe(div.getDOMNode());
      });
    });
  });
});
