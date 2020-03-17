/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as React from 'react';

const NxBtnDefaultExample = () =>
  <>
    <div>
      Some preceding content.  nx-btn-bar ensures that the buttons are spaced appropriately from
      adjacent block elements such as this
    </div>
    <div className="nx-btn-bar">
      <button className="nx-btn">Button</button>
      <span>Some other inline content.</span>
      <button className="nx-btn disabled">Button disabled by class</button>
      <button className="nx-btn" disabled>Button disabled by attribute</button>
    </div>
  </>;

export default NxBtnDefaultExample;
