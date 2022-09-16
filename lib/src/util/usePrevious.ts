/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useEffect, useRef } from "react";

export default function usePrevious<T>(currentValue: T) {
  const currentValueRef = useRef<T>(),
      previousValueRef = useRef<T>();

  useEffect(function() {
    if (currentValue !== currentValueRef.current) {
      previousValueRef.current = currentValueRef.current;
    }

    currentValueRef.current = currentValue;
  }, [currentValue]);

  return currentValueRef.current === currentValue ? previousValueRef.current : currentValueRef.current;
}
