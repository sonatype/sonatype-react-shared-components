/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { nxToastPropTypes, NxToastProps } from './types';
import NxCloseButton from '../NxCloseButton/NxCloseButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import {
  faCheckCircle,
  faExclamationCircle,
  faExclamationTriangle,
  faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const toastMap = {
  info: {
    icon: faInfoCircle,
    iconLabel: 'Info',
    class: 'nx-toast--info'
  },
  warning: {
    icon: faExclamationTriangle,
    iconLabel: 'Warning',
    class: 'nx-toast--warning'
  },
  success: {
    icon: faCheckCircle,
    iconLabel: 'Success',
    class: 'nx-toast--success'
  },
  error: {
    icon: faExclamationCircle,
    iconLabel: 'Error',
    class: 'nx-toast--error'
  }
};

const NxToast = (props: NxToastProps) => {
  const { toastId, className, children, type, ...otherProps } = props,
      classes = classnames('nx-toast', className, toastMap[type].class);

  return (
    <div role="alert" { ...otherProps } className={classes} aria-atomic={true}>
      <NxFontAwesomeIcon aria-label={toastMap[type].iconLabel} icon={toastMap[type].icon}/>
      <div className="nx-toast__content">{children}</div>
      <NxCloseButton onClick={() => {}} />
    </div>
  );
};

NxToast.propType = nxToastPropTypes;
export default NxToast;
