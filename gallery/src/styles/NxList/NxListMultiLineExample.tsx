/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxMultiLineList = () =>
  <div className="nx-list">
    <h4 className="nx-list__title">
      List title
    </h4>
    <ul className="nx-list">
      <li className="nx-list__item">
        Item 1
        <p className="nx-list__subtext">This is a second line.</p>
      </li>
      <li className="nx-list__item">
        Item 2
        <p className="nx-list__subtext">
          This is a second line. It includes text that might relate to the top line or might not.
        </p>
      </li>
      <li className="nx-list__item">
        Item 3
        <p className="nx-list__subtext">
          A long line of subtext that wraps. Add <code className="nx-code">.nx-truncate-ellipsis</code>
          to the <code className="nx-code">&lt;p&gt;</code> tag if you don't want the text to wrap.
        </p>
      </li>
    </ul>
  </div>;

export default NxMultiLineList;
