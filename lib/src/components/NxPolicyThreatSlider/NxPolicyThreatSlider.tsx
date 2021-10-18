/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import { Slider } from '@material-ui/core';
import classnames from 'classnames';
import { omit } from 'ramda';

import { categoryByPolicyThreatLevel, ThreatLevelNumber } from '../../util/threatLevels';

import { Props, LabelDisplayProps, PolicyThreatLevelRange, propTypes } from './types';
export { Props, PolicyThreatLevelRange, propTypes } from './types';

import './NxPolicyThreatSlider.scss';

/**
 * A ValueLabelComponent that renders the values inside of the thumbs and changes CSS classes depending on
 * position/value
 */
function NxPolicyThreatSliderValueLabelDisplay(props: LabelDisplayProps) {

  const { value, children, className, disabled, ...otherProps } = props,

      // this impl doesn't need to support these props. Filter them out so they don't cause react warnings on the span
      filteredProps = omit(['open', 'valueLabelFormat', 'valueLabelDisplay'], otherProps),
      limitedValue = Math.min(10, Math.max(0, Math.round(value))) as ThreatLevelNumber,
      threatCategory = categoryByPolicyThreatLevel[limitedValue],
      thumb = React.Children.only(children),
      screenReaderValue = `${limitedValue} (${threatCategory})`,

      // the thumb element isn't initially constructed with any children. Add the value as its child and
      // add extra accessibility attrs
      additionalThumbProps = { 'aria-valuetext': screenReaderValue, 'aria-disabled': disabled },
      thumbWithLabel = React.cloneElement(thumb, additionalThumbProps, limitedValue),
      nxBaseClass = 'nx-policy-threat-slider__value-label',
      classes = classnames(nxBaseClass, `${nxBaseClass}--${threatCategory}`, className);

  return (
    <span className={classes} { ...filteredProps }>{thumbWithLabel}</span>
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
                ValueLabelComponent={NxPolicyThreatSliderValueLabelDisplay}
                onChange={sliderOnChange} />
      </div>
    );
  };

NxPolicyThreatSlider.propTypes = propTypes;
export default NxPolicyThreatSlider;
