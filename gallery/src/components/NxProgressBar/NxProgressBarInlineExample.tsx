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
        Foo{' '}
        <NxProgressBar value={0}
                       variant="inline"
                       label="0 of 10 cats fed."
        />
      </div>
      <div>
        Cat{' '}
        <NxProgressBar value={50}
                       variant="inline"
                       label="5 of 10 cats fed."
        />
      </div>
      <div>
        Success{' '}
        <NxProgressBar value={100}
                       variant="inline"
                       label="10 of 10 cats fed."
                       labelSuccess="All cats fed!"
        />
      </div>
      <div>
        Error{' '}
        <NxProgressBar value={50}
                       variant="inline"
                       label="6 of 10 cats fed."
                       labelError="Something went wrong!"
        />
      </div>
    </>
  );
}
