/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';

export default () =>
  <>
    <NxP>
      <NxTextLink href="#/pages/Tile">Tile documentation page</NxTextLink>
    </NxP>
    <NxP>
      <NxCode>
        <NxTextLink href="#/pages/Text%20Link">
          NxTextLink inside NxCode
        </NxTextLink>{' '}
      </NxCode>
    </NxP>
    <NxP>
      <NxCode>
        This is an example of{' '}
        <NxTextLink href="#/pages/Text%20Link">
          NxTextLink
        </NxTextLink>{' '}
        with text inside NxCode
      </NxCode>
    </NxP>
    <NxP>
      <NxTextLink href="#/pages/Code">
        <NxCode>
          NxCode inside NxTextLink (Not Recommended)
        </NxCode>
      </NxTextLink>
    </NxP>
    <NxP>
      <NxTextLink href="#/pages/Code">
        This is an example of{' '}
        <NxCode>
          NxCode
        </NxCode>{' '}
        with text inside <NxCode>NxTextLink</NxCode>
      </NxTextLink>
    </NxP>
  </>;
