/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import NxThreatIndicator from '../../NxThreatIndicator/NxThreatIndicator';
import { NxH3 } from '../../SimpleComponents';
import NxThreatIndicatorLegend from '../NxThreatIndicatorLegend';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

describe('NxThreatIndicatorLegend', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxThreatIndicatorLegend, {});

  it('renders a horizontal legend, i.e. div with `nx-threat-indicator-legend` class', function() {
    const component = getShallowComponent();

    expect(component).toExist();
    expect(component).toMatchSelector('div.nx-threat-indicator-legend');
  });

  it('renders a vertical legend, i.e. div with `nx-threat-indicator-legend--vertical` class', function() {
    const component = getShallowComponent({ vertical: true});

    expect(component).toExist();
    expect(component).toMatchSelector('div.nx-threat-indicator-legend--vertical');
  });

  it('renders default legend header correctly', function() {
    const component = getShallowComponent();

    expect(component).toExist();
    expect(component).toContainExactlyOneMatchingElement(NxH3);
  });

  it('renders custom legend header correctly', function() {
    const customHeader = 'Test Header';
    const component = getShallowComponent({ header: customHeader});

    expect(component).toExist();
    expect(component).toContainExactlyOneMatchingElement(NxH3);
    expect(component.find(NxH3).shallow()).toHaveText(customHeader);
  });

  it('renders correct number of legend items', function() {
    const component = getShallowComponent(
        {
          critical: true,
          severe: true,
          low: true
        }
    );

    expect(component).toExist();
    //<ThreatIndicator> is an internal component of NxThreatIndicatorLegend that encapsulates
    //a <NxThreatIndicator> and a <span>
    expect(component).toContainMatchingElements(3, 'ThreatIndicator');
  });

  it('renders the correct legend item', function() {
    const component = getShallowComponent({ critical: true, low: true});

    expect(component).toExist();
    expect(component.find('ThreatIndicator').at(0).shallow().childAt(0))
        .toContainReact(<NxThreatIndicator threatLevelCategory="critical" />);
    expect(component.find('ThreatIndicator').at(1).shallow().childAt(0))
        .toContainReact(<NxThreatIndicator threatLevelCategory="low" />);
  });
});
