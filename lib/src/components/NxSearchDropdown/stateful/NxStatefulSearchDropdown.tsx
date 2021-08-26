/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useState } from 'react';
import NxSearchDropdown from '../NxSearchDropdown';

import { StatefulProps as Props, statefulPropTypes as propTypes } from '../types';

const NxStatefulSearchDropdown = forwardRef<HTMLDivElement, Props>(function NxStatefulSearchDropdown(
  { defaultSearchText, ...otherProps },
  ref
) {
  const [searchText, setSearchText] = useState(defaultSearchText || '');

  return <NxSearchDropdown { ...{ ref, searchText, ...otherProps } } onSearchTextChange={setSearchText} />;
});

NxStatefulSearchDropdown.propTypes = propTypes;

export default NxStatefulSearchDropdown;
export { Props };
