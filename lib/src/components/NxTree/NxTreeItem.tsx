/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext, useEffect, useRef, useState, FocusEvent, KeyboardEvent } from 'react';
import classnames from 'classnames';
import { omit } from 'ramda';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import { TreeItemFocusState, TreeKeyNavContextType, ItemProps, itemPropTypes } from './types';
import TreeKeyNavContext from './TreeKeyNavContext';
import { modifierKeyIsPressed } from '../../util/keyboardUtil';

export default function NxTreeItem(props: ItemProps) {
  const {
        collapsible,
        className,
        children,
        onActivate,
        onFocus: onFocusProp,
        ...otherProps
      } = props,

      // in the following two assignments we have to use props.collapsible as opposed to just collapsible
      // so that TS understands the type guard
      isOpen = props.collapsible ? props.isOpen : true,
      onToggleCollapse = props.collapsible ? props.onToggleCollapse : undefined,
      collapseIcon = isOpen ? faMinusSquare : faPlusSquare,
      classes = classnames('nx-tree__item', className, {
        open: isOpen,
        'nx-tree__item--collapsible': collapsible
      }),
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      attrs = omit(['isOpen', 'onToggleCollapse'] as any, otherProps),
      intersectionLineClasses = classnames('nx-tree__line-intersection', {
        'nx-tree__line-intersection--collapsible': collapsible
      }),

      [labelId, setLabelId] = useState<string | null>(null),
      ariaLabelledByProp = props['aria-labelledby'],
      labelledBy = classnames(ariaLabelledByProp, labelId),

      // whether this item is itself focused, has a focused descendant, or neither
      [focusState, setFocusState] = useState<TreeItemFocusState>(null),
      ref = useRef<HTMLLIElement>(null),
      nullableParentKeyNavContext = useContext(TreeKeyNavContext);

  if (!nullableParentKeyNavContext) {
    throw new TypeError('NxTree.Item failed to retrieve context information. Was it used outside of an NxTree?');
  }

  // putting this after the above conditional helps typescript understand that
  // parentKeyNavContext will never be null in onKeyDown
  const parentKeyNavContext = nullableParentKeyNavContext,
      parentsFocusedChild = parentKeyNavContext.focusedChild,
      childKeyNavContext: TreeKeyNavContextType = {
        ...parentKeyNavContext,

        // When this is called, the child Tree has said to focus the previous item above it e.g. this item
        focusPrev: focusSelf,
        focusParent: focusSelf,
        focusFirst,
        focusLast,
        focusedChild: (focusState === 'children') && ref.current?.querySelector('.nx-tree') || null
      };

  function getLabelElement() {
    return ref.current?.querySelector(':scope > .nx-tree__item-label');
  }

  function focusSelf() {
    setFocusState('self');

    // If focus is within the tree, we want to move that focus to this item. Otherwise,
    // leave actual focus alone and just make this item the part of the tree that is _focusable_
    const treeRoot = parentKeyNavContext?.getTreeRoot();
    if (treeRoot?.contains(document.activeElement)) {
      ref.current?.focus({ preventScroll: true });
      getLabelElement()?.scrollIntoView({ block: 'nearest', inline: 'nearest' });
    }
  }

  // Signal from child to focus the first element in the tree. Unfocus our children and pass the message up the tree
  function focusFirst() {
    focusSelf();
    parentKeyNavContext.focusFirst();
  }

  // Signal from child to focus the last element in the tree. Unfocus our children and pass the message up the tree
  function focusLast() {
    focusSelf();
    parentKeyNavContext.focusLast();
  }

  function hasChildren() {
    return !!ref.current?.querySelector('.nx-tree__item');
  }

  function stopPropAndPreventDefault(evt: KeyboardEvent) {
    evt.stopPropagation();
    evt.preventDefault();
  }

  // handle parent focusing or unfocusing of the subtree rooted at this item
  useEffect(function() {
    if (parentsFocusedChild && parentsFocusedChild === ref.current) {
      if (!focusState) {
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
    }
    else {
      // focus moved somewhere else, clear our focus state
      setFocusState(null);
    }
  }, [parentsFocusedChild]);

  // Establish a11y label for this item
  useEffect(function() {
    setLabelId(getLabelElement()?.id || null);
  }, []);

  function onKeyDown(evt: KeyboardEvent<HTMLLIElement>) {
    if (modifierKeyIsPressed(evt)) {
      return;
    }

    switch (evt.key) {
      case 'ArrowUp':
        stopPropAndPreventDefault(evt);
        parentKeyNavContext.setNavigationDirection('up');
        parentKeyNavContext.focusPrev();
        break;
      case 'ArrowDown':
        stopPropAndPreventDefault(evt);

        parentKeyNavContext.setNavigationDirection('down');

        if (isOpen && hasChildren()) {
          setFocusState('children');
        }
        else {
          parentKeyNavContext.focusNext();
        }
        break;
      case 'ArrowRight':
        stopPropAndPreventDefault(evt);

        parentKeyNavContext.setNavigationDirection('down');

        if (!isOpen && onToggleCollapse) {
          onToggleCollapse();
        }
        else if (focusState === 'self') {
          if (hasChildren()) {
            setFocusState('children');
          }
          // else user is just pressing arrow right on an already-focused leaf node, do nothing
        }
        else {
          console.error('Should be impossible: NxTreeItem received ArrowRight while not focused');
        }
        break;
      case 'ArrowLeft':
        stopPropAndPreventDefault(evt);

        parentKeyNavContext.setNavigationDirection('down');

        if (isOpen && onToggleCollapse) {
          onToggleCollapse();
        }
        else {
          parentKeyNavContext.focusParent();
        }
        break;
      case 'Home':
        stopPropAndPreventDefault(evt);
        focusFirst();
        break;
      case 'End':
        stopPropAndPreventDefault(evt);
        focusLast();
        break;
      case 'Enter':
        stopPropAndPreventDefault(evt);
        if (onActivate) {
          onActivate();
        }
        break;
    }
  }

  function onFocus(evt: FocusEvent<HTMLLIElement>) {
    if (onFocusProp) {
      onFocusProp(evt);
    }

    // if a child received focus (for instance due to a click) ensure that the focusedState is updated
    setFocusState(evt.target === ref.current ? 'self' : 'children');
  }

  const topLineEnd = collapsible ? '16' : '28.5',
      rightLineStart = collapsible ? '24' : '11.5',
      collapseSvg = (
        <>
          <NxFontAwesomeIcon className="nx-tree__collapse-icon"
                             height="14"
                             width="14"
                             x="5"
                             y="21"
                             icon={collapseIcon} />
          <rect className="nx-tree__collapse-click" height="24" width="24" y="16" onClick={onToggleCollapse} />
        </>
      ),
      intersection = (
        <svg className={intersectionLineClasses} viewBox="0 0 36 40">
          <line className="nx-tree__top-line" x1="12" x2="12" y2={topLineEnd} />
          <line className="nx-tree__right-line" x1={rightLineStart} x2="36" y1="28" y2="28" />
          { collapsible ? collapseSvg : <line className="nx-tree__bottom-line" x1="12" x2="12" y1="27.5" y2="40" /> }
        </svg>
      );

  return (
    <li role="treeitem"
        className={classes}
        { ...attrs }
        tabIndex={focusState === 'self' ? 0 : -1}
        ref={ref}
        onKeyDown={onKeyDown}
        onFocus={onFocus}
        aria-labelledby={labelledBy}
        aria-expanded={isOpen}
        aria-selected={focusState === 'self'}>
      {intersection}
      <svg className="nx-tree__line-drop" viewBox="0 0 36 1" preserveAspectRatio="none">
        <line x1="12" x2="12" y2="1" />
      </svg>
      <TreeKeyNavContext.Provider value={childKeyNavContext}>{children}</TreeKeyNavContext.Provider>
    </li>
  );
}

NxTreeItem.propTypes = itemPropTypes;
