/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faCog } from '@fortawesome/free-solid-svg-icons';
import { NxIconDropdown } from '@sonatype/react-shared-components';

function NxIconDropdownDisabledExample() {
  return (
    <NxIconDropdown icon={faCog}
                    title="Non-functional"
                    isOpen={false}
                    disabled={true} />
  );
}

export default NxIconDropdownDisabledExample;
