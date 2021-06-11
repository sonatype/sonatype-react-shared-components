/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

import NxOverflowTooltip, { OverflowTooltipProps as Props } from '../NxOverflowTooltip';

describe('NxOverflowTooltip', function() {
  const minimalProps = { children: <div>asdf</div> },
      getShallow = getShallowComponent<Props>(NxOverflowTooltip, minimalProps);

  it('renders a NxTooltip with the passed props, aside from title', function() {
    const onOpen = jest.fn(),
        onClose = jest.fn(),
        component = getShallow({ className: 'foo', onOpen, onClose, placement: 'bottom' });

    expect(component).toHaveProp('className', 'foo');
    expect(component).toHaveProp('onOpen', onOpen);
    expect(component).toHaveProp('onClose', onClose);
    expect(component).toHaveProp('placement', 'bottom');
  });

  it('renders children equivalent to those passed', function() {
    const children = <div id="foo" className="bar">baz</div>;

    expect(getShallow({ children })).toContainReact(children);
  });

  // the conditional behavior relies on browser layout which jsdom doesn't implement. We will test that
  // in the visual tests
});
