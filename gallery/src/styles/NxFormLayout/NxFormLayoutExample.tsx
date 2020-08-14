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

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [isRed, setIsRed] = useState(false),
      [isBlue, setIsBlue] = useState(false),
      [isGreen, setIsGreen] = useState(false),
      [isDisabled, setIsDisabled] = useState(false),
      toggleRed = () => setIsRed(!isRed),
      toggleBlue = () => setIsBlue(!isBlue),
      toggleGreen = () => setIsGreen(!isGreen),
      toggleDisabled = () => setIsDisabled(!isDisabled);

  const [color, setColor] = useState<string | null>(null);

  return (
    <form className="nx-form">
      <div className="nx-form-group">
        <label className="nx-label">
          <span className="nx-label__text">Label</span>
          <NxStatefulTextInput/>
        </label>
      </div>
      <div className="nx-form-group">
        <label className="nx-label nx-label--optional">
          <span className="nx-label__text">Label</span>
          <NxStatefulTextInput validator={validator}/>
        </label>
      </div>
      <div className="nx-form-group">
        <label className="nx-label nx-label--optional">
          <span className="nx-label__text">Long field</span>
          <span className="nx-sub-label">This is a sub-label. The field element below is wider than the default.</span>
          <NxStatefulTextInput className="nx-text-input--long"/>
        </label>
      </div>
      <fieldset className="nx-fieldset">
        <legend className="nx-legend">
          <span className="nx-legend__text">
            Checkboxes ({isRed && ' Red'}{isBlue && ' Blue'}{isGreen && ' Green'} )
          </span>
        </legend>
        <NxCheckbox checkboxId="subscribe-check" onChange={toggleRed} isChecked={isRed}>
          Red
        </NxCheckbox>
        <NxCheckbox checkboxId="no-label-check" onChange={toggleBlue} isChecked={isBlue}>Blue</NxCheckbox>
        <NxCheckbox checkboxId="children-check" onChange={toggleGreen} isChecked={isGreen}>
          <svg width="12px" height="12px" viewBox="-1 -1 2 2">
            <circle r="1"/>
          </svg>
          {' '}
          Green - A circle, a perfectly round SVG circle, pleasing to the eye, not too big and not too small, just right
          to appear beside a checkbox and demonstrate ellipsis truncation
        </NxCheckbox>
        <NxCheckbox checkboxId="disabled-check"
                    disabled={true}
                    onChange={toggleDisabled}
                    isChecked={isDisabled}>
          disabled
        </NxCheckbox>
      </fieldset>
      <fieldset className="nx-fieldset">
        <legend className="nx-legend"><span className="nx-legend__text">Radio buttons ( {color} )</span></legend>
        <NxRadio name="color"
                 value="red"
                 onChange={setColor}
                 isChecked={color === 'red'}
                 radioId="color-red">
          Red
        </NxRadio>
        <NxRadio name="color"
                 value="purple"
                 onChange={setColor}
                 isChecked={color === 'purple'}
                 disabled={true}
                 radioId="color-purple">
          Purple (disabled)
        </NxRadio>
        <NxRadio name="color" value="green" onChange={setColor} isChecked={color === 'green'} radioId="color-green">
          <span style={{color: 'green'}}>Green</span>
          {' '}
          <em>(non-text children)</em>
        </NxRadio>
        <NxRadio name="color" value="blue" onChange={setColor} isChecked={color === 'blue'} radioId="color-blue">
          Blue - but a very long and verbose blue that makes for a long label, so long that it should trigger ellipsis
          truncation if I have counted my characters closely enough
        </NxRadio>
      </fieldset>
      <div className="nx-form-group">
        <label className="nx-label">
          <span className="nx-label__text">Textarea</span>
          <NxStatefulTextInput type="textarea" placeholder="placeholder"/>
        </label>
      </div>
      <footer className="nx-form-footer">
        <NxButton>Cancel</NxButton>
        <NxButton variant="primary">Submit</NxButton>
      </footer>
    </form>
  );
}
