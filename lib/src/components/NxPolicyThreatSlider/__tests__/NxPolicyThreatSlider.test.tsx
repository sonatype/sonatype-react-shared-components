/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import { Slider } from '@material-ui/core';
import { ValueLabelProps } from '@material-ui/core/Slider';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxPolicyThreatSlider, { Props } from '../NxPolicyThreatSlider';

/* eslint-disable @typescript-eslint/no-explicit-any */
describe('NxPolicyThreatSlider', function() {
  const minimalProps: Props = { value: [0, 10] },
      getSlider = getShallowComponent(NxPolicyThreatSlider, minimalProps);

  it('renders a .nx-policy-threat-slider div containing a MUI Slider', function() {
    expect(getSlider()).toMatchSelector('div.nx-policy-threat-slider');
    expect(getSlider().find(Slider)).toExist();
  });

  it('adds any specified class name to the top div', function() {
    expect(getSlider({ className: 'foo' })).toHaveClassName('foo');
    expect(getSlider({ className: 'foo' })).toHaveClassName('nx-policy-threat-slider');
  });

  it('configures the Slider with the appopriate min, max, and marks configurations', function() {
    const component = getSlider().find(Slider);
    expect(component).toHaveProp('min', 0);
    expect(component).toHaveProp('max', 10);
    expect(component).toHaveProp('marks', true);
  });

  it('passes the value from the Slider\'s onChange to its own onChange', function() {
    const onChange = jest.fn(),
        component = getSlider({ onChange }).find(Slider);

    component.simulate('change', {}, [3, 4]);

    expect(onChange).toHaveBeenCalledWith([3, 4]);
  });

  describe('NxPolicyThreatSliderValueLabelDisplay', function() {
    const NxPolicyThreatSliderValueLabelDisplay = getSlider().find(Slider).prop('ValueLabelComponent') as
          FunctionComponent<ValueLabelProps>,
        minimalProps: ValueLabelProps = {
          value: 0,
          open: false,
          children: <div className="foo" />
        },
        getValueLabelDisplay = getShallowComponent(NxPolicyThreatSliderValueLabelDisplay, minimalProps);

    it('is the Component passed in as the Slider\'s ValueLabelComponent', function() {
      expect(NxPolicyThreatSliderValueLabelDisplay).toBeDefined();
      expect(NxPolicyThreatSliderValueLabelDisplay.name).toBe('NxPolicyThreatSliderValueLabelDisplay');
    });

    it('renders a span with the nx-policy-threat-slider__value-label class', function() {
      expect(getValueLabelDisplay()).toMatchSelector('span.nx-policy-threat-slider__value-label');
    });

    it('adds specified classNames', function() {
      const component = getValueLabelDisplay({ className: 'bar' });

      expect(component).toHaveClassName('bar');
      expect(component).toHaveClassName('nx-policy-threat-slider__value-label');
    });

    it('adds a modifier class name for the appropriate threat level category', function() {
      expect(getValueLabelDisplay({ value: 0 })).toHaveClassName('nx-policy-threat-slider__value-label--none');
      expect(getValueLabelDisplay({ value: 1 })).toHaveClassName('nx-policy-threat-slider__value-label--low');
      expect(getValueLabelDisplay({ value: 2 })).toHaveClassName('nx-policy-threat-slider__value-label--moderate');
      expect(getValueLabelDisplay({ value: 3 })).toHaveClassName('nx-policy-threat-slider__value-label--moderate');
      expect(getValueLabelDisplay({ value: 4 })).toHaveClassName('nx-policy-threat-slider__value-label--severe');
      expect(getValueLabelDisplay({ value: 5 })).toHaveClassName('nx-policy-threat-slider__value-label--severe');
      expect(getValueLabelDisplay({ value: 6 })).toHaveClassName('nx-policy-threat-slider__value-label--severe');
      expect(getValueLabelDisplay({ value: 7 })).toHaveClassName('nx-policy-threat-slider__value-label--severe');
      expect(getValueLabelDisplay({ value: 8 })).toHaveClassName('nx-policy-threat-slider__value-label--critical');
      expect(getValueLabelDisplay({ value: 9 })).toHaveClassName('nx-policy-threat-slider__value-label--critical');
      expect(getValueLabelDisplay({ value: 10 })).toHaveClassName('nx-policy-threat-slider__value-label--critical');
    });

    it('sets the value as the children of its child', function() {
      expect(getValueLabelDisplay({ value: 5 }).find('.foo').children()).toHaveText('5');
    });

    it('passes other props except open, valueLabelFormat, and valueLabelDisplay to the span', function() {
      const onClick = jest.fn(),
          props: any = {
            id: 'foo',
            onClick,

            open: true,
            valueLabelFormat: (x: any) => x,
            valueLabelDisplay: 'on'
          },
          component = getValueLabelDisplay(props);

      expect(component).toHaveProp('id', 'foo');
      expect(component).toHaveProp('onClick', onClick);
      expect(component).not.toHaveProp('open');
      expect(component).not.toHaveProp('valueLabelFormat');
      expect(component).not.toHaveProp('valueLabelDisplay');
    });
  });
});
