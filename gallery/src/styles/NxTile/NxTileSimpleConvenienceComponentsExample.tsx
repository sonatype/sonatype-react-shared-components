/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTile, NxFooter, NxButtonBar, NxButton, NxH2 } from '@sonatype/react-shared-components';

export default function NxTileSimpleConvenienceComponentsExample() {
  return (
    <>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>
              This is a very looong title, maybe too long, a tooltip will show up if you hover this and it goes{' '}
              on and on and on and on and on and on and on and on
            </NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>

        <NxTile.Content>
          Numinous vinyl table meta- augmented reality voodoo god meta- order-flow nano- assassin table order-flow.
          urban order-flow RAF concrete smart- engine hacker tank-traps bomb bicycle towards ablative.
          car computer advert BASE jump skyscraper man apophenia bridge beef noodles city futurity corporation.
          shanty town order-flow numinous tiger-team vinyl sentient garage towards euro-pop
          semiotics numinous long-chain hydrocarbons. Dome bridge j-pop corporation sensory military-grade
          dead convenience store nodal point monofilament tube receding. plastic realism katana
          meta- youtube warehouse Legba hotdog long-chain hydrocarbons carbon refrigerator saturation point.
        </NxTile.Content>
        <NxFooter>
          <NxButtonBar>
            <NxButton>Footer Button</NxButton>
          </NxButtonBar>
        </NxFooter>
      </NxTile>
    </>
  );
}
