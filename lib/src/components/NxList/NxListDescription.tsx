/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {NxListDescriptionProps, nxListDescriptionTermPropTypes} from './types';

const NxListDescription = (props: NxListDescriptionProps) => {
  const { children } = props;
  return <dd className="nx-list__description">{children}</dd>;
};

NxListDescription.propTypes = nxListDescriptionTermPropTypes;

export default NxListDescription;
