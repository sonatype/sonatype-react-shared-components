/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulAccordion, NxAccordion } from '@sonatype/react-shared-components';

export default () =>
  <NxStatefulAccordion defaultOpen={true}>
    <NxAccordion.Header>
      <h3 className="nx-accordion__header-title">Foo</h3>
    </NxAccordion.Header>
    <p>Foo Bar Baz</p>
  </NxStatefulAccordion>;
