/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, useContext, useEffect, useRef } from 'react';
import classnames from 'classnames';
import NxToastContainerContext from './contexts';

import { nxToastPropTypes, NxToastProps } from './types';
export { NxToastProps };

const NxToast = (props: NxToastProps) => {
  const { onClose, children, className } = props;

  const [isClosing, setIsClosing] = useState(false);

  const toastContainerContextValue = useContext(NxToastContainerContext);

  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.querySelector<HTMLElement>('.nx-btn--close')?.focus();
  }, []);

  const handleClose = () => {
    if (!isClosing) {
      setIsClosing(true);
      toastContainerContextValue.onToastClosing(ref.current);
    }
  };

  const handleAnimationEnd = () => {
    if (isClosing) {
      onClose();
    }
  };

  const validChild = React.Children.only(children),
      childrenWithProps = React.cloneElement(validChild, { onClose: handleClose });

  const classes = classnames('nx-toast', className, {
    'nx-toast--closing': isClosing
  });

  return (
    <div className={classes}
         onAnimationEnd={handleAnimationEnd}
         ref={ref}>
      {childrenWithProps}
    </div>
  );
};

NxToast.propTypes = nxToastPropTypes;
export default NxToast;
