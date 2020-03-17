/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {getShallowComponent} from '../../../../__testutils__/enzymeUtils';
import NxTreeViewRadioSelect, {Option, Props} from '../NxTreeViewRadioSelect';
import NxTreeViewCounter from '../../NxTreeViewCounter';

describe('NxTreeViewRadioSelect', function() {
  const requiredProps: Props = {
    options: [
      {id: 'foo', name: 'Foo'},
      {id: 'bar', name: 'Bar'},
      {id: null, name: 'Null'}
    ],
    children: 'Foobar',
    name: 'foobar',
    onChange: () => {}
  };

  const getShallow = getShallowComponent<Props>(NxTreeViewRadioSelect, requiredProps);

  it('properly renders component using only required props', function() {
    const shallowRender = getShallow();

    expect(shallowRender).toHaveDisplayName('AbstractTreeViewSelect');
    expect(shallowRender).toHaveProp('name', 'foobar');
    expect(shallowRender).toHaveProp('children', 'Foobar');
    expect(shallowRender).toHaveProp('options', [
      {id: 'foo', name: 'Foo'},
      {id: 'bar', name: 'Bar'},
      {id: null, name: 'Null'}
    ]);
  });

  it('passes props to AbstractTreeViewSelect', function() {
    const optionalProps = {
      isOpen: true,
      id: 'someid',
      disabled: true,
      onToggleCollapse: jest.fn(),
      disabledTooltip: 'test disabled tooltip',
      optionTooltipGenerator: (option: Option) => option.name,
      tooltipModifierClass: 'tooltip-test-class',
      onFilterChange: jest.fn(),
      filter: 'filter term',
      filteredOptions: [{id: 'bar', name: 'Bar'}],
      filterPlaceholder: 'test filter placeholder',
      filterThreshold: 1
    };

    const shallowRender = getShallow(optionalProps);
    expect(shallowRender).toHaveDisplayName('AbstractTreeViewSelect');
    expect(shallowRender).toHaveProp(optionalProps);
  });

  describe('renderOption prop', function () {
    it('renders unchecked <NxRadio> if option is not selected', function () {
      const shallowRender = getShallow({selectedId: 'foo'});
      const optionWrapper = shallowRender.renderProp('renderOption')({id: 'bar', name: 'Bar'});

      expect(optionWrapper).toHaveDisplayName('ForwardRef(NxRadio)');
      expect(optionWrapper).toHaveProp('isChecked', false);
    });

    it('renders checked <NxRadio> if option is selected', function () {
      const shallowRender = getShallow({selectedId: 'foo'});
      const optionWrapper = shallowRender.renderProp('renderOption')({id: 'foo', name: 'Foo'});

      expect(optionWrapper).toHaveDisplayName('ForwardRef(NxRadio)');
      expect(optionWrapper).toHaveProp('isChecked', true);
    });

    it('renders unchecked <NxRadio> for all options if selectedId prop is not provided', function () {
      const shallowRender = getShallow();
      const renderOption = shallowRender.renderProp('renderOption');

      expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('isChecked', false);
      expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('isChecked', false);
      expect(renderOption({id: null, name: 'Null'})).toHaveProp('isChecked', false);
    });

    it('renders enabled <NxRadio> for all options if component is not disabled', function () {
      const renderOption = getShallow().renderProp('renderOption');

      expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('disabled', false);
      expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('disabled', false);
      expect(renderOption({id: null, name: 'Null'})).toHaveProp('disabled', false);
    });

    it('renders disabled <NxRadio> for all options if component is disabled', function () {
      const shallowRender = getShallow({disabled: true});
      const renderOption = shallowRender.renderProp('renderOption');

      expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('disabled', true);
      expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('disabled', true);
      expect(renderOption({id: null, name: 'Null'})).toHaveProp('disabled', true);
    });

    it('uses option name as radio label', function () {
      const renderOption = getShallow().renderProp('renderOption');

      expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('children', 'Foo');
      expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('children', 'Bar');
      expect(renderOption({id: null, name: 'Null'})).toHaveProp('children', 'Null');
    });

    it('generates radioId using name prop and option name', function () {
      const shallowRender = getShallow();
      const renderOption = shallowRender.renderProp('renderOption');

      expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('radioId', 'nx-tree-view-select-foobar-foo');
      expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('radioId', 'nx-tree-view-select-foobar-bar');
      expect(renderOption({id: null, name: 'Null'})).toHaveProp('radioId', 'nx-tree-view-select-foobar-null');
    });

    describe('onChange callback', function () {
      it('properly calls component\'s onChange callback when an option is toggled', function() {
        const onChangeSpy = jest.fn();
        const shallowRender = getShallow({
          onChange: onChangeSpy,
          selectedId: 'bar'
        });
        const renderOption = shallowRender.renderProp('renderOption');

        expect(onChangeSpy).not.toHaveBeenCalled();
        renderOption({id: 'foo', name: 'Foo'}).simulate('change', 'foo');
        expect(onChangeSpy).toHaveBeenCalledWith('foo');

        renderOption({id: 'bar', name: 'Bar'}).simulate('change', 'bar');
        expect(onChangeSpy).toHaveBeenCalledWith('bar');

        renderOption({id: null, name: 'Null'}).simulate('change', null);
        expect(onChangeSpy).toHaveBeenCalledWith(null);
      });
    });
  });

  describe('renderCounter prop', function () {
    it('renders nothing if selectedId prop is not provided', function () {
      const renderPropWrapper = getShallow().renderProp('renderCounter')();
      expect(renderPropWrapper).toBeEmptyRender();
    });

    it('renders <NxTreeViewCounter> with selected option name if selectedId prop is provided', function () {
      const renderPropWrapper = getShallow({selectedId: 'bar'}).renderProp('renderCounter')();
      expect(renderPropWrapper).toContainReact(<NxTreeViewCounter>Bar</NxTreeViewCounter>);
    });

    it('renders <NxTreeViewCounter> with selected option name even if the option id is null', function () {
      const renderPropWrapper = getShallow({selectedId: null}).renderProp('renderCounter')();
      expect(renderPropWrapper).toContainReact(<NxTreeViewCounter>Null</NxTreeViewCounter>);
    });
  });
});
