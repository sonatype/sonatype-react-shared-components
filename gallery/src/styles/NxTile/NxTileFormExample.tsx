/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulTextInput, NxFormGroup, NxStatefulForm, NxForm } from '@sonatype/react-shared-components';

export default function NxTileFormExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  function onSubmit() {
    alert('Submitted!');
  }

  return (
    <section className="nx-tile" aria-label="Example of nx-tile with a form">
      <NxStatefulForm onSubmit={onSubmit}>
        <header className="nx-tile-header">
          <hgroup className="nx-tile-header__headings">
            <div className="nx-tile-header__title">
              <h2 className="nx-h2">NX Simple Tile with Form</h2>
            </div>
          </hgroup>
        </header>
        <div className="nx-tile-content">
          <NxForm.RequiredFieldNotice />
          <NxFormGroup label="Username" isRequired>
            <NxStatefulTextInput aria-required={true} validator={validator}/>
          </NxFormGroup>
          <NxFormGroup label="Hostname">
            <NxStatefulTextInput/>
          </NxFormGroup>
        </div>
      </NxStatefulForm>
    </section>
  );
}
