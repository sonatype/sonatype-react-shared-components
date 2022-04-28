/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxProgressBar } from '@sonatype/react-shared-components';

export default function NxProgressBarStepsExample() {
  return (
    <>
      <div>
        Example of 0% progress:
        <NxProgressBar value={0} max={5} showSteps label="0 of 5 cats fed." />
        <NxProgressBar value={0} max={10} showSteps variant="full" label="0 of 10 cats fed." />
      </div>
      <div>
        Examples of partial progress:
        <NxProgressBar value={2} max={5} showSteps label="2 of 5 cats fed." />
        <NxProgressBar value={5} max={10} showSteps variant="full" label="5 of 10 cats fed." />
      </div>
      <div>
        Examples of 100% progress (Success):
        <NxProgressBar value={5} max={5} showSteps label="5 of 5 cats fed." labelSuccess="All cats fed!" />
        <NxProgressBar value={10}
                       max={10}
                       showSteps
                       variant="full"
                       label="10 of 10 cats fed."
                       labelSuccess="All cats fed!" />
      </div>
      <div>
        Examples of error progress:
        <NxProgressBar value={4} showSteps max={5} label="4 of 5 cats fed." labelError="Something went wrong!" />
        <NxProgressBar value={6}
                       showSteps
                       max={10}
                       variant="full"
                       label="6 of 10 cats fed."
                       labelError="Something went wrong!" />
      </div>
    </>
  );
}
