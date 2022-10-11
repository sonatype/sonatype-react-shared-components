/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulTextInput, NxButton, NxFormGroup, NxStatefulForm, NxForm } from '@sonatype/react-shared-components';

export default function NxTileFormExample() {
  function onSubmit() {
    alert('Submitted!');
  }

  return (
    <section className="nx-tile" aria-label="Example of nx-tile with a form with error">
      <NxStatefulForm onSubmit={onSubmit} doLoad={() => {}} loadError="404 Not Found">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">NX Simple Tile with Form</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <NxForm.RequiredFieldNotice />
          <NxFormGroup label="Username" isRequired>
            <NxStatefulTextInput aria-required={true}/>
          </NxFormGroup>
          <NxFormGroup label="Hostname">
            <NxStatefulTextInput/>
          </NxFormGroup>
        </div>
        <footer className="nx-footer">
          <div className="nx-btn-bar">
            <NxButton variant="primary">Footer Button</NxButton>
          </div>
        </footer>
      </NxStatefulForm>
    </section>
  );
}
