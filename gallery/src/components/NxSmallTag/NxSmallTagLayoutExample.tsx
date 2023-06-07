/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxH1, NxP, NxSmallTag } from '@sonatype/react-shared-components';

function NxSmallTagLayoutExample() {
  return (
    <>
      <NxH1>
        <span>H1 Header / 32px / Bold</span>
        <NxSmallTag>Pink</NxSmallTag>
      </NxH1>
      <NxP>Paragraph Text / 16px / Regular<NxSmallTag>Pink</NxSmallTag></NxP>
      <NxP style={{ fontSize: 'var(--nx-font-size-s)' }}>Paragraph Text / 14px / Regular<NxSmallTag>Pink</NxSmallTag></NxP>
      <NxP>
        <span>
          Paragraph of wrapping text - Toffee liquorice sugar plum halvah carrot cake. Powder jelly-o marzipan
          gingerbread ice cream fruitcake apple pie tootsie roll.
        </span>
        <NxSmallTag>Pink</NxSmallTag>
        <span>
          Croissant pastry dragée ice cream danish jelly muffin
        </span>
        <NxSmallTag>Pink</NxSmallTag>
        <span>
          macaroon. Jelly apple pie tiramisu bonbon sweet roll chocolate liquorice lollipop marzipan.
          macaroon. Jelly apple pie tiramisu Donut apple pie candy canes chocolate.
        </span>
      </NxP>
    </>
  );
}

export default NxSmallTagLayoutExample;
