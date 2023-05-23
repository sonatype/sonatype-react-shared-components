/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useRef } from 'react';
import classnames from 'classnames';
import useMergedRef from '@react-hook/merged-ref';
import withClass from '../../util/withClass';

import NxLoadingSpinner from '../NxLoadingSpinner/NxLoadingSpinner';
import NxLoadError from '../NxLoadError/NxLoadError';

import NxDescriptionList from '../NxDescriptionList/NxDescriptionList';
import NxListButtonItem from './NxListButtonItem';
import NxListLinkItem from './NxListLinkItem';
import { NxListProps, nxListPropTypes } from './types';
import useEmptyComponent from '../../util/useEmptyComponent';

/* eslint-disable react/prop-types */
const NxList = Object.assign(
    forwardRef<HTMLUListElement, NxListProps>(function NxList(props: NxListProps, externalRef) {
      const {className, children, bulleted, emptyMessage, isLoading = false, error, retryHandler, ...attrs} = props;
      const classNames = classnames(className, 'nx-list', {'nx-list--bulleted': bulleted});
      const ulRef = useRef<HTMLUListElement>(null);
      const emptyListRef = useRef<HTMLLIElement>(null);
      const ref = useMergedRef(ulRef, externalRef);
      const isEmpty = useEmptyComponent(ulRef, emptyListRef);

      if (isEmpty && !isLoading && !error) {
        if (!emptyMessage) {
          console.warn('emptyMessage is required when no list items are to be rendered');
        }
      }

      const nxListEmpty = (
        <li ref={emptyListRef} className="nx-list__item nx-list__item--empty">
          <span className="nx-list__text">
            {emptyMessage || 'This list is empty.'}
          </span>
        </li>
      );

      const nxListLoading = (
        <li className="nx-list__item">
          <NxLoadingSpinner />
        </li>
      );

      const nxListError = (
        <li className="nx-list__item nx-list__item--error">
          <NxLoadError error={error} retryHandler={retryHandler} />
        </li>
      );

      return (
        <ul ref={ref} className={classNames} {...attrs}>
          {isLoading && nxListLoading}
          {!!error && !isLoading && nxListError}
          {!isLoading && !error && children}
          {!(isLoading || error) && isEmpty && nxListEmpty}
        </ul>
      );
    }),
    {
      Item: withClass('li', 'nx-list__item'),
      Text: withClass('span', 'nx-list__text'),
      Subtext: withClass('span', 'nx-list__subtext'),
      Actions: withClass('div', 'nx-list__actions'),
      ButtonItem: NxListButtonItem,
      LinkItem: NxListLinkItem,

      // deprecated aliases
      Description: NxDescriptionList.Description,
      DescriptionTerm: NxDescriptionList.Term
    }
);

NxList.propTypes = nxListPropTypes;

export default NxList;
export {NxListProps, nxListPropTypes} from './types';
