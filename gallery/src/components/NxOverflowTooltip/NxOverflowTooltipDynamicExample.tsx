/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxOverflowTooltip, NxTextInput } from '@sonatype/react-shared-components';
import { initialState, userInput } from '@sonatype/react-shared-components/components/NxTextInput/stateHelpers';

export default function NxOverflowTooltipDynamicExample() {
  const [textState, setTextState] = useState(initialState('Supercalfragulisticexpealidocious'));

  function onChange(val: string) {
    setTextState(userInput(null, val));
  }

  return (
    <>
      <NxTextInput className="nx-text-input--long" { ...textState } onChange={onChange} />

      <NxOverflowTooltip>
        <p className="nx-p nx-truncate-ellipsis">{textState.trimmedValue}</p>
      </NxOverflowTooltip>
    </>
  );
}
