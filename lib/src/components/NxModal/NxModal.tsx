/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useRef } from 'react';
import classnames from 'classnames';
import { pick, omit } from 'ramda';
import useMergedRef from '@react-hook/merged-ref';

import withClass from '../../util/withClass';
import AbstractDialog from '../AbstractDialog/AbstractDialog';

import { CloseHandler, Props, propTypes } from './types';

import './NxModal.scss';
import { useFocusTrap } from '../../util/FocusTrapManager';

const _NxModal = forwardRef<HTMLDialogElement, Props>(
    function NxModal({ className, onClose, onCancel = onClose, variant, role, ...attrs }, externalRef) {
      const modalClasses = classnames('nx-modal', className, {
        'nx-modal--wide': variant === 'wide',
        'nx-modal--narrow': variant === 'narrow'
      });

      const ariaLabelAttrNames = ['aria-label', 'aria-labelledby'] as const,
          ariaLabels = pick(ariaLabelAttrNames, attrs),
          attrsWithoutLabels = omit(ariaLabelAttrNames, attrs),
          internalRef = useRef<HTMLDialogElement>(null),
          ref = useMergedRef(internalRef, externalRef);

      useFocusTrap(internalRef);

      return (
        <AbstractDialog ref={ref}
                        role={role}
                        className="nx-modal-backdrop"
                        tabIndex={-1}
                        onCancel={onCancel as CloseHandler}
                        isModal={true}
                        {...ariaLabels}>
          <div className={modalClasses} {...attrsWithoutLabels}/>
        </AbstractDialog>
      );
    }
);

const NxModal = Object.assign(_NxModal, {
  propTypes,
  Header: withClass('header', 'nx-modal-header'),
  Content: withClass('div', 'nx-modal-content')
});

export default NxModal;
export {Props} from './types';
