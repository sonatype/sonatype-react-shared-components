/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useState } from 'react';

import { NxCheckbox, NxRadio, NxStatefulTextInput, NxButton, NxFontAwesomeIcon, NxToggle, NxFormGroup }
  from '@sonatype/react-shared-components';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [selectVal, setSelectVal] = useState('');

  function onSelectChange(evt: FormEvent<HTMLSelectElement>) {
    setSelectVal(evt.currentTarget.value);
  }

  const [isRed, setIsRed] = useState(false),
      [isBlue, setIsBlue] = useState(false),
      [isGreen, setIsGreen] = useState(false),
      toggleRed = () => setIsRed(!isRed),
      toggleBlue = () => setIsBlue(!isBlue),
      toggleGreen = () => setIsGreen(!isGreen);

  const [color, setColor] = useState<string | null>(null);

  const [isWarpOn, setIsWarpOn] = useState(false),
      [isKrakenOut, setIsKrakenOut] = useState(false),
      [isShapes, setIsShapes] = useState(false),
      toggleWarp = () => setIsWarpOn(!isWarpOn),
      toggleKraken = () => setIsKrakenOut(!isKrakenOut),
      toggleShapes = () => setIsShapes(!isShapes);

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
    <form className="nx-form" onSubmit={onSubmit}>
      <NxFormGroup label="A Field to Fill in" isRequired>
        <NxStatefulTextInput aria-required={true} validator={validator}/>
      </NxFormGroup>
      <NxFormGroup label="Username">
        <NxStatefulTextInput />
      </NxFormGroup>
      <NxFormGroup label="Hostname" sublabel={hostnameSublabel}>
        <NxStatefulTextInput className="nx-text-input--long"/>
      </NxFormGroup>
      <fieldset className="nx-fieldset">
        <legend className="nx-legend">
          <span className="nx-legend__text">Colors</span>
        </legend>
        <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
        <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
        <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
      </fieldset>
      <fieldset className="nx-fieldset">
        <legend className="nx-legend nx-legend--optional">
          <span className="nx-legend__text">Primary Color</span>
        </legend>
        <div className="nx-sub-label">Pick a single color</div>
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
      </fieldset>
      <NxFormGroup label="Select" isRequired>
        <select className="nx-form-select" value={selectVal} onChange={onSelectChange}>
          <option value="">Select an option</option>
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
          <option value="option4">Option 4</option>
          <option value="option5">Option 5</option>
        </select>
      </NxFormGroup>
      <fieldset className="nx-fieldset">
        <legend className="nx-legend">
          <span className="nx-legend__text">
            Enable features
          </span>
        </legend>
        <div className="nx-sub-label">
          In a form layout toggles are laid out in a <code className="nx-code">&lt;fieldset&gt;</code>
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
      </fieldset>
      <NxFormGroup label="Comments" isRequired>
        <NxStatefulTextInput type="textarea" placeholder="placeholder" aria-required={true}/>
      </NxFormGroup>
      <footer className="nx-footer">
        <div className="nx-btn-bar">
          <NxButton type="button">Cancel</NxButton>
          <NxButton variant="primary" type="submit">Submit</NxButton>
        </div>
      </footer>
    </form>
  );
}
