/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faAdjust, faAngry, faAtom, faBatteryEmpty } from '@fortawesome/free-solid-svg-icons';

import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

import './NxFontAwesomeIconExample.scss';

const NxFontAwesomeIconExample = () =>
  <div className="nx-btn-bar">
    <button className="nx-btn">
      {/* First icon has no left margin due to being in a horizontal container */}
      <NxFontAwesomeIcon icon={faAdjust} spin={true} />
      {/* Second icon has no left margin due to being immediately preceded by another icon */}
      <NxFontAwesomeIcon icon={faAngry} className="custom-icon-class-example" />
      <span>Some text between icons</span>
      {/* Third icon has both margins */}
      <NxFontAwesomeIcon icon={faAtom} pulse={true} />
      {/*
        * Fourth icon has no left margin due to being preceded by another icon and no right margin due to
        * being the last element in a horizontal container
        */}
      <NxFontAwesomeIcon icon={faBatteryEmpty} color="red" />
    </button>
  </div>;

export default NxFontAwesomeIconExample;
