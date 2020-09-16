/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { NxButton, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

const NxListErrorExample = () =>
  <ul className="nx-list">
    <li className="nx-list__item nx-list__item--with-modifier-icon">
      <span className="nx-list__text">List item</span>
      <NxButton iconOnly className="nx-pull-right"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
      <NxButton iconOnly className="nx-pull-right"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
    </li>
    <li className="nx-list__item nx-list__item--with-modifier-icon">
      <span className="nx-list__text">List item</span>
      <p className="nx-list__item__subtext">
        This is some sub-text to demonstrate spacing
      </p>
      <NxButton iconOnly className="nx-pull-right"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
    </li>
  </ul>;

export default NxListErrorExample;
