/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import classnames from 'classnames';
import React, { forwardRef } from 'react';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';

import './NxProgressBar.scss';

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
        value,
        variant,
        ...otherAttributes
      } = props;

      const showCounter = showCounterProp ?? true;
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
          {
            variant !== 'inline' && (
              <span className="nx-progress-bar__counter-and-label">
                {counterElement}
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
