/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';
import { NxTableHead, NxTableRow, NxTableCell, NxTable, NxTableBody, NxWarningAlert, NxInfoAlert }
  from '@sonatype/react-shared-components';

const NxViewportSizedExample =
      require('./NxViewportSizedExample.tsx?raw'),
    NxViewportSizedExpandingExample =
      require('./NxViewportSizedExpandingExample.tsx?raw');

export default function NxViewportSizedPage() {
  return (
    <>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Description</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <p className="nx-p">
            In applications that do not use full-page scrolling, there are often pages where it is desired for
            the page content to fit the viewport height, and for one element in particular to shrink and/or expand
            in order to enable that fit, scrolling its contents if necessary. Often, the dynamically-sized element
            is a table or list.
          </p>
          <p className="nx-p">
            In years past, this could generally only be accomplished using JavaScript helpers that would compute
            the appropriate height of the dynamic element. This approach tended to be fragile. With modern CSS however,
            it is possible to use flexbox to accomplish this goal, with some effort. The key, essentially, is to
            ensure that the highest level elements on the page are sized correctly to fill the viewport, and
            then to pass that full-height sizing down through the element tree using flexbox or grid layouts until
            the element which is intended to shrink or expand is reached. Note, of course, that it isn't really just
            the scrollable element that is dynamically sized, but rather it is that
            element <em>and all of its ancestors</em>.  This is why each ancestor needs to be laid out using flexbox.
          </p>
          <p className="nx-p">
            This approach is not without caveats. Mainly, changing the ancestor elements from block layout to
            flex layout removes some of the ancillary behaviors of block layout that we generally rely on. There are at
            least two significant places where this makes a difference:
          </p>
          <ul className="nx-list">
            <li className="nx-list__item">
              <span className="nx-list__text">Margin collapsing</span>
              <span className="nx-list__subtext">
                When children are laid out in a block container, the top and bottom margins of adjacent siblings
                collapse into one another, such that the actual space between them is the larger of the two, not the
                sum of the two. Flex containers do not do this, and so the margins double up. To mitigate this, the
                smaller of each pair of adjacent margins must be removed in CSS.
              </span>
            </li>
            <li className="nx-list__item">
              <span className="nx-list__text">Default child width with automatic margins</span>
              <span className="nx-list__subtext">
                The behavior of left and right margins set to <code className="nx-code">auto</code> differs between
                block layouts and flex-column layouts. In block layout, a child with auto side margins will default
                to the full width of its container unless it has a width or max-width set.  In flex-column layout,
                a child with auto side margins and no explicit width will default to its implicit width, even if it
                has a max-width set. To get max-width to behave the way that it does in block
                layouts, <code className="nx-code">width: 100%</code> must be applied. In RSC, this issue comes up
                around <code className="nx-code">NxAlert</code>s in particular.
              </span>
            </li>
          </ul>
          <p className="nx-p">
            The <code className="nx-code">nx-viewport-sized</code> family of CSS classes accomplishes the
            layout goals described above. These classes take care of setting the flexbox styles and mitigating the
            caveats listed above. See the class details below.
          </p>
          <NxTable>
            <NxTableHead>
              <NxTableRow>
                <NxTableCell>Class Name</NxTableCell>
                <NxTableCell>Location</NxTableCell>
                <NxTableCell>Description</NxTableCell>
              </NxTableRow>
            </NxTableHead>
            <NxTableBody>
              <NxTableRow>
                <NxTableCell><code className="nx-code">nx-viewport-sized</code></NxTableCell>
                <NxTableCell>
                  An ancestor element which is already sized to take up all available height by other means outside
                  of <code className="nx-code">nx-viewport-sized</code>. Typically
                  an <code className="nx-code">.nx-page-main</code> or <code className="nx-code">.nx-page-sidebar</code>
                </NxTableCell>
                <NxTableCell>
                  Viewport-sized pages inherit their height from a parent element which is already sized to the
                  available on-screen height through other means. When using the RSC page layout classes, this parent
                  element would be the <code className="nx-code">.nx-page-main</code> or{' '}
                  <code className="nx-code">.nx-page-sidebar</code>, which get their height from the cross-axis
                  alignment settings on <code className="nx-code">.nx-page-content</code>, which in turn gets its height
                  from the flex layout of <code className="nx-code">.nx-page</code>, which gets it's height from
                  <code className="nx-code">.nx-body</code> and <code className="nx-code">.nx-html</code> having
                  height 100%, which ultimately sets it all to the viewport's height. The already-correctly-sized
                  parent (e.g. <code className="nx-code">.nx-page-main</code>) must include
                  the <code className="nx-code">.nx-viewport-sized</code> class in order to turn it into a flex
                  container capable of sizing its children based on its own height.
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell><code className="nx-code">nx-viewport-sized__container</code></NxTableCell>
                <NxTableCell>
                  Each element that is both a descendant
                  of <code className="nx-code">.nx-viewport-sized</code> and an ancestor of the element which is
                  intended to dynamically take up the slack in the page.
                </NxTableCell>
                <NxTableCell>
                  In order to pass the sizing down from <code className="nx-code">.nx-viewport-sized</code> to the
                  dynamically-sized scrollable, every ancestor in between must also be a flex container, set up
                  using this class.
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell><code className="nx-code">nx-viewport-sized__scrollable</code></NxTableCell>
                <NxTableCell>
                  The <code className="nx-code">.nx-scrollable</code> that is intended to adjust to the size of
                  the page.
                </NxTableCell>
                <NxTableCell>
                  This class makes the target <code className="nx-code">.nx-scrollable</code> shrink or expand from its
                  natural height to fit the page. It removes the default max-height from
                  the <code className="nx-code">.nx-scrollable</code>.
                </NxTableCell>
              </NxTableRow>
            </NxTableBody>
          </NxTable>
          <NxInfoAlert>
            As described on the <a className="nx-text-link" href="#/pages/Page Layout">Page Layout</a> page,
            RSC's page-level styles support two overall scrolling modes. In the default "section scrolling" mode,
            the <code className="nx-code">.nx-page-sidebar</code> and <code className="nx-code">.nx-page-main</code>
            are sized the fill the available space in the viewport and may scroll individually if their contents
            require. In the alternative "page scrolling" mode, those two elements are allowed to be as tall as their
            content, and the page itself scrolls at the viewport level.{' '}
            <strong>
              Only the "section scrolling" mode is compatible with <code className="nx-code">nx-viewport-sized</code>.
            </strong>
            {' '}Note that although the RSC gallery generally uses page scrolling, the live example pages for
            the <code className="nx-code">nx-viewport-sized</code> classes use section scrolling.
          </NxInfoAlert>
          <NxWarningAlert>
            <code className="nx-code">.nx-viewport-sized__container</code> unsets the top margin of all of its
            immediate children in order to address the margin-collapsing issue described above. It is believed that this
            should correctly address the issue in the vast majority of cases for RSC elements, however it is possible
            that there are combinations of elements where this would not result in the correct spacing. Application
            developers are encouraged to double check that the effective spacing between elements is the same with
            and without the <code className="nx-code">nx-viewport-sized</code> family of classes, and to make manual
            adjustments if necessary.
          </NxWarningAlert>
        </div>
      </section>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Expanding Example</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <p className="nx-p">
            In this example, the dynamic element is a small table whose scroll container expands to fill the
            available space in the page.
          </p>
          <p className="nx-p">
            Demonstrating viewport sizing requires that the other content on the page is small enough to
            give the scrollable element adequate vertical space at any supported resolution. Therefore, while the code
            snippets are displayed below, the actual live example is a separate page.
          </p>
          <p className="nx-p">
            <a className="nx-text-link" href="#/NxViewportSizedExpandingExample">
              Click here to navigate to the live example.
            </a>
          </p>
          <CodeExample content={NxViewportSizedExpandingExample} />
        </div>
      </section>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Shrinking Example</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <p className="nx-p">
            In this example, the dynamic element is a large table whose scroll container shrinks to fit into the page.
          </p>
          <p className="nx-p">
            Demonstrating viewport sizing requires that the other content on the page is small enough to
            give the scrollable element adequate vertical space at any supported resolution. Therefore, while the code
            snippets are displayed below, the actual live example is a separate page.
          </p>
          <p className="nx-p">
            <a className="nx-text-link" href="#/NxViewportSizedExample">
              Click here to navigate to the live example.
            </a>
          </p>
          <CodeExample content={NxViewportSizedExample} />
        </div>
      </section>
    </>
  );
}
