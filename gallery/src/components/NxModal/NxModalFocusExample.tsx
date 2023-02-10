/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxModal, NxWarningAlert, NxButton, NxTextInput } from '@sonatype/react-shared-components';

export default function NxModalFocusExample() {
  const [showModal, setShowModal] = useState(false);
  const modalCloseHandler = () => setShowModal(false);

  return (
    <>
      <NxButton onClick={() => setShowModal(true)}>Alert in content</NxButton>

      { showModal &&
        <NxModal id="nx-modal-alert-example"
                 role="alertdialog"
                 onCancel={modalCloseHandler}
                 aria-label="Example NxModal with NxAlert">
          <NxButton>Focusable Element</NxButton>
          <NxTextInput />

        </NxModal>
      }
    </>
  );
}
