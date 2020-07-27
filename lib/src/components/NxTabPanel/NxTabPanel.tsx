/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';
import classnames from 'classnames';

import { TabContext } from '../NxTabs/NxTabs';

import { Props, propTypes } from './types';
export { Props } from './types';

import './NxTabPanel.scss';

const NxTabPanel = function NxTabPanelElement(props: Props) {
  const { activeTab, rootId, index } = useContext(TabContext);
  const { className, ...attrs } = props;

  if (activeTab !== index) {
    return null;
  }

  return (
    <div role="tabpanel"
         id={`${rootId}-tabpanel-${index}`}
         aria-labelledby={`${rootId}-tab-${index}`}
         className={classnames('nx-tab-panel', className)}
         {...attrs}
    />
  );
};

NxTabPanel.propTypes = propTypes;

export default NxTabPanel;
