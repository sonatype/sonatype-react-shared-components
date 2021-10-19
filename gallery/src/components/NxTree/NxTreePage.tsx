/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxH3, NxP, NxTable, NxTextLink, NxTile } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import CollapsibleExample from './NxTreeCollapsibleExample';
import StatefulExample from './NxTreeStatefulExample';
import NonCollapsibleExample from './NxTreeNonCollapsibleExample';

const collapsibleCode = require('./NxTreeCollapsibleExample?raw'),
    statefulCode = require('./NxTreeStatefulExample?raw'),
    nonCollapsibleCode = require('./NxTreeNonCollapsibleExample?raw');

const NxTreePage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        A collection of components for creating tree views with optional collapse/expand functionality.
      </NxP>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxTree</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          This is the top-level component for creating tree structures. It is used in two places - at the top of an
          entire tree view and as the container for each subtree. This component renders
          a <NxCode>&lt;ul&gt;</NxCode> and accepts all props that that element accepts. It takes no other props.
        </NxP>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxTree.Item</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Each item in the tree must be wrapped in an instance of this component which provides the tree lines,
          the collapse/expand functionality, and the indentation of any sub-items.
        </NxP>
        <NxP>
          Every <NxCode>NxTree.Item</NxCode> should have an <NxCode>NxTree.ItemLabel</NxCode> as its first child,
          optionally followed by an <NxCode>NxTree</NxCode> representing any sub-items as its second child. No other
          children are supported.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>collapsible</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>False</NxTable.Cell>
              <NxTable.Cell>False</NxTable.Cell>
              <NxTable.Cell>
                Whether a toggle should be displayed which would allow the user to collapse and expand
                the subtree rooted at this item. This prop should not be used on items that do not have a subtree.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>isOpen</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>Required when collapsible is true, ignored otherwise</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                For collaspible tree items, this prop specifies whether they are currently open
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>onToggleCollapse</NxTable.Cell>
              <NxTable.Cell>Function (() =&gt; void)</NxTable.Cell>
              <NxTable.Cell>Required when collapsible is true, ignored otherwise</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                Function to call when the collapse/expand toggle is activated by the user. This function should
                toggle the <NxCode>isOpen</NxCode> prop passed to the item.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;li&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/li">
                  HTML li Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                NxTreeItem supports any html attribute that's normally supported by the
                {' '}<NxCode>&lt;li&gt;</NxCode> element
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxTree.StatefulItem</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          It is very often the case that the collapse/expand state of each tree section has no impact on other aspects
          of the page. When that is the case, this component may be used instead of <NxCode>NxTree.Item</NxCode>
          in order to have the collapse/expand state managed automatically.
        </NxP>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Prop</NxTable.Cell>
              <NxTable.Cell>Type</NxTable.Cell>
              <NxTable.Cell>Required</NxTable.Cell>
              <NxTable.Cell>Default</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell>collapsible</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>False</NxTable.Cell>
              <NxTable.Cell>False</NxTable.Cell>
              <NxTable.Cell>
                Whether a toggle should be displayed which would allow the user to collapse and expand
                the subtree rooted at this item. This prop should not be used on items that do not have a subtree.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>defaultOpen</NxTable.Cell>
              <NxTable.Cell>boolean</NxTable.Cell>
              <NxTable.Cell>False</NxTable.Cell>
              <NxTable.Cell>True</NxTable.Cell>
              <NxTable.Cell>
                For collaspible tree items, this prop specifies whether they are initially open
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>HTML <NxCode>&lt;li&gt;</NxCode> Attributes</NxTable.Cell>
              <NxTable.Cell>
                <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/li">
                  HTML li Attributes
                </NxTextLink>
              </NxTable.Cell>
              <NxTable.Cell>No</NxTable.Cell>
              <NxTable.Cell></NxTable.Cell>
              <NxTable.Cell>
                NxTreeItem supports any html attribute that's normally supported by the
                {' '}<NxCode>&lt;li&gt;</NxCode> element
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>

      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>NxTree.ItemLabel</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          The label for a given tree item. This component should be given{' '}
          <NxTextLink external href="https://html.spec.whatwg.org/multipage/dom.html#phrasing-content">
            phrasing content
          </NxTextLink>
          {' '}as children. Oftentimes, the first element within the label will be an icon. In those instances, note
          that the spacing of the tree lines is set up such that when the label starts with an icon with a width of
          1.25em (20px at the default font size), the subtree line will be centered under that icon. For fontawesome
          icons, using fontawesome's <NxCode>fixedWidth</NxCode> modifier will result in the proper alignment.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Non-collapsible Example"
                        id="nx-tree-non-collapsible-example"
                        liveExample={NonCollapsibleExample}
                        codeExamples={[nonCollapsibleCode]}>
      An example of a non-collapsible tree view showing various combinations of subtrees.
    </GalleryExampleTile>

    <GalleryExampleTile title="Collapsible Example"
                        id="nx-tree-collapsible-example"
                        liveExample={CollapsibleExample}
                        codeExamples={[collapsibleCode]}>
      An example of a collapsible tree view showing various combinations of subtrees along with their collapse/expand
      logic.
    </GalleryExampleTile>

    <GalleryExampleTile title="Stateful Example"
                        id="nx-tree-stateful-example"
                        liveExample={StatefulExample}
                        codeExamples={[statefulCode]}>
      An example of a collapsible tree view showing various combinations of subtrees. No explicit collapse/expand
      logic is necessary since it is managed by <NxCode>NxTree.StatefulItem</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxTreePage;
