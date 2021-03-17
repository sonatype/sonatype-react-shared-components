/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faCrow, faBiohazard } from '@fortawesome/free-solid-svg-icons';

import * as enzymeUtils from '../../../../__testutils__/enzymeUtils';
import NxStatefulGlobalSidebar, { Props } from '../NxStatefulGlobalSidebar';
import NxGlobalSidebar from '../../NxGlobalSidebar';

describe('NxStatefulGlobalSidebar', () => {
  const minimalProps = {
        isDefaultOpen: false,
        children: <p className="child-1">I am children</p>,
        toggleCloseIcon: faBiohazard,
        toggleOpenIcon: faCrow,
        logoImg: 'logoImg',
        logoAltText: 'alt text',
        logoLink: '/some-link'
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxStatefulGlobalSidebar, minimalProps);

  it('renders an NxGlobalSidebar component with passed in props', function() {
    const component = getShallowComponent();
    expect(component).toMatchSelector(NxGlobalSidebar);
    expect(component).toHaveProp('isOpen', false);
    expect(component).toHaveProp('onToggleClick');
    expect(component).toHaveProp('toggleOpenIcon', faCrow);
    expect(component).toHaveProp('toggleCloseIcon', faBiohazard);
    expect(component).toHaveProp('logoImg', 'logoImg');
    expect(component).toHaveProp('logoAltText', 'alt text');
    expect(component).toHaveProp('logoLink', '/some-link');
    expect(component).toHaveProp('children', minimalProps.children);
  });

  it('changes isOpen when the component is toggled', function() {
    const component = getShallowComponent();
    expect(component).toHaveProp('isOpen', false);

    component.simulate('toggleClick');
    expect(component).toHaveProp('isOpen', true);

    component.simulate('toggleClick');
    expect(component).toHaveProp('isOpen', false);
  });
});
