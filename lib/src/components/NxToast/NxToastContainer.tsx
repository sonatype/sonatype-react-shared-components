/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useEffect } from 'react';
import NxToastContainerContext from './contexts';
import {reject, last} from 'ramda';

import { NxToastContainerProps, nxToastContainerPropTypes } from './types';

import './NxToast.scss';

export { Props } from './types';

const NxToastContainer = (props: NxToastContainerProps) => {
  const { children } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const activeElementNotToast = useRef<HTMLElement | null>(null);

  const onToastClosing = (toast:HTMLElement | null) => {
    const closeBtns = Array.from(ref.current?.querySelectorAll<HTMLButtonElement>('.nx-toast .nx-btn--close') ?? []);
    const filteredButtons = toast ? reject((btn:Node)=> toast.contains(btn), Array.from(closeBtns)) : closeBtns;
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
      activeElementNotToast.current = document.activeElement as HTMLElement;
    }
  };

  useEffect(()=> {
    document.addEventListener('focusin', updateActiveElementNotToast);
    return () => document.removeEventListener('focusin', updateActiveElementNotToast);
  }, []);

  return (
    <NxToastContainerContext.Provider value={{ onToastClosing }}>
      <div className="nx-toast__wrapper" ref={ref}>
        <div className="nx-toast__container" >
          {children}
        </div>
      </div>
    </NxToastContainerContext.Provider>
  );
};

NxToastContainer.propType = nxToastContainerPropTypes;

export default NxToastContainer;
