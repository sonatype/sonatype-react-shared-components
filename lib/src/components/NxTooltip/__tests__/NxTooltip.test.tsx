/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { Tooltip } from '@material-ui/core';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxTooltip, { TooltipContext, Props } from '../NxTooltip';

describe('NxTooltip', function() {
  const minimalProps = {
        children: <div id="foo" />,
        title: 'tip'
      },
      getComponent = getShallowComponent(NxTooltip, minimalProps),
      getTooltip = (extraProps?: Partial<Props>) => getComponent(extraProps).children();

  it('creates a TooltipContext.Provider that provides a value of true', function() {
    expect(getComponent()).toMatchSelector(TooltipContext.Provider);
    expect(getComponent()).toHaveProp('value', true);
  });

  it('creates a MUI tooltip as the context providers child', function() {
    expect(getTooltip()).toMatchSelector(Tooltip);
  });

  it('passes through all props except placement to MUI Tooltip', function() {
    const onOpen = () => {},
        onClose = () => {},
        component = getTooltip({ open: false, onOpen, onClose, placement: 'left' });

    expect(component).toMatchSelector(Tooltip);
    expect(component).toHaveProp('children', minimalProps.children);
    expect(component).toHaveProp('open', false);
    expect(component).toHaveProp('onOpen', onOpen);
    expect(component).toHaveProp('onClose', onClose);
  });

  it('replaces null title with empty string, and all other null props with undefined', function() {
    const component = getTooltip({
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
  });

  it('passes through string titles', function() {
    const emptyComponent = getTooltip({ title: '' });
    expect(emptyComponent.prop('title')).toBe('');

    const component = getTooltip({ title: 'foo' });
    expect(component.prop('title')).toBe('foo');
  });

  it('passes through JSX titles', function() {
    const title = <div className="foo" />,
        component = getTooltip({ title });

    expect(component.prop('title')).toBe(title);
  });

  it('passes "nx-tooltip" as the `tooltip` property on the `classes` prop of the Tooltip', function() {
    expect(getTooltip().prop('classes').tooltip).toBe('nx-tooltip');
  });

  it('adds the className prop value to the tooltip classes', function() {
    expect(getTooltip({ className: 'foo' }).prop('classes').tooltip).toMatch(/(\s|^)foo(\s|$)/);
  });

  it('does not pass the className prop on to the tooltip', function() {
    expect(getTooltip({ className: 'foo' })).toHaveProp('className', undefined);
  });

  it('converts "top" and "bottom" placements to "top-start" and "bottom-start" respectively', function() {
    expect(getTooltip({ placement: 'top' })).toHaveProp('placement', 'top-start');
    expect(getTooltip({ placement: 'bottom' })).toHaveProp('placement', 'bottom-start');
  });

  it('sets placement to "top-start" by default', function() {
    expect(getTooltip()).toHaveProp('placement', 'top-start');
    expect(getTooltip({ placement: null })).toHaveProp('placement', 'top-start');
  });

  it('passes through all other values of placement', function() {
    expect(getTooltip({ placement: 'left' })).toHaveProp('placement', 'left');
    expect(getTooltip({ placement: 'right' })).toHaveProp('placement', 'right');
    expect(getTooltip({ placement: 'top-middle' })).toHaveProp('placement', 'top');
    expect(getTooltip({ placement: 'bottom-middle' })).toHaveProp('placement', 'bottom');
    expect(getTooltip({ placement: 'top-end' })).toHaveProp('placement', 'top-end');
    expect(getTooltip({ placement: 'bottom-end' })).toHaveProp('placement', 'bottom-end');
  });
});
