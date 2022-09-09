/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import NxFilterDropdown, { Props } from '../NxFilterDropdown';
import NxDropdown from '../../NxDropdown/NxDropdown';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import MultiSelectCounter from '../../Counter/MultiSelectCounter';
import { getShallowComponent, getMountedComponent } from '../../../__testutils__/enzymeUtils';
import NxCheckbox from '../../NxCheckbox/NxCheckbox';

describe('NxFilterDropdown', function() {
  const minimalProps: Props = {
        options: [],
        isOpen: false,
        onToggleCollapse: () => {},
        selectedIds: new Set(),
        onChange: () => {}
      },
      getShallow = getShallowComponent(NxFilterDropdown, minimalProps),
      getMounted = getMountedComponent(NxFilterDropdown, minimalProps);

  it('renders an NxDropdown', function() {
    expect(getShallow()).toMatchSelector(NxDropdown);
  });

  it('sets the nx-filter-dropdown classname on the dropdown', function() {
    expect(getShallow()).toHaveClassName('nx-filter-dropdown');
  });

  it('adds classnames specified in props', function() {
    const component = getShallow({ className: 'foo' });

    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-filter-dropdown');
  });

  it('passes the isOpen prop to the dropdown', function() {
    expect(getShallow()).toHaveProp('isOpen', false);
    expect(getShallow({ isOpen: true })).toHaveProp('isOpen', true);
  });

  it('passes the onToggleCollapse prop to the dropdown', function() {
    const onToggleCollapse = jest.fn();

    expect(getShallow({ onToggleCollapse })).toHaveProp('onToggleCollapse', onToggleCollapse);
  });

  it('throws an error if selectedIds includes an id not present in options', function() {
    let caught;
    try {
      getShallow({ selectedIds: new Set(['foo']) });
    }
    catch (e: any) {
      expect(e.message).toMatch('foo');
      caught = true;
    }

    expect(caught).toBe(true);
  });

  it('renders a filter icon and the word "Filter" in the toggle, when selectedIds is empty', function() {
    const component = getMounted(),
        toggleLabel = component.find('.nx-dropdown__toggle-label'),
        icon = toggleLabel.find(NxFontAwesomeIcon);

    expect(icon).toMatchSelector('.nx-dropdown-icon');
    expect(icon).toHaveProp('icon', faFilter);

    expect(toggleLabel).toHaveText('Filter');
  });

  it('renders the placeholder instead of the word "Filter" if provided', function() {
    const component = getMounted({ placeholder: 'foo' }),
        toggleLabel = component.find('.nx-dropdown__toggle-label');

    expect(toggleLabel).toHaveText('foo');
  });

  it('renders a filter icon and a counter when selectedIds is not empty', function() {
    const props = {
          options: [{ id: '1', displayName: 'one' }, { id: '2', displayName: 'two' }],
          selectedIds: new Set(['2'])
        },
        component = getMounted(props),
        toggleLabel = component.find('.nx-dropdown__toggle-label'),
        icon = toggleLabel.find(NxFontAwesomeIcon),
        counter = toggleLabel.find(MultiSelectCounter);

    expect(icon).toMatchSelector('.nx-dropdown-icon');
    expect(icon).toHaveProp('icon', faFilter);

    expect(counter).toHaveProp('options', props.options);
    expect(counter).toHaveProp('selectedIds', props.selectedIds);
  });

  describe('Reset button', function() {
    it('is present in the dropdown menu unless the showReset prop is false', function() {
      const defaultComponent = getShallow(),
          withExplicitReset = getShallow({ showReset: true }),
          withExplicitNoReset = getShallow({ showReset: false });

      expect(defaultComponent).toContainMatchingElement('.nx-filter-dropdown__reset');
      expect(withExplicitReset).toContainMatchingElement('.nx-filter-dropdown__reset');
      expect(withExplicitNoReset).not.toContainMatchingElement('.nx-filter-dropdown__reset');
    });

    it('is a button with the nx-dropdown-link and nx-filter-dropdown__reset classes', function() {
      const component = getShallow(),
          resetBtn = component.find('button.nx-dropdown-link.nx-filter-dropdown__reset');

      expect(resetBtn).toExist();
    });

    it('fires onChange with an empty set when clicked', function() {
      const onChange = jest.fn(),
          props = {
            options: [{ id: '1', displayName: 'one' }, { id: '2', displayName: 'two' }],
            selectedIds: new Set(['2']),
            onChange
          },
          component = getShallow(props),
          resetBtn = component.find('.nx-filter-dropdown__reset');

      expect(onChange).not.toHaveBeenCalled();
      resetBtn.simulate('click');
      expect(onChange).toHaveBeenCalledWith(new Set());
    });

    it('disables the Reset button when there is no selection', function() {
      const component = getShallow({
            isOpen: true,
            options: [{ id: '1', displayName: 'one' }, { id: '2', displayName: 'two' }]
          }),
          componentWithSelected = getShallow({
            isOpen: true,
            selectedIds: new Set(['1']),
            options: [{ id: '1', displayName: 'one' }, { id: '2', displayName: 'two' }]
          }),
          resetBtn = component.find('.nx-filter-dropdown__reset'),
          selectedComponentResetBtn = componentWithSelected.find('.nx-filter-dropdown__reset');

      expect(resetBtn).toBeDisabled();
      expect(selectedComponentResetBtn).not.toBeDisabled();
    });
  });

  it('renders an NxCheckbox for each option, checked based on selectedIds', function() {
    const props = {
          options: [{ id: '1', displayName: 'one' }, { id: '2', displayName: 'two' }],
          selectedIds: new Set(['2'])
        },
        component = getShallow(props),
        checkboxes = component.find(NxCheckbox);

    expect(checkboxes).toHaveLength(2);
    expect(checkboxes.at(0)).toHaveText('one');
    expect(checkboxes.at(0)).toHaveProp('isChecked', false);
    expect(checkboxes.at(1)).toHaveText('two');
    expect(checkboxes.at(1)).toHaveProp('isChecked', true);
  });

  it('calls onChange with with the id added to the selectedIds when an unselected checkbox is clicked', function() {
    const onChange = jest.fn(),
        props = {
          options: [{ id: '1', displayName: 'one' }, { id: '2', displayName: 'two' }],
          selectedIds: new Set(['2']),
          onChange
        },
        component = getShallow(props),
        checkboxes = component.find(NxCheckbox);

    expect(onChange).not.toHaveBeenCalled();
    checkboxes.at(0).simulate('change');
    expect(onChange).toHaveBeenCalledWith(new Set(['1', '2']), '1');

    // ensure prop Set not mutated
    expect(props.selectedIds).toEqual(new Set(['2']));
  });

  it('calls onChange with with the id removed from the selectedIds when a selected checkbox is clicked', function() {
    const onChange = jest.fn(),
        props = {
          options: [{ id: '1', displayName: 'one' }, { id: '2', displayName: 'two' }],
          selectedIds: new Set(['2']),
          onChange
        },
        component = getShallow(props),
        checkboxes = component.find(NxCheckbox);

    expect(onChange).not.toHaveBeenCalled();
    checkboxes.at(1).simulate('change');
    expect(onChange).toHaveBeenCalledWith(new Set([]), '2');

    // ensure prop Set not mutated
    expect(props.selectedIds).toEqual(new Set(['2']));
  });

  describe('with numeric ids', function() {
    it('type checks', function() {
      const options = [{ id: 1, displayName: 'one' }, { id: 2, displayName: 'two' }],
          selectedIds = new Set([2]);

      expect(shallow(<NxFilterDropdown options={options}
                                       selectedIds={selectedIds}
                                       isOpen={false}
                                       onToggleCollapse={() => {}}
                                       onChange={() => {}} />
      )).toExist();
    });
  });
});
