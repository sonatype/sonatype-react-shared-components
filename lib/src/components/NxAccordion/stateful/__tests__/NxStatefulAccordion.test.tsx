/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { act } from 'react-dom/test-utils';

import NxStatefulAccordion, { Props } from '../NxStatefulAccordion';
import NxAccordion from '../../NxAccordion';
import * as enzymeUtils from '../../../../__testutils__/enzymeUtils';

describe('NxStatefulAccordion', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxStatefulAccordion, {});

  it('renders an NxAccordion with the specified props', function() {
    const onToggle = jest.fn(),
        component = getShallowComponent({ onToggle, className: 'foo', id: 'bar' });

    expect(component).toMatchSelector(NxAccordion);
    expect(component).toHaveProp('onToggle', onToggle);
    expect(component).toHaveProp('className', 'foo');
    expect(component).toHaveProp('id', 'bar');
  });

  it('sets the NxAccordion open prop to the defaultOpen prop initially', function() {
    expect(getShallowComponent()).toHaveProp('open', false);
    expect(getShallowComponent({ defaultOpen: false })).toHaveProp('open', false);
    expect(getShallowComponent({ defaultOpen: true })).toHaveProp('open', true);
  });

  it('toggles the NxAccordion open prop when the NxAccordion onToggle callback is called', function() {
    const component = getShallowComponent();

    expect(component).toHaveProp('open', false);

    act(function() {
      component.simulate('toggle');
    });

    expect(component).toHaveProp('open', true);

    act(function() {
      component.simulate('toggle');
    });

    expect(component).toHaveProp('open', false);
  });
});
