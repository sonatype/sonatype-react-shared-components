/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import NxTab from '../NxTab';

import { Props, propTypes } from './types';
export { Props } from './types';

const NxStatefulTab = function NxStatefulTabElement(props: Props) {
  const { active, ...attrs } = props;

  return <NxTab active={active || false} {...attrs} />;
};

NxStatefulTab.propTypes = propTypes;

export default NxStatefulTab;
