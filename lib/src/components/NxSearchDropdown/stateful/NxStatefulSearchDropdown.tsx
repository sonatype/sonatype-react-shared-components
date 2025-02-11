/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { MouseEvent, useState } from 'react';
import NxSearchDropdown from '../NxSearchDropdown';
import DataItem from '../../../util/DataItem';

import { StatefulProps as Props, statefulPropTypes as propTypes } from '../types';

export default function NxStatefulSearchDropdown<T extends string | number = string>(
  { defaultSearchText, onSelect: onSelectProp, ...otherProps }: Props<T>
) {
  const [searchText, setSearchText] = useState(defaultSearchText || '');

  function onSelect(item: DataItem<T>, evt: MouseEvent<HTMLButtonElement>) {
    setSearchText('');
    onSelectProp(item, evt);
  }

  return <NxSearchDropdown { ...{ searchText, onSelect, ...otherProps } } onSearchTextChange={setSearchText} />;
}

NxStatefulSearchDropdown.propTypes = propTypes;
export { Props };
