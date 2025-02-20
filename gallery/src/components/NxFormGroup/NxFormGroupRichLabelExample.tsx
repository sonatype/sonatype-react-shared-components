/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';

import { faGlobeEurope, faFlag } from '@fortawesome/free-solid-svg-icons';

import { NxFormGroup, NxFontAwesomeIcon, NxFormSelect } from '@sonatype/react-shared-components';

export default function NxFormGroupRichLabelExample() {
  const [val, setVal] = useState('');

  const label = (
    <>
      <NxFontAwesomeIcon icon={faGlobeEurope} />
      <span>Country</span>
    </>
  );

  const sublabel = (
    <>
      <NxFontAwesomeIcon icon={faFlag} />
      <span>Pick your favorite from the list</span>
    </>
  );

  return (
    <NxFormGroup { ...{ label, sublabel } }>
      <NxFormSelect value={val} onChange={setVal}>
        <option value="">Pick a Country</option>
        <option value="USA">USA</option>
        <option value="CAN">Canada</option>
        <option value="GER">Germany</option>
        <option value="COL">Colombia</option>
      </NxFormSelect>
    </NxFormGroup>
  );
}
