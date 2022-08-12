/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {ReactNode, useState, useRef} from 'react';
import {FocusContext} from './contexts';

// import classNames from 'classnames';
// import {ToastModel} from './types';

// export { Props } from './types';

interface NxToastContainerProps {
  children: ReactNode | null;
  // children: ToastModel[] | null;
}

const NxToastContainer = (props: NxToastContainerProps) => {
  const { children } = props;

  const ref = useRef<HTMLDivElement | null>(null);

  const [prevFocusedEl, setPrevFocusedEl] = useState<Element| null>(null);

  const adjustFocus = () => {
    if (!ref.current?.contains(document.activeElement)) {
      setPrevFocusedEl(document.activeElement);
    }

    if (ref.current) {
      const closeBtns = ref.current.querySelectorAll('.nx-toast .nx-btn--close');
      const lastCloseBtn = closeBtns[closeBtns.length - 1];
      if (lastCloseBtn) {
        (lastCloseBtn as HTMLElement).focus();
      }
      else if (prevFocusedEl) {
        (prevFocusedEl as HTMLElement).focus();
      }
    }
  };

  return (
    <FocusContext.Provider value={{adjustFocus}}>
      <div className="nx-toast__wrapper" ref={ref}>
        {children}
      </div>
    </FocusContext.Provider>
  );
};

// NxToastContainer.propType = nxToastContainerPropTypes;

export default NxToastContainer;
