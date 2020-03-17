/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxCounterExample = () =>
  <>
    <div className="gallery-counter-example-container"><span>Default</span> <span className="nx-counter">42</span></div>

    <div className="gallery-counter-example-container">
      <span>Active</span> <span className="nx-counter nx-counter--active">2 of 2</span>
    </div>

    <div className="gallery-counter-example-container">
      <span>Text &amp; float right</span><span className="nx-counter nx-pull-right">all time</span>
    </div>

    <div className="gallery-counter-example-container nx-truncate-ellipsis">
      <span className="nx-counter nx-pull-right">all time</span>
      <span>Float right with very long text that causes the ellipsis truncation to come into effect.</span>
    </div>

  </>;

export default NxCounterExample;
