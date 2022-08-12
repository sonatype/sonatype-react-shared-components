/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactNode, ReactElement, useState, useContext, useEffect } from 'react';
import classnames from 'classnames';
import { FocusContext } from './contexts';

// import { nxToastPropTypes, NxToastProps } from './types';
// import NxCloseButton from '../NxCloseButton/NxCloseButton';
// import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

// import ToastContext from './contexts';
// import { toastTypeMap } from './toastTypeMapping';

export interface NxToastProps {
  onClose: () => void;
  toastId: number;
  children: ReactElement;
  previousFocusedElement?: ReactNode;
}

const NxToast = (props: NxToastProps) => {
  const { onClose, children } = props;

  const [isClosing, setIsClosing] = useState(false);

  const focusedToast = useContext(FocusContext);

  useEffect(()=>{
    focusedToast?.adjustFocus();
  }, []);

  const handleClose = () => {
    if (!isClosing) {
      setIsClosing(true);
    }
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      onClose();
      focusedToast?.adjustFocus();
    }
  };

  // const childrenWithProps = React.Children.map(children, child =>
  //   React.isValidElement(child) ? React.cloneElement(child, { onClose: handleClose }) : child
  // );

  const validChild = React.Children.only(children);
  const childrenWithProps = React.isValidElement(children) ?
    React.cloneElement(validChild, { onClose: handleClose }) : validChild;

  const classes = classnames('nx-toast', {
    'nx-toast--closing': isClosing
  });

  return (
    <div className={classes}
         onAnimationEnd={handleAnimationEnd}
         aria-atomic={true}>
      {childrenWithProps}
    </div>
  );
};

// NxToast.propTypes = nxToastPropTypes;
export default NxToast;
