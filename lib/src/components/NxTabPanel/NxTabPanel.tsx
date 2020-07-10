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

const NxTabPanel = function NxTabPanelElement(props: Props) {
  // Use React.useContext instead of importing useContext for jest to mock the value in the test
  const {activeTab} = React.useContext(ActiveTabContext);
  const {labelledBy, className, ...attrs} = props;

  if (activeTab !== labelledBy) {
    return null;
  }

  return (
    <div role="tabpanel"
         aria-expanded="true"
         aria-labelledby={labelledBy}
         className={classnames('nx-tab-panel', className)}
         {...attrs}
    />
  );
};

NxTabPanel.propTypes = propTypes;

export default NxTabPanel;
