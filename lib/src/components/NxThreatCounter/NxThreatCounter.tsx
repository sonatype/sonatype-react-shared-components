/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
export { Props } from './types';

import './NxThreatCounter.scss';

export default function NxThreatCounter({
  criticalCount, severeCount, moderateCount, lowCount, layout, className, ...attrs }: Props) {

  const layoutClasses = classnames('nx-threat-counter-container', className, {
    [`nx-threat-counter-container--${layout}`]: layout
  });

  return (
    <dl className={layoutClasses} {...attrs}>
      <div className="nx-threat-counter nx-threat-counter--critical">
        <dt className="nx-threat-counter__count">{criticalCount}</dt>
        <dd className="nx-threat-counter__text">Critical</dd>
      </div>
      <div className="nx-threat-counter nx-threat-counter--severe">
        <dt className="nx-threat-counter__count">{severeCount}</dt>
        <dd className="nx-threat-counter__text">Severe</dd>
      </div>
      <div className="nx-threat-counter nx-threat-counter--moderate">
        <dt className="nx-threat-counter__count">{moderateCount}</dt>
        <dd className="nx-threat-counter__text">Moderate</dd>
      </div>
      <div className="nx-threat-counter nx-threat-counter--low">
        <dt className="nx-threat-counter__count">{lowCount}</dt>
        <dd className="nx-threat-counter__text">Low</dd>
      </div>
    </dl>
  );
}

NxThreatCounter.propTypes = propTypes;
