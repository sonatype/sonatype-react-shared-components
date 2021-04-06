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
    [`nx-threat-counter-container--${layout}`]: layout,
    ['nx-threat-counter-container--row']: !layout
  });

  return (
    <div className={layoutClasses} {...attrs}>
      <div className="nx-threat-counter nx-threat-counter--critical">
        <span className="nx-threat-counter__count">{criticalCount}</span>
        <span className="nx-threat-counter__text">Critical</span>
      </div>
      <div className="nx-threat-counter nx-threat-counter--severe">
        <span className="nx-threat-counter__count">{severeCount}</span>
        <span className="nx-threat-counter__text">Severe</span>
      </div>
      <div className="nx-threat-counter nx-threat-counter--moderate">
        <span className="nx-threat-counter__count">{moderateCount}</span>
        <span className="nx-threat-counter__text">Moderate</span>
      </div>
      <div className="nx-threat-counter nx-threat-counter--low">
        <span className="nx-threat-counter__count">{lowCount}</span>
        <span className="nx-threat-counter__text">Low</span>
      </div>
    </div>
  );
}

NxThreatCounter.propTypes = propTypes;
