/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';
import classnames from 'classnames';

import TabContext from './TabContext';

import { NxTabProps } from './types';
export { NxTabProps };

import './NxTab.scss';

const SPACE = ' ';

const NxTab = function NxTabElement(props: NxTabProps) {
  const { activeTab, rootId, index, onTabSelect } = useContext(TabContext);
  const { tabIndex = 0, className, children, onClick, onKeyPress, ...attrs } = props;
  const active = activeTab === index;
  const classNames = classnames('nx-tab', className, { active });

  function handleKeyPress(event: React.KeyboardEvent<HTMLLIElement>) {
    if (onKeyPress) {
      onKeyPress(event);
    }
    if (!event.isDefaultPrevented() && (event.key === SPACE || event.key === 'Enter')) {
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
        {...attrs}>
      {children}
      <div className="nx-tab__hidden-children">
        {children}
      </div>
    </li>
  );
};

export default NxTab;
