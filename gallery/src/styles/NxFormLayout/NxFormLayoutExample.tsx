/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxCheckbox } from '@sonatype/react-shared-components';
import { NxRadio } from '@sonatype/react-shared-components';
import { NxStatefulTextInput } from '@sonatype/react-shared-components';
import { NxButton } from '@sonatype/react-shared-components';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [isRed, setIsRed] = useState(false),
      [isBlue, setIsBlue] = useState(false),
      [isGreen, setIsGreen] = useState(false),
      toggleRed = () => setIsRed(!isRed),
      toggleBlue = () => setIsBlue(!isBlue),
      toggleGreen = () => setIsGreen(!isGreen);

  const [color, setColor] = useState<string | null>(null);

  return (
    <form className="nx-form">
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
      <div className="nx-form-group">
        <label className="nx-label nx-label--optional">
          <span className="nx-label__text">Long field</span>
          <span className="nx-sub-label">
            <NxFontAwesomeIcon icon={faCalendar}/> This is a sub-label. The field element below is wider than the
            default.
          </span>
          <NxStatefulTextInput className="nx-text-input--long"/>
        </label>
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
        <legend className="nx-legend nx-legend--optional">
          <span className="nx-legend__text">Radio buttons</span>
          <span className="nx-sub-label">Sub-label</span>
        </legend>
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
      <div className="nx-form-group">
        <label className="nx-label">
          <span className="nx-label__text">Textarea</span>
          <NxStatefulTextInput type="textarea" placeholder="placeholder"/>
        </label>
      </div>
      <footer className="nx-form-footer">
        <div className="nx-btn-bar">
          <NxButton type="button">Cancel</NxButton>
          <NxButton variant="primary" type="button">Submit</NxButton>
        </div>
      </footer>
    </form>
  );
}
