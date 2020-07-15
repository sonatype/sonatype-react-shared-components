/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useContext} from 'react';
import classnames from 'classnames';

import { TabContext } from '../NxTabs/NxTabs';

import { Props, propTypes } from './types';
export { Props } from './types';

import './NxTab.scss';

const NxTab = function NxTabElement(props: Props) {
  const {activeTab, rootId, index, onTabSelect} = useContext(TabContext);
  const {tabIndex = 0, className, onClick, onKeyPress, ...attrs} = props;
  const active = activeTab === index;
  const classNames = classnames('nx-tab', className, { active });

  function handleKeyPress(event: React.KeyboardEvent<HTMLLIElement>) {
    if (onKeyPress) {
      onKeyPress(event);
    }
    if (!event.isDefaultPrevented() && (event.key === ' ' || event.key === 'Enter')) {
      event.preventDefault();
      onTabSelect(index);
    }
  }

  function handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    if (onClick) {
      onClick(event);
    }
    if (!event.isDefaultPrevented()) {
      onTabSelect(index);
    }
  }

  return (
    <li role="tab"
        id={`${rootId}-tab-${index}`}
        aria-controls={`${rootId}-tabpanel-${index}`}
        className={classNames}
        aria-selected={active}
        onKeyPress={handleKeyPress}
        onClick={handleClick}
        tabIndex={tabIndex}
        {...attrs} />
  );
};

NxTab.propTypes = propTypes;

export default NxTab;
