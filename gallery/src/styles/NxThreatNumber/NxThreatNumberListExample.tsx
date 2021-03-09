/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatIndicator } from '@sonatype/react-shared-components';

const NxThreatNumberListExample = () =>
  <ul className="nx-list">
    <li className="nx-list__item">
      <NxThreatIndicator threatLevelCategory="none" />
      <span className="nx-list__text nx-threat-number">0</span>
      <span className="nx-list__subtext">
        In this row, the threat number value is the only content in
        the <NxCode>.nx-list__text</NxCode>, so there's no need to make a separate element;
        the <NxCode>.nx-threat-number</NxCode> class can be applied directly to
        the <NxCode>.nx-list__text</NxCode>.
      </span>
    </li>
    <li className="nx-list__item">
      <NxThreatIndicator threatLevelCategory="low" />
      <span className="nx-list__text">
        <span className="nx-threat-number">1</span> is the threat number.
      </span>
      <span className="nx-list__subtext">
        In this row, there is other content aside from the threat number value within
        the <NxCode>.nx-list__text</NxCode>, so a separate element is needed in order
        to ensure that the <NxCode>.nx-threat-number</NxCode> styles are applied only to the
        threat number value itself. Note that as of RSC 2.0.0, nx-threat-number does not actually have any styles
        that are distinct from the rest of the main list text. That may change in the future however, so
        usage of <NxCode>.nx-threat-number</NxCode> here is still desired.
      </span>
    </li>
  </ul>;

export default NxThreatNumberListExample;
