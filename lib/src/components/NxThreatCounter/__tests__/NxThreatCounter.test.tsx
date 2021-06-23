/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxThreatCounter, { Props } from '../NxThreatCounter';

describe('NxThreatCounter', function() {
  const minimalProps = {
        criticalCount: 66,
        severeCount: 55,
        moderateCount: 44,
        lowCount: 33,
        noneCount: 22
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxThreatCounter, minimalProps);

  it('renders nothing if all five indicators are undefined', function() {
    const component = getShallowComponent({
      criticalCount: undefined,
      severeCount: undefined,
      moderateCount: undefined,
      lowCount: undefined,
      noneCount: undefined
    });
    expect(component).toBeEmptyRender();
  });

  it('renders nothing if all five indicators are null', function() {
    const component = getShallowComponent({
      criticalCount: null,
      severeCount: null,
      moderateCount: null,
      lowCount: null,
      noneCount: null
    });
    expect(component).toBeEmptyRender();
  });

  it('renders the container with the expected default classes', function() {
    expect(getShallowComponent().find('.nx-threat-counter-container')).toExist();
  });

  it('renders an .nx-threat-counter--critical when criticalCount is specified', function() {
    const component = getShallowComponent({
      criticalCount: 0,
      severeCount: undefined,
      moderateCount: undefined,
      lowCount: undefined,
      noneCount: undefined
    });
    const container = component.find('.nx-threat-counter-container');
    expect(container).toExist();
    expect(container.find('div').length).toBe(1);
    const criticalCounter = component.find('.nx-threat-counter--critical');
    expect(criticalCounter.find('.nx-threat-counter__count')).toHaveText('0');
    expect(criticalCounter.find('.nx-threat-counter__text')).toHaveText('Critical');
  });

  it('renders an .nx-threat-counter--severe when severeCount is specified', function() {
    const component = getShallowComponent({
      criticalCount: undefined,
      severeCount: 0,
      moderateCount: undefined,
      lowCount: undefined,
      noneCount: undefined
    });
    const container = component.find('.nx-threat-counter-container');
    expect(container).toExist();
    expect(container.find('div').length).toBe(1);
    const severeCounter = component.find('.nx-threat-counter--severe');
    expect(severeCounter.find('.nx-threat-counter__count')).toHaveText('0');
    expect(severeCounter.find('.nx-threat-counter__text')).toHaveText('Severe');
  });

  it('renders an .nx-threat-counter--moderate when moderateCount is specified', function() {
    const component = getShallowComponent({
      criticalCount: undefined,
      severeCount: undefined,
      moderateCount: 0,
      lowCount: undefined,
      noneCount: undefined
    });
    const container = component.find('.nx-threat-counter-container');
    expect(container).toExist();
    expect(container.find('div').length).toBe(1);
    const moderateCounter = component.find('.nx-threat-counter--moderate');
    expect(moderateCounter.find('.nx-threat-counter__count')).toHaveText('0');
    expect(moderateCounter.find('.nx-threat-counter__text')).toHaveText('Moderate');
  });

  it('renders an .nx-threat-counter--low when lowCount is specified', function() {
    const component = getShallowComponent({
      criticalCount: undefined,
      severeCount: undefined,
      moderateCount: undefined,
      lowCount: 0,
      noneCount: undefined
    });
    const container = component.find('.nx-threat-counter-container');
    expect(container).toExist();
    expect(container.find('div').length).toBe(1);
    const lowCounter = component.find('.nx-threat-counter--low');
    expect(lowCounter.find('.nx-threat-counter__count')).toHaveText('0');
    expect(lowCounter.find('.nx-threat-counter__text')).toHaveText('Low');
  });

  it('renders an .nx-threat-counter--none when noneCount is specified', function() {
    const component = getShallowComponent({
      criticalCount: undefined,
      severeCount: undefined,
      moderateCount: undefined,
      lowCount: undefined,
      noneCount: 0
    });
    const container = component.find('.nx-threat-counter-container');
    expect(container).toExist();
    expect(container.find('div').length).toBe(1);
    const noneCounter = component.find('.nx-threat-counter--none');
    expect(noneCounter.find('.nx-threat-counter__count')).toHaveText('0');
    expect(noneCounter.find('.nx-threat-counter__text')).toHaveText('None');
  });

  it('renders all five indicators', function() {
    expect(getShallowComponent().find('.nx-threat-counter--critical')).toExist();
    expect(getShallowComponent().find('.nx-threat-counter--severe')).toExist();
    expect(getShallowComponent().find('.nx-threat-counter--moderate')).toExist();
    expect(getShallowComponent().find('.nx-threat-counter--low')).toExist();
    expect(getShallowComponent().find('.nx-threat-counter--none')).toExist();
  });

  it('renders all of the values set in minimalProps', function() {
    const checkCritical = getShallowComponent().find('.nx-threat-counter--critical'),
        checkSevere = getShallowComponent().find('.nx-threat-counter--severe'),
        checkModerate = getShallowComponent().find('.nx-threat-counter--moderate'),
        checkLow = getShallowComponent().find('.nx-threat-counter--low'),
        checkNone = getShallowComponent().find('.nx-threat-counter--none');
    expect(checkCritical.find('.nx-threat-counter__count')).toHaveText('66');
    expect(checkSevere.find('.nx-threat-counter__count')).toHaveText('55');
    expect(checkModerate.find('.nx-threat-counter__count')).toHaveText('44');
    expect(checkLow.find('.nx-threat-counter__count')).toHaveText('33');
    expect(checkNone.find('.nx-threat-counter__count')).toHaveText('22');
  });

  it('renders the correct label for each indicator', function() {
    const checkCriticalText = getShallowComponent().find('.nx-threat-counter--critical'),
        checkSevereText = getShallowComponent().find('.nx-threat-counter--severe'),
        checkModerateText = getShallowComponent().find('.nx-threat-counter--moderate'),
        checkLowText = getShallowComponent().find('.nx-threat-counter--low'),
        checkNoneText = getShallowComponent().find('.nx-threat-counter--none');
    expect(checkCriticalText.find('.nx-threat-counter__text')).toHaveText('Critical');
    expect(checkSevereText.find('.nx-threat-counter__text')).toHaveText('Severe');
    expect(checkModerateText.find('.nx-threat-counter__text')).toHaveText('Moderate');
    expect(checkLowText.find('.nx-threat-counter__text')).toHaveText('Low');
    expect(checkNoneText.find('.nx-threat-counter__text')).toHaveText('None');
  });

  it('correctly assigns supplied class', function() {
    const classComponent = getShallowComponent({ className: 'test-class' });
    expect(classComponent.find('.nx-threat-counter-container')).toHaveClassName('test-class');
  });

  it('correctly assigns supplied id', function() {
    const idComponent = getShallowComponent({ id: 'test-id' });
    expect(idComponent.find('.nx-threat-counter-container')).toHaveProp('id', 'test-id');
  });

  it('correctly applies the column modifier', function() {
    const idComponent = getShallowComponent({ layout: 'column' });
    expect(idComponent.find('.nx-threat-counter-container'))
        .toHaveClassName('nx-threat-counter-container--column');
  });

  it('correctly applies the grid modifier', function() {
    const idComponent = getShallowComponent({ layout: 'grid' });
    expect(idComponent.find('.nx-threat-counter-container'))
        .toHaveClassName('nx-threat-counter-container--grid');
  });
});
