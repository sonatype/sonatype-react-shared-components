/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useState, JSXElementConstructor } from 'react';
import NxAlert, { NxSuccessAlert, NxWarningAlert, NxInfoAlert, NxErrorAlert } from '../NxAlert';
import { nxStatefulAlertPropTypes, propTypes } from './types';
import { Props, NxAlertProps } from '../types';

function mkStatefulAlertComponent<T extends Props>(StatelessAlert: JSXElementConstructor<T>) {
  return forwardRef<HTMLDivElement, T>(
    function NxStatefulAlertBase(props, ref) {
      const [isOpen, setIsOpen] = useState<boolean>(true);

      function onClose() {
        setIsOpen(false);
      }

      return isOpen ? <StatelessAlert { ...props } { ...({ ref, onClose }) } /> : null;
    }
  );
}

const NxStatefulAlert = mkStatefulAlertComponent<NxAlertProps>(NxAlert);

NxStatefulAlert.propTypes = nxStatefulAlertPropTypes;
export default NxStatefulAlert;

export const NxStatefulErrorAlert = mkStatefulAlertComponent<Props>(NxErrorAlert);
export const NxStatefulInfoAlert = mkStatefulAlertComponent<Props>(NxInfoAlert);
export const NxStatefulWarningAlert = mkStatefulAlertComponent<Props>(NxWarningAlert);
export const NxStatefulSuccessAlert = mkStatefulAlertComponent<Props>(NxSuccessAlert);

NxStatefulErrorAlert.propTypes = NxStatefulWarningAlert.propTypes = NxStatefulInfoAlert.propTypes =
    NxStatefulSuccessAlert.propTypes = propTypes;
