/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import NxDivider from '../NxDivider';
import { NxDividerProps } from '../types';
import { getShallowComponent } from '../../../__testutils__/enzymeUtils';

describe('NxDivider', function() {
  const minimalProps: NxDividerProps = {};
  const getShallow = getShallowComponent(NxDivider, minimalProps);

  it('renders a default horizontal divider', function() {
    const wrapper = getShallow();
    expect(wrapper).toMatchSelector('.nx-divider');
  });

  it('renders the classNames given to it', function() {
    const extendedProps: Partial<NxDividerProps> = {
      className: 'test-classname ufo'
    };
    const wrapper = getShallow(extendedProps);
    expect(wrapper).toMatchSelector('.nx-divider.test-classname.ufo');
  });

  it('renders a horizontal divider if no props are provided', function() {
    const wrapper = getShallow();
    expect(wrapper).toMatchSelector('.nx-divider.nx-divider--horizontal');
  });

  it('renders a horizontal divider by specifying the horizontal prop', function() {
    const wrapper = getShallow({horizontal: true});
    expect(wrapper).toMatchSelector('.nx-divider.nx-divider--horizontal');
  });

  it('renders a vertical divider by specifying the vertical prop', function() {
    const wrapper = getShallow({vertical: true});
    expect(wrapper).toMatchSelector('.nx-divider.nx-divider--vertical');
  });
});
