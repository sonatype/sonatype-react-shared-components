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

const NxViewportSizedScrollableExample =
      require('!!raw-loader!./NxViewportSizedScrollableExample.tsx').default,
    NxViewportSizedScrollableGrowableExample =
      require('!!raw-loader!./NxViewportSizedScrollableGrowableExample.tsx').default;

export default function NxViewportOrientedScrollableSizingPage() {
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
              <span className="nx-list__text">Default child width</span>
              <span className="nx-list__subtext">
                Block elements laid out within a block container will have a width of 100% by default. Children of a
                flex column container, on the other hand, will default to their intrinsic
                width. <code className="nx-code">width: 100%</code> must be explicitly applied to the children to
                restore the normal behavior.
              </span>
            </li>
          </ul>
          <p className="nx-p">
            The <code className="nx-code">nx-viewport-sized-scrollable</code> family of CSS classes accomplishes the
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
                <NxTableCell><code className="nx-code">nx-page-main--viewport-sized-scrollable</code></NxTableCell>
                <NxTableCell>Modifier of <code className="nx-code">.nx-page-main</code></NxTableCell>
                <NxTableCell>
                  Pages which use a viewport-sized-scrollable must add this class to
                  the <code className="nx-code">.nx-page-main</code> element in order to convert it to a flex container.
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell><code className="nx-code">nx-viewport-sized-scrollable-parent</code></NxTableCell>
                <NxTableCell>
                  Each element that is both an ancestor of the desired scrollable element and a desendant
                  of <code className="nx-code">.nx-page-main</code>
                </NxTableCell>
                <NxTableCell>
                  In order to pass the sizing down from <code className="nx-code">.nx-page-main</code> to the
                  scrollable, every ancestor in between must also be a flex container, set up using this class.
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell><code className="nx-code">nx-viewport-sized-scrollable-parent--growable</code></NxTableCell>
                <NxTableCell>
                  Modifier on each <code className="nx-code">.nx-viewport-sized-scrollable-parent</code>
                </NxTableCell>
                <NxTableCell>
                  Adding this modifier causes the scrollable to also grow to fit the page if there is extra space.
                  By default (without this modifier), the nx-viewport-sized-scrollable classes only cause the scrollable
                  to shrink when it is too large, and leave it at its natural height if there is extra space.
                </NxTableCell>
              </NxTableRow>
              <NxTableRow>
                <NxTableCell><code className="nx-code">nx-viewport-sized-scrollable</code></NxTableCell>
                <NxTableCell>
                  The <code className="nx-code">.nx-scrollable</code> that is intended to adjust to the size of
                  the page.
                </NxTableCell>
                <NxTableCell>
                  This class makes the target <code className="nx-code">.nx-scrollable</code> shrink from its natural
                  height to fit the page. It removes the default max-height from
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
            content, and the page itself scrolls at the viewport level. <strong>Only the "section scrolling" mode is
            compatible with viewport-sized-scrollables.</strong> Note that although the RSC gallery generally uses page
            scrolling, the live example pages for the nx-viewport-sized-scrollable classes use section scrolling.
          </NxInfoAlert>
          <NxWarningAlert>
            <code className="nx-code">.nx-viewport-sized-scrollable-parent</code> unsets the top margin of all of its
            immediate children in order to address the margin-collapsing issue described above. It is believed that this
            should correctly address the issue in the vast majority of cases for RSC elements, however it is possible
            that there are combinations of elements where this would not result in the correct spacing. Application
            developers are encouraged to double check that the effective spacing between elements is the same with
            and without the nx-viewport-sized-scrollable classes, and to make manual adjustments if necessary.
          </NxWarningAlert>
        </div>
      </section>
      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Typical Example</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <p className="nx-p">
            Demonstrating a viewport-sized-scrollable requires that the other content on the page is small enough to
            give the scrollable element adequate vertical space at any supported resolution. Therefore, while the code
            snippets are displayed below, the actual live example is a separate page.
          </p>
          <p className="nx-p">
            <a className="nx-text-link" href="#/NxViewportSizedScrollableExample">
              Click here to navigate to the live example.
            </a>
          </p>
          <CodeExample content={NxViewportSizedScrollableExample} />
        </div>
      </section>

      <section className="nx-tile">
        <header className="nx-tile-header">
          <div className="nx-tile-header__title">
            <h2 className="nx-h2">Growable Example</h2>
          </div>
        </header>
        <div className="nx-tile-content">
          <p className="nx-p">
            By default, viewport-sized-scrollables will only shrink to fit the viewport. If they are naturally shorter
            than the available space, they will not grow to fill it. If it is desired for a viewport-sized-scrollable
            to also grow to fit the available space,
            the <code className="nx-code">.nx-viewport-sized-scrollable-parent--growable</code> class can be added
            to its ancestors. Follow the link below to see an example.
          </p>
          <p className="nx-p">
            <a className="nx-text-link" href="#/NxViewportSizedScrollableGrowableExample">
              Click here to navigate to the live example.
            </a>
          </p>
          <CodeExample content={NxViewportSizedScrollableGrowableExample} />
        </div>
      </section>
    </>
  );
}
