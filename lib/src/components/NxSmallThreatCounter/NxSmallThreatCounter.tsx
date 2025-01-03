/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { head, repeat, tail, toUpper } from 'ramda';

import { BaseCounterProps, MaxDigitCounterProps, CounterProps, Props, propTypes } from './types';
export { Props } from './types';

import './NxSmallThreatCounter.scss';
import NxTooltip from '../NxTooltip/NxTooltip';
import { ThreatLevelCategory } from '../../util/threatLevels';

function BaseCounter({ category, count, display, children }: BaseCounterProps) {
  const categoryForDisplay = `${toUpper(head(category) as string)}${tail(category)}`,
      className = classnames(`nx-small-threat-counter nx-small-threat-counter--${category}`, {
        'nx-small-threat-counter--zero': count === 0
      });

  return (
    <NxTooltip title={categoryForDisplay}>
      <div className={className}>
        {/* Ideally this would be implemented as an aria-label but that doesn't get read by ChromeVox */}
        <span className="nx-small-threat-counter__category">{categoryForDisplay}</span>
        <span className="nx-small-threat-counter__count">{display}</span>
        {children}
      </div>
    </NxTooltip>
  );
}

function Counter({ category, count }: CounterProps) {
  return <BaseCounter category={category} count={count} display={count} />;
}

function MaxDigitCounter({ category, count, maxDigits }: MaxDigitCounterProps) {
  // If we want maxDigits = 3 that means we want room for three digits in addition to a plus sign so
  // that we can show e.g. "999+"
  const overflowDisplay = repeat('9', maxDigits).concat('+').join(''),
      maxValue = Math.pow(10, Math.floor(maxDigits)) - 1;

  return (
    <BaseCounter category={category} count={count} display={count > maxValue ? overflowDisplay : count}>
      <div className="nx-small-threat-counter__sizer">{overflowDisplay}</div>
    </BaseCounter>
  );
}

export default function NxSmallThreatCounter(props: Props) {
  const {
        criticalCount,
        severeCount,
        moderateCount,
        lowCount,
        noneCount,
        unspecifiedCount,
        maxDigits,
        className: classNameProp,
        ...attrs
      } = props,
      hasMaxDigits = maxDigits !== Infinity,
      className = classnames('nx-small-threat-counter-container', classNameProp, {
        'nx-small-threat-counter-container--no-max': !hasMaxDigits
      });

  function renderCounter(category: ThreatLevelCategory, count: number) {
    return hasMaxDigits ?
      <MaxDigitCounter category={category} count={count} maxDigits={maxDigits || 3} /> :
      <Counter category={category} count={count} />;
  }

  if (typeof maxDigits === 'number' && maxDigits < 1) {
    throw new Error('maxDigits must be positive');
  }

  if (typeof criticalCount !== 'number' &&
      typeof severeCount !== 'number' &&
      typeof moderateCount !== 'number' &&
      typeof lowCount !== 'number' &&
      typeof noneCount !== 'number' &&
      typeof unspecifiedCount !== 'number') {
    console.warn('No counts have been provided and so nothing will be rendered.');
    return null;
  }

  return (
    <div className={className} { ...attrs }>
      { typeof criticalCount === 'number' && renderCounter('critical', criticalCount) }
      { typeof severeCount === 'number' && renderCounter('severe', severeCount) }
      { typeof moderateCount === 'number' && renderCounter('moderate', moderateCount) }
      { typeof lowCount === 'number' && renderCounter('low', lowCount) }
      { typeof noneCount === 'number' && renderCounter('none', noneCount) }
      { typeof unspecifiedCount === 'number' && renderCounter('unspecified', unspecifiedCount) }
    </div>
  );
}

NxSmallThreatCounter.propTypes = propTypes;
