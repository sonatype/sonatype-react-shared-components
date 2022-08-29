/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useEffect } from 'react';
import NxToastContainerContext from './contexts';
import { reject, last } from 'ramda';

import { NxToastContainerProps, nxToastContainerPropTypes } from './types';
export { NxToastContainerProps };

import './NxToast.scss';

const NxToastContainer = (props: NxToastContainerProps) => {
  const { children } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  // When all toasts are closed, the focus should return to the last element that received focus that was not
  //a toast element.
  const activeElementNotToast = useRef<HTMLElement | null>(null);

  const onToastClosing = (toast:HTMLElement | null) => {
    const closeBtns = Array.from(ref.current?.querySelectorAll<HTMLButtonElement>('.nx-toast .nx-btn--close') ?? []);
    const filteredButtons = toast ? reject((btn:Node)=> toast.contains(btn), closeBtns) : closeBtns;
    const lastCloseBtn = last(filteredButtons);

    if (lastCloseBtn) {
      lastCloseBtn.focus();
    }
    else {
      activeElementNotToast.current?.focus();
    }
  };

  const updateActiveElementNotToast = () => {
    const currentFocusedElement = document.activeElement as HTMLElement;

    if (!ref.current?.contains(currentFocusedElement)) {
      activeElementNotToast.current = currentFocusedElement;
    }
  };

  useEffect(()=> {
    document.addEventListener('focusin', updateActiveElementNotToast);
    return () => document.removeEventListener('focusin', updateActiveElementNotToast);
  }, []);

  return (
    <NxToastContainerContext.Provider value={{ onToastClosing }}>
      <div className="nx-toast-container" ref={ref}>
        {children}
      </div>
    </NxToastContainerContext.Provider>
  );
};

NxToastContainer.propType = nxToastContainerPropTypes;

export default NxToastContainer;
