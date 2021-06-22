/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxThreatCounter, { Props } from '../NxThreatCounter';
import {capitalize} from '@material-ui/core';

describe('NxThreatCounter', function() {
  const minimalProps = {
        criticalCount: 66,
        severeCount: 55,
        moderateCount: 44,
        lowCount: 33,
        noneCount: 22
      },
      names = ['critical', 'severe', 'moderate', 'low', 'none'],
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxThreatCounter, minimalProps);

  const getCounts = (value?: number | null) => {
    const props: {[index: string]:number | null | undefined} = {
      criticalCount: value,
      severeCount: value,
      moderateCount: value,
      lowCount: value,
      noneCount: value
    };
    return props;
  };

  it('renders nothing if all five indicators are undefined', function() {
    const component = getShallowComponent(getCounts(undefined));
    expect(component).toBeEmptyRender();
  });

  it('renders nothing if all five indicators are null', function() {
    const component = getShallowComponent(getCounts(null));
    expect(component).toBeEmptyRender();
  });

  it('renders the container with the expected default classes', function() {
    expect(getShallowComponent().find('.nx-threat-counter-container')).toExist();
  });

  const checkEachCountRendersAlone = (value: null | undefined) => {
    names.forEach(name => {
      const props = getCounts(value);
      const countName = name + 'Count';
      props[countName] = 0;
      const container = getShallowComponent(props).find('.nx-threat-counter-container');
      expect(container).toExist();
      const counts = container.find('div');
      expect(counts.length).toBe(1);
      const count = counts.at(0);
      expect(count.find('.nx-threat-counter__count')).toHaveText('0');
      expect(count.find('.nx-threat-counter__text')).toHaveText(capitalize(name));
    });
  };

  it('renders only one indicator if the others are undefined', function() {
    checkEachCountRendersAlone(undefined);
  });

  it('renders only one indicator if the others are null', function() {
    checkEachCountRendersAlone(null);
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
