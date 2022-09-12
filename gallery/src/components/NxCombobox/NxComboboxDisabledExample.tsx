/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useCallback, useState } from 'react';
import { filter, map, prepend, range } from 'ramda';
import { NxCombobox, DataItem }
  from '@sonatype/react-shared-components';

const items = prepend(
    { id: 0, displayName: 'Loooooooooooooooooooooooooong Name' },
    map(i => ({ id: i, displayName: `Item ${i}` }), range(1, 101))
);

function search(query: string):DataItem<number, string>[] {
  const lowercaseQuery = query.toLowerCase(),
      matchingItems = filter(i => i.displayName.toLowerCase().includes(lowercaseQuery), items);
  return matchingItems;
}

export default function NxComboboxDisabledExample() {
  const [matches, setMatches] = useState<DataItem<number, string>[]>(items),
      [query, setQuery] = useState('foo');

  const onSearch = useCallback((query: string) => {
    setMatches(search(query));
  }, [query]);

  function onChange(query: string) {
    setQuery(query);
  }

  return (
    <NxCombobox className="nx-combobox--short"
                disabled
                matches={matches}
                value={query}
                onChange={onChange}
                onSearch={onSearch}
                aria-label="combobox" />
  );
}
