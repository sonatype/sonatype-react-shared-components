/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import {
  NxThreatIndicatorLegendProps,
  nxThreatIndicatorLegendPropTypes,
  nxThreatPropTypes,
  ThreatProps
} from './types';
import { NxH3, NxThreatIndicator } from '../..';
import './NxThreatIndicatorLegend.scss';

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const ThreatIndicator = ({ threatType }: ThreatProps) => {
  return (
    <div>
      <NxThreatIndicator threatLevelCategory={threatType} />
      <span>{capitalize(threatType)}</span>
    </div>
  );
};

ThreatIndicator.propTypes = nxThreatPropTypes;

const NxThreatIndicatorLegend = forwardRef<HTMLDivElement, NxThreatIndicatorLegendProps>(
    (props: NxThreatIndicatorLegendProps, ref) => {
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

      return (
        <>
          <NxH3 className="nx-threat-indicator-legend-header">{header || 'Legend'}</NxH3>
          <div ref={ref} className={classNames} {...attrs}>
            {critical && <ThreatIndicator threatType="critical"/>}
            {severe && <ThreatIndicator threatType="severe"/>}
            {moderate && <ThreatIndicator threatType="moderate"/>}
            {low && <ThreatIndicator threatType="low"/>}
            {none && <ThreatIndicator threatType="none"/>}
            {unspecified && <ThreatIndicator threatType="unspecified"/>}
          </div>
        </>
      );
    });

NxThreatIndicatorLegend.propTypes = nxThreatIndicatorLegendPropTypes;

export default NxThreatIndicatorLegend;
export { NxThreatIndicatorLegendProps, nxThreatIndicatorLegendPropTypes } from './types';
