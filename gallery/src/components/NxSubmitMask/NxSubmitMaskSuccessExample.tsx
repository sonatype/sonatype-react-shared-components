/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { KeyboardEvent, useState } from 'react';
import { NxSubmitMask, NxButton } from '@sonatype/react-shared-components';

export default function NxSubmitMaskSuccessExample() {
  const [maskVisible, setMaskVisible] = useState(false);

  function handleKeyUp(evt: KeyboardEvent) {
    if (evt.key === 'Escape') {
      setMaskVisible(false);
    }
  }

  return (
    <div onKeyUp={handleKeyUp} className="gallery-submit-mask-area">
      <NxButton onClick={setMaskVisible.bind(null, true)}>Click here to create a NxSubmitMask</NxButton>
      { maskVisible && <NxSubmitMask success/> }
    </div>
  );
}
