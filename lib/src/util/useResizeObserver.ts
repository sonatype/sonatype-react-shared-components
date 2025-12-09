/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { RefObject, ForwardedRef } from 'react';
import { ResizeObserver as polyfill } from '@juggle/resize-observer';
import _useResizeObserver, { UseResizeObserverCallback, UseResizeObserverOptions } from '@react-hook/resize-observer';

/**
 * Wrapper around @react-hook/resize-observer that uses the juggle/resize-observer polyfill if the real implementation
 * is not available. This is necessary for next.js support, where server-side rendering attempts to use
 * `window.ResizeObserver` (and fails) when there is no polyfill specified.
 */
export default function useResizeObserver<T extends Element>(
  target: RefObject<T> | ForwardedRef<T> | T | null,
  callback: UseResizeObserverCallback,
  options?: UseResizeObserverOptions
): ResizeObserver {
  const win = typeof window !== 'undefined' ? window : undefined,
      optionsWithPolyfill = { ...options };

  // if the polyfill is not specified and the real implementation is not available, use the juggle polyfill
  if (!options?.polyfill && !win?.ResizeObserver) {
    optionsWithPolyfill.polyfill = polyfill;
  }

  return _useResizeObserver(target, callback, optionsWithPolyfill);
}
