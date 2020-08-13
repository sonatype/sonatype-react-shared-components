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

import NxCloseButton from '../NxCloseButton/NxCloseButton';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

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
      const { className, icon, children, onClose, ...otherProps } = props,
          classes = classnames('nx-alert', className);

      return (
        <div { ...otherProps } ref={ref} className={classes}>
          <NxFontAwesomeIcon icon={icon}/>
          <div className="nx-alert__content">{children}</div>
          { onClose && <NxCloseButton onClick={onClose} /> }
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
    function NxErrorAlert(props, ref) {
      const classes = classnames('nx-alert--error', props.className);

      return <NxAlert { ...props } ref={ref} className={classes} icon={faExclamationCircle} />;
    }
);

NxErrorAlert.propTypes = propTypes;

/**
 * Component that renders a standardized information alert.
 * @param children VDOM nodes to be included after the icon.
 */
export const NxInfoAlert = forwardRef<HTMLDivElement, Props>(
    function NxInfoAlert(props, ref) {
      const classes = classnames('nx-alert--info', props.className);

      return <NxAlert { ...props } ref={ref} className={classes} icon={faInfoCircle} />;
    }
);
NxInfoAlert.propTypes = propTypes;

/**
 * Component that renders a standardized warning alert.
 * @param children VDOM nodes to be included after the icon.
 */
export const NxWarningAlert = forwardRef<HTMLDivElement, Props>(
    function NxWarningAlert(props, ref) {
      const classes = classnames('nx-alert--warning', props.className);

      return <NxAlert { ...props } ref={ref} className={classes} icon={faExclamationTriangle} />;
    }
);

NxWarningAlert.propTypes = propTypes;

/**
 * Component that renders a standardized success alert.
 * @param children VDOM nodes to be included after the icon.
 */
export const NxSuccessAlert = forwardRef<HTMLDivElement, Props>(
    function NxSuccessAlert(props, ref) {
      const classes = classnames('nx-alert--success', props.className);

      return <NxAlert { ...props } ref={ref} className={classes} icon={faCheckCircle} />;
    }
);

NxSuccessAlert.propTypes = propTypes;
