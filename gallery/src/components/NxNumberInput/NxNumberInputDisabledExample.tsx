/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxNumberInput } from '@sonatype/react-shared-components';

export default function NxNumberInputDisabledExample() {
  return (
    <>
      <div>
        <NxNumberInput placeholder="" value="" isPristine={true} disabled/>
      </div>
      <div>
        <NxNumberInput placeholder=""
                       value="42"
                       isPristine={false}
                       validatable={true}
                       validationErrors={null}
                       disabled/>
      </div>
    </>
  );
}
