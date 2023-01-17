/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faCircle } from '@fortawesome/free-solid-svg-icons';

import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import { mount } from 'enzyme';

import NxThreatIndicatorLegend from '../NxThreatIndicatorLegend';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

describe('NxThreatIndicatorLegend', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxThreatIndicatorLegend, {});
  const getMountedComponent = enzymeUtils.getMountedComponent(NxThreatIndicatorLegend, {});
  const allThreatLevelCategories = {
    critical: true,
    severe: true,
    moderate: true,
    low: true,
    none: true,
    unspecified: true
  };

  it('renders a horizontal legend, i.e. div with `nx-threat-indicator-legend` class', function() {
    const component = getShallowComponent(allThreatLevelCategories);
    expect(component).toExist();
    expect(component).toMatchSelector('div.nx-threat-indicator-legend');
  });

  it('renders a vertical legend, i.e. div with `nx-threat-indicator-legend--vertical` class', function() {
    const component = getShallowComponent({ vertical: true, ...allThreatLevelCategories });

    expect(component).toExist();
    expect(component).toMatchSelector('div.nx-threat-indicator-legend--vertical');
  });

  it('renders default legend header correctly', function() {
    const component = getShallowComponent(allThreatLevelCategories);

    expect(component).toExist();
    expect(component).toContainExactlyOneMatchingElement('label');
    expect(component.find('label')).toMatchSelector('label.nx-threat-indicator-legend__header');
  });

  it('renders custom legend header correctly', function() {
    const customHeader = 'Test Header';
    const component = getShallowComponent({ header: customHeader, ...allThreatLevelCategories });

    expect(component).toExist();
    expect(component).toContainExactlyOneMatchingElement('label');
    expect(component.find('label')).toHaveText(customHeader);
  });

  it('renders correct number of legend items', function() {
    const component = getMountedComponent({
      critical: true,
      severe: true,
      low: true
    });

    expect(component).toExist();
    expect(component).toContainMatchingElements(3, NxFontAwesomeIcon);
  });

  it('throws warning if no category threat level props are provided', function() {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const component = getShallowComponent();

    expect(component).toExist();
    expect(consoleSpy).toBeCalledTimes(1);
  });

  it('renders the correct legend item', function() {
    const component = getMountedComponent({ critical: true, low: true});
    expect(component).toExist();
    expect(component.find(NxFontAwesomeIcon).at(0)).toHaveProp('icon', faCircle);
    expect(component.find(NxFontAwesomeIcon).at(0)).toMatchSelector('.nx-threat-indicator--critical');
    expect(component.find('span').at(0)).toHaveText('Critical');
    expect(component.find(NxFontAwesomeIcon).at(1)).toHaveProp('icon', faCircle);
    expect(component.find(NxFontAwesomeIcon).at(1)).toMatchSelector('.nx-threat-indicator--low');
    expect(component.find('span').at(1)).toHaveText('Low');
  });

  it('fowards a ref to the div', function() {
    const ref = React.createRef<HTMLDivElement>(),
        component = mount(<><NxThreatIndicatorLegend ref={ref} {...allThreatLevelCategories}/></>);

    expect(component.getDOMNode()).toBe(ref.current);
  });
});
