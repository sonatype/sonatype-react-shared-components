/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';
import NxTooltip from '../../NxTooltip/NxTooltip';

import NxSmallThreatCounter, { Props } from '../NxSmallThreatCounter';

describe('NxSmallThreatCounter', function() {
  const minimalProps = {},
      getMountedComponent = enzymeUtils.getMountedComponent<Props>(NxSmallThreatCounter, minimalProps);

  it('renders nothing if all six indicators are undefined', function() {
    const component = getMountedComponent();
    expect(component).toBeEmptyRender();
  });

  it('renders nothing if all six indicators are null', function() {
    const component = getMountedComponent({
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
    expect(getMountedComponent({criticalCount: 0}).find('.nx-small-threat-counter-container')).toExist();
  });

  it('renders an .nx-small-threat-counter--critical when criticalCount is specified', function() {
    const component = getMountedComponent({criticalCount: 0});
    const container = component.find('.nx-small-threat-counter-container');
    expect(container).toExist();
    const criticalCounter = component.find('.nx-small-threat-counter--critical');
    expect(criticalCounter.find('.nx-small-threat-counter__count')).toHaveText('0');
    expect(criticalCounter.find('.nx-small-threat-counter__category')).toHaveText('Critical');
  });

  it('renders an .nx-small-threat-counter--severe when severeCount is specified', function() {
    const component = getMountedComponent({severeCount: 0});
    const container = component.find('.nx-small-threat-counter-container');
    expect(container).toExist();
    const severeCounter = component.find('.nx-small-threat-counter--severe');
    expect(severeCounter.find('.nx-small-threat-counter__count')).toHaveText('0');
    expect(severeCounter.find('.nx-small-threat-counter__category')).toHaveText('Severe');
  });

  it('renders an .nx-small-threat-counter--moderate when moderateCount is specified', function() {
    const component = getMountedComponent({moderateCount: 0});
    const container = component.find('.nx-small-threat-counter-container');
    expect(container).toExist();
    const moderateCounter = component.find('.nx-small-threat-counter--moderate');
    expect(moderateCounter.find('.nx-small-threat-counter__count')).toHaveText('0');
    expect(moderateCounter.find('.nx-small-threat-counter__category')).toHaveText('Moderate');
  });

  it('renders an .nx-small-threat-counter--low when lowCount is specified', function() {
    const component = getMountedComponent({lowCount: 0});
    const container = component.find('.nx-small-threat-counter-container');
    expect(container).toExist();
    const lowCounter = component.find('.nx-small-threat-counter--low');
    expect(lowCounter.find('.nx-small-threat-counter__count')).toHaveText('0');
    expect(lowCounter.find('.nx-small-threat-counter__category')).toHaveText('Low');
  });

  it('renders an .nx-small-threat-counter--none when noneCount is specified', function() {
    const component = getMountedComponent({noneCount: 0});
    const container = component.find('.nx-small-threat-counter-container');
    expect(container).toExist();
    const noneCounter = component.find('.nx-small-threat-counter--none');
    expect(noneCounter.find('.nx-small-threat-counter__count')).toHaveText('0');
    expect(noneCounter.find('.nx-small-threat-counter__category')).toHaveText('None');
  });

  it('renders an .nx-small-threat-counter--unspecified when unspecifiedCount is specified', function() {
    const component = getMountedComponent({unspecifiedCount: 0});
    const container = component.find('.nx-small-threat-counter-container');
    expect(container).toExist();
    const unspecifiedCounter = component.find('.nx-small-threat-counter--unspecified');
    expect(unspecifiedCounter.find('.nx-small-threat-counter__count')).toHaveText('0');
    expect(unspecifiedCounter.find('.nx-small-threat-counter__category')).toHaveText('Unspecified');
  });

  it('renders all six indicators', function() {
    const component = getMountedComponent({
      criticalCount: 66,
      severeCount: 55,
      moderateCount: 44,
      lowCount: 33,
      noneCount: 22,
      unspecifiedCount: 42
    });
    const criticalCount = component.find('.nx-small-threat-counter--critical'),
        severeCount = component.find('.nx-small-threat-counter--severe'),
        moderateCount = component.find('.nx-small-threat-counter--moderate'),
        lowCount = component.find('.nx-small-threat-counter--low'),
        noneCount = component.find('.nx-small-threat-counter--none'),
        unspecifiedCount = component.find('.nx-small-threat-counter--unspecified');
    expect(criticalCount.find('.nx-small-threat-counter__count')).toHaveText('66');
    expect(criticalCount.find('.nx-small-threat-counter__category')).toHaveText('Critical');
    expect(severeCount.find('.nx-small-threat-counter__count')).toHaveText('55');
    expect(severeCount.find('.nx-small-threat-counter__category')).toHaveText('Severe');
    expect(moderateCount.find('.nx-small-threat-counter__count')).toHaveText('44');
    expect(moderateCount.find('.nx-small-threat-counter__category')).toHaveText('Moderate');
    expect(lowCount.find('.nx-small-threat-counter__count')).toHaveText('33');
    expect(lowCount.find('.nx-small-threat-counter__category')).toHaveText('Low');
    expect(noneCount.find('.nx-small-threat-counter__count')).toHaveText('22');
    expect(noneCount.find('.nx-small-threat-counter__category')).toHaveText('None');
    expect(unspecifiedCount.find('.nx-small-threat-counter__count')).toHaveText('42');
    expect(unspecifiedCount.find('.nx-small-threat-counter__category')).toHaveText('Unspecified');
  });

  it('correctly assigns supplied class', function() {
    const classComponent = getMountedComponent({ criticalCount: 0, className: 'test-class' });
    expect(classComponent.find('.nx-small-threat-counter-container')).toHaveClassName('test-class');
  });

  it('correctly assigns supplied id', function() {
    const idComponent = getMountedComponent({ criticalCount: 0, id: 'test-id' });
    expect(idComponent.find('.nx-small-threat-counter-container')).toHaveProp('id', 'test-id');
  });

  it('sets the nx-small-threat-counter__sizer of each indicator to as many nines as specified in maxDigits and a ' +
        'plus sign', function() {
    const component = getMountedComponent({ criticalCount: 57, moderateCount: 12345, maxDigits: 4 });

    expect(component.find('.nx-small-threat-counter--critical').find('.nx-small-threat-counter__sizer'))
        .toHaveText('9999+');

    expect(component.find('.nx-small-threat-counter--moderate').find('.nx-small-threat-counter__sizer'))
        .toHaveText('9999+');
  });

  it('displays maxDigits\' nines and a plus sign for any counts that go over the max', function() {
    const twoDigitMaxComponent = getMountedComponent({ criticalCount: 100000, maxDigits: 2 }),
        fiveDigitMaxComponent = getMountedComponent({ criticalCount: 1000000, maxDigits: 5 });

    expect(twoDigitMaxComponent.find('.nx-small-threat-counter--critical .nx-small-threat-counter__count'))
        .toHaveText('99+');

    expect(fiveDigitMaxComponent.find('.nx-small-threat-counter--critical .nx-small-threat-counter__count'))
        .toHaveText('99999+');
  });

  it('displays and sizes to a max of three digits (and a plus sign) by default', function() {
    const twoDigitComponent = getMountedComponent({ criticalCount: 57 }),
        fiveDigitComponent = getMountedComponent({ criticalCount: 12345 });

    expect(twoDigitComponent.find('.nx-small-threat-counter--critical .nx-small-threat-counter__count'))
        .toHaveText('57');

    expect(twoDigitComponent.find('.nx-small-threat-counter--critical .nx-small-threat-counter__sizer'))
        .toHaveText('999+');

    expect(fiveDigitComponent.find('.nx-small-threat-counter--critical .nx-small-threat-counter__count'))
        .toHaveText('999+');

    expect(fiveDigitComponent.find('.nx-small-threat-counter--critical .nx-small-threat-counter__sizer'))
        .toHaveText('999+');
  });

  it('adds the nx-small-threat-counter--zero class to counters with a count of 0', function() {
    expect(getMountedComponent({ criticalCount: 0 }).find('.nx-small-threat-counter--critical'))
        .toHaveClassName('nx-small-threat-counter--zero');
  });

  it('wraps each nx-small-threat-counter in a tooltip whose title is the category', function() {
    const component = getMountedComponent({
      criticalCount: 66,
      severeCount: 55,
      moderateCount: 44,
      lowCount: 33,
      noneCount: 22,
      unspecifiedCount: 42
    });

    const criticalCounter = component.find('.nx-small-threat-counter--critical'),
        severeCounter = component.find('.nx-small-threat-counter--severe'),
        moderateCounter = component.find('.nx-small-threat-counter--moderate'),
        lowCounter = component.find('.nx-small-threat-counter--low'),
        noneCounter = component.find('.nx-small-threat-counter--none'),
        unspecifiedCounter = component.find('.nx-small-threat-counter--unspecified'),
        criticalTooltip = criticalCounter.parents(NxTooltip),
        severeTooltip = severeCounter.parents(NxTooltip),
        moderateTooltip = moderateCounter.parents(NxTooltip),
        lowTooltip = lowCounter.parents(NxTooltip),
        noneTooltip = noneCounter.parents(NxTooltip),
        unspecifiedTooltip = unspecifiedCounter.parents(NxTooltip);

    expect(criticalTooltip).toHaveProp('title', 'Critical');
    expect(severeTooltip).toHaveProp('title', 'Severe');
    expect(moderateTooltip).toHaveProp('title', 'Moderate');
    expect(lowTooltip).toHaveProp('title', 'Low');
    expect(noneTooltip).toHaveProp('title', 'None');
    expect(unspecifiedTooltip).toHaveProp('title', 'Unspecified');
  });

  describe('when maxDigits is Infinity', function() {
    const defaultProps = { maxDigits: Infinity },
        getMountedComponent = enzymeUtils.getMountedComponent<Props>(NxSmallThreatCounter, defaultProps);

    it('does not render the .nx-small-threat-counter__sizer element', function() {
      const component = getMountedComponent({
        criticalCount: 66,
        severeCount: 55,
        moderateCount: 44,
        lowCount: 33,
        noneCount: 22,
        unspecifiedCount: 42
      });

      expect(component.find('.nx-small-threat-counter__sizer')).not.toExist();
    });

    it('has the .nx-small-threat-counter-container--no-max class', function() {
      const component = getMountedComponent({ criticalCount: 0 }),
          nonInfiniteComponent = getMountedComponent({ criticalCount: 0, maxDigits: 5 }),
          container = component.find('.nx-small-threat-counter-container'),
          nonInfiniteContainer = nonInfiniteComponent.find('.nx-small-threat-counter-container');

      expect(container).toHaveClassName('nx-small-threat-counter-container--no-max');
      expect(nonInfiniteContainer).not.toHaveClassName('nx-small-threat-counter-container--no-max');
    });

    it('still renders nx-small-threat-counters with the category and count', function() {
      const component = getMountedComponent({
        criticalCount: 66,
        severeCount: 55,
        moderateCount: 44,
        lowCount: 33,
        noneCount: 22,
        unspecifiedCount: 42
      });

      const criticalCounter = component.find('.nx-small-threat-counter--critical');
      expect(criticalCounter.find('.nx-small-threat-counter__count')).toHaveText('66');
      expect(criticalCounter.find('.nx-small-threat-counter__category')).toHaveText('Critical');

      const severeCounter = component.find('.nx-small-threat-counter--severe');
      expect(severeCounter.find('.nx-small-threat-counter__count')).toHaveText('55');
      expect(severeCounter.find('.nx-small-threat-counter__category')).toHaveText('Severe');

      const moderateCounter = component.find('.nx-small-threat-counter--moderate');
      expect(moderateCounter.find('.nx-small-threat-counter__count')).toHaveText('44');
      expect(moderateCounter.find('.nx-small-threat-counter__category')).toHaveText('Moderate');

      const lowCounter = component.find('.nx-small-threat-counter--low');
      expect(lowCounter.find('.nx-small-threat-counter__count')).toHaveText('33');
      expect(lowCounter.find('.nx-small-threat-counter__category')).toHaveText('Low');

      const noneCounter = component.find('.nx-small-threat-counter--none');
      expect(noneCounter.find('.nx-small-threat-counter__count')).toHaveText('22');
      expect(noneCounter.find('.nx-small-threat-counter__category')).toHaveText('None');

      const unspecifiedCounter = component.find('.nx-small-threat-counter--unspecified');
      expect(unspecifiedCounter.find('.nx-small-threat-counter__count')).toHaveText('42');
      expect(unspecifiedCounter.find('.nx-small-threat-counter__category')).toHaveText('Unspecified');
    });

    it('does not cut off the displayed number', function() {
      const component = getMountedComponent({
        criticalCount: 34592384579138,
        severeCount: 1
      });

      const criticalCounter = component.find('.nx-small-threat-counter--critical');
      expect(criticalCounter.find('.nx-small-threat-counter__count')).toHaveText('34592384579138');
      expect(criticalCounter.find('.nx-small-threat-counter__category')).toHaveText('Critical');

      const severeCounter = component.find('.nx-small-threat-counter--severe');
      expect(severeCounter.find('.nx-small-threat-counter__count')).toHaveText('1');
      expect(severeCounter.find('.nx-small-threat-counter__category')).toHaveText('Severe');
    });
  });
});
