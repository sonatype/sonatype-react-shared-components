/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {
  forwardRef,
  useEffect,
  useRef,
  useState
} from 'react';
//import useMergedRef from '@react-hook/merged-ref';

import { Props, DialogContextValue } from './types';
import { getFirstVisibleFocusableElement } from '../../util/focusUtil';

// https://html.spec.whatwg.org/multipage/interactive-elements.html#the-dialog-element
export const DialogContext = React.createContext<DialogContextValue | null>(null);

// Typescript has rather obnoxiously partially removed support for HTMLDialogElement.
// See https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-907490128 and
// https://github.com/microsoft/TypeScript-DOM-lib-generator/issues/1029#issuecomment-968299542 . This even though
// Firefox appears to intend to finally add support in v98. Until TS restores this, we'll have to jump
// through some hoops...
const hasWindow = typeof window !== 'undefined',
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    dynamicallyTypedWindow = hasWindow && window as any,
    hasNativeModalSupport = !!(hasWindow && dynamicallyTypedWindow.HTMLDialogElement
      && dynamicallyTypedWindow.HTMLDialogElement.prototype.show);

const createCancelEvent = () => new Event('cancel', { cancelable: true });

/**
 * Abstracted Dialog element implementation and behaviors.
 * @param className - A classname string for the dialog element.
 * @param onCancel - A callback function that gets called when the dialog is canceled.
 * @return - Abstracted dialog element.
 */

const AbstractDialog = forwardRef<HTMLDialogElement, Props>((props, ref) => {
  const {
    className,
    children,
    onCancel,
    role,
    isModal,
    open,
    ...attrs
  } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  // The dialogRef value needs to get passed down in a context. But the context needs to know when the ref
  // value has updated, and refs aren't tracked like state values. So we have to copy the ref value into a state
  // value in order for it to be tracked.
  const [dialogRefState, setDialogRefState] = useState<HTMLDialogElement | null>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  //const mergedRef = useMergedRef(dialogRef, ref);
  const mergedRef = ref;

  // Handle open and close logic.
  useEffect(function() {
    /* eslint-disable-next-line @typescript-eslint/no-non-null-assertion */
    const dialogEl = dialogRef.current!;
    setDialogRefState(dialogEl);

    // Open Dialog
    if (open == null || open) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;

      // Use dialog method
      // We do not use showModal because it moves
      // the dialog to top-level and it overlaps
      // popovers generated from password managers.
      if (hasNativeModalSupport) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (dialogEl as any).show();
      }
      else { // Use attribute
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (dialogEl as any).open = true;
      }

      // Modal autofocus is not implemented because of:
      // https://stackoverflow.com/questions/60216787/react-autofocus-attribute-is-not-rendered
      getFirstVisibleFocusableElement(dialogEl).focus();

      // Focus on previously focused element.
      return () => {
        if (previouslyFocusedElementRef.current && previouslyFocusedElementRef.current instanceof HTMLElement) {
          // The useEffect cleanup executes while the dialog is still present (in React 16 at least). While the dialog
          // still exists, the document is still "blocked by the modal dialog" so trying to focus elements outside of
          // it won't work. So we have to wait until the next cycle of the event loop when it's gone
          Promise.resolve().then(() => {
            if (previouslyFocusedElementRef.current) {
              previouslyFocusedElementRef.current.focus();
              previouslyFocusedElementRef.current = null;
            }
          });
        }
      };
    }
    // Close Dialog
    else if (open === false) {
      if (hasNativeModalSupport) { // Use dialog method
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (dialogEl as any).close();
      }
      else { // Use open attribute
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (dialogEl as any).open = false;
      }
      return undefined;
    }
    else {
      return undefined;
    }
  }, [open, isModal]);

  // Listen to the native HTMLDialogElement cancel event
  // which supporting browsers fire when the dialog is closed via ESC
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

  function dialogKeydownListener(event: React.KeyboardEvent<HTMLDialogElement>) {
    if (event.key === 'Escape' || event.key === 'Esc') {
      // HACK for backwards compatibility: it is known that some downstream uses of NxModal do not provide
      // the onCancel/onCancel handler despite it being required. It is also known that these downstream uses
      // have some logic which globally manages ESC handlers for a variety of things including modals. To keep that
      // working, only stopPropagation if the onCancel callback is defined. If it isn't defined, tenuously assume
      // that the ESC handling is implemented externall and do nothing here.
      if (onCancel) {
        // prevent visibility of the keydown outside of the dialog, so that global ESC listeners on the
        // document don't pick it up
        event.stopPropagation();

        // prevent visibility to manually-registered native event listeners on the document too.
        // NOTE: this only works on listeners added after this one, which is believed to include any
        // registered in useEffect calls on components rendered simultaneously with the dialog
        event.nativeEvent.stopImmediatePropagation();

        if (!event.defaultPrevented) {
          event.preventDefault();
          onCancel(createCancelEvent());
        }
      }
    }
  }

  const dialogContextValue = {
    dialog: dialogRefState
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
              aria-modal={!!isModal}
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
