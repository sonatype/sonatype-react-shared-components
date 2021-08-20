/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import { Props as NxFilterInputProps, propTypes as nxFilterInputPropTypes } from '../NxFilterInput/types';

export interface Match {
  id: string;
  displayName: string;
}

export interface Props extends Omit<NxFilterInputProps, 'onSelect'> {
  loading?: boolean | null;
  matches: Match[];
  onSelect: (m: Match) => void;
}

export const propTypes: PropTypes.ValidationMap<Props> = {
  ...nxFilterInputPropTypes,
  loading: PropTypes.bool,
  matches: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    displayName: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onSelect: PropTypes.func.isRequired
};
