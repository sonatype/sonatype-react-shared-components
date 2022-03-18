/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, ReactElement } from 'react';
import { Props, propTypes } from './types';
import classnames from 'classnames';

import { useUniqueId } from '../../util/idUtil';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { faExclamationCircle, faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import './NxProgressBar.scss';

const NxProgressBar = forwardRef<HTMLProgressElement, Props>(
    function NxProgressBar(props, ref) {
      const {
        hasError,
        inlineCounter = false,
        label,
        labelError,
        labelSuccess,
        max = 100,
        showCounter = true,
        value,
        variant
      } = props;

      const percentage = Math.round(value / max * 100);

      const progressId = useUniqueId('nx-progress-bar__progress');

      const renderCounter = () => {
        if (!showCounter || variant === 'inline') {
          return null;
        }

        return (
          <div className="nx-progress-bar__counter">
            <span className="nx-counter">{hasError ? 0 : percentage}%</span>
          </div>
        );
      };

      const renderLabel = () => {
        if (variant === 'inline') {
          return null;
        }

        let labelContent: ReactElement | string | number | null = label || null;

        if (percentage === 100 && (labelSuccess || labelContent)) {
          labelContent = (
            <>
              <NxFontAwesomeIcon icon={faCheckCircle} />
              <span>{labelSuccess || labelContent}</span>
            </>
          );
        }

        if (hasError) {
          labelContent = labelError ? (
            <>
              <NxFontAwesomeIcon icon={faExclamationCircle} />
              <span>{labelError}</span>
            </>
          ) : null;
        }

        return (
          <label htmlFor={progressId} className="nx-progress-bar__label">
            {renderCounter()}
            {inlineCounter ? null : labelContent}
          </label>
        );
      };

      const classes = classnames('nx-progress-bar', {
        'nx-progress-bar--inline': variant === 'inline',
        'nx-progress-bar--small': variant === 'small',
        'nx-progress-bar--full': variant === 'full',
        'nx-progress-bar--inline-counter': inlineCounter,
        'nx-progress-bar--error': hasError,
        'nx-progress-bar--success': percentage === 100
      });

      return (
        <div className={classes}>
          <progress id={progressId}
                    ref={ref}
                    className="nx-progress-bar__progress"
                    value={hasError ? 0 : value}
                    max={max}>
          </progress>
          {renderLabel()}
        </div>
      );
    }
);

NxProgressBar.propTypes = propTypes;

export default NxProgressBar;
