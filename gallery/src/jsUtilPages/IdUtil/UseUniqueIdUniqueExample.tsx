/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { useUniqueId } from '@sonatype/react-shared-components';

export default function UseUniqueIdUniqueExample() {
  const id = useUniqueId('example');

  return (
    <div id={id}>
      ID: <code className="nx-code">{id}</code>
    </div>
  );
}
