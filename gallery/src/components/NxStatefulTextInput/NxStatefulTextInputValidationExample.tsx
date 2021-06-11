/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxStatefulTextInput } from '@sonatype/react-shared-components';

function validator(val: string) {
  return val.length ? null : 'Must be non-empty';
}

function onKeyPress(key: string) {
  console.log('Pressed key:', key); // eslint-disable-line
}

export default function NxStatefulTextInputValidationExample() {
  return (
    <NxStatefulTextInput validator={validator} onKeyPress={onKeyPress} placeholder="placeholder text"/>
  );
}
