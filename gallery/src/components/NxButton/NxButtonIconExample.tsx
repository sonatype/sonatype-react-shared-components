/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {faSync} from '@fortawesome/free-solid-svg-icons';

import { NxButton, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

const NxButtonIconExample = () =>
  <div className="nx-btn-bar">
    <NxButton>
      <NxFontAwesomeIcon aria-hidden={false} aria-label='icon label' icon={faSync}/>
      <span>Icons in buttons</span>
    </NxButton>
  </div>;

export default NxButtonIconExample;
