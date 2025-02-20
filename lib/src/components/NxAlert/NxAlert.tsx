/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
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
function NxAlert(props: NxAlertProps) {
  const { className, icon, iconLabel, children, onClose, ...otherProps } = props,
      classes = classnames('nx-alert', className);

  return (
    <div { ...otherProps } className={classes} aria-atomic={true}>
      <NxFontAwesomeIcon aria-label={iconLabel || undefined} aria-hidden={!iconLabel} icon={icon}/>
      <div className="nx-alert__content-wrap">
        <div className="nx-alert__content">{children}</div>
      </div>
      { onClose && <NxCloseButton onClick={onClose} /> }
    </div>
  );
}

NxAlert.propTypes = nxAlertPropTypes;
export default NxAlert;

/**
 * Component that renders a standardized error alert.
 * @param children VDOM nodes to be included after the icon.
 */
export function NxErrorAlert(props: Props) {
  const classes = classnames('nx-alert--error', props.className);

  return <NxAlert role="alert"
                  { ...props }
                  className={classes}
                  icon={faExclamationCircle}
                  iconLabel="Error" />;
}

NxErrorAlert.propTypes = propTypes;

/**
 * Component that renders a standardized information alert.
 * @param children VDOM nodes to be included after the icon.
 */
export function NxInfoAlert(props: Props) {
  const classes = classnames('nx-alert--info', props.className);

  return <NxAlert { ...props } className={classes} icon={faInfoCircle} iconLabel="Info" />;
}

NxInfoAlert.propTypes = propTypes;

/**
 * Component that renders a standardized warning alert.
 * @param children VDOM nodes to be included after the icon.
 */
export function NxWarningAlert(props: Props) {
  const classes = classnames('nx-alert--warning', props.className);

  return <NxAlert { ...props } className={classes} icon={faExclamationTriangle} iconLabel="Warning" />;
}

NxWarningAlert.propTypes = propTypes;

/**
 * Component that renders a standardized success alert.
 * @param children VDOM nodes to be included after the icon.
 */
export function NxSuccessAlert(props: Props) {
  const classes = classnames('nx-alert--success', props.className);

  return <NxAlert role="status"
                  { ...props }
                  className={classes}
                  icon={faCheckCircle}
                  iconLabel="Success" />;
}

NxSuccessAlert.propTypes = propTypes;
