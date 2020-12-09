/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

const nxReadOnlyDlExampleCode = require('!!raw-loader!./NxReadOnlyDlExample.html').default;

const NxReadOnlyPage = () => {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          <code className="nx-code">.nx-read-only</code> is a design pattern for when you wish to display data in a read only form. It's basic structure is a label and one or more data points.
        </p>
        <p className="nx-p">
          <code className="nx-code">.nx-read-only</code> is layed out using a description list
          (<code className="nx-code">&lt;dl&gt;</code>) as the container.
        </p>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="Styling read-only lists of data"
                          codeExamples={nxReadOnlyDlExampleCode}
                          htmlExample={nxReadOnlyDlExampleCode}>
        <code className="nx-code">&lt;dl&gt;</code> layout.
      </GalleryExampleTile>
    </>
  );
};

export default NxReadOnlyPage;
