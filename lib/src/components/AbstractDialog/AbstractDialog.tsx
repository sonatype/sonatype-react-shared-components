/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {
  forwardRef,
  KeyboardEvent,
  useEffect,
  useRef,
  useState
} from 'react';

import useMergedRef from '@react-hook/merged-ref';

import { Props, DialogContextValue } from './types';

export const DialogContext = React.createContext<DialogContextValue | null>(null);

// Typescript has rather obnoxiously partially removed support for HTMLDialogElement.
// See https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-907490128 and
// https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-968299542 . This even though
// Firefox appears to intend to finally add support in v98. Until TS restores this, we'll have to jump
// through some hoops...
const hasWindow = typeof window !== 'undefined',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dynamicallyTypedWindow = hasWindow && window as any,
    hasNativeModalSupport = !!(hasWindow && dynamicallyTypedWindow.HTMLDialogElement &&
      dynamicallyTypedWindow.HTMLDialogElement.prototype.showModal);

const createCancelEvent = () => new Event('cancel', { cancelable: true });

/**
 * Abstracted Dialog element implementation and behaviors.
 * @param className - A classname string for the dialog element.
 * @param onCancel - A callback function that gets called when the dialog is canceled.
 * @param useNativeCancelOnEscape - If this is set to true, it will attempt to use native dialog element
 *    cancel behavior when escape is pressed. By default this is set to false, which means it uses event.preventDefault
 *    and calls onCancel callback when escape is pressed.
 * @return - Abstracted dialog element.
 */

// propTypes static analysis doesn't work with the way this component is written
/* eslint-disable react/prop-types */
const AbstractDialog = forwardRef<HTMLDialogElement, Props>((props, ref) => {
  const {
    className,
    children,
    onCancel,
    useNativeCancelOnEscape,
    role,
    isModal,
    ...attrs
  } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  // The dialogRef value needs to get passed down in a context. But athe context needs to know when the ref
  // value has updated, and refs aren't tracked like state values. So we have to copy the ref value into a state
  // value in order for it to be tracked.
  const [dialogRefState, setDialogRefState] = useState<HTMLDialogElement | null>(null);

  const mergedRef = useMergedRef(dialogRef, ref);

  function dialogKeydownListener(evt: KeyboardEvent<HTMLDialogElement>) {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      // HACK for backwards compatibility: it is known that some downstream uses of NxModal do not provide
      // the onCancel/onCancel handler despite it being required. It is also known that these downstream uses
      // have some logic which globally manages ESC handlers for a variety of things including modals. To keep that
      // working, only stopPropagation if the onCancel callback is defined. If it isn't defined, tenuously assume
      // that the ESC handling is implemented externall and do nothing here.
      if (onCancel) {
        // prevent visibility of the keydown outside of the dialog, so that global ESC listeners on the
        // document don't pick it up
        evt.stopPropagation();

        // prevent visibility to manually-registered native event listeners on the document too.
        // NOTE: this only works on listeners added after this one, which is believed to include any
        // registered in useEffect calls on components rendered simultaneously with the dialog
        evt.nativeEvent.stopImmediatePropagation();

        if (!evt.defaultPrevented) {
          if (!useNativeCancelOnEscape) {
            //eslint-disable-next-line
            console.log('ABC', evt.preventDefault);

            evt.preventDefault();
            onCancel(createCancelEvent());
          }
          else if (!hasNativeModalSupport) {
            // emulate cancel-on-esc behavior in browsers which don't do it natively
            onCancel(createCancelEvent());
          }
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
     * the browser around modals to simplify the dialog styling around z-index handling
     */

    if (hasNativeModalSupport) {
      if (isModal) {
        // https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-968299542
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (el as any).showModal();
      }
      else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (el as any).show();
      }
    }
    else {
      // without native support we don't trap focus in the dialog, but we can at least start it off there
      el.focus();
    }

    return () => {
      if (previouslyFocusedEl && previouslyFocusedEl instanceof HTMLElement) {
        // The useEffect cleanup executes while the dialog is still present (in React 16 at least). While the dialog
        // still exists, the document is still "blocked by the modal dialog" so trying to focus elements outside of
        // it won't work. So we have to wait until the next cycle of the event loop when it's gone
        Promise.resolve().then(() => previouslyFocusedEl.focus());
      }
    };
  }, []);

  // listen to the native HTMLDialogElement cancel event which supporting browsers fire when the dialog is closed
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

  const dialogContextValue = {
    dialogEl: dialogRefState
  };

  return (
    // Provide the dialog element to descendants so that tooltips can attach to it instead of the body,
    // which is necessary so that they end up in the top layer rather than behind the modal
    <DialogContext.Provider value={dialogContextValue}>
      {
        /* Note: role="dialog" should be redundant but I think some screenreaders (ChromeVox) don't know
        * what a <dialog> is.  It makes a difference there.
        *
        * The tabindex is for the sake of browsers which don't support dialog. In those browsers we try to
        * focus the dialog element itself when it opens which can't be done if it doesn't have a tab index
        */
      }
      <dialog ref={mergedRef}
              role={role || 'dialog'}
              aria-modal="true"
              onKeyDown={dialogKeydownListener}
              className={className}
              {...attrs}
              tabIndex={-1}>
        {children}
      </dialog>
    </DialogContext.Provider>
  );
});

export default AbstractDialog;
export { Props } from './types';
