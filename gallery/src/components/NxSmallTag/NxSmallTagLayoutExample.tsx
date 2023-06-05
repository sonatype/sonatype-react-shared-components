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
      <NxH1>H1 Header / 32px / Bold<NxSmallTag>Pink</NxSmallTag></NxH1>
      <NxP>Paragraph Text / 16px / Regular<NxSmallTag>Pink</NxSmallTag></NxP>
      <NxP className="small-font-size">Paragraph Text / 14px / Regular<NxSmallTag>Pink</NxSmallTag></NxP>
      <NxP>Paragraph of wrapping text - Toffee liquorice sugar plum halvah carrot cake. Powder jelly-o marzipan
        gingerbread ice cream fruitcake apple pie tootsie roll.<NxSmallTag>Pink</NxSmallTag>Croissant pastry
        dragée ice cream danish jelly muffin <NxSmallTag>Pink</NxSmallTag>macaroon. Jelly apple pie tiramisu
        bonbon sweet roll chocolate liquorice lollipop marzipan. Donut apple pie candy canes chocolate.
      </NxP>
    </>
  );
}

export default NxSmallTagLayoutExample;
