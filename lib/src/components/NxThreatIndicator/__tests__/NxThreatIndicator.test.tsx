/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faCircle } from '@fortawesome/free-solid-svg-icons';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxThreatIndicator from '../NxThreatIndicator';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxToolip from '../../NxTooltip/NxTooltip';

describe('NxThreatIndicator', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxThreatIndicator, {});

  it('renders an faCircle NxFontAwesomeIcon with the `nx-threat-indicator` class', function() {
    const component = getShallowComponent();
    const span = component.find('.nx-threat-indicator');
    const icon = component.find(NxFontAwesomeIcon);

    expect(span).toHaveClassName('nx-threat-indicator');
    expect(icon).toExist();
    expect(icon).toHaveProp('icon', faCircle);
  });

  it('sets the nx-threat-indicator--unspecified class if no props are passed', function() {
    const component = getShallowComponent();
    const span = component.find('.nx-threat-indicator');
    expect(span).toMatchSelector('.nx-threat-indicator--unspecified');
  });

  it('sets the modifier class using the threatLevelCategory if it is provided', function() {
    const component = getShallowComponent({ threatLevelCategory: 'low' });
    const span = component.find('.nx-threat-indicator');
    expect(span).toMatchSelector('.nx-threat-indicator--low');
    expect(span).not.toMatchSelector('.nx-threat-indicator--unspecified');
  });

  it('sets the modifier class by converting the policyThreatLevel if it is provided', function() {
    expect(getShallowComponent({ policyThreatLevel: 0 }).find('.nx-threat-indicator'))
        .toMatchSelector('.nx-threat-indicator--none');
    expect(getShallowComponent({ policyThreatLevel: 1 }).find('.nx-threat-indicator'))
        .toMatchSelector('.nx-threat-indicator--low');
    expect(getShallowComponent({ policyThreatLevel: 3 }).find('.nx-threat-indicator'))
        .toMatchSelector('.nx-threat-indicator--moderate');
    expect(getShallowComponent({ policyThreatLevel: 5 }).find('.nx-threat-indicator'))
        .toMatchSelector('.nx-threat-indicator--severe');
    expect(getShallowComponent({ policyThreatLevel: 9 }).find('.nx-threat-indicator'))
        .toMatchSelector('.nx-threat-indicator--critical');
    expect(getShallowComponent({ policyThreatLevel: 9 }).find('.nx-threat-indicator'))
        .not.toMatchSelector('.nx-threat-indicator--unspecified');
  });

  it('sets the modifier class using the threatLevelCategory if both props are provided', function() {
    const component = getShallowComponent({ policyThreatLevel: 9, threatLevelCategory: 'low' });
    const span = component.find('.nx-threat-indicator');

    expect(span).toMatchSelector('.nx-threat-indicator--low');
    expect(span).not.toMatchSelector('.nx-threat-indicator--critical');
    expect(span).not.toMatchSelector('.nx-threat-indicator--unspecified');
  });

  it('adds aria attrs to help the icon show up for screen readers', function() {
    const component = getShallowComponent({ policyThreatLevel: 9, threatLevelCategory: 'low' });

    expect(component.find(NxFontAwesomeIcon)).toHaveProp('aria-label', 'threat level low');
    expect(component.find(NxFontAwesomeIcon)).toHaveProp('aria-hidden', false);
  });

  it('should have the correct default tooltip title', function() {
    const none = getShallowComponent({ threatLevelCategory: 'none' }).find(NxToolip);
    const low = getShallowComponent({ threatLevelCategory: 'low' }).find(NxToolip);
    const moderate = getShallowComponent({ threatLevelCategory: 'moderate' }).find(NxToolip);
    const severe = getShallowComponent({ threatLevelCategory: 'severe' }).find(NxToolip);
    const critical = getShallowComponent({ threatLevelCategory: 'critical' }).find(NxToolip);

    expect(none).toHaveProp('title', 'None');
    expect(low).toHaveProp('title', 'Low');
    expect(moderate).toHaveProp('title', 'Moderate');
    expect(severe).toHaveProp('title', 'Severe');
    expect(critical).toHaveProp('title', 'Critical');
  });

  it('should show custom tooltip title', function() {
    const tooltip = getShallowComponent({ title: 'Extinction Level Threat' }).find(NxToolip);

    expect(tooltip).toHaveProp('title', 'Extinction Level Threat');
  });
});
