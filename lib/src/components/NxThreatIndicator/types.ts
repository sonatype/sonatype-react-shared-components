/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';

import { ThreatLevelNumber, ThreatLevelCategory, allThreatLevelCategories, allThreatLevelNumbers }
  from '../../util/threatLevels';

export interface Props {
  threatLevelCategory?: ThreatLevelCategory;
  policyThreatLevel?: ThreatLevelNumber;
  title?: string | null;
  className?: string | null;
  presentational?: boolean | null;
}

export const propTypes: PropTypes.WeakValidationMap<Props> = {
  title: PropTypes.string,
  threatLevelCategory: PropTypes.oneOf(allThreatLevelCategories),
  policyThreatLevel: PropTypes.oneOf(allThreatLevelNumbers),
  className: PropTypes.string,
  presentational: PropTypes.bool
};

