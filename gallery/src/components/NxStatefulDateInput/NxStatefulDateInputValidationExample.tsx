/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulDateInput } from '@sonatype/react-shared-components';

// Validates if year is after 2020
function validator(val: string) {
  return parseInt(val.split('-')[0]) > 2020 ? null : 'Year must be after 2020';
}

function onKeyPress(key: string) {
  console.log('Pressed key:', key); // eslint-disable-line
}

export default function NxStatefulDateInputValidationExample() {
  return (
    <NxStatefulDateInput validator={validator} onKeyPress={onKeyPress} placeholder="placeholder text"/>
  );
}
