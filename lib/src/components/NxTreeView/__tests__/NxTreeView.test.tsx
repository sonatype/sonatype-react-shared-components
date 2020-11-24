/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxTreeView, { Props, NxTreeViewChild } from '../NxTreeView';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxTooltip from '../../NxTooltip/NxTooltip';
import { mount } from 'enzyme';

describe('NxTreeView', function() {
  const minimalProps = {
        isOpen: false,
        triggerContent: <span>Trigger</span>
      },
      getShallowComponent = enzymeUtils.getShallowComponent(NxTreeView, minimalProps);

  it('renders a div with a tree role and the nx-tree-view class', function() {
    expect(getShallowComponent()).toMatchSelector('div.nx-tree-view');
    expect(getShallowComponent()).toHaveProp('role', 'tree');
  });

  it('sets the specified id', function() {
    expect(getShallowComponent({ id: 'foo' })).toHaveProp('id', 'foo');
  });

  it('sets an auto-generated id if one is not provided', function() {
    expect(getShallowComponent()).toHaveProp('id');
    expect(getShallowComponent().prop('id')).not.toEqual(getShallowComponent().prop('id'));
  });

  it('sets the specified classnames', function() {
    const component = getShallowComponent({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-tree-view');
  });

  it('sets the nx-tree-view--expanded class iff both the isOpen prop is set and the tree view has children',
      function() {
        expect(getShallowComponent()).not.toHaveClassName('nx-tree-view--expanded');
        expect(getShallowComponent({ isOpen: true })).not.toHaveClassName('nx-tree-view--expanded');
        expect(getShallowComponent({ children: <span>child</span> })).not.toHaveClassName('nx-tree-view--expanded');

        expect(getShallowComponent({
          children: <span>child</span>,
          isOpen: true
        })).toHaveClassName('nx-tree-view--expanded');
      }
  );

  it('sets the nx-tree-view--collapsed class either isOpen is false or the tree view has no children', function() {
    expect(getShallowComponent()).toHaveClassName('nx-tree-view--collapsed');
    expect(getShallowComponent({ isOpen: true })).toHaveClassName('nx-tree-view--collapsed');
    expect(getShallowComponent({ children: <span>child</span> })).toHaveClassName('nx-tree-view--collapsed');

    expect(getShallowComponent({
      children: <span>child</span>,
      isOpen: true
    })).not.toHaveClassName('nx-tree-view--collapsed');
  });

  it('sets the nx-tree-view--disabled class if the disabled prop is true', function() {
    expect(getShallowComponent()).not.toHaveClassName('nx-tree-view--disabled');
    expect(getShallowComponent({ disabled: undefined })).not.toHaveClassName('nx-tree-view--disabled');
    expect(getShallowComponent({ disabled: null })).not.toHaveClassName('nx-tree-view--disabled');
    expect(getShallowComponent({ disabled: false })).not.toHaveClassName('nx-tree-view--disabled');

    expect(getShallowComponent({ disabled: true })).toHaveClassName('nx-tree-view--disabled');
  });

  it('sets the nx-tree-view--empty class is there are no children', function() {
    expect(getShallowComponent()).toHaveClassName('nx-tree-view--empty');
    expect(getShallowComponent({ children: <span>foo</span> })).not.toHaveClassName('nx-tree-view--empty');
    expect(getShallowComponent({ children: 'foo' })).not.toHaveClassName('nx-tree-view--empty');
    expect(getShallowComponent({ children: [<span key="">foo</span>, 'bar'] }))
        .not.toHaveClassName('nx-tree-view--empty');
  });

  describe('trigger', function() {
    const getShallowTrigger = (props?: Partial<Props>) => getShallowComponent(props).find('.nx-tree-view__trigger');

    it('is a button with the nx-tree-view__trigger class', function() {
      expect(getShallowTrigger()).toMatchSelector('button');
    });

    it('references the treeview using aria-controls', function() {
      const explicitIdTreeView = getShallowComponent({ id: 'foo' }),
          autoIdTreeView = getShallowComponent(),
          autoId = autoIdTreeView.prop('id');

      expect(explicitIdTreeView.find('.nx-tree-view__trigger')).toHaveProp('aria-controls', 'foo');
      expect(autoIdTreeView.find('.nx-tree-view__trigger')).toHaveProp('aria-controls', autoId);
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

    it('sets aria-disabled if the disabled prop is set to true or there are no children', function() {
      expect(getShallowTrigger()).toHaveProp('aria-disabled', true);
      expect(getShallowTrigger({ disabled: true })).toHaveProp('aria-disabled', true);
      expect(getShallowTrigger({ disabled: false })).toHaveProp('aria-disabled', true);
      expect(getShallowTrigger({ disabled: null })).toHaveProp('aria-disabled', true);
      expect(getShallowTrigger({ disabled: undefined })).toHaveProp('aria-disabled', true);

      expect(getShallowTrigger({
        children: <span>child</span>,
        disabled: true
      })).toHaveProp('aria-disabled', true);

      expect(getShallowTrigger({ children: <span>child</span> })).toHaveProp('aria-disabled', undefined);
      expect(getShallowTrigger({
        children: <span>child</span>,
        disabled: false
      })).toHaveProp('aria-disabled', undefined);
    });

    it('fires the components onToggleCollapse when clicked', function() {
      const onToggleCollapse = jest.fn(),
          trigger = getShallowTrigger({ onToggleCollapse });

      expect(onToggleCollapse).not.toHaveBeenCalled();
      trigger.simulate('click');
      expect(onToggleCollapse).toHaveBeenCalled();
    });

    it('contains an nx-tree-view__twisty icon', function() {
      expect(getShallowTrigger().find(NxFontAwesomeIcon)).toHaveClassName('nx-tree-view__twisty');
    });

    it('renders the triggerContent as children of a nx-tree-view__text element', function() {
      expect(getShallowTrigger().find('.nx-tree-view__text')).toContainReact(minimalProps.triggerContent);
    });

    it('wraps the trigger in a tooltip with the triggerTooltip object if specified', function() {
      const component = getShallowComponent({ triggerTooltip: { title: 'tip', placement: 'right' } }),
          tooltip = component.find(NxTooltip),
          trigger = tooltip.find('.nx-tree-view__trigger');

      expect(tooltip).toExist();
      expect(tooltip).toHaveProp('title', 'tip');
      expect(tooltip).toHaveProp('placement', 'right');

      expect(trigger).toExist();
    });

    it('wraps the trigger in a tooltip with the triggerTooltip string if specified', function() {
      const component = getShallowComponent({ triggerTooltip: 'tip' }),
          tooltip = component.find(NxTooltip),
          trigger = tooltip.find('.nx-tree-view__trigger');

      expect(tooltip).toExist();
      expect(tooltip).toHaveProp('title', 'tip');

      expect(trigger).toExist();
    });
  });

  it('renders the children in an nx-tree-view__children element with role=group', function() {
    const component = getShallowComponent({ children: <span>foo</span> }),
        childrenEl = component.find('.nx-tree-view__children');

    expect(childrenEl).toExist();
    expect(childrenEl).toHaveProp('role', 'group');
    expect(childrenEl).toContainReact(<span>foo</span>);
  });

  describe('NxTreeViewChild', function() {
    describe('when children is a string', function() {
      const component = mount(<NxTreeViewChild id="test-id" className="bar" lang="en">foo</NxTreeViewChild>),
          div = component.children().children();

      it('renders a div with the treeitem role and the nx-tree-view__child class', function() {
        expect(component.hostNodes()).not.toExist();
        expect(component.children().hostNodes()).not.toExist();

        expect(div).toMatchSelector('div.nx-tree-view__child');
        expect(div).toHaveProp('role', 'treeitem');
      });

      it('adds specified classnames', function() {
        expect(div).toHaveClassName('bar');
        expect(div).toHaveClassName('nx-tree-view__child');
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
            div = mount(<><NxTreeViewChild ref={ref}>foo</NxTreeViewChild></>).children().children();

        expect(ref.current).toBe(div.getDOMNode());
      });
    });

    describe('when children is an element', function() {
      const component = mount(
            <NxTreeViewChild><div id="test-id" className="bar" lang="en">foo</div></NxTreeViewChild>
          ),
          div = component.children();

      it('renders an element like the children', function() {
        expect(component.hostNodes()).not.toExist();

        expect(div).toMatchSelector('div.bar');
        expect(div).toHaveText('foo');
      });

      it('adds the nx-tree-view__child classname', function() {
        expect(div).toHaveClassName('nx-tree-view__child');
      });

      it('passes through additional props', function() {
        expect(div).toHaveProp('id', 'test-id');
        expect(div).toHaveProp('lang', 'en');
      });

      it('adds the treeitem role', function() {
        expect(div).toHaveProp('role', 'treeitem');
      });

      it('forwards a ref to the div', function() {
        const ref = React.createRef<HTMLDivElement>(),
            div = mount(<><NxTreeViewChild ref={ref}><div>foo</div></NxTreeViewChild></>).children();

        expect(ref.current).toBe(div.getDOMNode());
      });
    });
  });
});
