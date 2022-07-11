/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxH3, NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFontAwesomeIconExample from './NxFontAwesomeIconExample';

const nxFontAwesomeIconExampleCode = require('./NxFontAwesomeIconExample?raw'),
    nxFontAwesomeIconExampleScssCode = require('./NxFontAwesomeIconExample.scss?raw');

const NxFontAwesomeIconPage = () => {
  const codeExamples = [
    nxFontAwesomeIconExampleCode,
    { content: nxFontAwesomeIconExampleScssCode, language: 'scss' }
  ];

  return (
    <>
      <GalleryDescriptionTile>
        <NxP>
          <NxCode>NxFontAwesomeIcon</NxCode> is a wrapper around
          the <NxCode>FontAwesomeIcon</NxCode> component. It passes through its props
          to <NxCode>FontAwesomeIcon</NxCode> and adds the <NxCode>.nx-icon</NxCode> CSS
          class.
        </NxP>
        <NxP>
          See the <NxCode>FontAwesomeIcon</NxCode>{' '}
          <NxTextLink href="https://github.com/FortAwesome/react-fontawesome#features" target="_blank">
            documentation
          </NxTextLink>
          {' '}for details on available props
        </NxP>
        <NxH3>Accessibility</NxH3>
        <NxP>
          <NxCode>FontAwesomeIcon</NxCode> has a <NxCode>title</NxCode> prop which
          sets up a <NxCode>&lt;title&gt;</NxCode> element within the rendered SVG and configures it
          as the accessible name for the icon. Use this attribute when an icon itself needs to be read by a
          screenreader. Note however that this will also create a native tooltip with the title, which is not ideal
          due to our preference for <NxCode>NxTooltip</NxCode>. This technique should therefore be
          used sparingly, and labels on parent elements should be preferred where appropriate. For instance,
          the accessible name for an icon-only button should be placed on the button itself, not on the icon.
          See the <NxTextLink href="#/pages/Button"><NxCode>NxButton</NxCode></NxTextLink> page for an example.
        </NxP>
        <NxP>
          If you are in doubt about whether an icon should be made accessible consider whether the user could perform
          their given task, or understand an explanation if that icon was not there. Take care that adding an
          {' '}<NxCode>aria-label</NxCode> does not cause repetition in text read by assistive
          technologies.
        </NxP>
      </GalleryDescriptionTile>
      <GalleryExampleTile title="General Example"
                          codeExamples={codeExamples}
                          liveExample={NxFontAwesomeIconExample}>
        This example shows a button containing a series of icons inline with some text.
        The buttons showcase various FontAwesome options that are supported. The address card icon
        demonstrates accessibility requirements for icons that are not purely presentational.
      </GalleryExampleTile>
    </>
  );
};

export default NxFontAwesomeIconPage;
