/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {getShallowComponent} from '../../../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import NxStatefulCollapsibleRadioSelect, {Props, Option} from '../NxStatefulCollapsibleRadioSelect';
import { NxStatefulTreeViewRadioSelect } from '../../../../../index';

describe('NxStatefulCollapsibleRadioSelect', function() {
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

  const getShallow = getShallowComponent<Props>(NxStatefulCollapsibleRadioSelect, requiredProps);

  it('is aliased as NxStatefulTreeViewRadioSelect', function() {
    expect(NxStatefulCollapsibleRadioSelect).toBe(NxStatefulTreeViewRadioSelect);
  });

  it('properly renders component using only required props', function() {
    const shallowRender = getShallow();

    expect(shallowRender).toHaveDisplayName('NxCollapsibleRadioSelect');
    expect(shallowRender).toHaveProp('name', 'foobar');
    expect(shallowRender).toHaveProp('children', 'Foobar');
    expect(shallowRender).toHaveProp('options', [
      {id: 'foo', name: 'Foo'},
      {id: 'bar', name: 'Bar'},
      {id: null, name: 'Null'}
    ]);
  });

  it('passes props to NxCollapsibleRadioSelect', function() {
    const optionalProps = {
      id: 'someid',
      isOpen: true,
      disabled: true,
      disabledTooltip: 'test disabled tooltip',
      optionTooltipGenerator: (option: Option) => option.name,
      tooltipModifierClass: 'tooltip-test-class',
      filterPlaceholder: 'test filter placeholder',
      filterThreshold: 1
    };

    const shallowRender = getShallow(optionalProps);
    expect(shallowRender).toHaveDisplayName('NxCollapsibleRadioSelect');
    expect(shallowRender).toHaveProp(optionalProps);
  });

  it('renders collapsed CollapsibleItems by default', function() {
    expect(getShallow()).toHaveProp('isOpen', false);
  });

  it('expands CollapsibleItems when toggled', function() {
    const shallowRender = getShallow();
    expect(getShallow()).toHaveProp('isOpen', false);
    shallowRender.simulate('toggleCollapse');
    expect(shallowRender).toHaveProp('isOpen', true);
  });

  it('collapses CollapsibleItems when toggled', function() {
    const shallowRender = getShallow({
      isOpen: true
    });
    expect(shallowRender).toHaveProp('isOpen', true);
    shallowRender.simulate('toggleCollapse');
    expect(shallowRender).toHaveProp('isOpen', false);
  });

  it('filters options', function () {
    const shallowRender = getShallow();
    expect(shallowRender).toHaveProp({
      filter: '',
      filteredOptions: [
        {id: 'foo', name: 'Foo'},
        {id: 'bar', name: 'Bar'},
        {id: null, name: 'Null'}
      ]
    });

    shallowRender.simulate('filterChange', 'fo');
    expect(shallowRender).toHaveProp({
      filter: 'fo',
      filteredOptions: [
        {id: 'foo', name: 'Foo'}
      ]
    });
  });
});
