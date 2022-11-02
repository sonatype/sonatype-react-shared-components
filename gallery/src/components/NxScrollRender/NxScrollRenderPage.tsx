/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { NxCode, NxH3, NxList, NxP, NxTable, NxTile } from '@sonatype/react-shared-components';
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxScrollRenderExample from './NxScrollRenderExample';
import NxScrollRenderNoReuseExample from './NxScrollRenderNoReuseExample';
import NxScrollRenderUnfilledContainerExample from './NxScrollRenderUnfilledContainerExample';
import NxScrollRenderEmptyExample from './NxScrollRenderEmptyExample';
import NxScrollRenderEmptyListExample from './NxScrollRenderEmptyListExample';

const NxScrollRenderExampleCode = require('./NxScrollRenderExample?raw'),
    NxScrollRenderNoReuseExampleCode = require('./NxScrollRenderNoReuseExample?raw'),
    NxScrollRenderUnfilledContainerExampleCode = require('./NxScrollRenderUnfilledContainerExample?raw'),
    NxScrollRenderEmptyExampleCode = require('./NxScrollRenderEmptyExample?raw'),
    NxScrollRenderEmptyListExampleCode = require('./NxScrollRenderEmptyListExample?raw');

const NxScrollRenderPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>NxScrollRender</NxCode> is a component which may be wrapped around a scroll container in
        order to improve the rendering efficiency of its scrolled contents when those contents consist of
        a large number of uniform elements, and whose size allows only a small number of those elements to
        be visible at a time. For instance, a list that is only a few hundred pixels tall but which contains
        1000 items would be an ideal candidate for use with this component.
      </NxP>
      <NxP>
        This component works by determining which of the child elements are actually visible within the scrollable
        view at any given time, and only rendering <em>those</em> elements. Scroll positioning is kept consistent
        using spacer elements above and below the visible children, so that the scrollbar still functions as if
        all children were rendered. Optionally, <NxCode>NxScrollRender</NxCode> also reuses the actual DOM nodes
        for the rendered children in order to further improve performance by cutting down on the need to allocate
        and deallocate nodes during scrolling.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Caveats</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          There are certain limitations on the conditions in which <NxCode>NxScrollRender</NxCode> may be used,
          spelled out below:
        </NxP>
        <NxList bulleted>
          <NxList.Item>
            <NxList.Text>
              The immediate child of <NxCode>NxScrollRender</NxCode> must render a single container element, with
              scrolling styles defined. <NxCode>NxScrollRender</NxCode> does not create any container element
              itself nor add scrolling styles to its child.
            </NxList.Text>
          </NxList.Item>
          <NxList.Item>
            <NxList.Text>
              Each immediate child <NxCode>ReactElement</NxCode> within the container element must render a single
              actual DOM child of the node rendered by the container.
            </NxList.Text>
          </NxList.Item>
          <NxList.Item>
            <NxList.Text>
              Each child element within the scrolling container must be of equal height and have equal vertical
              margins. That is, for any two adjacent children within the scroll container, the distance from the
              start of the first child to the start of the next must be the same.
            </NxList.Text>
          </NxList.Item>
        </NxList>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Props</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Name</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Description</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode>children</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>ReactElement</NxCode></NxTable.Cell>
              <NxTable.Cell>True</NxTable.Cell>
              <NxTable.Cell/>
              <NxTable.Cell>
                A <NxCode>ReactElement</NxCode> which renders the scrolling container, abiding by the caveats
                described above.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>reuseChildren</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>boolean</NxCode></NxTable.Cell>
              <NxTable.Cell>False</NxTable.Cell>
              <NxTable.Cell><NxCode>true</NxCode></NxTable.Cell>
              <NxTable.Cell>
                Whether to reuse the same DOM nodes for different children as scrolling occurs. Active by default,
                this behavior is thought to generally improve performance, though it is possible that in some situations
                it may hinder it if the cost of the necessary extra React-level processing on the children is
                higher than the cost of discarding and re-creating the DOM nodes. Experiment with this property
                to see what works best for your use case. Note that when this prop is
                true, <NxCode>NxScrollRender</NxCode> will internally manage the <NxCode>key</NxCode>s of the children
                and any keys specified by the caller will be discarded.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>initialChildCount</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>number</NxCode></NxTable.Cell>
              <NxTable.Cell>False</NxTable.Cell>
              <NxTable.Cell><NxCode>40</NxCode></NxTable.Cell>
              <NxTable.Cell>
                This property exists to facilitate efficiency on initial render when the size of the scrolling
                container depends on the number of children which it contains. This typically happens with containers
                that are sized to their children but which also have some maximum height constraint. In this case,
                if <NxCode>NxScrollRender</NxCode> were to start by rendering a very small number of children, the
                container would typically start very small. Then, <NxCode>NxScrollRender</NxCode> would gradually add
                children until the container reaches its maximum size. This repeated re-rendering can be expensive.
                Therefore, <NxCode>initialChildCount</NxCode> should be set to a number high enough that the container
                reaches its full size on the first render, but not so high that that initial render is onerously
                expensive due to rendering an excessive number of children.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>spacerEl</NxCode></NxTable.Cell>
              <NxTable.Cell><NxCode>string</NxCode></NxTable.Cell>
              <NxTable.Cell>False</NxTable.Cell>
              <NxTable.Cell><NxCode>div</NxCode></NxTable.Cell>
              <NxTable.Cell>
                The HTML tag name to use when rendering the spacer elements that <NxCode>NxScrollRender</NxCode> uses to
                maintain scrollbar positioning. These elements should be valid as immediate children of the scrolling
                container. For example, if the scrolling container is a <NxCode>&lt;ul&gt;</NxCode>, this prop should be
                set to <NxCode>li</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Scroll Render Example"
                        id="nx-scroll-render-example"
                        liveExample={NxScrollRenderExample}
                        codeExamples={NxScrollRenderExampleCode}>
      An example of <NxCode>NxScrollRender</NxCode> wrapped around a scrollable <NxCode>NxList</NxCode> of
      10000 items.
    </GalleryExampleTile>

    <GalleryExampleTile title="Scroll Render Example without Reused Children"
                        id="nx-scroll-render-no-reuse-example"
                        liveExample={NxScrollRenderNoReuseExample}
                        codeExamples={NxScrollRenderNoReuseExampleCode}>
      An example identical to the one above, but with <NxCode>reuseChildren</NxCode> set to false.
    </GalleryExampleTile>

    <GalleryExampleTile title="Scroll Render Example with Unfilled Container"
                        id="nx-scroll-render-unfilled-example"
                        liveExample={NxScrollRenderUnfilledContainerExample}
                        codeExamples={NxScrollRenderUnfilledContainerExampleCode}>
      In this example, the number of children is smaller than the maximum that may be visible at one time within
      the container. <NxCode>NxScrollRender</NxCode> may still be used in this case though it offers no benefits.
      This means that using <NxCode>NxScrollRender</NxCode> on dynamic lists that may be of any size is safe.
    </GalleryExampleTile>

    <GalleryExampleTile title="Scroll Render Example with Empty Container"
                        id="nx-scroll-render-empty-example"
                        liveExample={NxScrollRenderEmptyExample}
                        codeExamples={NxScrollRenderEmptyExampleCode}>
      In this example, the scrolling container has no children at all. It is also safe to
      use <NxCode>NxScrollRender</NxCode> in this scenario.
    </GalleryExampleTile>

    <GalleryExampleTile title="Scroll Render Example with Empty List"
                        id="nx-scroll-render-empty-list-example"
                        liveExample={NxScrollRenderEmptyListExample}
                        codeExamples={NxScrollRenderEmptyListExampleCode}>
      This example is similar to the previous one, but in this case the container is an <NxCode>NxList</NxCode>
      which adds a child element indicating the Empty State when no React children are present.
      Again, <NxCode>NxScrollRender</NxCode> is safe for use in this case.
    </GalleryExampleTile>
  </>;

export default NxScrollRenderPage;
