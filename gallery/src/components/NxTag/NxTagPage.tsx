/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxTextLink, NxP, NxCode, NxH3 } from '@sonatype/react-shared-components';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';

import NxTagExample from './NxTagExample';
import NxSelectableTagExample from './NxSelectableTagExample';
import NxTagNarrowExample from './NxTagNarrowExample';
import NxTagWithTooltipExample from './NxTagWithTooltipExample';
import NxSelectableTagWithTooltipExample from './NxSelectableTagWithTooltipExample';

const NxTagExampleCode = require('./NxTagExample?raw');
const NxSelectableTagExampleCode = require('./NxSelectableTagExample?raw');
const NxTagNarrowExampleCode = require('./NxTagNarrowExample?raw');
const NxTagWithTooltipExampleCode = require('./NxTagWithTooltipExample?raw');
const NxSelectableTagWithTooltipExampleCode = require('./NxSelectableTagWithTooltipExample?raw');

const NxTagPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        There are two types of <NxCode>NxTag</NxCode>. The basic tags have a single state.
        <NxCode>NxSelectableTag</NxCode> can be selected and deselected. It is up to the consumer
        what that means in the context of the UI. The are many colors provided
        for <NxCode>NxTag</NxCode> which can be specified via props.
      </NxP>
      <NxH3>Common Props</NxH3>
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
            <NxTable.Cell>color</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink href="#/pages/Selectable Colors">SelectableColor</NxTextLink>
              <br/>
              ('sky' | 'purple' | 'pink' | 'blue' | 'red' | 'turquoise' | 'orange' | 'yellow' | 'kiwi' | 'indigo')

            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>indigo</NxTable.Cell>
            <NxTable.Cell>
              If no <NxCode>color</NxCode> is specified then the default (dark grey/blue with a lighter
              grey/blue unselected state) colors are used.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/element/div">
                HTML div Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell></NxTable.Cell>
            <NxTable.Cell>
              NxTag supports any html attribute that's normally supported by
              {' '}<NxCode>&lt;div&gt;</NxCode> elements.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxH3>Selectable Tag Props</NxH3>
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
            <NxTable.Cell>onSelect</NxTable.Cell>
            <NxTable.Cell>
              Function
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell></NxTable.Cell>
            <NxTable.Cell>
              Callback that changes the value of <NxCode>selected</NxCode> below between true
              (selected) and false (unselected).
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>selected</NxTable.Cell>
            <NxTable.Cell>
              Boolean
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell></NxTable.Cell>
            <NxTable.Cell>
              Boolean for the selected/unselected state of a <NxCode>NxSelectableTag</NxCode>
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Tag Example"
                        id="nx-tag-example"
                        liveExample={NxTagExample}
                        codeExamples={NxTagExampleCode}>
      Basic tags in all available colors.
    </GalleryExampleTile>

    <GalleryExampleTile title="Selectable NxTags Example"
                        id="nx-selectable-tag-example"
                        liveExample={NxSelectableTagExample}
                        codeExamples={NxSelectableTagExampleCode}>
      Selectable tags in all available colors.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTag Constrained Width Example"
                        id="nx-tag-narrow-example"
                        liveExample={NxTagNarrowExample}
                        codeExamples={NxTagNarrowExampleCode}>
      Unselectable and Selectable tags in a narrow (250px) container to demonstrate wrapping and truncation.
      Light grey border added for clarity.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxTag With Tooltip"
                        id="nx-tag-with-tooltip-example"
                        liveExample={NxTagWithTooltipExample}
                        codeExamples={NxTagWithTooltipExampleCode}>
      An example of <NxCode>NxTag</NxCode> wrapped inside <NxCode>NxTooltip</NxCode>.{' '}
      Notice that the wrapping <NxCode>NxTooltip</NxCode> title overrides the <NxCode>NxOverflowTooltip</NxCode>{' '}
      generated when the label is truncated.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxSelectableTag With Tooltip"
                        id="nx-selectable-tag-with-tooltip-example"
                        liveExample={NxSelectableTagWithTooltipExample}
                        codeExamples={NxSelectableTagWithTooltipExampleCode}>
      An example of <NxCode>NxSelectableTag</NxCode> wrapped inside <NxCode>NxTooltip</NxCode>.{' '}
      Notice that the wrapping <NxCode>NxTooltip</NxCode> title overrides the <NxCode>NxOverflowTooltip</NxCode>{' '}
      generated when the label is truncated.
    </GalleryExampleTile>
  </>;

export default NxTagPage;
