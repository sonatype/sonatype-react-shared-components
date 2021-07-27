/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxListEmpty = () => {
  return (
    <li className="nx-list__item nx-list__item--empty">
      <span className="nx-list__text">This list is empty.</span>
    </li>
  );
};

export default NxListEmpty;
