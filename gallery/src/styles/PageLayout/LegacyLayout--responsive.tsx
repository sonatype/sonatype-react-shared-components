/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useState } from 'react';
import {
  NxPageHeader,
  NxP,
  NxPageMain,
  NxTile,
  NxH2,
  NxCheckbox,
  NxRadio,
  NxStatefulTextInput,
  NxButton,
  NxFontAwesomeIcon,
  NxToggle,
  NxFormGroup,
  NxFieldset,
  useToggle,
  NxColorPicker,
  SelectableColor,
  NxInfoAlert,
  NxFormSelect,
  nxFormSelectStateHelpers
} from '@sonatype/react-shared-components';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function LegacyLayoutResponsive() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [selectState, setSelectVal] = nxFormSelectStateHelpers.useNxFormSelectState<string>('');

  function onSelectChange(evt: FormEvent<HTMLSelectElement>) {
    setSelectVal(evt.currentTarget.value);
  }

  const [isRed, toggleRed] = useToggle(false),
      [isBlue, toggleBlue] = useToggle(false),
      [isGreen, toggleGreen] = useToggle(false);

  const [color, setColor] = useState<string | null>(null);

  const [isWarpOn, toggleWarp] = useToggle(false),
      [isKrakenOut, toggleKraken] = useToggle(false),
      [isShapes, toggleShapes] = useToggle(false);

  const [tagColor, setTagColor] = useState<SelectableColor | null>(null);

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    alert('Submitted!');
  }

  const hostnameSublabel = (
    <>
      <NxFontAwesomeIcon icon={faCalendar}/>
      <span id="long-field-sublabel">The field element below is wider than the default.</span>
    </>
  );

  return (
    <>
      <NxPageHeader />
      <div className="nx-page-content">
        <NxPageMain>
          <NxTile>
            <NxTile.Header>
              <NxTile.HeaderTitle>
                <NxH2>This Example's Code</NxH2>
              </NxTile.HeaderTitle>
            </NxTile.Header>
            <NxTile.Content>
              <NxP>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam dictum augue ut mi facilisis commodo.
                Sed quis faucibus metus. Duis volutpat nisl et risus pellentesque euismod. Praesent iaculis ipsum et
                iaculis sollicitudin. Fusce maximus, ex vehicula pellentesque congue, dolor leo auctor velit, at
                rutrum dui erat in lorem. Maecenas nec urna dapibus, porttitor orci nec, congue erat. In mollis, enim
                ac lobortis faucibus, lectus ligula aliquam velit, id imperdiet dui justo nec justo. Nunc porta sapien
                quis nisi ullamcorper auctor.
              </NxP>
              <NxP>
                Sed fringilla dolor in ornare rhoncus. Vestibulum vestibulum ligula et velit porttitor egestas.
                Cras nec congue mi. Integer vel venenatis nisl. Mauris commodo lacus eu eros malesuada mollis. Etiam
                bibendum scelerisque nisi, eu placerat arcu tempus id. Etiam vitae nulla leo. Fusce pretium convallis
                est ac commodo. Morbi scelerisque pharetra dui sed vulputate. Phasellus a neque vitae nibh vulputate
                congue. Nullam mi nunc, vehicula at nisi sit amet, sodales lacinia sem. Quisque egestas efficitur
                volutpat. Nam porttitor varius faucibus. Duis eget ipsum consectetur, ultrices tortor nec, malesuada
                eros. Sed ut ex in turpis posuere aliquet ac id lectus.
              </NxP>
              <NxP>
                Aenean nec feugiat massa. Phasellus aliquet leo quis mauris auctor dictum. Duis quis justo molestie
                magna dapibus interdum. Aliquam semper nibh turpis, bibendum lobortis felis sagittis nec. Cras mollis
                auctor felis eget elementum. Nullam pulvinar aliquam eros id convallis. Donec ultrices sit amet leo sit
                amet eleifend. Fusce eget arcu libero. Morbi eget ornare massa. Ut at ex ut felis ultrices facilisis.
                Suspendisse consequat ante vitae fermentum posuere. Maecenas non mauris ut felis pellentesque
                ullamcorper. Nullam porttitor nec libero at facilisis.
              </NxP>
            </NxTile.Content>
          </NxTile>
          <NxTile>
            <form className="nx-form" onSubmit={onSubmit} aria-label="Default Form Layout Example">
              <NxInfoAlert>This is a sample alert message</NxInfoAlert>
              <NxFormGroup label="A Field to Fill in" isRequired>
                <NxStatefulTextInput aria-required={true} validator={validator}/>
              </NxFormGroup>
              <NxFormGroup label="Username">
                <NxStatefulTextInput />
              </NxFormGroup>
              <NxFormGroup label="Hostname" sublabel={hostnameSublabel}>
                <NxStatefulTextInput className="nx-text-input--long"/>
              </NxFormGroup>
              <NxFieldset label="Colors" isRequired>
                <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
                <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
                <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
              </NxFieldset>
              <NxFieldset label="Primary Color" sublabel="Pick a single color">
                <NxRadio name="color"
                         value="red"
                         onChange={setColor}
                         isChecked={color === 'red'}>
                  Red
                </NxRadio>
                <NxRadio name="color"
                         value="purple"
                         onChange={setColor}
                         isChecked={color === 'purple'}>
                  Purple
                </NxRadio>
                <NxRadio name="color" value="green" onChange={setColor} isChecked={color === 'green'}>
                  Green
                </NxRadio>
                <NxRadio name="color" value="blue" onChange={setColor} isChecked={color === 'blue'}>
                  Blue
                </NxRadio>
              </NxFieldset>
              <NxFormGroup label="Select" isRequired>
                <NxFormSelect { ...selectState } onChange={onSelectChange}>
                  <option value="">Select an option</option>
                  <option value="option1">Option 1</option>
                  <option value="option2">Option 2</option>
                  <option value="option3">Option 3</option>
                  <option value="option4">Option 4</option>
                  <option value="option5">Option 5</option>
                </NxFormSelect>
              </NxFormGroup>
              <NxFieldset label="Enable features - this text is extra long to demonstrate wrapping, how much wood would
                                a woodchuck chuck"
                          isRequired>
                <div className="nx-sub-label">
                  In a form layout toggles are laid out in a <code className="nx-code">&lt;fieldset&gt;</code> - this
                  text is extra long to demonstrate wrapping, how much wood would a woodchuck chuck
                </div>
                <NxToggle inputId="subscribe-check" onChange={toggleWarp} isChecked={isWarpOn}>
                  Enable Warp Drive
                </NxToggle>
                <NxToggle inputId="no-label-check" onChange={toggleKraken} isChecked={isKrakenOut}>
                  Release the Kraken!
                </NxToggle>
                <NxToggle inputId="children-check" onChange={toggleShapes} isChecked={isShapes}>
                  Allow shapes
                </NxToggle>
              </NxFieldset>
              <NxFormGroup label="Comments" isRequired>
                <NxStatefulTextInput type="textarea" placeholder="placeholder" aria-required={true}/>
              </NxFormGroup>
              <NxColorPicker label="Tag Color" isRequired value={tagColor} onChange={setTagColor} />
              <dl className="nx-read-only">
                <dt className="nx-read-only__label">
                  This is a read only label that that describes the data that will appear below
                </dt>
                <dd className="nx-read-only__data">
                  Data - found security vulnerability CVE-2020-6230 with severity &lt; 10 (severity = 7.2)
                </dd>
                <dd className="nx-read-only__data">
                  Found security vulnerability CVE-2020-6230 with severity &gt;= 7 (severity = 7.2)
                </dd>
                <dd className="nx-read-only__data">
                  Found security vulnerability CVE-2020-6230 with status 'Open', not 'Not Applicable'
                </dd>
                <dd className="nx-read-only__data">
                  Component does not contain proprietary packages
                </dd>
              </dl>
              <footer className="nx-footer">
                <div className="nx-btn-bar">
                  <NxButton type="button">Cancel</NxButton>
                  <NxButton variant="primary" type="submit">Submit</NxButton>
                </div>
              </footer>
            </form>
          </NxTile>
        </NxPageMain>
      </div>
    </>
  );
}
