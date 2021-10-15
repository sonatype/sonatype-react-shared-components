/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {GalleryTile} from '../gallery-components/GalleryTiles';
import { NxP, NxCode, NxH3, NxList, NxTextLink, NxTile, NxWarningAlert } from '@sonatype/react-shared-components';

const Accessibility = () =>
  <GalleryTile title="Accessibility">
    <NxP>
      Accessibility (a11y) means ensuring that our applications are usable by everybody. We do this in a variety of
      different ways. We make sure that our designs are clear and that they follow accessibility guidelines for
      contrast and readability. Our components are written with semantic HTML, correct use of <NxCode>ARIA</NxCode>{' '}
      attributes, and testing in VoiceOver and ChromeVox accessibility is built into the Shared Components. However
      there is still work that needs to be done to make sure that the application as a whole is accessible.
    </NxP>
    <NxP>
      It's important to note that accessibility is an ongoing process. We do not consider this work to be complete by
      any measure. Unfortunately the standards and documentation are sometimes lacking (or even contradictory) often
      making compliance a moving target. Additionally different browsers and screen readers behave in different ways so
      something that works in ChromeVox might not work in VoiceOver.
    </NxP>

    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Making your pages accessible</NxH3>
      </NxTile.SubsectionHeader>
      <NxP>
        Ensuring you use the components in an accessible manner is important, here are a few tips to help you make your
        pages accessible.
      </NxP>

      <NxList className="nx-list--bulleted">
        <NxList.Item>
          <NxList.Text>
            Tab order is important. Make sure that the tab order of the page is logical. You can use the{' '}
            <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex">
              tabindex
            </NxTextLink>
            {' '}HTML attribute to add items to the tab order (or remove them if necessary).
            At its simplest <NxCode>tabindex="-1"</NxCode> removes an object from the tab order,
            {' '}<NxCode>tabindex="0"</NxCode> adds something to the tab order.
            <NxWarningAlert>
              Positive integers like <NxCode>tabindex="3"</NxCode> which can change the tab order should be avoided.
            </NxWarningAlert>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>Unique title element for each page or view?</NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            Do all images and visual graphs have{' '}
            <NxTextLink external href="https://html.spec.whatwg.org/multipage/images.html#alt">alt text</NxTextLink>?
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            Make sure that you take advantage of the props and attributes that have been added to the components to
            improve their accessibility. Many component documentation pages have an Accessibility section with extra
            information.
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Glossary/Semantics">
              Semantic HTML
            </NxTextLink>
            {' '}is a critical aspect of accessibility. Headings should always use the correct
            {' '}<NxCode>&lt;h#&gt;</NxCode> tag, paragraphs should be wrapped in <NxCode>&lt;p&gt;</NxCode> tags,
            before you wrap that block of content in a <NxCode>&lt;div&gt;</NxCode> consider if it would be better to
            use a <NxCode>&lt;section&gt;</NxCode>. Tables should be used for data not layout.
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            Generally speaking all form inputs within a form should have a label. Many RSC components (like
            <NxCode>NxFormGroup</NxCode>) will automatically create labels for you so make sure you read the
            documentation.
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            Have you checked your page in ChromeVox and/or VoiceOver? Can you navigate and use the page without looking
            at the browser viewport?
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            The Plaid team is currently evaluating automated accessibility testing tools but one free tool which can
            provide some insight is the Lighthouse tool in Chrome's Developer Tools.
          </NxList.Text>
        </NxList.Item>
      </NxList>
    </NxTile.Subsection>

    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Accessibility Resources</NxH3>
      </NxTile.SubsectionHeader>
      <NxList className="nx-list--bulleted">
        <NxList.Item>
          <NxList.Text>
            <NxTextLink external href="https://docs.sonatype.com/display/ENG/Accessibility+Best+Practices">
              Sonatype's Accessibility Best Practices
            </NxTextLink>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/Accessibility">
              MDN accessibility page
            </NxTextLink>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            <NxTextLink external href="https://www.w3.org/standards/webdesign/accessibility">
              W3C accessibility page
            </NxTextLink>
          </NxList.Text>
        </NxList.Item>
      </NxList>
    </NxTile.Subsection>
  </GalleryTile>;

export default Accessibility;
