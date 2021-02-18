/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { useToggle } from '@sonatype/react-shared-components';

export default function UseToggleThirdItemExample() {
  const [checked, toggleChecked, setChecked] = useToggle(false);

  return (
    <div>
      <label>
        Checkbox brought to you by <code className="nx-code">useToggle</code>
        <input type="checkbox" checked={checked} onChange={toggleChecked} />
      </label>
      <br/>
      <button onClick={() => setChecked(false)}>Reset Checkbox</button>
    </div>
  );
}
