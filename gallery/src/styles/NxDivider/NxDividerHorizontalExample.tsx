/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxP, NxDivider, NxCode } from '@sonatype/react-shared-components';
import React from 'react';

export default function NxDividerHorizontalExample() {
  return (
    <>
      <NxP>This is a simple paragraph</NxP>
      <NxDivider/>
      <NxP>
        This example simply demonstrates how to use the <NxCode>NxDivider</NxCode> to render
        simple horizontal dividers.
      </NxP>
      <NxDivider />
      <NxP>
        It is a long established fact that a reader will be distracted by the readable content of a page when
        looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution
        of letters, as opposed to using 'Content here, content here', making it look like readable English. Many
        desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a
        search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved
        over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
      </NxP>
      <NxDivider />
    </>
  );
}
