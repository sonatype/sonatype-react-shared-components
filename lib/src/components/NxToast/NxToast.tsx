/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactNode, useState } from 'react';
import classnames from 'classnames';

// import { nxToastPropTypes, NxToastProps } from './types';
// import NxCloseButton from '../NxCloseButton/NxCloseButton';
// import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

// import ToastContext from './contexts';
// import { toastTypeMap } from './toastTypeMapping';

export interface NxToastProps {
  onClose: () => void;
  children: ReactNode;
  previousFocusedElement?: ReactNode;
}

const NxToast = (props: NxToastProps) => {
  const { onClose, children } = props;

  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => {
    if (!isClosing) {
      setIsClosing(true);
    }
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      onClose();
    }
  };

  const childrenWithProps = React.Children.map(children, child =>
    React.isValidElement(child) ? React.cloneElement(child, { onClose: handleClose }) : child
  );

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
