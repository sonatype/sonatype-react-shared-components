/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as React from 'react';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import {faSync, faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const NxBtnIconExample = () =>
  <div className="nx-btn-bar">
    <button className="nx-btn nx-btn--icon-only"><NxFontAwesomeIcon icon={faExclamationTriangle}/></button>
    <button className="nx-btn"><NxFontAwesomeIcon icon={faSync}/><span>Button with icon</span></button>
  </div>;

export default NxBtnIconExample;
