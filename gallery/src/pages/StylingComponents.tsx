/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxP, NxH3, NxH4, NxCode, NxTile, NxTextLink, NxList } from '@sonatype/react-shared-components';

import {GalleryTile} from '../gallery-components/GalleryTiles';

const StylingRSCPage = () =>
  <GalleryTile title="How to style your app when using RSC">
    <NxP>
      If you have styling needs that aren't covered by the styles included in React Shared Components (RSC),
      then you're going to have to create your own styles.
    </NxP>
    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Page &amp; component specific stylesheets</NxH3>
      </NxTile.SubsectionHeader>
      <NxP>
        Why have page and component specific stylesheets? By grouping our styles together by use and (ideally) locating
        the SCSS next to the HTML that it modifies we decrease clutter/noise in our main stylesheet, keep our styles
        focused on what they modify, and also help maintain a clear separation between code, layout, and styling.
      </NxP>
      <NxH4>Modifying component styles</NxH4>
      <NxP>
        If you need to modify any of the stock RSC styles for use within your project you should create either a single
        file to contain your modifications or keep them within a page specific stylesheet if the changes are localised
        to a page. For example in IQ has an SCSS file named <NxCode>_nx-overrides.scss</NxCode> in
        which all IQ specific modifications to RSC styles are stored. If you are starting a brand new project you
        probably won't need to do this but for existing projects where RSC styles will be mixing with legacy styles it
        can be invaluable.
      </NxP>
    </NxTile.Subsection>
    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>B.E.M.</NxH3>
      </NxTile.SubsectionHeader>
      <NxP>
        You might have noticed lots of dashes and underscores in our class names. That's because we use BEM naming
        by default. BEM stands for "Block", "Element", and "Modifier".{' '}
        <NxTextLink external href="https://www.toptal.com/css/introduction-to-bem-methodology">
          Learn more about BEM
        </NxTextLink>.
        We use a slightly modified version of BEM in the RSC; we have added namespaces and utility classes.
      </NxP>
    </NxTile.Subsection>
    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Namespaces</NxH3>
      </NxTile.SubsectionHeader>
      <NxP>
        Because the RSC styles are used by multiple apps we wanted to clearly distinguish between RSC styles and
        custom app styles. To that end we use a namespace prefix in our class names. In RSC that prefix
        is <NxCode>nx-</NxCode>. In IQ they use <NxCode>iq-</NxCode> as
        a prefix in order to differentiate between classes in IQ and classes from RSC. When you
        create custom CSS in your app you should create a simple unique prefix for your app.
      </NxP>
    </NxTile.Subsection>
    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Utility classes</NxH3>
      </NxTile.SubsectionHeader>
      <NxP>
        You may notice as you work with the various RSC that some components have CSS classes that don't follow
        normal BEM naming conventions. Classes like:
      </NxP>
      <NxList bulleted>
        <NxList.Item>
          <NxList.Text>
            <NxCode>open</NxCode> &amp; <NxCode>closed</NxCode>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            <NxCode>disabled</NxCode>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            <NxCode>pristine</NxCode>, <NxCode>valid</NxCode>,
            {' '}<NxCode>invalid</NxCode>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            <NxCode>selected</NxCode> &amp; <NxCode>unselected</NxCode>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            <NxCode>hidden</NxCode>
          </NxList.Text>
        </NxList.Item>
      </NxList>
      <NxP>
        These are commonly refered to as "utility classes". Utility classes usually describe a change in a components'
        visual state. These classes are common across all components that might need them, especially in the case of the
        validation utility classes.
      </NxP>
    </NxTile.Subsection>
    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>Telemetry (and other non-styling) Classes</NxH3>
      </NxTile.SubsectionHeader>
      <NxP>
        When adding classes to your project that will be used for telemetry (Gainsight, Pendo, other reporting,
        etc), it's best to use dedicated class names. We recommend using a custom prefix
        like <NxCode>telemetry-</NxCode> or <NxCode>t-</NxCode> to differentiate them from those used for
        styling.
      </NxP>
      <NxP>
        The reason for this is simple, if the same class names are used for styling and telemetry then a styling change
        which requires a new or different class name can unwittingly break the link to telemetry. There's no indication
        that the class serves two purposes. If you use dedicated prefixes the purpose of the class is always clear.
      </NxP>
      <NxP>
        The same system should be used if classes are created for any specialized purpose other than styling. For CSS
        classes used for testing we recommend using the <NxCode>test-</NxCode> prefix.
      </NxP>
    </NxTile.Subsection>
    <NxTile.Subsection>
      <NxTile.SubsectionHeader>
        <NxH3>CSS Resources</NxH3>
      </NxTile.SubsectionHeader>
      <NxP>
        Many components in the RSC are laid out using CSS Flexbox or CSS Grid. Flexbox is well
        established, but Grid is quite new. The syntax for both can be a little confusing for those who aren't used to
        them. There are many resources available on the web to help new users, the ones linked below are used by the RSC
        team for reference.
      </NxP>
      <NxH4>Flexbox</NxH4>
      <NxList bulleted>
        <NxList.Item>
          <NxList.Text>
            <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Flexbox">
              MDN Layout Guide: Flexbox
            </NxTextLink>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            <NxTextLink external href="https://css-tricks.com/snippets/css/a-guide-to-flexbox/">
              CSS Tricks Guide to CSS Flexbox
            </NxTextLink>
          </NxList.Text>
        </NxList.Item>
      </NxList>
      <h4 className="nx-h4">CSS Grid</h4>
      <NxList bulleted>
        <NxList.Item>
          <NxList.Text>
            <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Grids">
              MDN Layout Guide: CSS Grid
            </NxTextLink>
          </NxList.Text>
        </NxList.Item>
        <NxList.Item>
          <NxList.Text>
            <NxTextLink external href="https://css-tricks.com/snippets/css/complete-guide-grid/">
              CSS Tricks Guide to CSS Grid
            </NxTextLink>
          </NxList.Text>
        </NxList.Item>
      </NxList>
    </NxTile.Subsection>
  </GalleryTile>;

export default StylingRSCPage;
