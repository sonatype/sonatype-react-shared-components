/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import { map, range } from 'ramda';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { StepsProps, Props, propTypes } from './types';

import './NxProgressBar.scss';

function Steps({ max, value }: StepsProps) {
  const indexes = range(1, max),
      mkStepClasses = (idx: number) => classnames('nx-progress-bar__step', {
        'nx-progress-bar__step--below-value': idx < value,
        'nx-progress-bar__step--at-value': idx === value,
        'nx-progress-bar__step--above-value': idx > value
      }),
      mkStep = (idx: number) => <span key={idx} className={mkStepClasses(idx)} />,
      steps = map(mkStep, indexes);

  return (
    <div role="presentation" className="nx-progress-bar__step-container">
      {steps}
    </div>
  );
}

const NxProgressBar = forwardRef<HTMLProgressElement, Props>(
    function NxProgressBar(props, ref) {
      const {
        className,
        inlineCounter,
        label,
        labelError,
        labelSuccess,
        max: maxProp,
        showCounter: showCounterProp,
        showSteps: showStepsProp,
        value,
        variant: variantProp,
        ...otherAttributes
      } = props;

      const variant = variantProp ?? 'normal';
      const showCounter = showCounterProp ?? true;
      const showSteps = !!showStepsProp;
      const showLabelElement = !(variant === 'inline' || variant === 'small' || inlineCounter);

      const max = maxProp ?? 100;
      const percentage = Math.round(value / max * 100);

      const labelText = labelError || ((percentage === 100 && labelSuccess) ? labelSuccess : label);

      const counterElement = showCounter
        ? <span className="nx-counter nx-progress-bar__counter">{`${labelError ? 0 : percentage}%`}</span>
        : null;

      const labelElement = showLabelElement ? (
        <>
          {labelError && <NxFontAwesomeIcon icon={faExclamationCircle} />}
          {percentage === 100 && <NxFontAwesomeIcon icon={faCheckCircle} />}
          <span className="nx-progress-bar__label-text">{labelText}</span>
        </>
      ) : null;

      const classes = classnames('nx-progress-bar', `nx-progress-bar--${variant}`, {
        'nx-progress-bar--inline-counter': inlineCounter,
        'nx-progress-bar--error': labelError,
        'nx-progress-bar--success': percentage === 100
      }, className);

      return (
        <label className={classes}>
          <progress ref={ref}
                    aria-label={!showLabelElement ? labelText : undefined}
                    className="nx-progress-bar__progress"
                    value={labelError ? 0 : value}
                    max={max}
                    {...otherAttributes} />
          { showSteps && <Steps max={max} value={labelError ? 0 : value} /> }
          {
            variant !== 'inline' && (
              <span className="nx-progress-bar__counter-and-label">
                {!showSteps && counterElement}
                {labelElement}
              </span>
            )
          }
        </label>
      );
    }
);

NxProgressBar.propTypes = propTypes;

export default NxProgressBar;
export { Props } from './types';
