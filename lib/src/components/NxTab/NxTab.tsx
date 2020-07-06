/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { ActiveTabContext } from '../NxTabs/NxTabs';

import { Props, propTypes } from './types';
export { Props } from './types';

const NxTab = function NxTabElement(props: Props) {
  // Use React.useContext instead of importing useContext for jest to mock the value in the test
  const activeTab = React.useContext(ActiveTabContext);
  const {id, className, ...attrs} = props;
  const active = activeTab === id;
  const classNames = classnames('nx-tab', className, { active });
  const selected = active ? 'true' : 'false';

  return <li role="tab" id={id} aria-selected={selected} className={classNames} {...attrs}/>;
};

NxTab.propTypes = propTypes;

export default NxTab;
