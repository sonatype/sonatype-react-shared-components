/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxProgressBar } from '@sonatype/react-shared-components';

export default function NxProgressBarExample() {
  return (
    <>
      <div>
        <NxProgressBar max={50}
                       value={25}
                       variant="inline"
                       showCounter={true}
                       label="This is an example label."
        />
        <NxProgressBar max={50}
                       value={25}
                       variant="small"
                       showCounter={true}
                       label="This is an example label."
        />
        <NxProgressBar value={60}
                       variant="small"
                       showCounter={true}
                       inlineCounter={true}
                       label="This is an example label."
        />
        <NxProgressBar max={50}
                       value={25}
                       label="This is an example label."
        />
        <NxProgressBar value={75}
                       inlineCounter={true}
                       label="This is an example label."
        />
        <NxProgressBar value={25}
                       variant="full"
                       showCounter={true}
                       label="This is an example label."
        />
        <NxProgressBar value={25}
                       variant="full"
                       showCounter={true}
                       inlineCounter={true}
                       label="This is an example label."
        />
      </div>
    </>
  );
}
