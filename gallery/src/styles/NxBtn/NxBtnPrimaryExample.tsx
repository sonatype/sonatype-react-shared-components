/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as React from 'react';

const NxBtnPrimaryExample = () =>
  <div className="nx-btn-bar">
    <button className="nx-btn nx-btn--primary">Primary button</button>
    <button className="nx-btn nx-btn--primary disabled">Primary disabled by class</button>
    <button className="nx-btn nx-btn--primary" disabled>Primary disabled by attribute</button>
  </div>;

export default NxBtnPrimaryExample;
