/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import './BadLineHeightExample.scss';

const BadLineHeightExample = () =>
  <div className="gallery-bad-line-height-example">
    <header>
      <span className="gallery-highlight-background-example">Title Text</span>
      <br/>
      <span className="gallery-highlight-background-example">More Title Text</span>
    </header>
  </div>;

export default BadLineHeightExample;
