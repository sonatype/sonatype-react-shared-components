/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import CodeExample from '../../CodeExample';

import NxContainerHelpersExample from './NxContainerHelpersExample';
import './NxContainerHelpersExample.scss';

const nxContainerHelpersCode = require('!!raw-loader!./NxContainerHelpersExample').default,
    nxContainerHelpersScssCode = require('!!raw-loader!./NxContainerHelpersExample.scss').default;

const NxContainerHelpersPage = () =>
  <>
    <GalleryDescriptionTile>
      <p>
        The following general guidelines are recommended for the usage of padding and margin.
        The <code className="nx-code">container-vertical</code> and
        <code className="nx-code">container-horizontal</code> SCSS mixins are provided to facilitate these patterns.
      </p>
      <ul>
        <li>
          Elements should specify margin as desired in the directions in which they may have siblings, i.e. top
          and bottom for block elements or left and right for inline elements. They <em>should not</em> specify margin
          in the cross axis. Note that vertical sibling margins do collapse, but horizontal sibling margins do not.
        </li>
        <li>
          Container elements should specify padding on all four sides as desired. Containers should also remove the
          top margin of their first child and the bottom margin of their last child (or left and right margins
          respectively for containers of inline or horizontal-flex items). This means that it is fully left up to
          the container how far its children will be from its borders. No more mix of padding and the last child's
          margin at the bottom.
        </li>
        <li>
          Elements with no visible border or padding box (e.g. no background, no border) should generally not use
          padding, but should instead stick to margin for their spacing from other content. By consistently
          sticking to margin here, we remain compatible with #2 above and also with margin collapsing rules.
        </li>
      </ul>
      <p>
        The mixins facilitate point #2 above. The <code className="nx-code">container-vertical</code> mixin removes top
        margin from the first child and bottom margin from the last child, while the
        <code className="nx-code">container-horizontal</code> mixin removes the left margin from the first child and
        right margin from the last child.
      </p>
      <p>
        These guidelines do have a few caveats that developers must be aware of:
      </p>
      <ul>
        <li>
          Bare text nodes don't count in the <code className="nx-code">:first-child</code> and
          <code className="nx-code">:last-child</code> selectors that are used to implement
          guideline #2. Therefore they can cause those selectors to select the wrong thing. As a result, bare
          text nodes as siblings of actual elements should be used with caution. This is particularly awkward with
          react components that take children but which support those children being a mix of inline and block
          elements, such as <code className="nx-code">NxAlert</code>.
        </li>
        <li>
          Any CSS styles that cause the visual order of elements to not follow the document order of elements
          can similarly cause <code className="nx-code">:first-child</code> and
          <code className="nx-code">:last-child</code> problems. Floats are the most obvious offender here.
          Again, use with caution.
        </li>
        <li>
          The specificity on the <code className="nx-code">{'>'} :first-child</code> selector isn't that high as it
          turns out, and component style can sometimes inadvertently override it.
        </li>
      </ul>
    </GalleryDescriptionTile>

    <GalleryExampleTile>
      <NxContainerHelpersExample />
      <CodeExample content={nxContainerHelpersCode} />
      <CodeExample content={nxContainerHelpersScssCode} />
    </GalleryExampleTile>
  </>;

export default NxContainerHelpersPage;
