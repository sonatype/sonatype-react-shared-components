/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { faAtom } from '@fortawesome/free-solid-svg-icons';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';

const NxPageTitleExample = () =>
  <>
    <div className="nx-page-title">
      <NxFontAwesomeIcon icon={faAtom} className="nx-page-title__page-icon" />
      <h1 className="nx-h1">Page Title</h1>
      <div className="nx-page-title__description">
        <p className="nx-p">This is a page description.</p>
        <p className="nx-p">
          jeans sign papier-mache assassin San Francisco rifle physical 3D-printed denim tanto courier concrete dolphin
          rebar free-market. tank-traps papier-mache dead free-market tanto drone concrete dolphin sunglasses weathered
          dead jeans office vehicle nodal point. motion film meta- monofilament knife vinyl post- bridge jeans city
          Tokyo alcohol marketing girl vehicle.
        </p>
      </div>
    </div>

  </>;

export default NxPageTitleExample;
