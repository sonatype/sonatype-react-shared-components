/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import CodeExample from '../../CodeExample';

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
            the page content to fit the viewport height, and for one element in particular to shrink and expand
            in order to enable that fit, scrolling its contents if necessary. Often, the dynamically-sized element
            is a table or list.
          </p>
          <p className="nx-p">
            In years past, this was generally only accomplished using JavaScript helpers that would compute
            the appropriate height of the dynamic element. This approach tended to be fragile. With modern CSS however,
            it is possible to use flexbox to accomplish this goal, with some effort. The key, essentially, is to
            ensure that the highest level elements on the page are sized correctly to fill the viewport, and
            then to pass that full-height sizing down through the element tree using flexbox or grid layouts until
            the element which is intended to shrink or expand is reached. Note, of course, that it isn't really just
            that element that is dynamically sized, but rather it is that element <em>and all of its ancestors</em>.
            This is why each ancestor needs to be laid out using flexbox.
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
                developer must be aware of which margin is the larger and explicitly zero out the other.
              </span>
            </li>
            <li className="nx-list__item">
              <span className="nx-list__text">Default child width</span>
              <span className="nx-list__subtext">
                Block elements laid out within a block container will have a width of 100% by default. Children of a
                flex column container, on the other hand, will default to their intrinsic
                width. <code className="nx-code">align-items: stretch</code> must be used to restore the normal
                behavior.
              </span>
            </li>
          </ul>
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
            give the scrollable adequate vertical space at any supported resolution. Therefore, while the code
            snippets are displayed below, the actual live example is a separate page.
          </p>
          <p className="nx-p">
            <a className="nx-text-link" href="#/ViewportSizedScrollableExample">
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
            to its ancestors. Follow the linke below to see an example.
          </p>
          <p className="nx-p">
            <a className="nx-text-link" href="#/ViewportSizedScrollableGrowableExample">
              Click here to navigate to the live example.
            </a>
          </p>
          <CodeExample content={NxViewportSizedScrollableGrowableExample} />
        </div>
      </section>
    </>
  );
}
