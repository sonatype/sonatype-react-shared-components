/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxThreatIndicator, NxFontAwesomeIcon, NxButton } from '@sonatype/react-shared-components';
import { faAngleRight, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';

const NxThreatIndicatorListExample = () =>
  <ul className="nx-list nx-list--clickable">
    <li className="nx-list__item">
      <NxThreatIndicator />
      <span className="nx-list__text">Indicator on simple list row</span>
    </li>
    <li className="nx-list__item" tabIndex={0}>
      <NxThreatIndicator threatLevelCategory="none" />
      <span className="nx-list__text">Indicator on clickable list row</span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
    <li className="nx-list__item">
      <NxThreatIndicator threatLevelCategory="low" />
      <span className="nx-list__text">Indicator on row with actions</span>
      <div className="nx-list__actions">
        <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        <NxButton title="Trash" variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
      </div>
    </li>
    <li className="nx-list__item">
      <NxThreatIndicator threatLevelCategory="moderate" />
      <span className="nx-list__text">Indicator on row with subtext</span>
      <span className="nx-list__subtext">
        This is list sub-text.  Lots of subtext. Such an incredible amount of subtext that it will surely wrap and
        show that the layout can handle that sort of thing.
      </span>
    </li>
    <li className="nx-list__item">
      <NxThreatIndicator threatLevelCategory="severe" />
      <span className="nx-list__text">Indicator on row with subtext and actions</span>
      <div className="nx-list__actions">
        <NxButton title="Edit" variant="icon-only"><NxFontAwesomeIcon icon={faEdit} /></NxButton>
        <NxButton title="Trash" variant="icon-only"><NxFontAwesomeIcon icon={faTrash} /></NxButton>
      </div>
    </li>
    <li className="nx-list__item" tabIndex={0}>
      <NxThreatIndicator threatLevelCategory="critical" />
      <span className="nx-list__text">
        Indicator on clickable row with subtext. This should wrap so here's some more content, and more, and more.
        Annnnndddd more.
      </span>
      <span className="nx-list__subtext">
        This is list sub-text.  Lots of subtext. Such an incredible amount of subtext that it will surely wrap and
        show that the layout can handle that sort of thing.
      </span>
      <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
    </li>
  </ul>;

export default NxThreatIndicatorListExample;
