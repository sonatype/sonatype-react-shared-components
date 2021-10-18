/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulCheckbox } from '@sonatype/react-shared-components';

const NxFieldsetExample = () =>
  <fieldset className="nx-fieldset">
    <legend className="nx-legend">
      <span className="nx-legend__text">Items to pack</span>
    </legend>
    <NxStatefulCheckbox defaultChecked={false}>Coat</NxStatefulCheckbox>
    <NxStatefulCheckbox defaultChecked={false}>Map</NxStatefulCheckbox>
    <NxStatefulCheckbox defaultChecked={false}>Sunglasses</NxStatefulCheckbox>
    <NxStatefulCheckbox defaultChecked={false}>Umbrella</NxStatefulCheckbox>
  </fieldset>;

export default NxFieldsetExample;
