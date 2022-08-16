/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef } from 'react';
import NxToastContainerContext from './contexts';

import { NxToastContainerProps, nxToastContainerPropTypes } from './types';

export { Props } from './types';

const NxToastContainer = (props: NxToastContainerProps) => {
  const { children } = props;

  const ref = useRef<HTMLDivElement | null>(null);
  const previousActiveElement = useRef<HTMLElement | null>(null);

  // This implementation has issues when the user clicks on the close button
  // it updates document.activeElement and therefore this cannot get the correct
  // previously active element :(
  const updatePreviousActiveElement = () => {
    if (
      document.activeElement
      && document.activeElement !== document.body
      && !ref.current?.contains(document.activeElement)
    ) {
      previousActiveElement.current = document.activeElement as HTMLElement;
    }
  };

  const focusOnLastToast = () => {
    if (ref.current) {
      const closeBtns = ref.current.querySelectorAll<HTMLButtonElement>('.nx-toast .nx-btn--close');

      const lastCloseBtn = closeBtns[closeBtns.length - 1];

      if (lastCloseBtn) {
        (lastCloseBtn as HTMLElement).focus();
        return true;
      }
    }
    return false;
  };

  const onToastOpening = () => {
    updatePreviousActiveElement();
    focusOnLastToast();
  };

  const onToastClosing = () => {
    updatePreviousActiveElement();

    if (!focusOnLastToast()) {
      (previousActiveElement.current as HTMLElement).focus();
    }
  };

  return (
    <NxToastContainerContext.Provider value={{ onToastOpening, onToastClosing }}>
      <div className="nx-toast__wrapper" ref={ref}>
        <div className="nx-toast__container">
          {children}
        </div>
      </div>
    </NxToastContainerContext.Provider>
  );
};

NxToastContainer.propType = nxToastContainerPropTypes;

export default NxToastContainer;
