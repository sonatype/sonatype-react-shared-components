/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import NxToggle from '../NxToggle';
import { Props, propTypes } from './types';
import useToggle from '../../../util/useToggle';
export { Props } from './types';

export default function NxStatefulToggle({ defaultChecked, onChange, ...otherProps }: Props) {
  const [isChecked, toggleChecked] = useToggle(defaultChecked);

  function changeHandler() {
    const newCheckedStatus = toggleChecked();

    if (onChange) {
      onChange(newCheckedStatus);
    }
  }

  return <NxToggle { ...otherProps } onChange={changeHandler} isChecked={isChecked} />;
}

NxStatefulToggle.propTypes = propTypes;
