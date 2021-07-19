/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {FunctionComponent, KeyboardEvent, useEffect, useRef, useState} from 'react';
import classnames from 'classnames';
import { pick, omit } from 'ramda';

import {Props, propTypes} from './types';

import './NxModal.scss';

export const NxModalContext = React.createContext<HTMLDialogElement | null>(null);

const hasNativeModalSupport = !!(window.HTMLDialogElement && window.HTMLDialogElement.prototype.showModal);

const NxModal: FunctionComponent<Props> = ({ className, onClose, onCancel = onClose, variant, role, ...attrs }) => {
  const modalClasses = classnames('nx-modal', className, {
        'nx-modal--wide': variant === 'wide',
        'nx-modal--narrow': variant === 'narrow'
      }),
      dialogRef = useRef<HTMLDialogElement>(null),

      // The dialogRef value needs to get passed down in a context. But the context needs to know when the ref
      // value has updated, and refs aren't tracked like state values. So we have to copy the ref value into a state
      // value in order for it to be tracked.
      [dialogRefState, setDialogRefState] = useState<HTMLDialogElement | null>(null);

  function dialogKeydownListener(evt: KeyboardEvent<HTMLDialogElement>) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      // HACK for backwards compatibility: it is known that some downstream uses of NxModal do not provide
      // the onCancel/onClose handler despite it being required. It is also known that these downstream uses
      // have some logic which globally manages ESC handlers for a variety of things including modals. To keep that
      // working, only stopPropagation if the onCancel callback is defined. If it isn't defined, tenuously assume
      // that the ESC handling is implemented externall and do nothing here.
      if (onCancel) {
        // prevent visibility of the keydown outside of the modal, so that global ESC listeners on the
        // document don't pick it up
        evt.stopPropagation();

        // prevent visibility to manually-registered native event listeners on the document too.
        // NOTE: this only works on listeners added after this one, which is believed to include any
        // registered in useEffect calls on components rendered simultaneously with the modal
        evt.nativeEvent.stopImmediatePropagation();

        if (!hasNativeModalSupport && !evt.defaultPrevented) {
          // emulate cancel-on-esc behavior in browsers which don't do it natively
          onCancel(new Event('cancel', { cancelable: true }));
        }
      }
    }
  }

  useEffect(function() {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    const el = dialogRef.current!,

        // HTML <dialog> elements are supposed to remember what element was focused before they were opened,
        // and restore focus to that element when they are closed. No browsers appear to implement this currently,
        // so we do it ourselves
        previouslyFocusedEl = document.activeElement;

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
    else {
      // without native support we don't trap focus in the modal, but we can at least start it off there
      el.focus();
    }

    return () => {
      if (previouslyFocusedEl && previouslyFocusedEl instanceof HTMLElement) {
        previouslyFocusedEl.focus();
      }
    };
  }, []);

  // listen to the native HTMLDialogElement cancel event which supporting browsers fire when the modal is closed
  // via ESC
  useEffect(function() {
    const dialog = dialogRef.current;

    if (dialog && hasNativeModalSupport) {
      /* eslint-disable @typescript-eslint/no-non-null-assertion */
      dialog.addEventListener('cancel', onCancel!);
      return () => { dialog.removeEventListener('cancel', onCancel!); };
      /* eslint-enable @typescript-eslint/no-non-null-assertion */
    }
    else {
      return undefined;
    }
  }, [onCancel]);

  const ariaLabelAttrNames = ['aria-label', 'aria-labelledby'],
      ariaLabels = pick(ariaLabelAttrNames, attrs),
      attrsWithoutLabels = omit(ariaLabelAttrNames, attrs);

  return (
    // Provide the dialog element to descendants so that tooltips can attach to it instead of the body,
    // which is necessary so that they end up in the top layer rather than behind the modal
    <NxModalContext.Provider value={dialogRefState}>
      {/* Note: role="dialog" should be redundant but I think some screenreaders (ChromeVox) don't know
        * what a <dialog> is.  It makes a difference there.
        *
        * The tabindex is for the sake of browsers which don't support dialog. In those browsers we try to
        * focus the dialog element itself when it opens which can't be done if it doesn't have a tab index
        */}
      <dialog ref={dialogRef}
              role={role || 'dialog'}
              aria-modal="true"
              className="nx-modal-backdrop"
              tabIndex={-1}
              onKeyDown={dialogKeydownListener}
              aria-labelledby={ariaLabels}>
        <div className={modalClasses} {...attrs} />
      </dialog>
    </NxModalContext.Provider>
  );
};

NxModal.propTypes = propTypes;

export default NxModal;
export {Props} from './types';
