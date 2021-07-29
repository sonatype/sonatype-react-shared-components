/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {NxListDescriptionTermProps, nxListDescriptionTermPropTypes} from './types';

const NxListDescriptionTerm = (props: NxListDescriptionTermProps) => {
  const { children } = props;
  return <dt className="nx-list__term">{children}</dt>;
};

NxListDescriptionTerm.propTypes = nxListDescriptionTermPropTypes;

export default NxListDescriptionTerm;
