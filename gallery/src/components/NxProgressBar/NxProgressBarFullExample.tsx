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
        Examples of 0% Progress:
        <NxProgressBar value={0}
                       variant="full"
                       label="0 of 10 cats fed."
        />
        <NxProgressBar value={0}
                       variant="full"
                       inlineCounter={true}
                       label="0 of 10 cats fed."
        />
      </div>
      <div>
        Examples of 50% Progress:
        <NxProgressBar value={50}
                       variant="full"
                       label="5 of 10 cats fed."
        />
        <NxProgressBar value={5}
                       max={10}
                       variant="full"
                       inlineCounter={true}
                       label="5 of 10 cats fed."
        />
      </div>
      <div>
        Examples of 100% Progress (Success):
        <NxProgressBar value={100}
                       variant="full"
                       label="10 of 10 cats fed."
                       labelSuccess="All cats fed!"
        />
        <NxProgressBar value={100}
                       variant="full"
                       label="10 of 10 cats fed."
                       labelSuccess="All cats fed!"
                       inlineCounter={true}
        />
      </div>
      <div>
        Examples of error state:
        <NxProgressBar value={60}
                       variant="full"
                       label="6 of 10 cats fed."
                       labelError="Something went wrong!"
        />
        <NxProgressBar value={50}
                       variant="full"
                       label="5 of 10 cats fed."
                       labelError="Something went wrong!"
                       inlineCounter={true}
        />
      </div>
    </>
  );
}
