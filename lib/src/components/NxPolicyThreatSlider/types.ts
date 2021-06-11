/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { ValueLabelProps } from '@material-ui/core/Slider';

import { ThreatLevelNumber, allThreatLevelNumbers } from '../../util/threatLevels';

export type PolicyThreatLevelRange = [ThreatLevelNumber, ThreatLevelNumber];

export interface LabelDisplayProps extends ValueLabelProps {
  // MUI does actually pass this, though it is not included in their TS types
  disabled?: boolean | null;
}

export interface Props {
  className?: string | null;
  onChange?: ((r: PolicyThreatLevelRange) => void) | null;
  value: PolicyThreatLevelRange;
  disabled?: boolean | null;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  className: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,

  // cast necessary because PropTypes can't check array length
  value: PropTypes.arrayOf(PropTypes.oneOf(allThreatLevelNumbers).isRequired).isRequired as
      PropTypes.Validator<PolicyThreatLevelRange>
};
