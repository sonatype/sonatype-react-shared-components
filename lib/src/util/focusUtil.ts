/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { find, findLast } from 'ramda';

/**
 * A CSS selector which matches all focusable elements
 */
export const FOCUSABLE_ELEMENTS_SELECTOR
  = '[href]:not([disabled]), button:not([disabled]), '
  + 'input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [contenteditable], '
  + 'object, iframe, [tabindex]:not([tabindex="-1"])';

// Exported for testing
export const isVisible = (element: HTMLElement | null) =>
  !!(element && (element.offsetWidth || element.offsetHeight || element.getClientRects().length
  && window.getComputedStyle(element).visibility !== 'hidden'));

const getFocusableElements = (element: HTMLElement) =>
  Array.from(element.querySelectorAll(FOCUSABLE_ELEMENTS_SELECTOR)) as HTMLElement[];

/**
 * @return the first (in DOM order) child of element that is both visible and focusable
 */
export const getFirstVisibleFocusableElement = (element: HTMLElement) =>
  find(isVisible, getFocusableElements(element)) || element;

/**
 * @return the last (in DOM order) child of element that is both visible and focusable
 */
export const getLastVisibleFocusableElement = (element: HTMLElement) =>
  findLast(isVisible, getFocusableElements(element)) || element;
