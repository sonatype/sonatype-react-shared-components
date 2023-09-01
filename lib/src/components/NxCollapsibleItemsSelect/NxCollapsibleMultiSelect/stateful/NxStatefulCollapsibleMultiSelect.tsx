/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import NxCollapsibleMultiSelect from '../NxCollapsibleMultiSelect';
import { Props, propTypes } from './types';
import { Option } from '../../commonTypes';
export { Props, Option } from './types';
import useStatefulCollapsibleSelect from '../../NxCollapsibleRadioSelect/stateful/useStatefulCollapsibleSelect';

export default function NxStatefulCollapsibleMultiSelect<T extends Option>(props: Props<T>) {
  const collapsibleSelectState = useStatefulCollapsibleSelect(props);

  return <NxCollapsibleMultiSelect {...props} { ...collapsibleSelectState } />;
}

NxStatefulCollapsibleMultiSelect.propTypes = propTypes;
