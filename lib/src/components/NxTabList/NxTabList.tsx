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

const NxTabList = function NxTabListElement(props: Props) {
  const {className, ...attrs} = props;

  return <ul role="tablist" className={classnames('nx-tab-list', className)} {...attrs} />;
};

NxTabList.propTypes = propTypes;

export default NxTabList;
