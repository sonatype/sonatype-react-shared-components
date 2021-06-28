/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {FunctionComponent, useEffect, useRef, useState} from 'react';
import classnames from 'classnames';

import {Props, propTypes} from './types';

import './NxModal.scss';

export const NxModalContext = React.createContext<HTMLDialogElement | null>(null);

const hasNativeModalSupport = !!(window.HTMLDialogElement && window.HTMLDialogElement.prototype.showModal);

const NxModal: FunctionComponent<Props> = ({className, onClose, variant, role, ...attrs}) => {
  const modalClasses = classnames('nx-modal', className, {
        'nx-modal--wide': variant === 'wide',
        'nx-modal--narrow': variant === 'narrow'
      }),
      dialogRef = useRef<HTMLDialogElement>(null),

      // The dialogRef value needs to get passed down in a context. But the context needs to know when the ref
      // value has updated, and refs aren't tracked like state values. So we have to copy the ref value into a state
      // value in order for it to be tracked.
      [dialogRefState, setDialogRefState] = useState<HTMLDialogElement | null>(null);

  useEffect(function() {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    const el = dialogRef.current!;

    setDialogRefState(el);

    /*
     * This will cause the document to become "blocked by the modal dialog"
     * (https://html.spec.whatwg.org/multipage/interaction.html#blocked-by-a-modal-dialog)
     * meaning that only the modal and its contents are interactable/focusable.
     *
     * Note: not supported in safari, which is why the conditional is here. Once safari gets
     * it together, we should be able to take advantage of the "top layer" functionality built into
     * the browser around modals to simplify the NxModal styling around z-index handling
     */
    if (hasNativeModalSupport) {
      el.showModal();
    }
  }, []);

  // listen to the native HTMLDialogElement cancel event which supporting browsers fire when the modal is closed
  // via ESC
  useEffect(function() {
    const dialog = dialogRef.current;

    if (hasNativeModalSupport && dialog) {
      dialog.addEventListener('cancel', onClose);

      return () => { dialog.removeEventListener('cancel', onClose); };
    }
    else {
      return undefined;
    }
  }, [onClose]);

  return (
    // Provide the dialog element to descendants so that tooltips can attach to it instead of the body,
    // which is necessary so that they end up in the top layer rather than behind the modal
    <NxModalContext.Provider value={dialogRefState}>
      {/* Note: role="dialog" should be redundant but I think some screenreaders (ChromeVox) don't know
        * what a <dialog> is.  It makes a difference there.
        */}
      <dialog ref={dialogRef} role={role || 'dialog'} aria-modal="true" className="nx-modal-backdrop">
        <div className={modalClasses} {...attrs} />
      </dialog>
    </NxModalContext.Provider>
  );
};

NxModal.propTypes = propTypes;

export default NxModal;
export {Props} from './types';
