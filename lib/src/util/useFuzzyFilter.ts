/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {useMemo, useState} from 'react';
import Fuse from 'fuse.js';

import fuzzyFilter from './fuzzyFilter';

function useFuzzyFilter<T>(input: T[], options: Fuse.IFuseOptions<T>): [T[], string, ((s: string) => void)] {
  const [filterTerm, setFilterTerm] = useState('');

  const output = useMemo(
      () => filterTerm ? fuzzyFilter(input, filterTerm, options) : input,
      [filterTerm, input, options]
  );

  return [output, filterTerm, setFilterTerm];
}

export default useFuzzyFilter;
