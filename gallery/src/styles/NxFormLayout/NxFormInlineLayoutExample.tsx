/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent } from 'react';
import {faPlus, faMinus} from '@fortawesome/free-solid-svg-icons';

import { NxButton, NxFormGroup } from '@sonatype/react-shared-components';
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
        <NxFormGroup label="Username" isRequired>
          <NxStatefulTextInput aria-required={true} validator={validator}/>
        </NxFormGroup>
        <div className="nx-btn-bar">
          <NxButton variant="primary" type="submit">Submit</NxButton>
        </div>
      </div>
      <div className="nx-form-row">
        <NxFormGroup label="Hostname" sublabel="Add a hostname" isRequired>
          <NxStatefulTextInput aria-required={true}
                               validator={validator}/>
        </NxFormGroup>
        <div className="nx-btn-bar">
          <NxButton title="Add" variant="icon-only"><NxFontAwesomeIcon icon={faPlus}/></NxButton>
          <NxButton title="Subtract" variant="icon-only"><NxFontAwesomeIcon icon={faMinus}/></NxButton>
        </div>
      </div>
    </form>
  );
}
