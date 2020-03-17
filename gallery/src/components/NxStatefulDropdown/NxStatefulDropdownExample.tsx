/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { faHatWizard } from '@fortawesome/free-solid-svg-icons';
import { NxStatefulDropdown, NxFontAwesomeIcon } from '@sonatype/react-shared-components';

function NxStatefulDropdownExample() {
  const labelElement = (
    <>
      <NxFontAwesomeIcon icon={faHatWizard}/>
      <span>Apo Pantos Kakodaimonos!</span>
    </>
  );

  const onClick = () => { alert('click'); };

  return (
    <NxStatefulDropdown label={labelElement}>
      <div className="nx-list nx-list--clickable">
        <h4 className="nx-list__title">Filters</h4>
        <ul>
          <li className="nx-list__item" onClick={onClick}>Faux Filter 1</li>
          <li className="nx-list__item" onClick={onClick}>Cool Filter</li>
          <li className="nx-list__item" onClick={onClick}>Unused Filter</li>
        </ul>
      </div>
    </NxStatefulDropdown>
  );
}

export default NxStatefulDropdownExample;
