/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { omit } from 'ramda';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import { ItemProps } from './types';
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-solid-svg-icons';
import withClass from '../../util/withClass';

export { ItemProps };

import './NxTree.scss';

function Item(props: ItemProps) {
  const { collapsible, className, children, ...otherProps } = props,
      topLineEnd = collapsible ? '20%' : '50%',
      rightLineStart = collapsible ? '80%' : '50%',
      bottomLineStart = collapsible ? '80%' : '50%',

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
    <svg className="nx-tree__line-intersection">
      <line className="nx-tree__top-line" x1="50%" x2="50%" y2={topLineEnd} />
      <line className="nx-tree__right-line" x1={rightLineStart} x2="100%" y1="50%" y2="50%" />
      <line className="nx-tree__bottom-line" x1="50%" x2="50%" y1={bottomLineStart} y2="100%" />
      { collapsible && <NxFontAwesomeIcon height="50%" width="50%" x="25%" y="25%" icon={collapseIcon} /> }
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
      <svg className="nx-tree__line-drop">
        <line x1="50%" x2="50%" y2="100%" />
      </svg>
      {children}
    </li>
  );
}

const NxTree = Object.assign(withClass('ul', 'nx-tree'), {
  Item,
  ItemLabel: withClass('span', 'nx-tree__item-label')
});

export default NxTree;
