/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import Fuse from 'fuse.js';
import { map, prop } from 'ramda';

export default function fuzzyFilter<T>(input: T[], term: string, options: Fuse.IFuseOptions<T>): T[] {
  // fuse.js defaults "shouldSort" option to true, which is counter intuitive and contradicts their usage example
  // fix it by setting shouldSort to false by default
  const normalizedOptions = {
    ...options,
    shouldSort: false,
    ignoreLocation: true
  };

  term = term.trim();
  if (!term) {
    return input;
  }
  return map(prop('item'), new Fuse(input, normalizedOptions).search(term));
}
