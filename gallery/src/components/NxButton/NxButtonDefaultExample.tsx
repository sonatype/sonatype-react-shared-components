/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxButton } from '@sonatype/react-shared-components';

const NxButtonDefaultExample = () =>
  <>
    <div>
      Some preceding content.  nx-btn-bar ensures that the buttons are spaced appropriately from
      adjacent block elements such as this
    </div>
    <div className="nx-btn-bar">
      <NxButton>Button</NxButton>
      <span>Some other inline content.</span>
      <NxButton className="disabled">Button disabled by class</NxButton>
      <NxButton disabled>Button disabled by attribute</NxButton>
    </div>
  </>;

export default NxButtonDefaultExample;
