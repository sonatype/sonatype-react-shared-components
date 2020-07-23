/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { faCheckCircle, faExclamationTriangle, faExclamationCircle, faInfoCircle }
  from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { ensureElement } from '../../util/reactUtil';

import { Props, propTypes, NxAlertProps, nxAlertPropTypes} from './types';
export { Props, propTypes, NxAlertProps, nxAlertPropTypes } from './types';

/**
 * Base component that renders a standardized alert.
 * @param children VDOM nodes to be included after the icon.
 * @param className CSS class names to apply to the rendered component.
 * @param icon FontAwesome icon data to render
 */
const NxAlert = forwardRef<HTMLDivElement, NxAlertProps>(
    function NxAlert(props, ref) {
      const { className, icon, children, ...otherProps } = props,
          classes = classnames('nx-alert', className);

      return (
        <div role="alert" { ...otherProps } ref={ref} className={classes}>
          { icon && <NxFontAwesomeIcon icon={icon}/> }
          { ensureElement(children) }
        </div>
      );
    }
);

NxAlert.propTypes = nxAlertPropTypes;
export default NxAlert;

/**
 * Component that renders a standardized error alert.
 * @param children VDOM nodes to be included after the icon.
 */
export const NxErrorAlert = forwardRef<HTMLDivElement, Props>(
    function NxErrorAlert({children, ...props}, ref) {
      const classes = classnames('nx-alert--error', props.className);

      return (
        <NxAlert {...props} className={classes} ref={ref}>
          <NxFontAwesomeIcon icon={faExclamationCircle} aria-label="Error"/>
          {children}
        </NxAlert>
      );
    }
);

NxErrorAlert.propTypes = propTypes;

/**
 * Component that renders a standardized information alert.
 * @param children VDOM nodes to be included after the icon.
 */
export const NxInfoAlert = forwardRef<HTMLDivElement, Props>(
    function NxInfoAlert({children, ...props}, ref) {
      const classes = classnames('nx-alert--info', props.className);

      return (
        <NxAlert { ...props } ref={ref} className={classes}>
          <NxFontAwesomeIcon icon={faInfoCircle} aria-label="Information" />
          {children}
        </NxAlert>
      );
    }
);
NxInfoAlert.propTypes = propTypes;

/**
 * Component that renders a standardized warning alert.
 * @param children VDOM nodes to be included after the icon.
 */
export const NxWarningAlert = forwardRef<HTMLDivElement, Props>(
    function NxWarningAlert({children, ...props}, ref) {
      const classes = classnames('nx-alert--warning', props.className);

      return (
        <NxAlert {...props} ref={ref} className={classes}>
          <NxFontAwesomeIcon icon={faExclamationTriangle} aria-label="Warning" />
          {children}
        </NxAlert>
      );
    }
);

NxWarningAlert.propTypes = propTypes;

/**
 * Component that renders a standardized success alert.
 * @param children VDOM nodes to be included after the icon.
 */
export const NxSuccessAlert = forwardRef<HTMLDivElement, Props>(
    function NxSuccessAlert({children, ...props}, ref) {
      const classes = classnames('nx-alert--success', props.className);

      return (
        <NxAlert {...props} ref={ref} className={classes}>
          <NxFontAwesomeIcon icon={faCheckCircle} aria-label="Success" />
          {children}
        </NxAlert>
      );
    }
);

NxSuccessAlert.propTypes = propTypes;
