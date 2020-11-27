/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxThreatIndicator from '../NxPolicyViolationIndicator';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

describe('NxThreatIndicator', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxThreatIndicator, {});

  it('renders an faCircle NxFontAwesomeIcon with the `nx-threat-indicator` class', function() {
    const component = getShallowComponent();

    expect(component).toMatchSelector(NxFontAwesomeIcon);
    expect(component).toHaveProp('icon', faCircle);
    expect(component).toHaveClassName('nx-threat-indicator');
  });

  it('sets the nx-threat-indicator--unspecified class if no props are passed', function() {
    expect(getShallowComponent()).toMatchSelector('.nx-threat-indicator--unspecified');
  });

  it('sets the modifier class using the threatLevelCategory if it is provided', function() {
    expect(getShallowComponent({ threatLevelCategory: 'low' })).toMatchSelector('.nx-threat-indicator--low');
    expect(getShallowComponent({ threatLevelCategory: 'low' }))
        .not.toMatchSelector('.nx-threat-indicator--unspecified');
  });

  it('sets the modifier class by converting the policyThreatLevel if it is provided', function() {
    expect(getShallowComponent({ policyThreatLevel: 0 })).toMatchSelector('.nx-threat-indicator--none');
    expect(getShallowComponent({ policyThreatLevel: 1 })).toMatchSelector('.nx-threat-indicator--low');
    expect(getShallowComponent({ policyThreatLevel: 3 })).toMatchSelector('.nx-threat-indicator--moderate');
    expect(getShallowComponent({ policyThreatLevel: 5 })).toMatchSelector('.nx-threat-indicator--severe');
    expect(getShallowComponent({ policyThreatLevel: 9 })).toMatchSelector('.nx-threat-indicator--critical');
    expect(getShallowComponent({ policyThreatLevel: 9 })).not.toMatchSelector('.nx-threat-indicator--unspecified');
  });

  it('sets the modifier class using the threatLevelCategory if both props are provided', function() {
    const component = getShallowComponent({ policyThreatLevel: 9, threatLevelCategory: 'low' });

    expect(component).toMatchSelector('.nx-threat-indicator--low');
    expect(component).not.toMatchSelector('.nx-threat-indicator--critical');
    expect(component).not.toMatchSelector('.nx-threat-indicator--unspecified');
  });

  it('adds aria attrs to help the icon show up for screen readers', function() {
    const component = getShallowComponent({ policyThreatLevel: 9, threatLevelCategory: 'low' });

    expect(component.find(NxFontAwesomeIcon)).toHaveProp('aria-label', 'threat level low');
    expect(component.find(NxFontAwesomeIcon)).toHaveProp('aria-hidden', false);
  });
});
