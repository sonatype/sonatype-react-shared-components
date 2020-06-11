/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
export { Props } from './types';

const NxTab = function NxTabElement(props: Props) {
  const {active, className, ...attrs} = props;
  const classNames = classnames('nx-tab-label', className, {
    'nx-tab-label--active': active === true || active === 'true'
  });

  return <li role="tab" aria-selected={active} className={classNames} {...attrs} />;
};

NxTab.propTypes = propTypes;

export default NxTab;
