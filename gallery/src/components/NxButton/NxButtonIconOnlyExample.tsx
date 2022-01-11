/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {faExclamationTriangle, faEdit, faSave, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import { NxButton, NxFontAwesomeIcon, NxButtonBar } from '@sonatype/react-shared-components';

const NxButtonIconOnlyExample = () =>
  <NxButtonBar>
    <NxButton variant="icon-only" title="Alert"><NxFontAwesomeIcon icon={faExclamationTriangle}/></NxButton>
    <NxButton variant="icon-only" title="Edit"><NxFontAwesomeIcon icon={faEdit}/></NxButton>
    <NxButton variant="icon-only" title="Save"><NxFontAwesomeIcon icon={faSave}/></NxButton>
    <NxButton variant="icon-only" title="Delete" className="disabled"><NxFontAwesomeIcon icon={faTrashAlt}/></NxButton>
    <NxButton variant="icon-only" title="Delete" disabled><NxFontAwesomeIcon icon={faTrashAlt}/></NxButton>
  </NxButtonBar>;

export default NxButtonIconOnlyExample;
