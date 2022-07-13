/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxTable,
  NxWarningAlert,
  NxInfoAlert,
  NxCode,
  NxStatefulAccordion,
  NxAccordion,
  NxP,
  NxTextLink,
  NxTile,
  NxH2,
  NxList
} from '@sonatype/react-shared-components';

import CodeExample from '../../CodeExample';

const NxViewportSizedExample = require('./NxViewportSizedExample.tsx?raw'),
    NxViewportSizedExpandingExample = require('./NxViewportSizedExpandingExample.tsx?raw'),
    NxViewportSizedAdjacentExample = require('./NxViewportSizedAdjacentExample.tsx?raw'),
    NxViewportSizedAdjacentStyles = require('./NxViewportSizedAdjacentExample.scss?raw');

export default function NxViewportSizedPage() {
  return (
    <>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Description</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            In applications that do not use full-page scrolling, there are often pages where it is desired for
            the page content to fit the viewport height, and for one element in particular to shrink and/or expand
            in order to enable that fit, scrolling its contents if necessary. Often, the dynamically-sized element
            is a table or list.
          </NxP>
          <NxP>
            In years past, this could generally only be accomplished using JavaScript helpers that would compute
            the appropriate height of the dynamic element. This approach tended to be fragile. With modern CSS however,
            it is possible to use flexbox to accomplish this goal, with some effort. The key, essentially, is to
            ensure that the highest level elements on the page are sized correctly to fill the viewport, and
            then to pass that full-height sizing down through the element tree using flexbox or grid layouts until
            the element which is intended to shrink or expand is reached. Note, of course, that it isn't really just
            the scrollable element that is dynamically sized, but rather it is that
            element <em>and all of its ancestors</em>.  This is why each ancestor needs to be laid out using flexbox.
          </NxP>
          <NxP>
            This approach is not without caveats. Mainly, changing the ancestor elements from block layout to
            flex layout removes some of the ancillary behaviors of block layout that we generally rely on. There are at
            least two significant places where this makes a difference:
          </NxP>
          <NxList>
            <NxList.Item>
              <NxList.Text>Margin collapsing</NxList.Text>
              <NxList.Subtext>
                When children are laid out in a block container, the top and bottom margins of adjacent siblings
                collapse into one another, such that the actual space between them is the larger of the two, not the
                sum of the two. Flex containers do not do this, and so the margins double up. To mitigate this, the
                smaller of each pair of adjacent margins must be removed in CSS.
              </NxList.Subtext>
            </NxList.Item>
            <NxList.Item>
              <NxList.Text>Default child width with automatic margins</NxList.Text>
              <NxList.Subtext>
                The behavior of left and right margins set to <NxCode>auto</NxCode> differs between
                block layouts and flex-column layouts. In block layout, a child with auto side margins will default
                to the full width of its container unless it has a width or max-width set.  In flex-column layout,
                a child with auto side margins and no explicit width will default to its implicit width, even if it
                has a max-width set. To get max-width to behave the way that it does in block
                layouts, <NxCode>width: 100%</NxCode> must be applied. In RSC, this issue comes up
                around <NxCode>NxAlert</NxCode>s in particular.
              </NxList.Subtext>
            </NxList.Item>
          </NxList>
          <NxP>
            The <NxCode>nx-viewport-sized</NxCode> family of CSS classes accomplishes the
            layout goals described above. These classes take care of setting the flexbox styles and mitigating the
            caveats listed above. See the class details below.
          </NxP>
          <NxTable>
            <NxTable.Head>
              <NxTable.Row>
                <NxTable.Cell>Class Name</NxTable.Cell>
                <NxTable.Cell>Location</NxTable.Cell>
                <NxTable.Cell>Description</NxTable.Cell>
              </NxTable.Row>
            </NxTable.Head>
            <NxTable.Body>
              <NxTable.Row>
                <NxTable.Cell><NxCode>nx-viewport-sized</NxCode></NxTable.Cell>
                <NxTable.Cell>
                  An ancestor element which is already sized to take up all available height by other means outside
                  of <NxCode>nx-viewport-sized</NxCode>. Typically
                  an <NxCode>.nx-page-main</NxCode> or <NxCode>.nx-page-sidebar</NxCode>
                </NxTable.Cell>
                <NxTable.Cell>
                  Viewport-sized pages inherit their height from a parent element which is already sized to the
                  available on-screen height through other means. When using the RSC page layout classes, this parent
                  element would be the <NxCode>.nx-page-main</NxCode> or{' '}
                  <NxCode>.nx-page-sidebar</NxCode>, which get their height from the cross-axis
                  alignment settings on <NxCode>.nx-page-content</NxCode>, which in turn gets its height
                  from the flex layout of <NxCode>.nx-page</NxCode>, which gets it's height from
                  <NxCode>.nx-body</NxCode> and <NxCode>.nx-html</NxCode> having
                  height 100%, which ultimately sets it all to the viewport's height. The already-correctly-sized
                  parent (e.g. <NxCode>.nx-page-main</NxCode>) must include
                  the <NxCode>.nx-viewport-sized</NxCode> class in order to turn it into a flex
                  container capable of sizing its children based on its own height.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell><NxCode>nx-viewport-sized__container</NxCode></NxTable.Cell>
                <NxTable.Cell>
                  Each element that is both a descendant
                  of <NxCode>.nx-viewport-sized</NxCode> and an ancestor of the element which is
                  intended to dynamically take up the slack in the page.
                </NxTable.Cell>
                <NxTable.Cell>
                  In order to pass the sizing down from <NxCode>.nx-viewport-sized</NxCode> to the
                  dynamically-sized scrollable, every ancestor in between must also be a flex container, set up
                  using this class.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell><NxCode>nx-viewport-sized__container--adjacent</NxCode></NxTable.Cell>
                <NxTable.Cell>Modifier of <NxCode>nx-viewport-sized__container</NxCode></NxTable.Cell>
                <NxTable.Cell>
                  This class causes its children to be laid out adjacently in the horizontal direction while
                  still carrying down the sizing context necessary for those children or their descendants to size
                  to the viewport. It is expected that every child of this element will be either
                  an <NxCode>nx-viewport-sized__container</NxCode> or an <NxCode>nx-viewport-sized__scrollable</NxCode>.
                </NxTable.Cell>
              </NxTable.Row>
              <NxTable.Row>
                <NxTable.Cell><NxCode>nx-viewport-sized__scrollable</NxCode></NxTable.Cell>
                <NxTable.Cell>
                  The <NxCode>.nx-scrollable</NxCode> that is intended to adjust to the size of
                  the page.
                </NxTable.Cell>
                <NxTable.Cell>
                  This class makes the target <NxCode>.nx-scrollable</NxCode> shrink or expand from its
                  natural height to fit the page. It removes the default max-height from
                  the <NxCode>.nx-scrollable</NxCode>.
                </NxTable.Cell>
              </NxTable.Row>
            </NxTable.Body>
          </NxTable>
          <NxInfoAlert>
            As described on the <NxTextLink href="#/pages/Page%20Layout%20Examples">Page Layout Examples</NxTextLink>
            page, RSC's page-level styles support two overall scrolling modes. In the default "section scrolling" mode,
            the <NxCode>.nx-page-sidebar</NxCode> and <NxCode>.nx-page-main</NxCode>
            are sized the fill the available space in the viewport and may scroll individually if their contents
            require. In the alternative "page scrolling" mode, those two elements are allowed to be as tall as their
            content, and the page itself scrolls at the viewport level.{' '}
            <strong>
              Only the "section scrolling" mode is compatible with <NxCode>nx-viewport-sized</NxCode>.
            </strong>
            {' '}Note that although the RSC gallery generally uses page scrolling, the live example pages for
            the <NxCode>nx-viewport-sized</NxCode> classes use section scrolling.
          </NxInfoAlert>
          <NxWarningAlert>
            <NxCode>.nx-viewport-sized__container</NxCode> unsets the top margin of all of its
            immediate children in order to address the margin-collapsing issue described above. It is believed that this
            should correctly address the issue in the vast majority of cases for RSC elements, however it is possible
            that there are combinations of elements where this would not result in the correct spacing. Application
            developers are encouraged to double check that the effective spacing between elements is the same with
            and without the <NxCode>nx-viewport-sized</NxCode> family of classes, and to make manual
            adjustments if necessary.
          </NxWarningAlert>
        </NxTile.Content>
      </NxTile>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Expanding Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            In this example, the dynamic element is a small table whose scroll container expands to fill the
            available space in the page.
          </NxP>
          <NxP>
            Demonstrating viewport sizing requires that the other content on the page is small enough to
            give the scrollable element adequate vertical space at any supported resolution. Therefore, while the code
            snippets are displayed below, the actual live example is a separate page.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxViewportSizedExpandingExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
        </NxTile.Content>
        <NxTile.Content className="nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <NxAccordion.Title>Code Examples</NxAccordion.Title>
            </NxAccordion.Header>
            <CodeExample content={NxViewportSizedExpandingExample} />
          </NxStatefulAccordion>
        </NxTile.Content>
      </NxTile>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Shrinking Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            In this example, the dynamic element is a large table whose scroll container shrinks to fit into the page.
          </NxP>
          <NxP>
            Demonstrating viewport sizing requires that the other content on the page is small enough to
            give the scrollable element adequate vertical space at any supported resolution. Therefore, while the code
            snippets are displayed below, the actual live example is a separate page.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxViewportSizedExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
        </NxTile.Content>
        <NxTile.Content className="nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <NxAccordion.Title>Code Examples</NxAccordion.Title>
            </NxAccordion.Header>
            <CodeExample content={NxViewportSizedExample} />
          </NxStatefulAccordion>
        </NxTile.Content>
      </NxTile>
      <NxTile>
        <NxTile.Header>
          <NxTile.HeaderTitle>
            <NxH2>Adjacent Scrollables Example</NxH2>
          </NxTile.HeaderTitle>
        </NxTile.Header>
        <NxTile.Content>
          <NxP>
            In this example, two adjacent scrollable elements are present.{' '}
            <NxCode>.nx-viewport-size__container--adjacent</NxCode> is used on the closest common ancestor of the
            two scrollables in order to facilitate this.
          </NxP>
          <NxP>
            In this situation, widths and spacing between the adjacent children will often be usage-specific,
            requiring custom styles as demonstrated here.
          </NxP>
          <NxP>
            <NxTextLink href="#/NxViewportSizedAdjacentExample">
              Click here to navigate to the live example.
            </NxTextLink>
          </NxP>
        </NxTile.Content>
        <NxTile.Content className="nx-tile-content--accordion-container">
          <NxStatefulAccordion>
            <NxAccordion.Header>
              <NxAccordion.Title>Code Examples</NxAccordion.Title>
            </NxAccordion.Header>
            <CodeExample content={NxViewportSizedAdjacentStyles} language="scss" />
            <CodeExample content={NxViewportSizedAdjacentExample} />
          </NxStatefulAccordion>
        </NxTile.Content>
      </NxTile>
    </>
  );
}
