/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxContainerHelpersExample from './NxContainerHelpersExample';
import './NxContainerHelpersExample.scss';

const nxContainerHelpersCode = require('./NxContainerHelpersExample?raw'),
    nxContainerHelpersScssCode = require('./NxContainerHelpersExample.scss?raw');

const NxContainerHelpersPage = () => {
  const codeExamples = [nxContainerHelpersCode, { content: nxContainerHelpersScssCode, language: 'scss' }];

  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          The following general guidelines are recommended for the usage of padding and margin.
          The <NxCode>container-vertical</NxCode> and
          <NxCode>container-horizontal</NxCode> SCSS mixins are provided to facilitate these patterns.
        </p>
        <ul className="nx-list nx-list--bulleted">
          <li className="nx-list__item">
            Elements should specify margin as desired in the directions in which they may have siblings, i.e. top
            and bottom for block elements or left and right for inline elements. They <em>should not</em> specify margin
            in the cross axis. Note that vertical sibling margins do collapse, but horizontal sibling margins do not.
          </li>
          <li className="nx-list__item">
            Container elements should specify padding on all four sides as desired. Containers should also remove the
            top margin of their first child and the bottom margin of their last child (or left and right margins
            respectively for containers of inline or horizontal-flex items). This means that it is fully left up to
            the container how far its children will be from its borders. No more mix of padding and the last child's
            margin at the bottom.
          </li>
          <li className="nx-list__item">
            Elements with no visible border or padding box (e.g. no background, no border) should generally not use
            padding, but should instead stick to margin for their spacing from other content. By consistently
            sticking to margin here, we remain compatible with #2 above and also with margin collapsing rules.
          </li>
        </ul>
        <p className="nx-p">
          The mixins facilitate point #2 above. The <NxCode>container-vertical</NxCode> mixin removes
          top margin from the first child and bottom margin from the last child, while the{' '}
          <NxCode>container-horizontal</NxCode> mixin removes the left margin from the first child and
          right margin from the last child.
        </p>
        <p className="nx-p">
          These guidelines do have a few caveats that developers must be aware of:
        </p>
        <ul className="nx-list nx-list--bulleted">
          <li className="nx-list__item">
            Bare text nodes don't count in the <NxCode>:first-child</NxCode> and
            <NxCode>:last-child</NxCode> selectors that are used to implement
            guideline #2. Therefore they can cause those selectors to select the wrong thing. As a result, bare
            text nodes as siblings of actual elements should be used with caution. This is particularly awkward with
            react components that take children but which support those children being a mix of inline and block
            elements, such as <NxCode>NxAlert</NxCode>.
          </li>
          <li className="nx-list__item">
            Any CSS styles that cause the visual order of elements to not follow the document order of elements
            can similarly cause <NxCode>:first-child</NxCode> and
            <NxCode>:last-child</NxCode> problems. Floats are the most obvious offender here.
            Again, use with caution.
          </li>
          <li className="nx-list__item">
            The specificity on the <NxCode>{'>'} :first-child</NxCode> selector isn't that high as it
            turns out, and component style can sometimes inadvertently override it.
          </li>
        </ul>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="General Example"
                          codeExamples={codeExamples}
                          liveExample={NxContainerHelpersExample}>
        This example consists of a few HTML elements along with some styling which
        demonstrates the usage of the nx-container-helpers SCSS mixins. The outermost box is a
        vertical container. The second child box is a horizontal container. Note the vertical
        margin collapsing and the cancelling of the interior margins which would otherwise
        interfere with the padding from the container.
      </GalleryExampleTile>
    </>
  );
};

export default NxContainerHelpersPage;
