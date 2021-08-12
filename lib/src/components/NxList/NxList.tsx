/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import classnames from 'classnames';
import NxListText from './NxListText';
import NxListSubtext from './NxListSubtext';
import NxListActions from './NxListActions';
import NxListButtonItem from './NxListButtonItem';
import NxListLinkItem from './NxListLinkItem';
import NxListItem from './NxListItem';
import { NxH3 } from '../SimpleComponents';
import { splitOutFirst } from '../../util/childUtil';
import { NxListProps, NxLoadError, NxLoadingSpinner, withClass } from '../..';
import useMutationObserver from '@rooks/use-mutation-observer';
import { NxListComponent, nxListPropTypes } from './types';
import useMergedRef from '@react-hook/merged-ref';

const mutationObserverConfig = { subtree: false, childList: true, attributes: false, characterData: false };

const NxList = forwardRef<HTMLUListElement, NxListProps>((props: NxListProps, externalRef) => {
  const {className, children, bulleted, emptyMessage, isLoading = false, error, retryHandler, ...attrs } = props;
  const classNames = classnames(className, 'nx-list', {'nx-list--bulleted': bulleted});
  const [title, otherChildren] = splitOutFirst(NxH3, children);
  const [isEmpty, setIsEmpty] = useState(false);
  const ulRef = useRef<HTMLUListElement | null>(null);
  const emptyListRef = useRef<HTMLLIElement>(null);
  const ref = useMergedRef(ulRef, externalRef);

  const updateIsEmpty = useCallback(function updateIsEmpty() {
    if (ulRef.current) {
      const listItems = ulRef.current.children;

      //If there are no children, simply set isEmpty to true and return.
      if (listItems.length === 0) {
        setIsEmpty(true);
        return;
      }

      //NxH3 is treated as a 'non-child' as we still would want to show a title for an empty list.
      if (!title) {
        setIsEmpty(!listItems.length || (listItems.length === 1 && listItems.item(0) === emptyListRef.current));
      }
      else {
        setIsEmpty((listItems.length === 1 && listItems.item(0)?.tagName === 'H3')
          || (listItems.length === 2 && (listItems.item(0)?.tagName === 'H3'
              && listItems.item(1) === emptyListRef.current))
        );
      }
    }
  }, []);

  useEffect(updateIsEmpty, []);
  useMutationObserver(ulRef, updateIsEmpty, mutationObserverConfig);

  if (isEmpty && !isLoading && !error) {
    if (!emptyMessage) {
      console.warn('emptyMessage is required when no list items are to be rendered');
    }
  }

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

  // Using ref.current in forwardRef see:
  // https://stackoverflow.com/questions/62238716/using-ref-current-in-react-forwardref
  return (
    <ul ref={ref}
        className={classNames}
        {...attrs}
    >
      {title}
      {isLoading && nxListLoading}
      {!!error && !isLoading && nxListError}
      {!isLoading && !error && otherChildren}
      {!(isLoading || error) && isEmpty && nxListEmpty}
    </ul>
  );
}) as NxListComponent;

NxList.propTypes = nxListPropTypes;
NxList.Item = NxListItem;
NxList.Text = NxListText;
NxList.Subtext = NxListSubtext;
NxList.Actions = NxListActions;
NxList.ButtonItem = NxListButtonItem;
NxList.LinkItem = NxListLinkItem;
NxList.DescriptionTerm = withClass('dt', 'nx-list__term');
NxList.Description = withClass('dd', 'nx-list__description');

export default NxList;
export {NxListProps, nxListPropTypes} from './types';
