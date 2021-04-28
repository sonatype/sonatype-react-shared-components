/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {FunctionComponent, useEffect, useRef} from 'react';
import classnames from 'classnames';

import {CloseHandler, Props, propTypes} from './types';

import './NxModal.scss';

const currentModalCloseHandlers: CloseHandler[] = [];

const NxModal: FunctionComponent<Props> = ({className, onClose, variant, role, ...attrs}) => {
  const modalClasses = classnames('nx-modal', className, {
        'nx-modal--wide': variant === 'wide',
        'nx-modal--narrow': variant === 'narrow'
      }),
      dialogRef = useRef<HTMLDialogElement>(null);

  const modalCloseListener = ({ key }: KeyboardEvent) => {
    const isKeyPressedEscape = key === 'Escape' || key === 'Esc';
    if (isKeyPressedEscape && currentModalCloseHandlers.length) {
      currentModalCloseHandlers[currentModalCloseHandlers.length - 1]();
    }
  };

  const removeCloseHandlerListener = () => {
    const idx = currentModalCloseHandlers.indexOf(onClose);
    currentModalCloseHandlers.splice(idx, 1);

    if (!currentModalCloseHandlers.length) {
      document.removeEventListener('keydown', modalCloseListener);
    }
  };

  useEffect(function() {
    if (!currentModalCloseHandlers.length) {
      document.addEventListener('keydown', modalCloseListener);
    }
    currentModalCloseHandlers.push(onClose);

    return removeCloseHandlerListener;
  }, [onClose]);

  useEffect(function() {
    if (dialogRef.current) {
      const el = dialogRef.current;

      /*
       * This will cause the document to become "blocked by the modal dialog"
       * (https://html.spec.whatwg.org/multipage/interaction.html#blocked-by-a-modal-dialog)
       * meaning that only the modal and its contents are interactable/focusable.
       *
       * Note: not supported in safari, which is why the conditional is here. Once safari gets
       * it together, we should be able to take advantage of the "top layer" functionality built into
       * the browser around modals to simplify the NxModal styling around z-index handling
       */
      if (el.showModal) {
        el.showModal();
      }
    }
  }, []);

  return (
    // Note: role="dialog" should be redundant but I think some screenreaders (ChromeVox) don't know
    // what a <dialog> is.  It makes a difference there.
    <dialog ref={dialogRef} role={role || 'dialog'} aria-modal="true" className="nx-modal-backdrop">
      <div className={modalClasses} {...attrs} />
    </dialog>
  );
};

NxModal.propTypes = propTypes;

export default NxModal;
export {Props} from './types';
