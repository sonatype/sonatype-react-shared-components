/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {faCube} from '@fortawesome/free-solid-svg-icons';

import { NxCollapsibleItems, NxFontAwesomeIcon, useToggle } from '@sonatype/react-shared-components';

function NxCollapsibleItemsEmptyExample() {
  const [toggleCheck, onToggleCollapse] = useToggle(false);

  return (
    <NxCollapsibleItems onToggleCollapse={onToggleCollapse}
                        isOpen={toggleCheck}
                        triggerContent={
                          <><NxFontAwesomeIcon icon={faCube}/><span>All Items</span></>
                        }>
    </NxCollapsibleItems>
  );
}

export default NxCollapsibleItemsEmptyExample;
