/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useRef } from 'react';
import { join, map } from 'ramda';

/**
 * Returns a string with the given prefix followed by 64 bits worth of randomness. Suitable for use
 * as an autogenerated DOM id
 */
export function getUniqueId(prefix: string) {
  const typedArray = new Uint8Array(new ArrayBuffer(8));

  crypto.getRandomValues(typedArray);

  const randomHexString = join('', map(x => x.toString(16), Array.from(typedArray)));

  return `${prefix}-${randomHexString}`;
}

/**
 * A react hook for getting a random auto-generated id and keeping it consistent across re-renders.
 * If the explicitId parameter is used, that is the id that is returned instead of computing a random
 * one. That parameter is for support of the common pattern where an auto-generated id is only
 * desired if the user of a component didn't specify an explicit one.
 *
 * There might sometimes be cases where you only need the id conditionally - for instance if it is on an element
 * that appears conditionally. Since react hook calls themselves should never be conditional, what you can do
 * instead is conditionally pass a dummy value as the explicitId. For instance,
 * if the result of this hook will go unused, you can pass the empty string as the explicitId to avoid the
 * computation expense of a random id.
 */
export function useUniqueId(prefix: string, explicitId?: string) {
  const idBox = useRef<string>();

  if (explicitId != null) {
    return explicitId;
  }
  else {
    if (idBox.current == null) {
      idBox.current = getUniqueId(prefix);
    }

    return idBox.current;
  }
}
