/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, useContext, useEffect } from 'react';
import classnames from 'classnames';
import FocusContext from './contexts';

import { nxToastPropTypes, NxToastProps, ToastModel } from './types';

export { ToastModel };

const NxToast = (props: NxToastProps) => {
  const { onClose, children } = props;

  const [isClosing, setIsClosing] = useState(false);

  const focusedToast = useContext(FocusContext);

  useEffect(()=>{
    focusedToast?.onToastClosing();
    return () => { Promise.resolve().then(() => focusedToast?.onToastClosing()); };
  }, []);

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

  const validChild = React.Children.only(children);
  const childrenWithProps = React.isValidElement(children) ?
    React.cloneElement(validChild, { onClose: handleClose }) : null;

  if (!React.isValidElement(children)) {
    throw new TypeError('NxToast only accepts one NxAlert as a valid child element');
  } 

  const classes = classnames('nx-toast', {
    'nx-toast--closing': isClosing
  });

  return (
    <div className={classes}
         onAnimationEnd={handleAnimationEnd}>
      {childrenWithProps}
    </div>
  );
};

NxToast.propTypes = nxToastPropTypes;
export default NxToast;
