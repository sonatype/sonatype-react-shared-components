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
        <h3 className="nx-h3">Accessibility</h3>
        <p className="nx-p">
          By default Font Awesome icons are set to <code className="nx-code">aria-hidden="true"</code> which means that
          they are not "seen" by screen readers. Normally this is acceptable because icons are usually presentational
          in nature, however if the icon has information that is important to convey to the user (e.g. an icon only
          button) the value of <code className="nx-code">aria-hidden</code> should be set to
          {' '}<code className="nx-code">false</code> and an <code className="nx-code">aria-label</code> with
          explanatory text should also be employed. The last two examples demonstrate this.
        </p>
        <p className="nx-p">
          If you are in doubt about whether an icon should be made accessible consider whether the user could perform
          their given task, or understand an explaination if that icon was not there.
        </p>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="General Example"
                          codeExamples={codeExamples}
                          liveExample={NxFontAwesomeIconExample}>
        This example shows a button containing a series of icons inline with some text.
        The buttons showcase various FontAwesome options that are supported. The edit button and address card icon
        demonstrate accessibility requirements for buttons that are not purely presentational.
      </GalleryExampleTile>
    </>
  );
};

export default NxFontAwesomeIconPage;
