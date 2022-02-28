/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useEffect, useRef, useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';

/**
 * For management of tab index of potentially-scrollable regions that have no otherwise-focusable
 * content. It is an accessibility rule that every scrollable region must either contain a focusable element,
 * or be a focusable element. For cases where whether something is scrollable depends on the viewport size
 * and/or its content, this hook allows the element to be made focusable only if it is current scrollable
 * @return an object containing the ref to assign to the potentially-scrollable element, and the tabIndex that
 * should be assigned to that element or one of its children
 */
export default function useScrollableTabIndex<E extends HTMLElement>(
  content?: unknown,
  horizontal?: boolean,
  scrollableSelector?: string
) {
  const ref = useRef<E>(null),
      [scrollable, setScrollable] = useState(false);

  function updateScrollable() {
    const codeRegionEl = scrollableSelector ? ref.current?.querySelector(scrollableSelector) : ref.current;

    if (codeRegionEl) {
      const isScrollable = horizontal ?
        codeRegionEl.scrollWidth > codeRegionEl.clientWidth :
        codeRegionEl.scrollHeight > codeRegionEl.clientHeight;

      setScrollable(isScrollable);
    }
  }

  useEffect(updateScrollable, [content]);
  useResizeObserver(ref, updateScrollable);

  return { ref, tabIndex: scrollable ? 0 : -1 };
}
