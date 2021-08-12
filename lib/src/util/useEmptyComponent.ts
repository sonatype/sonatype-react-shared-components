import { useState, useEffect, useCallback, RefObject } from 'react';
import useMutationObserver from '@rooks/use-mutation-observer';

const mutationObserverConfig = { subtree: false, childList: true, attributes: false, characterData: false };

/**
 * Convenience hook that shows if a component is empty or not.
 * This custom hook implements the useMutationObserver hook to check if there is a change in
 * the parent component's children.
 * @return a boolean if the component is empty.
 * Note: elements within the parent component that are mapped as emptyChildRef are
 * effectively ignored.
 */
const useEmptyComponent = (
  initialValue: boolean,
  parentRef: RefObject<HTMLElement>,
  emptyChildRef: RefObject<HTMLElement>
) => {
  const [isEmpty, setIsEmpty] = useState(initialValue);

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
