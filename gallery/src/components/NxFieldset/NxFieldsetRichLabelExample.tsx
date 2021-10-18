/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faGlobeEurope, faPlane } from '@fortawesome/free-solid-svg-icons';

import { NxFieldset, NxFontAwesomeIcon, NxStatefulCheckbox } from '@sonatype/react-shared-components';

export default function NxFieldsetRichLabelExample() {
  const label = (
    <>
      <NxFontAwesomeIcon icon={faGlobeEurope} />
      <span>Items to pack</span>
    </>
  );

  const sublabel = (
    <>
      <NxFontAwesomeIcon icon={faPlane} />
      <span>Pack for your trip</span>
    </>
  );

  return (
    <NxFieldset { ...{ label, sublabel } }>
      <NxStatefulCheckbox defaultChecked={false}>Coat</NxStatefulCheckbox>
      <NxStatefulCheckbox defaultChecked={false}>Map</NxStatefulCheckbox>
      <NxStatefulCheckbox defaultChecked={false}>Sunglasses</NxStatefulCheckbox>
      <NxStatefulCheckbox defaultChecked={false}>Umbrella</NxStatefulCheckbox>
    </NxFieldset>
  );
}
