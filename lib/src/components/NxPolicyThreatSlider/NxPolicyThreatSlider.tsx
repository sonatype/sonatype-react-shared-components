/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import { Slider } from '@mui/material';
import classnames from 'classnames';

import { categoryByPolicyThreatLevel, ThreatLevelNumber } from '../../util/threatLevels';

import { Props, PolicyThreatLevelRange, propTypes } from './types';
export { Props, PolicyThreatLevelRange, propTypes } from './types';

import './NxPolicyThreatSlider.scss';

function toThreatLevelNumber(value: number): ThreatLevelNumber {
  return Math.min(10, Math.max(0, Math.round(value))) as ThreatLevelNumber;
}

function getPolicyThreatCategory(value: number) {
  return categoryByPolicyThreatLevel[toThreatLevelNumber(value)];
}

const getAriaLabel = (index: number) => `threat level ${index === 0 ? 'min' : 'max'}`;
const getAriaValueText = (value: number) => {
  const limitedValue = toThreatLevelNumber(value),
      threatCategory = getPolicyThreatCategory(value);

  return `${limitedValue} (${threatCategory})`;
};

/**
 * A ValueLabelComponent that renders the values inside of the thumbs and changes CSS classes depending on
 * position/value
 */
// MUI doesn't appear to define an accurate type for these props. There's SliderValueLabelProps but it's missing
// valueLabelDisplay, valueLabelFormat, and ownerState
//eslint-disable-next-line @typescript-eslint/no-explicit-any
function ValueLabel(props: any) {
  const { value, className, children, _ownerState, _valueLabelDisplay, _valueLabelFormat, ...otherProps } = props,
      threatCategory = getPolicyThreatCategory(value),
      nxBaseClass = 'nx-policy-threat-slider__value-label',
      classes = classnames(nxBaseClass, `${nxBaseClass}--${threatCategory}`, className),
      thumb = React.Children.only(children),
      thumbWithValue = React.cloneElement(thumb, { value });

  return <span className={classes} { ...otherProps }>{thumbWithValue}</span>;
}

// MUI doesn't appear to define a specific type for these props
//eslint-disable-next-line @typescript-eslint/no-explicit-any
function Thumb(props: any) {
  const { value, children, ownerState, ...otherProps } = props;

  return (
    <span { ...otherProps }>
      {children}
      {value}
    </span>
  );
}

const NxPolicyThreatSlider: FunctionComponent<Props> =
  function NxPolicyThreatSlider({ onChange, value, className, disabled }) {
    const classes = classnames('nx-policy-threat-slider', className);

    function sliderOnChange(_: unknown, val: number | number[]) {
      if (onChange) {
        onChange(val as PolicyThreatLevelRange);
      }
    }

    return (
      <div className={classes}>
        <Slider value={value}
                min={0}
                max={10}
                marks={true}
                disabled={disabled || undefined}
                onChange={sliderOnChange}
                valueLabelDisplay="on"
                getAriaLabel={getAriaLabel}
                getAriaValueText={getAriaValueText}
                slots={{
                  valueLabel: ValueLabel,
                  thumb: Thumb
                }}/>
      </div>
    );
  };

NxPolicyThreatSlider.propTypes = propTypes;
export default NxPolicyThreatSlider;
