/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, useEffect } from 'react';

import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { NxButton, NxCheckbox, NxFontAwesomeIcon, NxForm, NxRadio, NxStatefulTextInput }
  from '@sonatype/react-shared-components';
import { SUCCESS_VISIBLE_TIME_MS } from '@sonatype/react-shared-components/components/NxSubmitMask/NxSubmitMask';

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  const [isRed, setIsRed] = useState(false),
      [isBlue, setIsBlue] = useState(false),
      [isGreen, setIsGreen] = useState(false),
      [radioColor, setRadioColor] = useState<string | null>(null),
      [loading, setLoading] = useState(true),
      [loadError, setLoadError] = useState<string | null>(null),
      [submitCount, setSubmitCount] = useState(0),
      [submitError, setSubmitError] = useState<string | null>(null),
      [submitMaskState, setSubmitMaskState] = useState<boolean | null>(null),
      toggleRed = () => setIsRed(!isRed),
      toggleBlue = () => setIsBlue(!isBlue),
      toggleGreen = () => setIsGreen(!isGreen);

  const validationError = (isRed || isBlue || isGreen) ? '' : 'Please select at least one checkbox';

  useEffect(function() {
    setTimeout(function() {
      setLoading(false);
      setLoadError('Error loading stuff!');
    }, 5000);
  }, []);

  function doLoad() {
    setLoading(true);
    setLoadError(null);

    setTimeout(function() {
      setLoading(false);
      setLoadError(null);
    }, 3000);
  }

  function onSubmit() {
    setSubmitError(submitCount < 1 ? 'Stuff could not be saved!' : null);
    setSubmitCount(submitCount + 1);
    setSubmitMaskState(false);

    setTimeout(function() {
      setSubmitMaskState(true);

      setTimeout(function() {
        setSubmitMaskState(null);
      }, SUCCESS_VISIBLE_TIME_MS);
    }, 3000);
  }

  return (
    <NxForm loading={loading}
            doLoad={doLoad}
            onSubmit={onSubmit}
            onCancel={() => alert('Cancelled')}
            loadError={loadError}
            submitError={submitError}
            validationError={validationError}
            submitBtnClasses="my-submit-btn"
            submitBtnText="Submit it!"
            submitMaskState={submitMaskState}
            submitMaskMessage="Submitting!"
            submitMaskSuccessMessage="Successfully successful!"
            additionalFooterBtns={
              <NxButton type="button" onClick={() => alert('Clicked that other button')} variant="tertiary">
                That Other Button
              </NxButton>
            }>
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
            <NxFontAwesomeIcon icon={faCalendar}/>
            <span>This is a sub-label. The field element below is wider than the default.</span>
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
                 onChange={setRadioColor}
                 isChecked={radioColor === 'red'}>
          Red
        </NxRadio>
        <NxRadio name="color"
                 value="purple"
                 onChange={setRadioColor}
                 isChecked={radioColor === 'purple'}>
          Purple
        </NxRadio>
        <NxRadio name="color" value="green" onChange={setRadioColor} isChecked={radioColor === 'green'}>
          Green
        </NxRadio>
        <NxRadio name="color" value="blue" onChange={setRadioColor} isChecked={radioColor === 'blue'}>
          Blue
        </NxRadio>
      </fieldset>
      <div className="nx-form-group">
        <label className="nx-label">
          <span className="nx-label__text">Textarea</span>
          <NxStatefulTextInput type="textarea" placeholder="placeholder"/>
        </label>
      </div>
    </NxForm>
  );
}
