/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ComponentPropsWithRef } from 'react';
import PropTypes, { ValidationMap } from 'prop-types';
import { ThreatLevelCategory } from '../../util/threatLevels';

export interface NxThreatIndicatorLegendProps extends ComponentPropsWithRef<'div'> {
  critical?: boolean | null;
  severe?: boolean | null;
  moderate?: boolean | null;
  low?: boolean | null;
  none?: boolean | null;
  unspecified?: boolean | null;
  vertical?: boolean | null;
  header?: string | null;
}

export const nxThreatIndicatorLegendPropTypes: ValidationMap<NxThreatIndicatorLegendProps> = {
  critical: PropTypes.bool,
  severe: PropTypes.bool,
  moderate: PropTypes.bool,
  low: PropTypes.bool,
  none: PropTypes.bool,
  unspecified: PropTypes.bool,
  vertical: PropTypes.bool,
  header: PropTypes.string
};

export interface ThreatProps {
  threatType: ThreatLevelCategory;
}
