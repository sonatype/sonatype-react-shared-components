/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {getShallowComponent} from '../../../../../__testutils__/enzymeUtils';
import NxStatefulTreeViewMultiSelect, {Props, Option} from '../NxStatefulTreeViewMultiSelect';

describe('NxStatefulTreeViewMultiSelect', function() {
  const requiredProps: Props = {
    options: [
      {id: 'foo', name: 'Foo'},
      {id: 'bar', name: 'Bar'}
    ],
    children: 'Foobar',
    name: 'foobar',
    onChange: () => {}
  };

  const getShallow = getShallowComponent<Props>(NxStatefulTreeViewMultiSelect, requiredProps);

  it('properly renders component using only required props', function() {
    const shallowRender = getShallow();

    expect(shallowRender).toHaveDisplayName('NxTreeViewMultiSelect');
    expect(shallowRender).toHaveProp('name', 'foobar');
    expect(shallowRender).toHaveProp('children', 'Foobar');
    expect(shallowRender).toHaveProp('options', [
      {id: 'foo', name: 'Foo'},
      {id: 'bar', name: 'Bar'}
    ]);
  });

  it('passes props to NxTreeViewMultiSelect', function() {
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
    expect(shallowRender).toHaveDisplayName('NxTreeViewMultiSelect');
    expect(shallowRender).toHaveProp(optionalProps);
  });

  it('renders collapsed TreeView by default', function() {
    expect(getShallow()).toHaveProp('isOpen', false);
  });

  it('expands TreeView when toggled', function() {
    const shallowRender = getShallow();
    expect(getShallow()).toHaveProp('isOpen', false);
    shallowRender.simulate('toggleCollapse');
    expect(shallowRender).toHaveProp('isOpen', true);
  });

  it('collapses TreeView when toggled', function() {
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
        {id: 'bar', name: 'Bar'}
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

  describe('fuzzyFilterConfig props', function() {
    const renderOpts = [
      {id: 'foo', name: 'App With Many Spaces 1'},
      {id: 'bar', name: 'App-With-Many-Dashes-1'}
    ];

    it('allows fuzzyFilter to be configured', function () {
      const shallowRender = getShallow({
        options: renderOpts,
        fuzzyFilterConfig: {
          distance: 100
        }
      });
      shallowRender.simulate('filterChange', ' Spaces');
      // Low filter distance means no match for terms at the tail of the string
      expect(shallowRender).toHaveProp({
        filter: ' Spaces',
        filteredOptions: []
      });
    });

    it('assigns fuzzyFilterConfig defaults', function() {
      const shallowRender = getShallow({
        options: renderOpts
      });

      shallowRender.simulate('filterChange', ' Spaces');
      expect(shallowRender).toHaveProp({
        filter: ' Spaces',
        filteredOptions: [
          {id: 'foo', name: 'App With Many Spaces 1'}
        ]
      });
      shallowRender.simulate('filterChange', '-Dashes-1');
      expect(shallowRender).toHaveProp({
        filter: '-Dashes-1',
        filteredOptions: [
          {id: 'bar', name: 'App-With-Many-Dashes-1'}
        ]
      });
    });
  });
});
