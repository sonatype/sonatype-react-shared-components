/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { MouseEvent, useState } from 'react';
import DataItem from '../../../util/DataItem';

import NxSearchTransferList from '../NxSearchTransferList';
import { StatefulProps as Props, statefulPropTypes as propTypes } from '../types';

export { Props };

export default function NxStatefulSearchTransferList<T extends string | number>(props: Props<T>) {
  const { onSearchMatchSelect: onSearchMatchSelectProp, ...otherProps } = props,
      [addedItemsFilter, setAddedItemsFilter] = useState(''),
      [searchText, setSearchText] = useState('');

  function onSearchMatchSelect(item: DataItem<T>, evt: MouseEvent<HTMLButtonElement>) {
    setSearchText('');
    onSearchMatchSelectProp(item, evt);
  }

  return <NxSearchTransferList { ...otherProps }
                               { ...{ addedItemsFilter, searchText, onSearchMatchSelect } }
                               onSearchTextChange={setSearchText}
                               onAddedItemsFilterChange={setAddedItemsFilter} />;
}

NxStatefulSearchTransferList.propTypes = propTypes;
