/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxDefaultList = () =>
  <div className="nx-list">
    <h4 className="nx-list__title">
      List title
    </h4>
    <ul>
      <li className="nx-list__item">
        item 1
      </li>
      <li className="nx-list__item">
        Item 2
      </li>
      <li className="nx-list__item">
        item 3 - this list item should be truncated at the right end edge. youtube weathered network network systemic
        systema claymore mine voodoo god garage monofilament realism order-flow corporation car footage vinyl.
      </li>
    </ul>
  </div>;

export default NxDefaultList;
