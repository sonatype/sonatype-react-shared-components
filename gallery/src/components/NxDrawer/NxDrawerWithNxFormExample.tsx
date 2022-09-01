/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import {
  NxDrawer,
  NxButton,
  NxP,
  NxBackButton,
  NxPageMain,
  NxPageTitle,
  NxH1,
  NxFontAwesomeIcon,
  NxForm,
  NxFormGroup,
  NxFieldset,
  NxCheckbox,
  useToggle,
  NxStatefulTextInput
} from '@sonatype/react-shared-components';

import { faEdit } from '@fortawesome/free-solid-svg-icons';

export default function NxDrawerWithNxFormExample() {
  const [showDrawer, setShowDrawer] = useState(false),
      [showDrawerOverflowing, setShowDrawerOverflowing] = useState(false),
      [isRed, toggleRed] = useToggle(false),
      [isBlue, toggleBlue] = useToggle(false),
      [isGreen, toggleGreen] = useToggle(false);

  return (
    <>
      <header className="nx-global-header">
        <NxBackButton href="#/pages/Drawer" targetPageTitle="Documentation" />
        <div className="nx-global-header__actions">
          <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        </div>
      </header>

      {showDrawer && (
        <NxDrawer id="nx-drawer-with-nx-form"
                  onCancel={() => setShowDrawer(false)}
                  aria-label="Drawer with Form">
          <NxDrawer.Header>
            <NxDrawer.Header.Title>An Example of A Drawer with Form</NxDrawer.Header.Title>
            <NxDrawer.Header.Subtitle>Header Subtitle</NxDrawer.Header.Subtitle>
            <NxDrawer.Header.Description>Header Description</NxDrawer.Header.Description>
          </NxDrawer.Header>

          <NxForm onSubmit={() => setShowDrawer(false)}
                  onCancel={() => setShowDrawer(false)}>
            <NxDrawer.Content>
              <NxFormGroup label="A Field to Fill in" isRequired>
                <NxStatefulTextInput />
              </NxFormGroup>
              <NxFormGroup label="Country" sublabel="Pick your favorite from the list">
                <select className="nx-form-select">
                  <option value="">Pick a Country</option>
                  <option value="USA">USA</option>
                  <option value="GER">Canada</option>
                  <option value="CAN">Germany</option>
                  <option value="COL">Colombia</option>
                </select>
              </NxFormGroup>
              <NxFormGroup label="Hostname">
                <NxStatefulTextInput/>
              </NxFormGroup>
            </NxDrawer.Content>
          </NxForm>
        </NxDrawer>
      )}

      {showDrawerOverflowing && (
      <NxDrawer id="nx-drawer-with-nx-form-overflowing"
                onCancel={() => setShowDrawerOverflowing(false)}
                aria-label="Drawer with Overflowing Form">
        <NxDrawer.Header>
          <NxDrawer.Header.Title>Drawer With A Long Form</NxDrawer.Header.Title>
          <NxDrawer.Header.Subtitle>Header Subtitle</NxDrawer.Header.Subtitle>
          <NxDrawer.Header.Description>Header Description</NxDrawer.Header.Description>
        </NxDrawer.Header>

        <NxForm className="nx-form"
                onSubmit={() => setShowDrawerOverflowing(false)}
                onCancel={() => setShowDrawerOverflowing(false)}>
          <NxDrawer.Content>
            <NxFormGroup label="Username" isRequired>
              <NxStatefulTextInput/>
            </NxFormGroup>
            <NxFormGroup label="Email" isRequired>
              <NxStatefulTextInput/>
            </NxFormGroup>
            <NxFormGroup label="A Field to Fill in" isRequired>
              <NxStatefulTextInput/>
            </NxFormGroup>
            <NxFieldset label="Colors" isRequired>
              <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
              <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
              <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
            </NxFieldset>
            <NxFormGroup label="Comments" isRequired>
              <NxStatefulTextInput type="textarea" placeholder="placeholder" aria-required={true}/>
            </NxFormGroup>
          </NxDrawer.Content>
        </NxForm>
      </NxDrawer>
      )}

      <NxPageMain>
        <NxPageTitle>
          <NxH1>Drawers with Forms Inside</NxH1>
        </NxPageTitle>
        <NxP>
          Dragée pastry soufflé shortbread donut fruitcake. Ice cream tart bear claw I love
          cotton candy marzipan cotton candy cake danish. Pie gingerbread marshmallow bear claw
          halvah tiramisu cotton candy icing topping. Liquorice chupa chups dessert carrot cake
          macaroon wafer. Marshmallow apple pie danish muffin cupcake icing dessert I love lemon
          drops. Cupcake I <em>love</em> candy canes dragée croissant cookie chocolate muffin. Marshmallow
          powder lollipop cotton candy bonbon lollipop liquorice chupa chups jelly-o. Biscuit I
          love marzipan pastry pie ice cream chocolate bar dessert sweet. Cake topping cookie
          chocolate pie cupcake. I love pastry donut croissant macaroon chocolate cake icing macaroon marshmallow.
        </NxP>
        <NxP>
          <NxButton id="nx-drawer-with-nx-form-open-button" onClick={() => setShowDrawer(true)}>
            Open Drawer with Form
          </NxButton>
          <br/>
          <br/>
          <NxButton id="nx-drawer-with-nx-form-overflowing-open-button" onClick={() => setShowDrawerOverflowing(true)}>
            Open Drawer with Overflowing Form
          </NxButton>
        </NxP>
        <NxP>
          Brownie dessert candy wafer macaroon. Marzipan dragée liquorice biscuit icing I love.
          Wafer pastry sweet candy canes pie pie icing <strong>brownie</strong>. Wafer jelly cake bear claw I
          love caramels. Pie jelly-o candy jelly beans icing. Sweet gingerbread pastry jelly bonbon danish icing.
        </NxP>
      </NxPageMain>
    </>
  );
}
