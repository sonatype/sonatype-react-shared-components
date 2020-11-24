/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {times} from 'ramda';

import {getShallowComponent} from '../../../__testutils__/enzymeUtils';
import AbstractTreeViewSelect, {Props} from '../AbstractTreeViewSelect';
import {Option} from '../commonTypes';
import { NxTreeViewChild } from '../../NxTreeView/NxTreeView';

describe('AbstractTreeViewSelect', function() {
  const requiredProps: Props = {
    options: [
      {id: 'foo', name: 'Foo'},
      {id: 'bar', name: 'Bar'},
      {id: null, name: 'Null'}
    ],
    children: 'Foobar',
    name: 'foobar',
    renderOption: ({name}: Option) => <span>{name}</span>
  };

  describe('required props', function () {
    const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredProps);

    it('properly renders component using only required props', function() {
      const shallowRender = getShallow();

      expect(shallowRender).toHaveClassName('nx-tree-view--select');

      // test NxTreeView props
      const nxTreeView = shallowRender.find('NxTreeView');
      expect(nxTreeView).toHaveProp('isOpen', false);
      expect(nxTreeView).toHaveProp('disabled', false);
      expect(nxTreeView).toHaveProp('triggerTooltip', null);
      expect(nxTreeView).toHaveProp('triggerContent', <span>Foobar</span>);

      expect(nxTreeView.children().length).toBe(3);

      const fooOption = nxTreeView.childAt(0);
      expect(fooOption).toMatchSelector(NxTreeViewChild);
      expect(fooOption).toContainReact(<span>Foo</span>);

      const barOption = nxTreeView.childAt(1);
      expect(barOption).toMatchSelector(NxTreeViewChild);
      expect(barOption).toContainReact(<span>Bar</span>);

      const nullOption = nxTreeView.childAt(2);
      expect(nullOption).toMatchSelector(NxTreeViewChild);
      expect(nullOption).toContainReact(<span>Null</span>);
    });
  });

  describe('NxTreeView trigger content', function () {
    const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredProps);

    it('wraps children in <span> if provided children is string', function () {
      expect(getShallow().find('NxTreeView')).toHaveProp('triggerContent', <span>Foobar</span>);
    });

    it('does not wrap children in <span> if provided children is react node', function () {
      const shallowRender = getShallow({
        children: <b>Foobar</b>
      });

      expect(shallowRender.find('NxTreeView')).toHaveProp('triggerContent', <b>Foobar</b>);
    });
  });

  describe('onToggleCollapse callback', function () {
    const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredProps);

    it('is called when NxTreeView is toggled', function () {
      const onToggleCollapseSpy = jest.fn();
      const shallowRender = getShallow({
        onToggleCollapse: onToggleCollapseSpy
      });
      expect(onToggleCollapseSpy).not.toHaveBeenCalled();
      shallowRender.find('NxTreeView').simulate('toggleCollapse');
      expect(onToggleCollapseSpy).toHaveBeenCalled();
    });
  });

  describe('options filter', function () {
    const requiredFilterProps: Props = {
      ...requiredProps,
      options: [
        {id: 'foo', name: 'Foo'},
        {id: 'bar', name: 'Bar'},
        {id: 'baz', name: 'Baz'}
      ],
      onFilterChange: () => {},
      filterThreshold: 2
    };

    describe('filterThreshold prop', function () {
      const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredFilterProps);

      it('renders filter input if filterThreshold is less than amount of options', function () {
        const shallowRender = getShallow();

        const nxTreeView = shallowRender.find('NxTreeView');
        expect(nxTreeView.children().length).toBe(4);

        const filterInput = nxTreeView.childAt(0);
        expect(filterInput).toHaveDisplayName('ForwardRef(NxFilterInput)');
        expect(filterInput).toHaveProp('inputId', 'nx-tree-view-select-foobar-filter-input');
      });

      it('does not render filter input if filterThreshold is not less than amount of options', function () {
        const shallowRender = getShallow({
          filterThreshold: 3
        });

        const nxTreeView = shallowRender.find('NxTreeView');
        expect(nxTreeView.children().length).toBe(3);
        expect(nxTreeView.childAt(0)).toMatchSelector(NxTreeViewChild);
        expect(nxTreeView.childAt(0)).toContainReact(<span>Foo</span>);
      });

      describe('default value', function () {
        const generateOption = (id: number) => ({id: `${id}`, name: `${id}`});

        it('renders filter input if filterThreshold is not provided and amount of options is > 10', function () {
          const shallowRender = getShallow({
            filterThreshold: null,
            options: times<Option>(generateOption, 11)
          });

          const nxTreeView = shallowRender.find('NxTreeView');
          expect(nxTreeView.children().length).toBe(12);

          const filterInput = nxTreeView.childAt(0);
          expect(filterInput).toHaveDisplayName('ForwardRef(NxFilterInput)');
          expect(filterInput).toHaveProp('inputId', 'nx-tree-view-select-foobar-filter-input');
        });

        it('does not render filter input if filterThreshold is not provided and amount of options is <= 10',
            function () {
              const shallowRender = getShallow({
                filterThreshold: null,
                options: times<Option>(generateOption, 10)
              });

              const nxTreeView = shallowRender.find('NxTreeView');
              expect(nxTreeView.children().length).toBe(10);
              expect(nxTreeView.childAt(0)).toMatchSelector(NxTreeViewChild);
              expect(nxTreeView.childAt(0)).toContainReact(<span>0</span>);
            }
        );
      });
    });

    describe('onFilterChange prop', function () {
      const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredFilterProps);

      it('calls onFilterChange when filter input is changed', function() {
        const onChangeSpy = jest.fn();
        const shallowRender = getShallow({
          onFilterChange: onChangeSpy
        });

        const filterInput = shallowRender.find('ForwardRef(NxFilterInput)');
        expect(onChangeSpy).not.toHaveBeenCalled();
        filterInput.simulate('change', 'bla');
        expect(onChangeSpy).toHaveBeenCalledWith('bla');
      });
    });

    describe('filter prop', function () {
      const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredFilterProps);

      it('is passed as value to filter input', function () {
        const shallowRender = getShallow({
          filter: 'ba'
        });

        expect(shallowRender.find('ForwardRef(NxFilterInput)')).toHaveProp('value', 'ba');
      });

      it('defaults to empty string', function () {
        expect(getShallow().find('ForwardRef(NxFilterInput)')).toHaveProp('value', '');
      });
    });

    describe('filterPlaceholder prop', function () {
      const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredFilterProps);

      it('is rendered as filter input placeholder', function () {
        const shallowRender = getShallow({
          filterPlaceholder: 'options filter'
        });

        expect(shallowRender.find('ForwardRef(NxFilterInput)')).toHaveProp('placeholder', 'options filter');
      });

      it('defaults to empty string', function () {
        expect(getShallow().find('ForwardRef(NxFilterInput)')).toHaveProp('placeholder', '');
      });
    });

    describe('filteredOptions prop', function () {
      const props: Props = {
        ...requiredFilterProps,
        filteredOptions: [
          {id: 'bar', name: 'Bar'},
          {id: 'baz', name: 'Baz'}
        ]
      };

      const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, props);

      it('renders only filtered options', function () {
        const shallowRender = getShallow();

        const options = shallowRender.children();
        expect(options.length).toBe(3);

        // first one is the filter itself
        expect(options.at(1)).toHaveText('Bar');
        expect(options.at(2)).toHaveText('Baz');
      });

      it('renders all options if filteredOptions prop is not provided', function () {
        const shallowRender = getShallow({
          filteredOptions: null
        });

        const options = shallowRender.children();
        expect(options.length).toBe(4);

        // first one is the filter itself
        expect(options.at(1)).toHaveText('Foo');
        expect(options.at(2)).toHaveText('Bar');
        expect(options.at(3)).toHaveText('Baz');
      });
    });
  });

  describe('renderToggleAllOption', function () {
    const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredProps);

    it('renders toggleAll option if renderToggleAllOption provided', function () {
      const shallowRender = getShallow({
        renderToggleAllOption: () => <input type="checkbox" id="toggleAllOption"/>
      });

      const options = shallowRender.children();
      expect(options.length).toBe(4);
      expect(options.at(0)).toContainMatchingElement('input#toggleAllOption');
    });
  });

  describe('renderCounter', function () {
    const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredProps);

    it('includes counter in trigger content if renderCounter prop is provided', function () {
      const shallowRender = getShallow({
        renderCounter: () =><div>Counter</div>
      });

      const expectedTriggerContent = (
        <>
          <span>Foobar</span>
          <div>Counter</div>
        </>
      );
      expect(shallowRender.find('NxTreeView')).toHaveProp('triggerContent', expectedTriggerContent);
    });
  });

  describe('disabled prop', function () {
    const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredProps);

    it('defaults to false if disabled prop is not provided', function () {
      expect(getShallow().find('NxTreeView')).toHaveProp('disabled', false);
    });

    it('disables NxTreeView', function () {
      const shallowRender = getShallow({
        disabled: true
      });

      expect(shallowRender.find('NxTreeView')).toHaveProp('disabled', true);
    });

    it('does not disable options filter', function () {
      const shallowRender = getShallow({
        disabled: true,
        onFilterChange: () => {},
        filterThreshold: 1
      });

      expect(shallowRender.find('NxTreeView')).toHaveProp('disabled', true);
      expect(shallowRender.find('.nx-tree-view__filter input')).not.toHaveProp('disabled');
    });

    describe('disabledTooltip prop', function () {
      it('does not render tooltip if disabledTooltip prop is provided but component is not disabled', function () {
        const shallowRender = getShallow({
          disabledTooltip: 'Disabled Tooltip Test'
        });

        expect(shallowRender.find('NxTreeView')).toHaveProp('triggerTooltip', null);
      });

      it('does not render tooltip if component is disabled but disabledTooltip prop is not provided', function () {
        const shallowRender = getShallow({
          disabled: true
        });

        expect(shallowRender.find('NxTreeView')).toHaveProp('triggerTooltip', null);
      });

      it('renders tooltip if disabledTooltip prop is provided and component is disabled', function () {
        const shallowRender = getShallow({
          disabled: true,
          disabledTooltip: 'Disabled Tooltip Test'
        });

        expect(shallowRender.find('NxTreeView')).toHaveProp('triggerTooltip', {
          title: 'Disabled Tooltip Test',
          placement: 'top'
        });
      });

      it('adds className to the disabled tooltip if tooltipModifierClass prop is provided', function () {
        const shallowRender = getShallow({
          disabled: true,
          disabledTooltip: 'Disabled Tooltip Test',
          tooltipModifierClass: 'test-tooltip-modifier'
        });

        expect(shallowRender.find('NxTreeView')).toHaveProp('triggerTooltip', {
          title: 'Disabled Tooltip Test',
          placement: 'top',
          className: 'test-tooltip-modifier'
        });
      });
    });
  });

  describe('isOpen prop', function () {
    const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredProps);

    it('expands NxTreeView when true', function () {
      const shallowRender = getShallow({
        isOpen: true
      });
      expect(shallowRender.find('NxTreeView')).toHaveProp('isOpen', true);
    });

    it('defaults to false', function () {
      expect(getShallow().find('NxTreeView')).toHaveProp('isOpen', false);
    });
  });

  describe('id prop', function() {
    const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, requiredProps);

    it('assigns the supplied id to the NxTreeView', function() {
      const shallowRender = getShallow({
        id: 'someid'
      });
      expect(shallowRender.find('NxTreeView')).toHaveProp('id', 'someid');
    });

    it('assigns undefined if the id prop if not supplied', function() {
      const shallowRender = getShallow();
      expect(shallowRender.find('NxTreeView')).toHaveProp('id', undefined);
    });
  });

  describe('optionTooltipGenerator prop', function () {
    const props: Props = {
      ...requiredProps,
      optionTooltipGenerator: option => option.name
    };
    const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, props);

    it('adds tooltip for each option except all/none', function () {
      const shallowRender = getShallow();

      const fooTooltip = shallowRender.children().at(0);
      expect(fooTooltip).toHaveDisplayName('NxTooltip');
      expect(fooTooltip).toHaveProp('title', 'Foo');
      expect(fooTooltip).toHaveProp('placement', 'top');
      expect(fooTooltip).not.toHaveProp('className');

      const barTooltip = shallowRender.children().at(1);
      expect(barTooltip).toHaveDisplayName('NxTooltip');
      expect(barTooltip).toHaveProp('title', 'Bar');
      expect(barTooltip).toHaveProp('placement', 'top');
      expect(barTooltip).not.toHaveProp('className');
    });

    it('adds className prop to NxTooltip if tooltipModifierClass prop is provided', function () {
      const shallowRender = getShallow({
        tooltipModifierClass: 'test-tooltip-modifier'
      });

      const fooTooltip = shallowRender.children().at(0);
      expect(fooTooltip).toHaveDisplayName('NxTooltip');
      expect(fooTooltip).toHaveProp('className', 'test-tooltip-modifier');

      const barTooltip = shallowRender.children().at(1);
      expect(barTooltip).toHaveDisplayName('NxTooltip');
      expect(barTooltip).toHaveProp('className', 'test-tooltip-modifier');
    });
  });

  describe('no options', function () {
    const props: Props = {
      ...requiredProps,
      isOpen: true,
      options: []
    };
    const getShallow = getShallowComponent<Props>(AbstractTreeViewSelect, props);

    it('disables NxTreeView when there are no options', function () {
      expect(getShallow().find('NxTreeView')).toHaveProp('disabled', true);
    });

    it('disables NxTreeView when there are no options even if you pass disabled = false',
        function () {
          const shallowRender = getShallow({
            disabled: false
          });
          expect(shallowRender.find('NxTreeView')).toHaveProp('disabled', true);
        }
    );

    it('collapses NxTreeView when there are no options', function () {
      expect(getShallow().find('NxTreeView')).toHaveProp('isOpen', false);
    });

    it('generates trigger tooltip using name prop when there are no options', function () {
      expect(getShallow().find('NxTreeView')).toHaveProp('triggerTooltip', {
        title: 'There are no foobar options',
        placement: 'top'
      });
    });

    it('generates trigger tooltip using the disabledTooltip if provided',
        function () {
          const shallowRender = getShallow({
            disabledTooltip: 'disabled tooltip'
          });
          expect(shallowRender.find('NxTreeView')).toHaveProp('triggerTooltip', {
            title: 'disabled tooltip',
            placement: 'top'
          });
        }
    );

    it('adds className to trigger tooltip when there are no options and tooltipModifierClass prop is provided',
        function () {
          const shallowRender = getShallow({
            tooltipModifierClass: 'test-tooltip-modifier'
          });
          expect(shallowRender.find('NxTreeView')).toHaveProp('triggerTooltip', {
            title: 'There are no foobar options',
            placement: 'top',
            className: 'test-tooltip-modifier'
          });
        }
    );
  });
});
