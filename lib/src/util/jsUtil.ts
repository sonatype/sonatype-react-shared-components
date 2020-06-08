/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { curry, lensPath, set } from 'ramda';

/**
 * [String] -> a -> b -> b
 * Set nested property using path
 */
export const pathSet = curry((path, value, target) => set(lensPath(path), value, target));

/**
 * If an array is passed in, returns an equivalent array.
 * If a value that is not an array is passed in, returns an array containing only that value
 */
export function ensureArray<T>(items: T | T[]): T[] {
  const typedEmptyArray: T[] = [];

  return typedEmptyArray.concat(items);
}
