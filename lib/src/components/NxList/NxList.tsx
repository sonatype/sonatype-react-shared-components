/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import { NxListProps, nxListPropTypes } from './types';
import NxListText from './NxListText';
import NxListSubtext from './NxListSubtext';
import NxListActions from './NxListActions';
import NxListButtonItem from './NxListButtonItem';
import NxListLinkItem from './NxListLinkItem';
import NxListItem from './NxListItem';
import NxListDescriptionTerm from './NxListDescriptionTerm';
import NxListDescription from './NxListDescription';
import { NxH3 } from '../SimpleComponents';
import { splitOutFirst } from '../../util/childUtil';
import { NxLoadError, NxLoadingSpinner } from '../..';
import useMutationObserver from '@rooks/use-mutation-observer';

const mutationObserverConfig = { subtree: false, childList: true, attributes: false, characterData: false };

const NxList = (props: NxListProps) => {
  const {className, children, bulleted, emptyMessage, isLoading = false, error, retryHandler, ...attrs } = props;
  const classNames = classnames(className, 'nx-list', {'nx-list--bulleted': bulleted});
  const [title, otherChildren] = splitOutFirst(NxH3, children);
  const [isEmpty, setIsEmpty] = useState(false);
  const ulRef = useRef<HTMLUListElement>(null);
  const emptyListRef = useRef<HTMLLIElement>(null);

  const updateIsEmpty = useCallback(function updateIsEmpty() {
    if (ulRef.current) {
      const listItems = ulRef.current.children;

      // NxH3 is treated as a 'non-child' as we still would want to show a title for an empty list.
      if (!listItems.length
        || (listItems.length === 1 && listItems.item(0) !== emptyListRef.current)
        || (listItems.length === 2 && (listItems.item(0) !== emptyListRef.current
            && listItems.item(1) === emptyListRef.current)
        )
      ) {
        setIsEmpty(true);
      }
      else {
        setIsEmpty(false);
      }
    }
  }, []);

  useEffect(updateIsEmpty, []);
  useMutationObserver(ulRef, updateIsEmpty, mutationObserverConfig);

  const nxListEmpty = (
    <li ref={emptyListRef} className="nx-list__item nx-list__item--empty">
      <span className="nx-list__text">
        {emptyMessage ? emptyMessage : 'This list is empty.'}
      </span>
    </li>
  );

  const nxListLoading = (
    <li className='nx-list__item'>
      <NxLoadingSpinner />
    </li>
  );

  const nxListError = (
    <li className='nx-list__item nx-list__item--error'>
      <NxLoadError error={error} retryHandler={retryHandler} />
    </li>
  );

  return (
    <ul ref={ulRef} className={classNames} {...attrs}>
      {title}
      {isLoading && nxListLoading}
      {!!error && !isLoading && nxListError}
      {!isLoading && !error && otherChildren}
      {!(isLoading || error) && isEmpty && nxListEmpty}
    </ul>
  );
};

NxList.propTypes = nxListPropTypes;
NxList.Item = NxListItem;
NxList.Text = NxListText;
NxList.Subtext = NxListSubtext;
NxList.Actions = NxListActions;
NxList.ButtonItem = NxListButtonItem;
NxList.LinkItem = NxListLinkItem;
// NxList.Error = NxListError;
// NxList.Loading = NxListLoading;
NxList.DescriptionTerm = NxListDescriptionTerm;
NxList.Description = NxListDescription;

export default NxList;
export {NxListProps, nxListPropTypes} from './types';
