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
  const isActiveTab = activeTab === index;
  const classNames = classnames('nx-tab', className, { active: isActiveTab });
  const liElement = useRef<HTMLLIElement | null>(null);

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

    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    const tabElements = event.currentTarget.parentElement!.children;

    const getNextElementFromEventKey = (key: string) => {
      switch (key) {
        case 'Tab':
          if (!activeTab) {
            return;
          }
          const tabId = tabElements[activeTab].getAttribute('aria-controls') as string;
          return document.getElementById(tabId);
        case 'ArrowLeft':
          return tabElements[index - 1] ?? tabElements[tabElements.length - 1];
        case 'ArrowRight':
          return tabElements[index + 1] ?? tabElements[0];
        case 'Home':
          return tabElements[0];
        case 'End':
          return tabElements[tabElements.length - 1];
        default:
          return;
      }
    };

    const nextElement = getNextElementFromEventKey(event.key);

    if (nextElement) {
      event.preventDefault();
      (nextElement as HTMLElement).focus();
    }
  }

  return (
    <NxOverflowTooltip title={children}>
      <li role="tab"
          id={`${rootId}-tab-${index}`}
          aria-controls={`${rootId}-tabpanel-${index}`}
          className={classNames}
          aria-selected={isActiveTab}
          onKeyPress={handleKeyPress}
          onKeyDown={handleKeyDown}
          onClick={handleClick}
          tabIndex={isActiveTab ? 0 : -1}
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
