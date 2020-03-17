/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxContainerHelpersExample = () =>
  <div className="gallery-container-example">
    <div className="gallery-container-example__child">Foo</div>
    <div className="gallery-container-example__child gallery-container-example__child--container-horizontal">
      <span className="gallery-container-example__inline-child">Bar</span>
      <span className="gallery-container-example__inline-child">Baz</span>
    </div>
  </div>;

export default NxContainerHelpersExample;
