
/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { omit } from 'ramda';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-regular-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import { ItemProps, itemPropTypes } from './types';

export default function NxTreeItem(props: ItemProps) {
  const { collapsible, className, children, ...otherProps } = props,
      topLineEnd = collapsible ? '8' : '20.5',
      rightLineStart = collapsible ? '24' : '12.5',

      // in the following two assignments we have to use props.collapsible as opposed to just collapsible
      // so that TS understands the type guard
      isOpen = props.collapsible ? props.isOpen : true,
      onToggleCollapse = props.collapsible ? props.onToggleCollapse : undefined,
      collapseIcon = isOpen ? faMinusSquare : faPlusSquare,
      classes = classnames('nx-tree__item', className, {
        open: isOpen,
        'nx-tree__item--collapsible': collapsible
      }),
      attrs = omit(['isOpen', 'onToggleCollapse'], otherProps);

  const intersectionLines = (
    <svg className="nx-tree__line-intersection" viewBox="0 0 36 32">
      <line className="nx-tree__top-line" x1="12" x2="12" y2={topLineEnd} />
      <line className="nx-tree__right-line" x1={rightLineStart} x2="36" y1="20" y2="20" />
      <polygon className="nx-tree__collapse-focus" points="0.5,8.5 0.5,31.5 23.5,31.5 23.5,8.5" />
      { collapsible ?
        <NxFontAwesomeIcon height="14" width="14" x="5" y="13" icon={collapseIcon} /> :
        <line className="nx-tree__bottom-line" x1="12" x2="12" y1="20.5" y2="32" />
      }
    </svg>
  );

  const intersection = collapsible ? (
    <label className="nx-tree__collapse-label">
      <input className="nx-tree__collapse-input" type="checkbox" checked={isOpen} onChange={onToggleCollapse} />
      {intersectionLines}
    </label>
  ) : intersectionLines;

  return (
    <li className={classes} { ...attrs }>
      {intersection}
      <svg className="nx-tree__line-drop" viewBox="0 0 36 1" preserveAspectRatio="none">
        <line x1="12" x2="12" y2="1" />
      </svg>
      {children}
    </li>
  );
}

NxTreeItem.propTypes = itemPropTypes;
