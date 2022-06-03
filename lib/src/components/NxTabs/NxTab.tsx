/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext, useRef } from 'react';
import classnames from 'classnames';

import TabContext from './TabContext';

import { NxTabProps, nxTabPropTypes } from './types';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
export { NxTabProps };

const SPACE = ' ';

const NxTab = function NxTabElement(props: NxTabProps) {
  const {
    activeTab,
    rootId,
    index,
    onTabSelect
  } = useContext(TabContext);
  const { className, children, onClick, onKeyPress, ...attrs } = props;
  const active = activeTab === index;
  const classNames = classnames('nx-tab', className, { active });
  const liElement = useRef<HTMLLIElement>(null);

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

  function handleKeyDown(event: React.KeyboardEvent<HTMLLIElement>) {
    if (event.isDefaultPrevented()) {
      return;
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      const tabElements = event.currentTarget.parentElement?.children;
      const nextElement = tabElements?.[index + 1] ?? tabElements?.[0];
      if (nextElement) {
        (nextElement as HTMLElement).focus();
      }
    }
    else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      // eslint-disable-next-line
      console.log('tab');
      const tabElements = event.currentTarget.parentElement?.children;
      const nextElement = tabElements?.[index - 1] ?? tabElements?.[tabElements.length - 1];
      if (nextElement) {
        (nextElement as HTMLElement).focus();
      }
    }
  }

  return (
    <NxOverflowTooltip title={children}>
      <li role="tab"
          id={`${rootId}-tab-${index}`}
          aria-controls={`${rootId}-tabpanel-${index}`}
          className={classNames}
          aria-selected={active}
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          tabIndex={activeTab === index ? 0 : -1}
          ref={liElement}
          {...attrs}>
        {children}
        <div className="nx-tab__hidden-children">
          {children}
        </div>
      </li>
    </NxOverflowTooltip>
  );
};

NxTab.propTypes = nxTabPropTypes;

export default NxTab;
