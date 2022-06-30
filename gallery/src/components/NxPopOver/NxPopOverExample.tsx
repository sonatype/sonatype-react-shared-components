/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {useState} from 'react';

import {NxPopOver, NxPopOverHeader, NxButton} from '@sonatype/react-shared-components';

export default function NxPopOverExample() {
  const [showPopOver, setShowPopOver] = useState(false);
  const popOverCloseHandler = () => setShowPopOver(false);

  return (
    <div className="gallery-pop-over-example">
      <NxButton onClick={() => setShowPopOver(true)}>Open Pop Over</NxButton>
      {showPopOver && (
        <NxPopOver onClose={popOverCloseHandler}>
          <NxPopOverHeader title="Example Pop Over"/>
        </NxPopOver>
      )}
    </div>
  );
}
