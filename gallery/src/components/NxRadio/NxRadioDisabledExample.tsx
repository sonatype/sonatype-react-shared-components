/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { NxRadio, NxFieldset } from '@sonatype/react-shared-components';

export default function NxRadioDisabledExample() {
  const [city, setCity] = useState<string | null>('fulton');

  return (
    <>
      <NxFieldset label={`Selected City: ${city}`} isRequired={true}>
        <NxRadio name="city"
                value="arlington"
                onChange={setCity}
                isChecked={city === 'arlington'}
                disabled={true}
                radioId="city-arlington">
          Arlington (disabled)
        </NxRadio>
        <NxRadio name="city"
                value="fulton"
                onChange={setCity}
                isChecked={city === 'fulton'}
                disabled={true}
                radioId="city-fulton">
          Fulton (disabled + checked)
        </NxRadio>
      </NxFieldset>
    </>
  );
}
