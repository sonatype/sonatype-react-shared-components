/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {useState} from 'react';
import Fuse from 'fuse.js';

import fuzzyFilter from './fuzzyFilter';

function useFuzzyFilter<T>(input: T[], options: Fuse.FuseOptions<T>): [T[], string, ((s: string) => void)] {
  const [filterTerm, setFilterTerm] = useState('');

  const output = filterTerm ? fuzzyFilter(input, filterTerm, options) : input;
  return [output, filterTerm, setFilterTerm];
}

export type FuseOptions<T> = Fuse.FuseOptions<T>;

export default useFuzzyFilter;
