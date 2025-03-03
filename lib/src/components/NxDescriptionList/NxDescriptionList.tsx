/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef } from 'react';
import useMergedRef from '@react-hook/merged-ref';
import classnames from 'classnames';

import withClass from '../../util/withClass';
import useEmptyComponent from '../../util/useEmptyComponent';

import NxDescriptionListButtonItem from './NxDescriptionListButtonItem';
import NxDescriptionListLinkItem from './NxDescriptionListLinkItem';

import { Props, propTypes } from './types';
import { ensureRef } from '../../util/reactUtil';

export { Props, ButtonItemProps, LinkItemProps } from './types';

export default function NxDescriptionList({ ref: externalRef, emptyMessage, className, ...otherProps }: Props) {
  const emptyChildRef = useRef<HTMLLIElement>(null),
      listRef = useRef<HTMLElement>(null),
      ref = useMergedRef(ensureRef(externalRef), listRef),
      isEmpty = useEmptyComponent(listRef, emptyChildRef);

  const emptyList = (
    <ul ref={ref} className={classnames(className, 'nx-list')} { ...otherProps }>
      <li ref={emptyChildRef} className="nx-list__item nx-list__item--empty">
        <span className="nx-list__text">
          {emptyMessage || 'This list is empty.'}
        </span>
      </li>
    </ul>
  );

  return isEmpty ? emptyList :
    <dl ref={ref} className={classnames(className, 'nx-list', 'nx-list--description-list')} { ...otherProps } />;
}

NxDescriptionList.propTypes = propTypes;
NxDescriptionList.Item = withClass('div', 'nx-list__item');
NxDescriptionList.Term = withClass('dt', 'nx-list__term');
NxDescriptionList.Description = withClass('dd', 'nx-list__description');
NxDescriptionList.ButtonItem = NxDescriptionListButtonItem;
NxDescriptionList.LinkItem = NxDescriptionListLinkItem;
