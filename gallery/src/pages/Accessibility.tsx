/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {GalleryTile} from '../gallery-components/GalleryTiles';
import { NxP, NxCode, NxH3, NxList } from '@sonatype/react-shared-components';

const Accessibility = () =>
  <GalleryTile title="Accessibility">
    <NxP>
      Starting with semantic HTML, correct use of <NxCode>aria</NxCode> tags, and testing in VoiceOver and ChromeVox
      accessibility is built into the Shared Components.
    </NxP>

    <NxH3 className="nx-tile__section-header">Making your pages accessible</NxH3>
    <NxP>
      Ensuring you use the components in an accessible manner is important, here are a fe tips to help you make your
      pages accessible.
    </NxP>

    <NxList>
      <NxList.Item>Tab order is important. Make sure that the tab order of the page is logical.</NxList.Item>
      <NxList.Item>
        Make sure that you take advantage of the props and attributes that have been added to the components to improve
        their accessibility.
      </NxList.Item>
      <NxList.Item>
        Semantic HTML is a critical aspect of accessibility. Headings should always use the correct
        {' '}<NxCode>&lt;h#&gt;</NxCode> tag, paragraphs should be wrapped in <NxCode>&lt;p&gt;</NxCode> tags, etc.
      </NxList.Item>
      <NxList.Item></NxList.Item>
      <NxList.Item></NxList.Item>
    </NxList>

    <NxH3 className="nx-tile__section-header">
      Discover an accessibility problem? Have a suggestion for an improvement?
    </NxH3>

    <NxP>
      Hit us up in #accessibility or #react-components.
    </NxP>

  </GalleryTile>;

export default Accessibility;
