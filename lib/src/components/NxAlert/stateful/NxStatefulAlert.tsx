/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, JSXElementConstructor } from 'react';
import NxAlert, { NxSuccessAlert, NxWarningAlert, NxInfoAlert, NxErrorAlert } from '../NxAlert';
import { nxStatefulAlertPropTypes, propTypes } from './types';
import { Props } from '../types';
import useToggle from '../../../util/useToggle';

function mkStatefulAlertComponent<T extends Props>(StatelessAlert: JSXElementConstructor<T>) {
  return forwardRef<HTMLDivElement, T>(
      function NxStatefulAlertBase(props, ref) {
        const [isOpen, onClose] = useToggle(true);

        return isOpen ? <StatelessAlert { ...({ ...props, ref, onClose } as T ) } /> : null;
      }
  );
}

const NxStatefulAlert = mkStatefulAlertComponent(NxAlert);

NxStatefulAlert.propTypes = nxStatefulAlertPropTypes;
export default NxStatefulAlert;

export const NxStatefulErrorAlert = mkStatefulAlertComponent(NxErrorAlert);
export const NxStatefulInfoAlert = mkStatefulAlertComponent(NxInfoAlert);
export const NxStatefulWarningAlert = mkStatefulAlertComponent(NxWarningAlert);
export const NxStatefulSuccessAlert = mkStatefulAlertComponent(NxSuccessAlert);

NxStatefulErrorAlert.propTypes = NxStatefulWarningAlert.propTypes = NxStatefulInfoAlert.propTypes =
    NxStatefulSuccessAlert.propTypes = propTypes;
