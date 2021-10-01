/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTextLink, NxP } from '@sonatype/react-shared-components';

export default () =>
  <NxP>
    The quick brown fox
    <NxTextLink external href="https://html.spec.whatwg.org/multipage/">The HTML Standard</NxTextLink>
    jumped over the lazy dog.
  </NxP>;
