/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import './BlockLayoutExample.scss';

const BlockLayoutExample = () =>
  <>
    <div className="gallery-block-layout-example with-background">
      <span>Foo</span>
    </div>
    <div className="gallery-block-layout-example">
      <span className="with-background">Foo</span>
    </div>
  </>;


export default BlockLayoutExample;
