/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent } from 'react';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

import { NxButton } from '@sonatype/react-shared-components';
import { NxStatefulTextInput } from '@sonatype/react-shared-components';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

export default function NxFormLayoutExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

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
            <NxStatefulTextInput aria-required={true} validator={validator}/>
          </label>
        </div>
        <div className="nx-btn-bar">
          <NxButton variant="primary" type="submit">Submit</NxButton>
        </div>
      </div>
      <div className="nx-form-row">
        <div className="nx-form-group">
          <label htmlFor="inline-sublabel-field" className="nx-label">
            <span className="nx-label__text">Label</span>
          </label>
          <span id="inline-sublabel-field-sublabel" className="nx-sub-label">This is a sub-label.</span>
          <NxStatefulTextInput id="inline-sublabel-field"
                               aria-describedby="inline-sublabel-field-sublabel"
                               aria-required={true}
                               validator={validator}/>
        </div>
        <div className="nx-btn-bar">
          <NxButton><NxFontAwesomeIcon icon={faPlus}/></NxButton>
          <NxButton><NxFontAwesomeIcon icon={faMinus}/></NxButton>
        </div>
      </div>
    </form>
  );
}
