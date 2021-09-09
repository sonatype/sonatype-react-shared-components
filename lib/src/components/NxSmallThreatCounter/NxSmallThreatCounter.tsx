/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { head, repeat, tail, toUpper } from 'ramda';

import { CounterProps, Props, propTypes } from './types';
export { Props } from './types';

import './NxSmallThreatCounter.scss';
import NxTooltip from '../NxTooltip/NxTooltip';

function Counter({ category, count, maxDigits }: CounterProps) {
  const categoryForDisplay = `${toUpper(head(category))}${tail(category)}`,
      className = classnames(`nx-small-threat-counter nx-small-threat-counter--${category}`, {
        'nx-threat-counter--zero': count === 0
      }),

      // If we want maxDigits = 3 that means we want room for three digits in addition to a plus sign so
      // that we can show e.g. "999+"
      overflowDisplay = repeat('9', maxDigits).concat('+').join(''),
      maxValue = Math.pow(10, Math.floor(maxDigits)) - 1;

  return (
    <NxTooltip title={categoryForDisplay}>
      <div aria-label={`${categoryForDisplay}: ${count}`} className={className}>
        {count > maxValue ? overflowDisplay : count}
        <div className="nx-small-threat-counter__sizer">
          {overflowDisplay}
        </div>
      </div>
    </NxTooltip>
  );
}

export default function NxSmallThreatCounter(props: Props) {
  const {
        criticalCount,
        severeCount,
        moderateCount,
        lowCount,
        noneCount,
        maxDigits: maxDigitsProp
      } = props,
      { className, ...attrs } = props,
      maxDigits = maxDigitsProp || 3;


  if (maxDigits < 1) {
    throw new Error('maxDigits must be positive');
  }

  if (typeof criticalCount !== 'number' &&
      typeof severeCount !== 'number' &&
      typeof moderateCount !== 'number' &&
      typeof lowCount !== 'number' &&
      typeof noneCount !== 'number') {
    console.warn('No counts have been provided and so nothing will be rendered.');
    return null;
  }

  return (
    <div className="nx-threat-counter-container nx-threat-counter-container--row" {...attrs}>
      { typeof criticalCount === 'number' &&
        <Counter category="critical" count={criticalCount} maxDigits={maxDigits} />
      }
      { typeof severeCount === 'number' &&
        <Counter category="severe" count={severeCount} maxDigits={maxDigits} />
      }
      { typeof moderateCount === 'number' &&
        <Counter category="moderate" count={moderateCount} maxDigits={maxDigits} />
      }
      { typeof lowCount === 'number' &&
        <Counter category="low" count={lowCount} maxDigits={maxDigits} />
      }
      { typeof noneCount === 'number' &&
        <Counter category="none" count={noneCount} maxDigits={maxDigits} />
      }
    </div>
  );
}

NxSmallThreatCounter.propTypes = propTypes;
