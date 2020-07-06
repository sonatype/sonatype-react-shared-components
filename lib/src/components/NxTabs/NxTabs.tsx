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

export const ActiveTabContext = React.createContext<string|null>(null);

const NxTabs = function NxTabsElement(props: Props) {
  const {activeTab, className, ...attrs} = props;

  return (
    <ActiveTabContext.Provider value={activeTab}>
      <div className={classnames('nx-tabs', className)} {...attrs} />
    </ActiveTabContext.Provider>
  );
};

NxTabs.propTypes = propTypes;

export default NxTabs;
