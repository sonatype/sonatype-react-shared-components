/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxThreatBar from '../NxThreatBar';

describe('NxThreatBar', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxThreatBar, {});

  it('renders an svg with the `nx-threat-bar` class', function() {
    expect(getShallowComponent()).toMatchSelector('.nx-threat-bar');
  });

  it('sets the nx-threat-bar--unspecified class if no props are passed', function() {
    expect(getShallowComponent()).toMatchSelector('.nx-threat-bar--unspecified');
  });

  it('sets the modifier class using the threatLevelCategory if it is provided', function() {
    expect(getShallowComponent({ threatLevelCategory: 'low' })).toMatchSelector('.nx-threat-bar--low');
    expect(getShallowComponent({ threatLevelCategory: 'low' })).not.toMatchSelector('.nx-threat-bar--unspecified');
  });

  it('sets the modifier class by converting the policyThreatLevel if it is provided', function() {
    expect(getShallowComponent({ policyThreatLevel: 0 })).toMatchSelector('.nx-threat-bar--none');
    expect(getShallowComponent({ policyThreatLevel: 1 })).toMatchSelector('.nx-threat-bar--low');
    expect(getShallowComponent({ policyThreatLevel: 3 })).toMatchSelector('.nx-threat-bar--moderate');
    expect(getShallowComponent({ policyThreatLevel: 5 })).toMatchSelector('.nx-threat-bar--severe');
    expect(getShallowComponent({ policyThreatLevel: 9 })).toMatchSelector('.nx-threat-bar--critical');
    expect(getShallowComponent({ policyThreatLevel: 9 })).not.toMatchSelector('.nx-threat-bar--unspecified');
  });

  it('sets the modifier class using the threatLevelCategory if both props are provided', function() {
    const component = getShallowComponent({ policyThreatLevel: 9, threatLevelCategory: 'low' });

    expect(component).toMatchSelector('.nx-threat-bar--low');
    expect(component).not.toMatchSelector('.nx-threat-bar--critical');
    expect(component).not.toMatchSelector('.nx-threat-bar--unspecified');
  });
});
