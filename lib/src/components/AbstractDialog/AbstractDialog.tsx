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
import { find, findLast } from 'ramda';
import useMergedRef from '@react-hook/merged-ref';

import { Props, DialogContextValue } from './types';

const FOCUSABLE_ELEMENTS_SELECTOR
  = '[href]:not([disabled]), button:not([disabled]), '
  + 'input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [contenteditable], '
  + 'object, iframe, [tabindex]:not([tabindex="-1"])';

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

// Exported for testing
export const isVisible = (element: HTMLElement | null) =>
  !!(element && (element.offsetWidth || element.offsetHeight || element.getClientRects().length
  && window.getComputedStyle(element).visibility !== 'hidden'));

const getFocusableElements = (element: HTMLElement) =>
  Array.from(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)) as HTMLElement[];

const getFirstVisibleFocusableElement = (element: HTMLElement) =>
  find(isVisible)(getFocusableElements(element));

const getLastVisibleFocusableElement = (element: HTMLElement) =>
  findLast(isVisible)(getFocusableElements(element));

/**
 * Abstracted Dialog element implementation and behaviors.
 * @param className - A classname string for the dialog element.
 * @param onCancel - A callback function that gets called when the dialog is canceled.
 * @return - Abstracted dialog element.
 */

// propTypes static analysis doesn't work with the way this component is written
/* eslint-disable react/prop-types */
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

  const mergedRef = useMergedRef(dialogRef, ref);

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
      const firstVisibleFocusableElement = getFirstVisibleFocusableElement(dialogEl);
      if (firstVisibleFocusableElement) {
        firstVisibleFocusableElement.focus();
      }

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

  // Focus Trapping
  useEffect(() => {
    const keydownListener = (event: KeyboardEvent) => {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const dialogEl = dialogRef.current!;

      // Don't manage tab cycling when the focus is not within the dialog
      // so that there is no key nav conflict when another modal is open.
      if (!dialogEl.contains(document.activeElement)) {
        return;
      }

      // When tab key is pressed
      // cycles focus on first or last focusable item (if exists)
      // Do the same if focus is not IN the dialog to ensure focus is trapped within.
      if (event.key === 'Tab') {
        const firstFocusableElement = getFirstVisibleFocusableElement(dialogEl);
        const lastFocusableElement = getLastVisibleFocusableElement(dialogEl);
        const activeFocusIsNullOrDialog
          = [document.body, dialogEl, null].includes(document.activeElement as HTMLElement);
        const activeFocusIsInDialog = !activeFocusIsNullOrDialog && dialogEl.contains(document.activeElement);

        if (!activeFocusIsInDialog) {
          event.preventDefault();
        }

        if (event.shiftKey) {
          if (
            (!activeFocusIsInDialog || document.activeElement === firstFocusableElement)
            && lastFocusableElement
          ) {
            lastFocusableElement.focus();
            event.preventDefault();
          }
        }
        else {
          if (
            (!activeFocusIsInDialog || document.activeElement === lastFocusableElement)
            && firstFocusableElement
          ) {
            firstFocusableElement.focus();
            event.preventDefault();
          }
        }
      }
    };

    // Prevent leak when focus goes out of the dialog modal.
    const handleFocusOut = (event: FocusEvent) => {
      const dialogEl = dialogRef.current;
      if (dialogEl) {
        const receivingFocusIsInsideDialog
          = !!(event.relatedTarget && (event.relatedTarget as HTMLElement).closest('dialog[aria-modal="true"][open]'));
        if (!receivingFocusIsInsideDialog) {
          const firstFocusableElement = getFirstVisibleFocusableElement(dialogEl);
          if (firstFocusableElement) {
            firstFocusableElement.focus();
          }
        }
      }
    };

    if (isModal) {
      document.addEventListener('keydown', keydownListener);
      document.addEventListener('focusout', handleFocusOut);
    }

    return () => {
      document.removeEventListener('keydown', keydownListener);
      document.removeEventListener('focusout', handleFocusOut);
    };
  }, [isModal]);

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
