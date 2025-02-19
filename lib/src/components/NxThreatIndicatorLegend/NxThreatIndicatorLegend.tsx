/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import {
  NxThreatIndicatorLegendProps,
  nxThreatIndicatorLegendPropTypes,
  ThreatProps
} from './types';
import NxThreatIndicator from '../NxThreatIndicator/NxThreatIndicator';
import './NxThreatIndicatorLegend.scss';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const ThreatIndicator = ({ threatType }: ThreatProps) => {
  return (
    <div className="nx-threat-indicator-legend__threat-container">
      <NxThreatIndicator threatLevelCategory={threatType} />
      <span>{capitalize(threatType)}</span>
    </div>
  );
};

export default function NxThreatIndicatorLegend(props: NxThreatIndicatorLegendProps) {
  const {
    critical,
    severe,
    moderate,
    low,
    none,
    unspecified,
    vertical,
    header,
    className,
    ...attrs
  } = props;
  const classNames = classnames(className, 'nx-threat-indicator-legend', {
    'nx-threat-indicator-legend--vertical': vertical
  });

  if (!critical && !severe && !moderate && !low && !none && !unspecified) {
    console.warn(`No threat level categories for NxThreatIndicatorLegend have been provided
    as props so nothing will be rendered.`);
    return null;
  }

  return (
    <div className={classNames} {...attrs}>
      <label className="nx-threat-indicator-legend__header">{header || 'Legend'}</label>
      {critical && <ThreatIndicator threatType="critical"/>}
      {severe && <ThreatIndicator threatType="severe"/>}
      {moderate && <ThreatIndicator threatType="moderate"/>}
      {low && <ThreatIndicator threatType="low"/>}
      {none && <ThreatIndicator threatType="none"/>}
      {unspecified && <ThreatIndicator threatType="unspecified"/>}
    </div>
  );
}

NxThreatIndicatorLegend.propTypes = nxThreatIndicatorLegendPropTypes;

export { NxThreatIndicatorLegendProps, nxThreatIndicatorLegendPropTypes } from './types';
