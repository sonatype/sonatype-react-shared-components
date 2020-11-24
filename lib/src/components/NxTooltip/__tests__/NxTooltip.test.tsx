/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { Tooltip } from '@material-ui/core';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxTooltip from '../NxTooltip';

describe('NxTooltip', function() {
  const minimalProps = {
        children: <div id="foo" />,
        title: 'tip'
      },
      getNxTooltip = getShallowComponent(NxTooltip, minimalProps);

  it('passes through all props except placement to MUI Tooltip', function() {
    const onOpen = () => {},
        onClose = () => {},
        component = getNxTooltip({ open: false, onOpen, onClose, placement: 'left' });

    expect(component).toMatchSelector(Tooltip);
    expect(component).toHaveProp('children', minimalProps.children);
    expect(component).toHaveProp('title', minimalProps.title);
    expect(component).toHaveProp('aria-label', minimalProps.title);
    expect(component).toHaveProp('open', false);
    expect(component).toHaveProp('onOpen', onOpen);
    expect(component).toHaveProp('onClose', onClose);
  });

  it('replaces null title with empty string, and all other null props with undefined', function() {
    const component = getNxTooltip({
      title: null,
      className: null,
      open: null,
      onOpen: null,
      onClose: null,
      placement: null
    });

    expect(component).toHaveProp('open', undefined);
    expect(component).toHaveProp('onOpen', undefined);
    expect(component).toHaveProp('onClose', undefined);
    expect(component).toHaveProp('title', '');
    expect(component).toHaveProp('aria-label', '');
  });

  it('passes "nx-tooltip" as the `tooltip` property on the `classes` prop of the Tooltip', function() {
    expect(getNxTooltip().prop('classes').tooltip).toBe('nx-tooltip');
  });

  it('adds the className prop value to the tooltip classes', function() {
    expect(getNxTooltip({ className: 'foo' }).prop('classes').tooltip).toMatch(/(\s|^)foo(\s|$)/);
  });

  it('does not pass the className prop on to the tooltip', function() {
    expect(getNxTooltip({ className: 'foo' })).toHaveProp('className', undefined);
  });

  it('converts "top" and "bottom" placements to "top-start" and "bottom-start" respectively', function() {
    expect(getNxTooltip({ placement: 'top' })).toHaveProp('placement', 'top-start');
    expect(getNxTooltip({ placement: 'bottom' })).toHaveProp('placement', 'bottom-start');
  });

  it('sets placement to "top-start" by default', function() {
    expect(getNxTooltip()).toHaveProp('placement', 'top-start');
    expect(getNxTooltip({ placement: null })).toHaveProp('placement', 'top-start');
  });

  it('passes through all other values of placement', function() {
    expect(getNxTooltip({ placement: 'left' })).toHaveProp('placement', 'left');
    expect(getNxTooltip({ placement: 'right' })).toHaveProp('placement', 'right');
    expect(getNxTooltip({ placement: 'top-end' })).toHaveProp('placement', 'top-end');
    expect(getNxTooltip({ placement: 'bottom-end' })).toHaveProp('placement', 'bottom-end');
  });
});
