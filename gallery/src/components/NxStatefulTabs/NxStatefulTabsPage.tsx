/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxTabsSimpleExample from './NxStatefulTabsSimpleExample';

const tabsSimpleExampleCode = require('!!raw-loader!./NxStatefulTabsSimpleExample').default;

export default function NxTablePage() {
  return (
    <>
      <GalleryDescriptionTile>
        <h3 className="nx-h3">NxStatefulTabs</h3>

        <p className="nx-p">
          The top-level container for tabbed navigation.
          The first child element must be a <code className="nx-code">&lt;NxTabList&gt;</code> component
          containing <code className="nx-code">&lt;NxStatefulTab&gt;</code> components.
          All other children must be <code className="nx-code">&lt;NxTabPanel&gt;</code> components.
          There must be at least one <code className="nx-code">&lt;NxTabPanel&gt;</code> for each
          {' '}<code className="nx-code">&lt;NxTabLabel&gt;</code> and they must include a
          {' '}<code className="nx-code">labelledBy</code> attribute which matches the corresponding id for the related
          {' '}<code className="nx-code">&lt;NxStatefulTab&gt;</code>.
        </p>

        <h3 className="nx-h3">NxStatefulTab</h3>

        <p className="nx-p">
          Replaces the <code className="nx-code">&lt;NxTab&gt;</code> to remove the requirement for
          the <code className="nx-code">active</code> attribute.
        </p>
      </GalleryDescriptionTile>
      <GalleryTile title="Simple Example">
        <NxTabsSimpleExample />
        <CodeExample content={tabsSimpleExampleCode} />
      </GalleryTile>
    </>
  );
}
