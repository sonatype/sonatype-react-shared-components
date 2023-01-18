/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { getShallowComponent } from '../../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import NxTreeItem from '../../NxTreeItem';

import NxTreeStatefulItem from '../NxTreeStatefulItem';

describe('NxTreeStatefulItem', function() {
  const getShallow = getShallowComponent(NxTreeStatefulItem, {});

  it('renders an NxTreeItem with all applicable props passed through', function() {
    const component = getShallow({ id: 'foo', className: 'bar', lang: 'en-us', collapsible: true });

    expect(component).toMatchSelector(NxTreeItem);
    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('lang', 'en-us');
    expect(component).toHaveClassName('bar');
    expect(component).toHaveProp('collapsible', true);
  });

  it('initially sets the NxTreeItem\'s isOpen based on defaultOpen, or true if defaultOpen is not specified',
      function() {
        expect(getShallow()).toHaveProp('isOpen', true);
        expect(getShallow({ defaultOpen: true })).toHaveProp('isOpen', true);
        expect(getShallow({ defaultOpen: false })).toHaveProp('isOpen', false);
      }
  );

  it('toggles isOpen when the NxTreeItem\'s onToggleCollapse fires', function() {
    const component = getShallow();

    expect(component).toHaveProp('isOpen', true);

    component.simulate('toggleCollapse');
    expect(component).toHaveProp('isOpen', false);

    component.simulate('toggleCollapse');
    expect(component).toHaveProp('isOpen', true);
  });
});
