/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
export { Props } from './types';

import './NxThreatCounter.scss';
import { SkeletonContext } from '../NxSkeletonLoader/NxSkeletonLoader';

export default function NxThreatCounter(props: Props) {
  const {
    criticalCount,
    severeCount,
    moderateCount,
    lowCount,
    noneCount,
    unspecifiedCount,
    layout,
    className,
    ...attrs
  } = props;

  const skeleton = useContext(SkeletonContext),
      skeletonClasses = skeleton ? 'nx-skeleton-loader__block' : null;

  const layoutClasses = classnames('nx-threat-counter-container', className, {
    [`nx-threat-counter-container--${layout}`]: layout
  });

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
    <dl className={layoutClasses} {...attrs}>
      {typeof criticalCount === 'number' &&
      <div className={`nx-threat-counter nx-threat-counter--critical ${skeletonClasses}`}>
        <dt className="nx-threat-counter__text">Critical</dt>
        <dd className="nx-threat-counter__count">{criticalCount}</dd>
      </div>}
      {typeof severeCount === 'number' &&
      <div className={`nx-threat-counter nx-threat-counter--severe ${skeletonClasses}`}>
        <dt className="nx-threat-counter__text">Severe</dt>
        <dd className="nx-threat-counter__count">{severeCount}</dd>
      </div>}
      {typeof moderateCount === 'number' &&
      <div className={`nx-threat-counter nx-threat-counter--moderate ${skeletonClasses}`}>
        <dt className="nx-threat-counter__text">Moderate</dt>
        <dd className="nx-threat-counter__count">{moderateCount}</dd>
      </div>}
      {typeof lowCount === 'number' &&
      <div className={`nx-threat-counter nx-threat-counter--low ${skeletonClasses}`}>
        <dt className="nx-threat-counter__text">Low</dt>
        <dd className="nx-threat-counter__count">{lowCount}</dd>
      </div>}
      {typeof noneCount === 'number' &&
      <div className={`nx-threat-counter nx-threat-counter--none ${skeletonClasses}`}>
        <dt className="nx-threat-counter__text">None</dt>
        <dd className="nx-threat-counter__count">{noneCount}</dd>
      </div>}
      {typeof unspecifiedCount === 'number' &&
      <div className={`nx-threat-counter nx-threat-counter--unspecified ${skeletonClasses}`}>
        <dt className="nx-threat-counter__text">Unspecified</dt>
        <dd className="nx-threat-counter__count">{unspecifiedCount}</dd>
      </div>}
    </dl>
  );
}

NxThreatCounter.propTypes = propTypes;
