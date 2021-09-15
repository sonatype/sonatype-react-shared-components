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
        <NxNumberInput placeholder="Disabled input" value="" isPristine={true} disabled/>
      </div>
      <div>
        <NxNumberInput placeholder="Disabled valid input"
                       value=""
                       isPristine={false}
                       validatable={true}
                       validationErrors={null}
                       disabled/>
      </div>
      <div>
        <NxNumberInput placeholder="Disabled invalid input"
                       value=""
                       isPristine={false}
                       validatable={true}
                       validationErrors={'error'}
                       disabled/>
      </div>
    </>
  );
}
