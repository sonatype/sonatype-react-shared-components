/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext, useEffect, useRef, useState, KeyboardEvent } from 'react';
import classnames from 'classnames';
import { omit } from 'ramda';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import { TreeItemFocusState, TreeKeyNavContextType, ItemProps, itemPropTypes } from './types';
import TreeKeyNavContext from './TreeKeyNavContext';

export default function NxTreeItem(props: ItemProps) {
  const { collapsible, className, children, onActivate, ...otherProps } = props,
      topLineEnd = collapsible ? '16' : '28.5',
      rightLineStart = collapsible ? '24' : '11.5',

      // in the following two assignments we have to use props.collapsible as opposed to just collapsible
      // so that TS understands the type guard
      isOpen = props.collapsible ? props.isOpen : true,
      onToggleCollapse = props.collapsible ? props.onToggleCollapse : undefined,
      collapseIcon = isOpen ? faMinusSquare : faPlusSquare,
      classes = classnames('nx-tree__item', className, {
        open: isOpen,
        'nx-tree__item--collapsible': collapsible
      }),
      attrs = omit(['isOpen', 'onToggleCollapse'], otherProps),
      intersectionLineClasses = classnames('nx-tree__line-intersection', {
        'nx-tree__line-intersection--collapsible': collapsible
      }),
      [focusState, setFocusState] = useState<TreeItemFocusState>(null),
      ref = useRef<HTMLLIElement>(null),
      parentKeyNavContext = useContext(TreeKeyNavContext);

  if (!parentKeyNavContext) {
    throw new TypeError('NxTree.Item failed to retrieve context information. Was it used outside of an NxTree?');
  }

  const parentFocusedChild = parentKeyNavContext.focusedChild,
      childKeyNavContext: TreeKeyNavContextType = {
        navigationDirection: parentKeyNavContext.navigationDirection,
        focusNext: parentKeyNavContext.focusNext,

        // The child Tree has said to focus the previous item above it e.g. this item
        focusPrev: focusSelf,
        focusParent: focusSelf,
        focusedChild: (focusState === 'children') && ref.current?.querySelector('.nx-tree') || null
      };

  function focusSelf() {
    setFocusState('self');
    ref.current?.focus();
  }

  function hasChildren() {
    return !!ref.current?.querySelector('.nx-tree__item');
  }

  useEffect(function() {
    if (!!parentFocusedChild && parentFocusedChild === ref.current) {
      if (parentKeyNavContext.navigationDirection === 'down') {
        // focus moved into this item from above; focus this item itself
        focusSelf();
      }
      else {
        // focus moved into this item from below, focus our last visible descendant
        if (isOpen && hasChildren()) {
          setFocusState('children');
        }
        else {
          focusSelf();
        }
      }
    }
    else {
      // focus moved to some other child, clear our focus state
      setFocusState(null);
    }
  }, [parentFocusedChild]);

  function onKeyDown(evt: KeyboardEvent<HTMLLIElement>) {
    switch (evt.key) {
      case 'ArrowUp':
        parentKeyNavContext!.focusPrev();
        evt.stopPropagation();
        break;
      case 'ArrowDown':
        evt.stopPropagation();
        if (isOpen && hasChildren()) {
          setFocusState('children');
        }
        else {
          parentKeyNavContext!.focusNext();
        }
        break;
      case 'ArrowRight':
        evt.stopPropagation();
        if (!isOpen && onToggleCollapse) {
          onToggleCollapse();
        }
        else if (focusState === 'self' && hasChildren()) {
          setFocusState('children');
        }
        else {
          console.error('Should be impossible: NxTreeItem received ArrowRight while not focused');
        }
        break;
      case 'ArrowLeft':
        evt.stopPropagation();
        if (isOpen && onToggleCollapse) {
          onToggleCollapse();
        }
        else {
          parentKeyNavContext!.focusParent();
        }
        break;
      case 'Home':
        // TODO
        break;
      case 'End':
        // TODO
        break;
      case 'Enter':
        if (onActivate) {
          onActivate();
        }
    }
  }

  const intersectionLines = (
    <svg className={intersectionLineClasses} viewBox="0 0 36 40">
      <line className="nx-tree__top-line" x1="12" x2="12" y2={topLineEnd} />
      <line className="nx-tree__right-line" x1={rightLineStart} x2="36" y1="28" y2="28" />
      { collapsible ?
        <NxFontAwesomeIcon className="nx-tree_collapse-icon"
                           height="14"
                           width="14"
                           x="5"
                           y="21"
                           icon={collapseIcon} /> :
        <line className="nx-tree__bottom-line" x1="12" x2="12" y1="27.5" y2="40" />
      }
    </svg>
  );

  const intersection = (
    <>
      {intersectionLines}
      { collapsible &&
        <label className="nx-tree__collapse-label">
          <input className="nx-tree__collapse-input" type="checkbox" checked={isOpen} onChange={onToggleCollapse} />
        </label>
      }
    </>
  );

  return (
    <li role="treeitem"
        className={classes}
        { ...attrs }
        tabIndex={focusState === 'self' ? 0 : -1}
        ref={ref}
        onKeyDown={onKeyDown}>
      {intersection}
      <svg className="nx-tree__line-drop" viewBox="0 0 36 1" preserveAspectRatio="none">
        <line x1="12" x2="12" y2="1" />
      </svg>
      <TreeKeyNavContext.Provider value={childKeyNavContext}>{children}</TreeKeyNavContext.Provider>
    </li>
  );
}

NxTreeItem.propTypes = itemPropTypes;
