/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTable, NxCode, NxP, NxTextLink, NxH3, NxList } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFilterInputFullExample from './NxFilterInputFullExample';
import NxFilterInputSearchExample from './NxFilterInputSearchExample';
import NxFilterInputDisabledExample from './NxFilterInputDisabledExample';
import NxFilterInputDataListExample from './NxFilterInputDataListExample';

import './NxFilterInputPage.scss';

const nxFilterInputFullExampleCode = require('./NxFilterInputFullExample?raw'),
    nxFilterInputSearchExampleCode = require('./NxFilterInputSearchExample?raw'),
    nxFilterInputDisabledExampleCode = require('./NxFilterInputDisabledExample?raw'),
    nxFilterInputDataListExampleCode = require('./NxFilterInputDataListExample?raw');

const NxFilterInputPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        An input to be used for filtering purposes. After a user has text within the input field, a
        clear filter button appears within the component and is only visible/usable when there is text within
        the input field. Note: This button is for mouse use only and is therefore not focusable but still
        hoverable and clickable.
      </NxP>

      <NxH3>NxFilterInput Props</NxH3>
      <NxP>
        <NxCode>NxFilterInput</NxCode> receives a subset of the props that are valid on NxTextInput,
        as described below.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>value</NxTable.Cell>
            <NxTable.Cell>string</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>The value rendered in the text input</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onChange</NxTable.Cell>
            <NxTable.Cell>Function ((string) =&gt; void)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              A callback for when the user changes the value of the text box (e.g. by typing a letter)
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>searchIcon</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              Whether to use a "search" (magnifying glass) icon instead of the default "filter" (funnel) icon
              within the input. These are the only two icons that are supported.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>onKeyPress</NxTable.Cell>
            <NxTable.Cell>Function ((string) =&gt; void)</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              <NxP>
                A callback for when the user presses a key that doesn't necessarily change the input value
                (e.g. by hitting enter)
              </NxP>
              <NxP>
                The value given to the callback will be that of the key name, as described in the spec
                for{' '}
                <NxTextLink external href="https://www.w3.org/TR/uievents-key/#named-key-attribute-values">
                  named keys
                </NxTextLink>
              </NxP>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;input&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/input">
                Input Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>
              NxFilterInput supports any html attribute that's normally supported by HTML Inputs. The only notable
              exceptions are:
              <NxList className="nx-list--bulleted">
                <NxList.Item>
                  <NxList.Text>
                    <NxCode>defaultValue</NxCode> which is left out because it creates what's commonly
                    known as{' '}
                    <NxTextLink external href="https://reactjs.org/docs/uncontrolled-components.html">
                      uncontrolled inputs
                    </NxTextLink>
                  </NxList.Text>
                </NxList.Item>
                <NxList.Item>
                  <NxList.Text>
                    The attributes specified above, whose types are as defined here and not as specified in the
                    react propTypes.
                  </NxList.Text>
                </NxList.Item>
              </NxList>
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="NxFilterInput Example"
                        id="nx-filter-input-simple-example"
                        className="nx-filter-input-examples"
                        liveExample={NxFilterInputFullExample}
                        codeExamples={nxFilterInputFullExampleCode}>
      A simple <NxCode>NxFilterInput</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxFilterInput Search Example"
                        id="nx-filter-input-search-example"
                        className="nx-filter-input-examples"
                        liveExample={NxFilterInputSearchExample}
                        codeExamples={nxFilterInputSearchExampleCode}>
      An <NxCode>NxFilterInput</NxCode> configured to use a search icon rather than a magnifying glass icon.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxFilterInput Disabled Example"
                        id="nx-filter-input-disabled-example"
                        className="nx-filter-input-examples"
                        liveExample={NxFilterInputDisabledExample}
                        codeExamples={nxFilterInputDisabledExampleCode}>
      A disabled <NxCode>NxFilterInput</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="NxFilterInput Datalist Example"
                        id="nx-filter-input-datalist-example"
                        className="nx-filter-input-examples"
                        liveExample={NxFilterInputDataListExample}
                        codeExamples={nxFilterInputDataListExampleCode}>
      An example using a <NxCode>datalist</NxCode> with
      <NxCode>NxFilterInput</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxFilterInputPage;
