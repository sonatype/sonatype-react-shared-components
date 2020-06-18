/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import { Slider } from '@material-ui/core';
import { ValueLabelProps } from '@material-ui/core/Slider';
import classnames from 'classnames';
import { omit } from 'ramda';

import { categoryByPolicyThreatLevel, ThreatLevelNumber } from '../../util/threatLevels';
import { pathSet } from '../../util/jsUtil';

import { Props, PolicyThreatLevelRange, propTypes } from './types';
export { Props, PolicyThreatLevelRange, propTypes } from './types';

import './NxPolicyThreatSlider.scss';

/**
 * A ValueLabelComponent that renders the values inside of the thumbs and changes CSS classes depending on
 * position/value
 */
function NxPolicyThreatSliderValueLabelDisplay({ value, children, className, ...otherProps }: ValueLabelProps) {

  // this impl doesn't need to support these props. Filter them out so they don't cause react warnings on the span
  const filteredProps = omit(['open', 'valueLabelFormat', 'valueLabelDisplay'], otherProps),
      thumb = React.Children.only(children),

      // the thumb element isn't initially constructed with any children. Add the value as its child
      thumbWithLabel = pathSet(['props', 'children'], value, thumb),
      limitedValue = Math.min(10, Math.max(0, Math.round(value))) as ThreatLevelNumber,
      threatCategory = categoryByPolicyThreatLevel[limitedValue],
      nxBaseClass = 'nx-policy-threat-slider__value-label',
      classes = classnames(nxBaseClass, `${nxBaseClass}--${threatCategory}`, className);

  return (
    <span className={classes} { ...filteredProps }>{thumbWithLabel}</span>
  );
}

const NxPolicyThreatSlider: FunctionComponent<Props> =
  function NxPolicyThreatSlider({ onChange, value, className }) {
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
                ValueLabelComponent={NxPolicyThreatSliderValueLabelDisplay}
                onChange={sliderOnChange} />
      </div>
    );
  };

NxPolicyThreatSlider.propTypes = propTypes;
export default NxPolicyThreatSlider;
