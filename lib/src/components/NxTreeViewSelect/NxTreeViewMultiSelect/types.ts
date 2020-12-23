/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as PropTypes from 'prop-types';
import {CommonProps, Option, commonPropTypes} from '../commonTypes';
export {Option} from '../commonTypes';

export interface Props<T extends Option = Option> extends CommonProps<T> {
  selectedIds?: Set<string | null> | null;
  onChange: ((selectedIds: Set<string | null>, toggledId?: string | null) => void);
}

export const propTypes: React.WeakValidationMap<Props<any>> = {
  ...commonPropTypes,
  selectedIds: PropTypes.instanceOf(Set) as PropTypes.Validator<Set<string | null>>,
  onChange: PropTypes.func.isRequired
};
