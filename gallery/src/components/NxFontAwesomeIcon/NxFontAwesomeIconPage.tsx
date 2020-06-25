/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFontAwesomeIconExample from './NxFontAwesomeIconExample';

const nxFontAwesomeIconExampleCode = require('!!raw-loader!./NxFontAwesomeIconExample').default,
    nxFontAwesomeIconExampleScssCode = require('!!raw-loader!./NxFontAwesomeIconExample.scss').default;

const NxFontAwesomeIconPage = () => {
  const codeExamples = [
    nxFontAwesomeIconExampleCode,
    { content: nxFontAwesomeIconExampleScssCode, language: 'scss' }
  ];

  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          <code className="nx-code">NxFontAwesomeIcon</code> is a wrapper around
          the <code className="nx-code">FontAwesomeIcon</code> component. It passes through its props
          to <code className="nx-code">FontAwesomeIcon</code> and adds the <code className="nx-code">.nx-icon</code> CSS
          class.
        </p>
        <p className="nx-p">
          See the <code className="nx-code">FontAwesomeIcon</code>{' '}
          <a href="https://github.com/FortAwesome/react-fontawesome#features" target="_blank">documentation</a>
          {' '}for details on available props
        </p>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="General Example"
                          codeExamples={codeExamples}
                          liveExample={NxFontAwesomeIconExample}>
        This example shows a button containing a series of icons inline with some text.
        The buttons showcase various FontAwesome options that are supported.
      </GalleryExampleTile>
    </>
  );
};

export default NxFontAwesomeIconPage;
