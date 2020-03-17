/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxTextInputStylesExample = () =>
  <>
    <div className="gallery-example-section">
      <label>
        Plain: <input className="nx-text-input"/>
      </label>
    </div>
    <div className="gallery-example-section">
      <label>
        TextArea: <textarea className="nx-text-input"/>
      </label>
    </div>
    <div className="gallery-example-section">
      <label>
        Long: <input className="nx-text-input nx-text-input--long" />
      </label>
    </div>
    <div className="gallery-example-section">
      <label>
        Disabled: <input className="nx-text-input" disabled />
      </label>
    </div>
  </>;

export default NxTextInputStylesExample;
