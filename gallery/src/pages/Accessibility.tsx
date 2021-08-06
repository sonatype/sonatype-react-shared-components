/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {GalleryTile} from '../gallery-components/GalleryTiles';
import { NxP, NxCode, NxH3, NxList, NxTextLink } from '@sonatype/react-shared-components';

const Accessibility = () =>
  <GalleryTile title="Accessibility">
    <NxP>
      Accessibility (a11y) means ensuring that our applications are usable by everybody. We do this in a variety of
      different ways. We make sure that our designs are clear and that they follow accessibility guidelines for
      contrast and readability. Our components are written with semantic HTML, correct use of <NxCode>aria</NxCode>{' '}
      tags, and testing in VoiceOver and ChromeVox accessibility is built into the Shared Components. However there is
      still work that needs to be done to make sure that the application as a whole is accessible.
    </NxP>
    <NxP>
      It's important to note that accessibility is an ongoing process. We do not consider this work to be complete by
      any measure. Unfortunately the standards and documentation are sometimes lacking (or even contradictory) often
      making compliance a moving target. Additionally different browsers and screen readers behave in different ways so
      something that works in ChromeVox might not work in VoiceOver.
    </NxP>

    <NxH3 className="nx-tile__section-header">Making your pages accessible</NxH3>
    <NxP>
      Ensuring you use the components in an accessible manner is important, here are a few tips to help you make your
      pages accessible.
    </NxP>

    <NxList className="nx-list--bulleted">
      <NxList.Item>Tab order is important. Make sure that the tab order of the page is logical.</NxList.Item>
      <NxList.Item>Related to the above, does the keyboard focus order follow the visual layout?</NxList.Item>
      <NxList.Item>Unique title element for each page or view?</NxList.Item>
      <NxList.Item>Do all images and visual graphs have alt text?</NxList.Item>
      <NxList.Item>
        Make sure that you take advantage of the props and attributes that have been added to the components to improve
        their accessibility. Many component documentation pages have an Accessibility section with extra information.
      </NxList.Item>
      <NxList.Item>
        <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics">
          Semantic HTML
        </NxTextLink>
        {' '}is a critical aspect of accessibility. Headings should always use the correct
        {' '}<NxCode>&lt;h#&gt;</NxCode> tag, paragraphs should be wrapped in <NxCode>&lt;p&gt;</NxCode> tags, etc.
      </NxList.Item>
      <NxList.Item>
        All form elements should have a label.
      </NxList.Item>
      <NxList.Item>Have you checked your page in ChromeVox and/or VoiceOver?</NxList.Item>
    </NxList>

    <NxH3 className="nx-tile__section-header">
      Accessibility Resources
    </NxH3>

    <NxList className="nx-list--bulleted">
      <NxList.Item>
        <NxTextLink href="https://docs.sonatype.com/display/ENG/Accessibility+Best+Practices">
          Sonatype's Accessibility Best Practices
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        <NxTextLink href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
          MDN accessibility page
        </NxTextLink>
      </NxList.Item>
      <NxList.Item>
        <NxTextLink href="https://www.w3.org/standards/webdesign/accessibility">
          W3C accessibility page
        </NxTextLink>
      </NxList.Item>
    </NxList>

    <NxH3 className="nx-tile__section-header">
      Discover an accessibility problem? Have a suggestion for an improvement?
    </NxH3>

    <NxP>
      Hit us up in #accessibility or #react-components.
    </NxP>

  </GalleryTile>;

export default Accessibility;
