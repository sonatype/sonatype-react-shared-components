/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useRef, useContext, useEffect } from 'react';
import classnames from 'classnames';

import { nxToastPropTypes, NxToastProps } from './types';
import NxCloseButton from '../NxCloseButton/NxCloseButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import ToastContext from './contexts';
import { toastTypeMap } from './toastTypeMapping';

const NxToast = (props: NxToastProps) => {
  const { toastId, className, message, type, ...otherProps } = props,
      toastClass = toastTypeMap[type].class,
      toastIcon = toastTypeMap[type].icon,
      toastIconLabel = toastTypeMap[type].iconLabel,
      classes = classnames('nx-toast', className, toastClass),
      toastContext = useContext(ToastContext),
      closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (closeBtnRef.current) {
      closeBtnRef.current.focus();
    }
  }, []);

  return (
    <div role="alert" { ...otherProps } className={classes} aria-atomic={true}>
      <NxFontAwesomeIcon aria-label={toastIconLabel} icon={toastIcon}/>
      <div className="nx-toast__content">{message}</div>
      <NxCloseButton ref={closeBtnRef} onClick={() => toastContext?.removeToast(toastId)} />
    </div>
  );
};

NxToast.propType = nxToastPropTypes;
export default NxToast;
