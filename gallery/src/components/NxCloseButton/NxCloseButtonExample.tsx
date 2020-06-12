/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCloseButton } from '@sonatype/react-shared-components';

export default function NxCloseButtonExample() {
  const onClick = () => alert('Clicked');

  return <NxCloseButton id="button-id" className="my-custom-class" onClick={onClick} />;
}
