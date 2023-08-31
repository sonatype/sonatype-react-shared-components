/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxDrawer,
  NxButton,
  NxP,
  NxBackButton,
  NxPageMain,
  NxPageTitle,
  NxH1,
  useToggle
} from '@sonatype/react-shared-components';

export default function NxDrawerExample() {
  const [showDrawerWithDisabledFunctionality, toggleDrawerWithDisabledFunctionality] = useToggle(false);
  const [disabled, toggleDisabled] = useToggle(true);

  return (
    <>
      <header className="nx-global-header">
        <NxBackButton href="#/pages/Drawer" targetPageTitle="Documentation" />
      </header>
      <NxDrawer id="nx-drawer-disabled-functionality"
                open={showDrawerWithDisabledFunctionality}
                onClose={toggleDrawerWithDisabledFunctionality}
                aria-labelledby="simple-drawer-disabled-title"
                closeBtnDisabled={disabled}
                closeBtnTooltip="Please save or revert changes"
                >
        <NxDrawer.Header>
          <NxDrawer.HeaderTitle id="simple-drawer-disabled-title">
            A Simple Drawer With Disabled Functionality
          </NxDrawer.HeaderTitle>
        </NxDrawer.Header>
        <NxDrawer.Content tabIndex={0}>
          <NxP>Drawer state: {disabled ? 'disabled' : 'enabled'}</NxP>
          <NxButton onClick={() => toggleDisabled()}>{disabled ? 'Enable' : 'Disable'} Drawer</NxButton>
          <NxP>
            Powder tiramisu gingerbread I love gummi bears I love. Lollipop gingerbread bonbon chupa chups cookie
            I love dessert cake. <strong>Pie</strong> candy canes liquorice jelly beans sweet roll. Jelly candy donut
            cotton candy halvah. Fruitcake halvah I love cheesecake I love I love. Wafer sweet sweet roll apple
            pie jelly-o cheesecake candy I love.
          </NxP>
        </NxDrawer.Content>
      </NxDrawer>

      <NxPageMain>
        <NxPageTitle>
          <NxH1>Example of Drawer with Disabled Functionality</NxH1>
        </NxPageTitle>
        <NxP>
          Powder tiramisu gingerbread I love gummi bears I love. Lollipop gingerbread bonbon chupa chups cookie
          I love dessert cake. <strong>Pie</strong> candy canes liquorice jelly beans sweet roll. Jelly candy donut
          cotton candy halvah. Fruitcake halvah I love cheesecake I love I love. Wafer sweet sweet roll apple
          pie jelly-o cheesecake candy I love.
        </NxP>

        <NxButton id="nx-drawer-disabled-functionality-button" onClick={toggleDrawerWithDisabledFunctionality}>
          Open Drawer
        </NxButton>
      </NxPageMain>
    </>
  );
}
