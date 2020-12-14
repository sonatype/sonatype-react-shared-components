/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faSync, faSave, faEdit, faSmile } from '@fortawesome/free-solid-svg-icons';

import { NxButton, NxFontAwesomeIcon, NxTooltip } from '@sonatype/react-shared-components';

const NxButtonIconExample = () =>
  <div className="nx-btn-bar">
    <NxButton aria-label="sync">
      <NxFontAwesomeIcon icon={faSync}/>
      <span>Icons in buttons</span>
    </NxButton>

    <NxTooltip title="Save">
      <NxButton><NxFontAwesomeIcon icon={faSave} /></NxButton>
    </NxTooltip>

    <NxTooltip title="Edit">
      <NxButton variant="tertiary"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
    </NxTooltip>

    <NxTooltip title="Smile">
      <NxButton variant="primary"><NxFontAwesomeIcon icon={faSmile} /></NxButton>
    </NxTooltip>
  </div>;

export default NxButtonIconExample;
