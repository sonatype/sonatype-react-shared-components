/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FormEvent } from 'react';

import { NxStatefulTextInput, NxButton, NxFormGroup } from '@sonatype/react-shared-components';

export default function NxTileFormExample() {
  function validator(val: string) {
    return val.length ? null : 'Must be non-empty';
  }

  function onSubmit(evt: FormEvent) {
    evt.preventDefault();
    alert('Submitted!');
  }

  return (
    <section className="nx-tile" aria-label="Example of nx-tile with a form">
      <form className="nx-form" onSubmit={onSubmit}>
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">NX Simple Tile with Form</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <NxFormGroup label="Username" isRequired>
            <NxStatefulTextInput aria-required={true} validator={validator}/>
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
      </form>
    </section>
  );
}
