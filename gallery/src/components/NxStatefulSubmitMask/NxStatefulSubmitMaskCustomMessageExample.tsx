/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { NxStatefulSubmitMask, NxButton } from '@sonatype/react-shared-components';

function NxStatefulSubmitMaskCustomMessageExample() {
  const [maskSuccess, setMaskSuccess] = useState<boolean | null>(null);

  function startMask() {
    setMaskSuccess(false);

    // in a real app, this delay would typically be due to a network operation
    setTimeout(setMaskSuccess.bind(null, true), 5000);
  }

  return (
    <div className="gallery-submit-mask-area">
      <NxButton onClick={startMask}>Click here to create a NxStatefulSubmitMask</NxButton>
      { maskSuccess != null && <NxStatefulSubmitMask success={maskSuccess} message="Foo Bar" successMessage="Baz!" /> }
    </div>
  );
}

export default NxStatefulSubmitMaskCustomMessageExample;
