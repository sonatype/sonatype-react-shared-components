/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { getShallowComponent } from '../../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import NxFilterDropdown from '../../NxFilterDropdown';
import NxStatefulFilterDropdown, { Props } from '../NxStatefulFilterDropdown';

describe('NxStatefulDropdown', function() {
  const minimalProps: Props = {
        options: [],
        selectedIds: new Set(),
        onChange: () => {}
      },
      getShallow = getShallowComponent(NxStatefulFilterDropdown, minimalProps);

  it('renders an NxFilterDropdown passing down all props', function() {
    const component = getShallow();

    expect(component).toMatchSelector(NxFilterDropdown);
    expect(component.prop('options')).toBe(minimalProps.options);
    expect(component.prop('selectedIds')).toBe(minimalProps.selectedIds);
    expect(component.prop('onChange')).toBe(minimalProps.onChange);
  });

  it('initially sets isOpen to false', function() {
    const component = getShallow();

    expect(component).toHaveProp('isOpen', false);
  });

  it('toggles isOpen every time the dropdown onToggleCollapse is fired', function() {
    const component = getShallow();

    component.simulate('toggleCollapse');
    expect(component).toHaveProp('isOpen', true);

    component.simulate('toggleCollapse');
    expect(component).toHaveProp('isOpen', false);

    component.simulate('toggleCollapse');
    expect(component).toHaveProp('isOpen', true);
  });
});
