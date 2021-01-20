/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxOverflowTooltipExample from './NxOverflowTooltipExample';
import NxOverflowTooltipDescendantExample from './NxOverflowTooltipDescendantExample';
import NxOverflowTooltipDynamicExample from './NxOverflowTooltipDynamicExample';
import { NxWarningAlert } from '@sonatype/react-shared-components';

const overflowTooltipsExampleCode = require('!!raw-loader!./NxOverflowTooltipExample').default;
const overflowTooltipsDescendantExampleCode = require('!!raw-loader!./NxOverflowTooltipDescendantExample').default;
const overflowTooltipsDynamicExampleCode = require('!!raw-loader!./NxOverflowTooltipDynamicExample').default;

export default function NxOverflowTooltipPage() {
  return (
    <>
      <GalleryDescriptionTile>
        <p className="nx-p">
          For elements that truncate overflowing text, it is often desired to have a tooltip that repeats the text,
          but which is only active if the text is in fact truncated. This component provides that functionality.
        </p>
        <p className="nx-p">
          The props that this component takes are effectively the same as those
          of <a className="nx-text-link" href="#/pages/NxTooltip"><code className="nx-code">NxTooltip</code></a>,
          however there is a behavioral difference in regards to the <code className="nx-code">title</code> prop.
          In typical use of this component, the title will be unspecified. This leaves it up to the component
          itself to determine the tooltip contents based on the "shallow-rendered" text content of the component's
          children. In cases where that does not accomplish the desired effect,
          a <code className="nx-code">title</code> may still be specified explicitly. Additionally,
          the <code className="nx-code">open</code> prop is not supported on this component.
        </p>
        <NxWarningAlert>
          Changes after initial render which affect size of the child element's content without affecting either the
          child element's text or the child element's size will not be detected. For instance, if an icon is added
          to the child, causing its content to overflow when it wasn't previously, or if the child's font size is
          increased, causing it to overflow when it wasn't previously, those changes will not cause the tooltip to
          activate. However, changes to the child's size or to its text content are detected.
        </NxWarningAlert>
      </GalleryDescriptionTile>

      <GalleryExampleTile title="Simple example"
                          id="nx-overflow-tooltip-simple-example"
                          codeExamples={overflowTooltipsExampleCode}
                          liveExample={NxOverflowTooltipExample}>
        This example demonstrates an <code className="nx-code">nx-list</code> which
        uses <code className="nx-code">NxOverflowTooltip</code> on each child element. Notice that on the last item
        in the example, the <code className="nx-code">title</code> must be explicitly specified as the
        automatically-computed title would miss the "Foo" text contributed by the child component.
      </GalleryExampleTile>

      <GalleryExampleTile title="Descendant overflow example"
                          id="nx-overflow-tooltip-descendant-example"
                          codeExamples={overflowTooltipsDescendantExampleCode}
                          liveExample={NxOverflowTooltipDescendantExample}>
        <code className="nx-code">NxOverflowTooltip</code> will trigger not only if its immediate child element
        has overflow, but also if any of its descendants have overflow. This example demonstrates that by
        placing <code className="nx-code">NxOverflowTooltip</code> around
        the <code className="nx-code">nx-list__item</code>s rather than
        the <code className="nx-code">nx-list__text</code> elements where the overflow actually occurs
      </GalleryExampleTile>

      <GalleryExampleTile title="Dynamic example"
                          id="nx-overflow-tooltip-dynamic-example"
                          codeExamples={overflowTooltipsDynamicExampleCode}
                          liveExample={NxOverflowTooltipDynamicExample}>
        This example displays user-controllable text in a paragraph wrapped
        in <code className="nx-code">NxOverflowTooltip</code>. Observe that the tooltip enables/disables
        appropriately as the text and/or container size (resizable by adjusting the browser window width) changes.
      </GalleryExampleTile>
    </>
  );
}
