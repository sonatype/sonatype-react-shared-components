/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useState, useEffect, useCallback, RefObject } from 'react';
import useMutationObserver from '@rooks/use-mutation-observer';

const mutationObserverConfig = { subtree: false, childList: true, attributes: false, characterData: false };

/**
 * Convenience hook that shows if a component is empty or not.
 * This custom hook implements the useMutationObserver hook to check if there is a change in
 * the parent component's children.
 * @param parentRef the ref to the parent element that the mutationObserver will observe for children changes.
 * @param emptyChildRef a ref to the element rendered into the list when it is empty, typically a message telling the
 * the user that there is no data. This is needed so that the hook can avoid counting the empty message itself when
 * determining component emptiness.
 * @return a boolean if the component is empty.
 */

const useEmptyComponent = (
  parentRef: RefObject<HTMLElement | null>,
  emptyChildRef: RefObject<HTMLElement | null>
) => {
  const [isEmpty, setIsEmpty] = useState(false);

  // use useCallback to memoize updateIsEmpty so that useMutationObserver isn't detaching
  // and re-attaching the MutationObserver on every single render
  const updateIsEmpty = useCallback(function updateIsEmpty() {
    if (parentRef.current) {
      const children = parentRef.current.children;

      setIsEmpty(!children.length || (children.length === 1 && children.item(0) === emptyChildRef.current));
    }
  }, []);
  useEffect(updateIsEmpty, []);
  useMutationObserver(parentRef, updateIsEmpty, mutationObserverConfig);

  return isEmpty;
};
export default useEmptyComponent;
