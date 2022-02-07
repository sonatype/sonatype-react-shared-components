/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxPageMain, NxStableUniqueIdContext, NxStatefulTextInput, useUniqueId }
  from '@sonatype/react-shared-components';
import React from 'react';

/**
 * A component which could be considered the main UI of a React application
 */
function MyApp() {
  const mainId = useUniqueId('main');

  return (
    <NxPageMain id={mainId}>
      <NxStatefulTextInput placeholder="Example input" />
    </NxPageMain>
  );
}

export default function NxStableUniqueIdContextExample() {
  return (
    <NxStableUniqueIdContext>
      <MyApp />
    </NxStableUniqueIdContext>
  );
}
