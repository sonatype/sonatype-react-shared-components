/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';

import NxThreatCounter, { Props } from '../NxThreatCounter';

describe('NxThreatCounter', function() {
  const minimalProps = {},
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxThreatCounter, minimalProps);

  it('renders nothing if all six indicators are undefined', function() {
    const component = getShallowComponent();
    expect(component).toBeEmptyRender();
  });

  it('renders nothing if all six indicators are null', function() {
    const component = getShallowComponent({
      criticalCount: null,
      severeCount: null,
      moderateCount: null,
      lowCount: null,
      noneCount: null,
      unspecifiedCount: null
    });
    expect(component).toBeEmptyRender();
  });

  it('renders the container with the expected default classes', function() {
    expect(getShallowComponent({criticalCount: 0}).find('.nx-threat-counter-container')).toExist();
  });

  it('renders an .nx-threat-counter--critical when criticalCount is specified', function() {
    const component = getShallowComponent({criticalCount: 0});
    const container = component.find('.nx-threat-counter-container');
    expect(container).toExist();
    expect(container.find('div').length).toBe(1);
    const criticalCounter = component.find('.nx-threat-counter--critical');
    expect(criticalCounter.find('.nx-threat-counter__count')).toHaveText('0');
    expect(criticalCounter.find('.nx-threat-counter__text')).toHaveText('Critical');
  });

  it('renders an .nx-threat-counter--severe when severeCount is specified', function() {
    const component = getShallowComponent({severeCount: 0});
    const container = component.find('.nx-threat-counter-container');
    expect(container).toExist();
    expect(container.find('div').length).toBe(1);
    const severeCounter = component.find('.nx-threat-counter--severe');
    expect(severeCounter.find('.nx-threat-counter__count')).toHaveText('0');
    expect(severeCounter.find('.nx-threat-counter__text')).toHaveText('Severe');
  });

  it('renders an .nx-threat-counter--moderate when moderateCount is specified', function() {
    const component = getShallowComponent({moderateCount: 0});
    const container = component.find('.nx-threat-counter-container');
    expect(container).toExist();
    expect(container.find('div').length).toBe(1);
    const moderateCounter = component.find('.nx-threat-counter--moderate');
    expect(moderateCounter.find('.nx-threat-counter__count')).toHaveText('0');
    expect(moderateCounter.find('.nx-threat-counter__text')).toHaveText('Moderate');
  });

  it('renders an .nx-threat-counter--low when lowCount is specified', function() {
    const component = getShallowComponent({lowCount: 0});
    const container = component.find('.nx-threat-counter-container');
    expect(container).toExist();
    expect(container.find('div').length).toBe(1);
    const lowCounter = component.find('.nx-threat-counter--low');
    expect(lowCounter.find('.nx-threat-counter__count')).toHaveText('0');
    expect(lowCounter.find('.nx-threat-counter__text')).toHaveText('Low');
  });

  it('renders an .nx-threat-counter--none when noneCount is specified', function() {
    const component = getShallowComponent({noneCount: 0});
    const container = component.find('.nx-threat-counter-container');
    expect(container).toExist();
    expect(container.find('div').length).toBe(1);
    const noneCounter = component.find('.nx-threat-counter--none');
    expect(noneCounter.find('.nx-threat-counter__count')).toHaveText('0');
    expect(noneCounter.find('.nx-threat-counter__text')).toHaveText('None');
  });

  it('renders an .nx-threat-counter--unspecified when unspecifiedCount is specified', function() {
    const component = getShallowComponent({unspecifiedCount: 0});
    const container = component.find('.nx-threat-counter-container');
    expect(container).toExist();
    expect(container.find('div').length).toBe(1);
    const unspecifiedCounter = component.find('.nx-threat-counter--unspecified');
    expect(unspecifiedCounter.find('.nx-threat-counter__count')).toHaveText('0');
    expect(unspecifiedCounter.find('.nx-threat-counter__text')).toHaveText('Unspecified');
  });

  it('renders all six indicators', function() {
    const component = getShallowComponent({
      criticalCount: 66,
      severeCount: 55,
      moderateCount: 44,
      lowCount: 33,
      noneCount: 22,
      unspecifiedCount: 42
    });
    const criticalCount = component.find('.nx-threat-counter--critical'),
        severeCount = component.find('.nx-threat-counter--severe'),
        moderateCount = component.find('.nx-threat-counter--moderate'),
        lowCount = component.find('.nx-threat-counter--low'),
        noneCount = component.find('.nx-threat-counter--none'),
        unspecifiedCount = component.find('.nx-threat-counter--unspecified');
    expect(criticalCount.find('.nx-threat-counter__count')).toHaveText('66');
    expect(criticalCount.find('.nx-threat-counter__text')).toHaveText('Critical');
    expect(severeCount.find('.nx-threat-counter__count')).toHaveText('55');
    expect(severeCount.find('.nx-threat-counter__text')).toHaveText('Severe');
    expect(moderateCount.find('.nx-threat-counter__count')).toHaveText('44');
    expect(moderateCount.find('.nx-threat-counter__text')).toHaveText('Moderate');
    expect(lowCount.find('.nx-threat-counter__count')).toHaveText('33');
    expect(lowCount.find('.nx-threat-counter__text')).toHaveText('Low');
    expect(noneCount.find('.nx-threat-counter__count')).toHaveText('22');
    expect(noneCount.find('.nx-threat-counter__text')).toHaveText('None');
    expect(unspecifiedCount.find('.nx-threat-counter__count')).toHaveText('42');
    expect(unspecifiedCount.find('.nx-threat-counter__text')).toHaveText('Unspecified');
  });

  it('correctly assigns supplied class', function() {
    const classComponent = getShallowComponent({ criticalCount: 0, className: 'test-class' });
    expect(classComponent.find('.nx-threat-counter-container')).toHaveClassName('test-class');
  });

  it('correctly assigns supplied id', function() {
    const idComponent = getShallowComponent({ criticalCount: 0, id: 'test-id' });
    expect(idComponent.find('.nx-threat-counter-container')).toHaveProp('id', 'test-id');
  });

  it('correctly applies the column modifier', function() {
    const idComponent = getShallowComponent({ criticalCount: 0, layout: 'column' });
    expect(idComponent.find('.nx-threat-counter-container'))
        .toHaveClassName('nx-threat-counter-container--column');
  });

  it('correctly applies the grid modifier', function() {
    const idComponent = getShallowComponent({ criticalCount: 0, layout: 'grid' });
    expect(idComponent.find('.nx-threat-counter-container'))
        .toHaveClassName('nx-threat-counter-container--grid');
  });
});
