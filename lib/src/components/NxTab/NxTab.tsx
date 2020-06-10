/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactElement } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
export { Props } from './types';

const NxTab: FunctionComponent<Props> = function NxTabElement(props: Props): ReactElement<Props> {
  const {className, ...attrs} = props;

  return <div className={classnames('nx-tab', className)} {...attrs}/>;
};

NxTab.propTypes = propTypes;

export default NxTab;
