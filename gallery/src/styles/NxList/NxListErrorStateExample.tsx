/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons';

const NxSimpleList = () =>
  <div className="nx-list">
    <h4 className="nx-list__title">
      List title
    </h4>
    <div className="nx-list__item nx-error">
      <NxFontAwesomeIcon icon={faExclamationTriangle}/>Failed to load list message
    </div>
  </div>;

export default NxSimpleList;
