/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCheckbox } from '@sonatype/react-shared-components';
import { NxRadio } from '@sonatype/react-shared-components';
import { NxButton } from '@sonatype/react-shared-components';
import { NxStatefulTextInput } from '@sonatype/react-shared-components';

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  function onSubmit(evt) {
    evt.preventDefaul();
    alert('Submitted!');
  }

  return (
    <form className="nx-form" onSubmit={onSubmit}>
      <div className="nx-form-row">
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
      </div>
      <fieldset className="nx-fieldset">
        <legend className="nx-legend nx-legend--optional"><span className="nx-legend__text">Checkboxes</span></legend>
        <NxCheckbox isChecked={false}>Checkbox 1</NxCheckbox>
        <NxCheckbox isChecked={true}>Checkbox 2</NxCheckbox>
        <NxCheckbox isChecked={false}>Checkbox 3</NxCheckbox>
      </fieldset>
      <fieldset className="nx-fieldset">
        <legend className="nx-legend"><span className="nx-legend__text">Radio buttons</span></legend>
        <NxRadio name="demo1" value="demo1" isChecked={true}>Radio Button 1</NxRadio>
        <NxRadio name="demo2" value="demo2" isChecked={false}>Radio Button 2</NxRadio>
        <NxRadio name="demo3" value="demo3" isChecked={false}>Radio Button 3</NxRadio>
      </fieldset>
      <footer className="nx-form-footer">
        <NxButton>Cancel</NxButton>
        <NxButton variant="primary">Submit</NxButton>
      </footer>
    </form>
  );
}
