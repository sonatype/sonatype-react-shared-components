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
  const {activeTab, onTabSelect} = React.useContext(ActiveTabContext);
  const {id, className, onClick, onKeyPress, ...attrs} = props;
  const active = activeTab === id;
  const classNames = classnames('nx-tab', className, { active });
  const selected = active ? 'true' : 'false';

  function handleKeyPress(event: React.KeyboardEvent<HTMLLIElement>) {
    if (onKeyPress) {
      onKeyPress(event);
    }
    if (!event.isDefaultPrevented() && event.key === ' ') {
      event.preventDefault();
      onTabSelect(id);
    }
  }

  function handleClick(event: React.MouseEvent<HTMLLIElement, MouseEvent>) {
    if (onClick) {
      onClick(event);
    }
    if (!event.isDefaultPrevented()) {
      onTabSelect(id);
    }
  }

  return <li role="tab" id={id} aria-selected={selected} className={classNames} onKeyPress={handleKeyPress} onClick={handleClick} {...attrs}/>;
};

NxTab.propTypes = propTypes;

export default NxTab;
