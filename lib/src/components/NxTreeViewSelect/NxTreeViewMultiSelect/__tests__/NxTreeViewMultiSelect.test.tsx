/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {getShallowComponent} from '../../../../__testutils__/enzymeUtils';
import NxTreeViewMultiSelect, {Props, Option} from '../NxTreeViewMultiSelect';

import MultiSelectCounter from '../MultiSelectCounter';

describe('NxTreeViewMultiSelect', function() {
  const requiredProps: Props = {
    options: [
      {id: 'foo', name: 'Foo'},
      {id: 'bar', name: 'Bar'},
      {id: null, name: 'Null'} // Ensure that `null` ids are valid
    ],
    children: 'Foobar',
    name: 'foobar',
    onChange: () => {}
  };

  const getShallow = getShallowComponent<Props>(NxTreeViewMultiSelect, requiredProps);

  it('throws an error if a selectedId is supplied that is not part of the options', function() {
    const expectedErr = 'You are attempting to select "ufo", but it is not part of the available options';
    expect(() => {
      getShallow({ selectedIds: new Set(['ufo']) });
    }).toThrowError(expectedErr);
  });

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
      disabled: true,
      onToggleCollapse: jest.fn(),
      disabledTooltip: 'test disabled tooltip',
      optionTooltipGenerator: (option: Option) => option.name,
      tooltipModifierClass: 'tooltip-test-class',
      onFilterChange: jest.fn(),
      filter: 'filter term',
      filteredOptions: [{id: 'bar', name: 'Bar'}],
      filterPlaceholder: 'test filter placeholder',
      filterThreshold: 1,
      id: 'someid'
    };

    const shallowRender = getShallow(optionalProps);
    expect(shallowRender).toHaveDisplayName('AbstractTreeViewSelect');
    expect(shallowRender).toHaveProp(optionalProps);
  });

  describe('renderOption prop', function () {
    it('renders unchecked <NxCheckbox> if option is not selected', function () {
      const shallowRender = getShallow({
        selectedIds: new Set(['foo'])
      });
      const optionWrapper = shallowRender.renderProp('renderOption')({id: 'bar', name: 'Bar'});

      expect(optionWrapper).toHaveDisplayName('ForwardRef(NxCheckbox)');
      expect(optionWrapper).toHaveProp('isChecked', false);
    });

    it('renders checked <NxCheckbox> if option is selected', function () {
      const shallowRender = getShallow({
        selectedIds: new Set(['foo'])
      });
      const optionWrapper = shallowRender.renderProp('renderOption')({id: 'foo', name: 'Foo'});

      expect(optionWrapper).toHaveDisplayName('ForwardRef(NxCheckbox)');
      expect(optionWrapper).toHaveProp('isChecked', true);
    });

    it('renders unchecked <NxCheckbox> for all options if selectedIds prop is not provided', function () {
      const shallowRender = getShallow();
      const renderOption = shallowRender.renderProp('renderOption');

      expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('isChecked', false);
      expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('isChecked', false);
      expect(renderOption({id: null, name: 'Null'})).toHaveProp('isChecked', false);
    });

    it('renders enabled <NxCheckbox> for all options if component is not disabled', function () {
      const renderOption = getShallow().renderProp('renderOption');

      expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('disabled', false);
      expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('disabled', false);
      expect(renderOption({id: null, name: 'Null'})).toHaveProp('disabled', false);
    });

    it('renders disabled <NxCheckbox> for all options if component is disabled', function () {
      const shallowRender = getShallow({
        disabled: true
      });
      const renderOption = shallowRender.renderProp('renderOption');

      expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('disabled', true);
      expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('disabled', true);
      expect(renderOption({id: null, name: 'Null'})).toHaveProp('disabled', true);
    });

    it('uses option name as checkbox label', function () {
      const renderOption = getShallow().renderProp('renderOption');

      expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('children', 'Foo');
      expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('children', 'Bar');
      expect(renderOption({id: null, name: 'Null'})).toHaveProp('children', 'Null');
    });

    it('generates checkboxId using name prop and option name', function () {
      const shallowRender = getShallow();
      const renderOption = shallowRender.renderProp('renderOption');

      expect(renderOption({id: 'foo', name: 'Foo'})).toHaveProp('checkboxId', 'nx-tree-view-select-foobar-foo');
      expect(renderOption({id: 'bar', name: 'Bar'})).toHaveProp('checkboxId', 'nx-tree-view-select-foobar-bar');
      expect(renderOption({id: null, name: 'Null'})).toHaveProp('checkboxId', 'nx-tree-view-select-foobar-null');
    });

    describe('onChange callback', function () {
      it('properly calls component\'s onChange callback when an option is toggled', function() {
        const onChangeSpy = jest.fn();
        const shallowRender = getShallow({
          onChange: onChangeSpy,
          selectedIds: new Set(['bar'])
        });
        const renderOption = shallowRender.renderProp('renderOption');

        expect(onChangeSpy).not.toHaveBeenCalled();
        renderOption({id: 'foo', name: 'Foo'}).simulate('change');
        expect(onChangeSpy).toHaveBeenCalledWith(new Set(['foo', 'bar']), 'foo');

        renderOption({id: 'bar', name: 'Bar'}).simulate('change');
        expect(onChangeSpy).toHaveBeenCalledWith(new Set([]), 'bar');

        renderOption({id: null, name: 'Null'}).simulate('change');
        expect(onChangeSpy).toHaveBeenCalledWith(new Set(['bar', null]), null);
      });
    });
  });

  describe('renderToggleAllOption prop', function () {

    it('renders enabled <NxCheckbox> with properly generated id and label', function () {
      const toggleAllOptionWrapper = getShallow().renderProp('renderToggleAllOption')();
      expect(toggleAllOptionWrapper).toHaveDisplayName('ForwardRef(NxCheckbox)');
      expect(toggleAllOptionWrapper).toHaveProp({
        checkboxId: 'nx-tree-view-select-foobar-all/none',
        disabled: false,
        children: 'all/none'
      });
    });

    it('renders unchecked <NxCheckbox> if no options are selected', function () {
      const shallowRender = getShallow({
        selectedIds: new Set()
      });
      const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();

      expect(toggleAllOptionWrapper).toHaveProp('isChecked', false);
    });

    it('renders unchecked <NxCheckbox> if not all options are selected', function () {
      const shallowRender = getShallow({
        selectedIds: new Set(['foo'])
      });
      const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();

      expect(toggleAllOptionWrapper).toHaveProp('isChecked', false);
    });

    it('renders checked <NxCheckbox> if all options are selected', function () {
      const shallowRender = getShallow({
        selectedIds: new Set(['foo', 'bar', null])
      });
      const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();

      expect(toggleAllOptionWrapper).toHaveProp('isChecked', true);
    });

    it('renders disabled <NxCheckbox> if component is disabled', function () {
      const shallowRender = getShallow({
        disabled: true
      });
      const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();

      expect(toggleAllOptionWrapper).toHaveProp('disabled', true);
    });

    describe('onChange callback', function () {
      it('selects all options when no options are selected', function() {
        const onChangeSpy = jest.fn();
        const shallowRender = getShallow({
          onChange: onChangeSpy,
          selectedIds: new Set()
        });
        const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();

        expect(onChangeSpy).not.toHaveBeenCalled();
        toggleAllOptionWrapper.simulate('change');
        expect(onChangeSpy).toHaveBeenCalledWith(new Set(['foo', 'bar', null]));
      });

      it('selects all options when not all options are selected', function() {
        const onChangeSpy = jest.fn();
        const shallowRender = getShallow({
          onChange: onChangeSpy,
          selectedIds: new Set(['bar'])
        });
        const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();

        expect(onChangeSpy).not.toHaveBeenCalled();
        toggleAllOptionWrapper.simulate('change');
        expect(onChangeSpy).toHaveBeenCalledWith(new Set(['foo', 'bar', null]));
      });

      it('un-selects all options when all options are selected', function() {
        const onChangeSpy = jest.fn();
        const shallowRender = getShallow({
          onChange: onChangeSpy,
          selectedIds: new Set(['foo', 'bar', null])
        });
        const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();

        expect(onChangeSpy).not.toHaveBeenCalled();
        toggleAllOptionWrapper.simulate('change');
        expect(onChangeSpy).toHaveBeenCalledWith(new Set([]));
      });
    });

    describe('when options are filtered', function () {
      const propsWithFiltered: Props = {
        ...requiredProps,
        options: [
          {id: 'foo', name: 'Foo'},
          {id: 'bar', name: 'Bar'},
          {id: 'fooz', name: 'Fooz'},
          {id: 'baz', name: 'Baz'}
        ],
        filteredOptions: [
          {id: 'fooz', name: 'Fooz'},
          {id: 'baz', name: 'Baz'}
        ]
      };

      const getShallowWithFiltered = getShallowComponent<Props>(NxTreeViewMultiSelect, propsWithFiltered);

      it('renders unchecked <NxCheckbox> if not all filtered options are selected', function () {
        const shallowRender = getShallowWithFiltered({
          selectedIds: new Set(['fooz'])
        });
        const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();

        expect(toggleAllOptionWrapper).toHaveProp('isChecked', false);
      });

      it('renders checked <NxCheckbox> if all filtered options are selected', function () {
        const shallowRender = getShallowWithFiltered({
          selectedIds: new Set(['fooz', 'baz'])
        });
        const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();

        expect(toggleAllOptionWrapper).toHaveProp('isChecked', true);
      });

      it('renders nothing if no options are displayed due to filter', function () {
        const shallowRender = getShallow({
          filteredOptions: []
        });

        const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();
        expect(toggleAllOptionWrapper).toBeEmptyRender();
      });

      describe('onChange callback', function () {
        it('selects all filtered options in addition to already selected options', function() {
          const onChangeSpy = jest.fn();
          const shallowRender = getShallowWithFiltered({
            onChange: onChangeSpy,
            selectedIds: new Set(['foo'])
          });
          const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();

          expect(onChangeSpy).not.toHaveBeenCalled();
          toggleAllOptionWrapper.simulate('change');
          expect(onChangeSpy).toHaveBeenCalledWith(new Set(['foo', 'fooz', 'baz']));
        });

        it('unselected only filtered options', function() {
          const onChangeSpy = jest.fn();
          const shallowRender = getShallowWithFiltered({
            onChange: onChangeSpy,
            selectedIds: new Set(['foo', 'fooz', 'baz'])
          });
          const toggleAllOptionWrapper = shallowRender.renderProp('renderToggleAllOption')();

          expect(onChangeSpy).not.toHaveBeenCalled();
          toggleAllOptionWrapper.simulate('change');
          expect(onChangeSpy).toHaveBeenCalledWith(new Set(['foo']));
        });
      });
    });
  });

  describe('renderCounter prop', function () {
    it('renders <MultiSelectCounter> with empty selectedIds if selectedIds prop is not provided', function () {
      const renderPropWrapper = getShallow().renderProp('renderCounter')();

      expect(renderPropWrapper).toMatchSelector(MultiSelectCounter);
      expect(renderPropWrapper)
          .toHaveProp('options', [{id: 'foo', name: 'Foo'}, {id: 'bar', name: 'Bar'}, {id: null, name: 'Null'}]);
      expect(renderPropWrapper).toHaveProp('selectedIds', new Set());
    });

    it('renders <MultiSelectCounter> with selectedIds if selectedIds prop is provided', function () {
      const renderPropWrapper = getShallow({
        selectedIds: new Set(['bar'])
      }).renderProp('renderCounter')();

      expect(renderPropWrapper).toHaveProp('selectedIds', new Set(['bar']));
    });
  });
});
