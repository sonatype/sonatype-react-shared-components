/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxTextInput } from '@sonatype/react-shared-components';

export default function NxTextInputDisabledExample() {
  return (
    <>
      <div>
        <NxTextInput placeholder="Disabled input" value="" isPristine={true} disabled/>
      </div>
      <div>
        <NxTextInput placeholder="Disabled valid input"
                     value=""
                     isPristine={false}
                     validatable={true}
                     validationErrors={null}
                     disabled/>
      </div>
      <div>
        <NxTextInput placeholder="Disabled invalidvalid input"
                     value=""
                     isPristine={false}
                     validatable={true}
                     validationErrors={'error'}
                     disabled/>
      </div>
    </>
  );
};
