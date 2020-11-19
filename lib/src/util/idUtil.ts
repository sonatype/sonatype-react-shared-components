/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { join, map } from 'ramda';

/**
 * Returns a string with the given prefix followed by 64 bits worth of randomness. Suitable for use
 * as an autogenerated DOM id
 */
export function getRandomId(prefix: string) {
  const buffer = new ArrayBuffer(8),
      typedArray = new Uint8Array(buffer);

  crypto.getRandomValues(typedArray);

  const randomHexString = join('', map(x => x.toString(16), Array.from(typedArray)));

  return `${prefix}-${randomHexString}`;
}
