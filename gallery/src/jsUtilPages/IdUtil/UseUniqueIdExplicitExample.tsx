/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { useUniqueId } from '@sonatype/react-shared-components';

interface ChildComponentProps {
  id?: string;
}

function ChildComponent({ id }: ChildComponentProps) {
  const generatedId = useUniqueId('example', id);

  return (
    <div id={generatedId}>
      ID: <code className="nx-code">{generatedId}</code>
    </div>
  );
}

export default function UseUniqueIdExplicitExample() {
  return (
    <>
      <ChildComponent id="explicit-id" />
      <ChildComponent />
    </>
  );
}
