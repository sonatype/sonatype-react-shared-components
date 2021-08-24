/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { debounce } from 'debounce';
import { NxSearchDropdown, NxSearchDropdownMatch, NX_SEARCH_DROPDOWN_DEBOUNCE_TIME }
  from '@sonatype/react-shared-components';

export default function NxSearchDropdownErrorExample() {
  const [loading, setLoading] = useState(false),
      [query, setQuery] = useState(''),
      [error, setError] = useState<string | null>(null);

  function onSelect({ displayName }: NxSearchDropdownMatch) {
    alert('Selected ' + displayName);
  }

  // use debounce so that the backend query does not happen until the user has stopped typing for half a second
  const executeQuery = debounce(function executeQuery(query: string) {
    setError(`Error executing query ${query}`);
  }, NX_SEARCH_DROPDOWN_DEBOUNCE_TIME);

  function onChange(query: string) {
    setQuery(query);
    setLoading(true);
    setError(null);

    executeQuery(query);
  }

  return (
    <NxSearchDropdown loading={loading}
                      error={error}
                      matches={[]}
                      searchText={query}
                      doSearch={onChange}
                      onSelect={onSelect} />
  );
}
