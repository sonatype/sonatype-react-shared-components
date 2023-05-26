/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { RefObject, useEffect } from 'react';
import { getFirstVisibleFocusableElement, getLastVisibleFocusableElement } from './focusUtil';

const registeredFocusTraps: HTMLElement[] = [];

/**
 * A React hook that sets up a focus trap on the element found within ref. At any given time, only the most-recently
 * created still-existing focus trap is active
 */
export function useFocusTrap<T extends HTMLElement>(ref: RefObject<T>) {
  useEffect(function() {
    if (ref.current) {
      const el = ref.current;

      register(el);

      return () => { unregister(el); };
    }
    else {
      return undefined;
    }
  }, []);
}

/**
 * Register an element as a focus trap, ensuring that other elements on the page (aside from the <body>) are
 * never the active element. At any given time, only the most-recently registered, not-yet-unregistered focus trap
 * is active
 */
export function register(el: HTMLElement) {
  if (!registeredFocusTraps.length) {
    attachListeners();
  }

  registeredFocusTraps.push(el);
  moveFocusToActiveTrap();
}

/**
 * Unregister an element as a focus trap. Focus will no longer be trapped within this element and if there are any
 * other registered focus traps focus will be moved to the most recently added one
 */
export function unregister(el: HTMLElement) {
  const elIndex = registeredFocusTraps.indexOf(el);

  if (elIndex != null) {
    registeredFocusTraps.splice(elIndex, 1);
    moveFocusToActiveTrap();

    if (!registeredFocusTraps.length) {
      removeListeners();
    }
  }
  else {
    throw new TypeError('el cannot be unregistered from FocusTrapManager as it was never registered');
  }
}
function attachListeners() {
  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('focusin', handleFocusIn);
}

function removeListeners() {
  document.removeEventListener('keydown', handleKeyDown);
  document.removeEventListener('focusin', handleFocusIn);
}

function moveFocusToActiveTrap() {
  const el = registeredFocusTraps[registeredFocusTraps.length - 1],
      { activeElement } = document;

  if (el && activeElement !== document.body && !el.contains(activeElement)) {
    getFirstVisibleFocusableElement(el).focus();
  }
}

function handleFocusIn(evt: FocusEvent) {
  const activeTrapEl = registeredFocusTraps[registeredFocusTraps.length - 1],
      target = evt.target as HTMLElement | null,
      relatedTarget = evt.relatedTarget as HTMLElement | null;

  if (activeTrapEl) {
    const departingFocusInTrap = !!(relatedTarget && activeTrapEl.contains(relatedTarget)),
        receivingFocusInTrap = !!(target && activeTrapEl.contains(target)),
        focusIsLeavingTrap = departingFocusInTrap && !receivingFocusInTrap;

    if (focusIsLeavingTrap) {
      moveFocusToActiveTrap();
    }
  }
}

function handleKeyDown(evt: KeyboardEvent) {
  const activeTrapEl = registeredFocusTraps[registeredFocusTraps.length - 1];

  if (activeTrapEl) {
    const focusIsInTrap = activeTrapEl?.contains(document.activeElement);

    // Cycle focus on the first or last focusable item (if exists).
    if (evt.key === 'Tab') {
      const firstFocusableElement = getFirstVisibleFocusableElement(activeTrapEl);
      const lastFocusableElement = getLastVisibleFocusableElement(activeTrapEl);

      if (evt.shiftKey) {
        if (document.activeElement === firstFocusableElement || !focusIsInTrap) {
          lastFocusableElement.focus();
          evt.preventDefault();
        }
      }
      else if (document.activeElement === lastFocusableElement || !focusIsInTrap) {
        firstFocusableElement.focus();
        evt.preventDefault();
      }
    }
  }
}
