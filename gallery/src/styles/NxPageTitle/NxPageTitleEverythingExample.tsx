/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTag } from '@sonatype/react-shared-components';

const NxPageTitleEverythingExample = () =>
  <div className="nx-page-title">
    <h1 className="nx-h1">
      Page Title
    </h1>
    <h2 className="nx-h2 nx-page-title__sub-title">
      This is a page sub-title
    </h2>
    <div className="nx-btn-bar">
      <button className="nx-btn nx-btn--tertiary">First</button>
      <button className="nx-btn nx-btn--tertiary">Second</button>
    </div>
    <div className="nx-page-title__tags">
      <NxTag>Default</NxTag>
      <NxTag color="purple">Purple</NxTag>
      <NxTag color="light-blue">Light Blue</NxTag>
      <NxTag color="pink">Pink</NxTag>
      <NxTag color="blue">Blue</NxTag>
    </div>
    <div className="nx-page-title__description">
      <p className="nx-p">This is a page description.</p>
      <p className="nx-p">
        jeans sign papier-mache assassin San Francisco rifle physical 3D-printed denim tanto courier concrete dolphin
        rebar free-market. tank-traps papier-mache dead free-market tanto drone concrete dolphin sunglasses weathered
        dead jeans office vehicle nodal point. motion film meta- monofilament knife vinyl post- bridge jeans city
        Tokyo alcohol marketing girl vehicle.
      </p>
    </div>
  </div>;

export default NxPageTitleEverythingExample;
