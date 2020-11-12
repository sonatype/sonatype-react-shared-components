/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent, useState } from 'react';

import { NxCheckbox } from '@sonatype/react-shared-components';
import { NxRadio } from '@sonatype/react-shared-components';
import { NxButton } from '@sonatype/react-shared-components';
import { NxStatefulTextInput } from '@sonatype/react-shared-components';
import { NxInfoAlert } from '@sonatype/react-shared-components';

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [isOption1, setIsOption1] = useState(false),
      [isOption2, setIsOption2] = useState(false),
      [isOption3, setIsOption3] = useState(false),
      [isOption4, setIsOption4] = useState(false),
      [isOption5, setIsOption5] = useState(false),
      setOption1 = () => setIsOption1(!isOption1),
      setOption2 = () => setIsOption2(!isOption2),
      setOption3 = () => setIsOption3(!isOption3),
      setOption4 = () => setIsOption4(!isOption4),
      setOption5 = () => setIsOption5(!isOption5);

  const [isRed, setIsRed] = useState(false),
      [isBlue, setIsBlue] = useState(false),
      [isGreen, setIsGreen] = useState(false),
      toggleRed = () => setIsRed(!isRed),
      toggleBlue = () => setIsBlue(!isBlue),
      toggleGreen = () => setIsGreen(!isGreen);

  const [color, setColor] = useState<string | null>(null);

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    alert('Submitted!');
  }

  return (
    <form className="nx-form" onSubmit={onSubmit}>
      <div className="nx-form-row">
        <div className="nx-form-group">
          <label className="nx-label">
            <span className="nx-label__text">Label</span>
            <NxStatefulTextInput validator={validator}/>
          </label>
        </div>
        <div className="nx-form-group">
          <label className="nx-label nx-label--optional">
            <span className="nx-label__text">Label</span>
            <NxStatefulTextInput/>
          </label>
        </div>
      </div>
      <div className="nx-form-row">
        <div className="nx-form-group">
          <label className="nx-label nx-label--optional">
            <span className="nx-label__text">Label</span>
            <NxStatefulTextInput/>
          </label>
        </div>
        <div className="nx-form-group">
          <label className="nx-label">
            <span className="nx-label__text">Label</span>
            <select className="nx-form-select">
              <option onChange={setOption1}>Option 1</option>
              <option onChange={setOption2}>Option 2</option>
              <option onChange={setOption3}>Option 3</option>
              <option onChange={setOption4}>Option 4</option>
              <option onChange={setOption5}>Option 5</option>
            </select>
          </label>
        </div>
      </div>
      <fieldset className="nx-fieldset">
        <legend className="nx-legend">
          <span className="nx-legend__text">
            Checkboxes
          </span>
        </legend>
        <NxCheckbox onChange={toggleRed} isChecked={isRed}>Red</NxCheckbox>
        <NxCheckbox onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
        <NxCheckbox onChange={toggleGreen} isChecked={isGreen}>Green</NxCheckbox>
      </fieldset>
      <fieldset className="nx-fieldset">
        <legend className="nx-legend"><span className="nx-legend__text">Radio buttons</span></legend>
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
      <footer className="nx-footer">
        <NxInfoAlert>This is a sample alert message</NxInfoAlert>
        <div className="nx-btn-bar">
          <NxButton type="button">Cancel</NxButton>
          <NxButton variant="primary" type="submit">Submit</NxButton>
        </div>
      </footer>
    </form>
  );
}
