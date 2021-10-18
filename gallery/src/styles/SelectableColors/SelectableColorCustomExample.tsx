/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { selectableColorClasses } from '@sonatype/react-shared-components';

import './SelectableColorCustomExample.scss';

export default function SelectableColorCustomExample() {
  return (
    <>
      { selectableColorClasses.map((colorCls, idx) => (
        <span key={idx} className={`gallery-example-candy ${colorCls}`}>c</span>
      )) }
    </>
  );
}
