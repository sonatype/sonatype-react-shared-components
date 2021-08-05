/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTable, NxTextLink, NxP, NxCode } from '@sonatype/react-shared-components';

import NxFieldsetExample from './NxFieldsetExample';
import NxFieldsetRequiredExample from './NxFieldsetRequiredExample';
import NxFieldsetSublabelExample from './NxFieldsetSublabelExample';
import NxFieldsetRichLabelExample from './NxFieldsetRichLabelExample';

const nxFieldsetExampleCode = require('./NxFieldsetExample?raw'),
    nxFieldsetSublabelExampleCode = require('./NxFieldsetSublabelExample?raw'),
    nxFieldsetRichLabelExampleCode = require('./NxFieldsetRichLabelExample?raw'),
    nxFieldsetRequiredExampleCode = require('./NxFieldsetRequiredExample?raw');

const NxFieldsetPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        An <NxCode>NxFieldset</NxCode> is a wrapper around a collection of checkboxes, radios, or
        similar form elements which should be displayed to the user as a group with an overall label. When used
        with <NxCode>NxCheckbox</NxCode> or <NxCode>NxRadio</NxCode>, all inputs
        contained within a single NxFieldset should represent different options/values of the same field.
      </NxP>
      <NxP>
        Form fields which have their own individual label styled using <NxCode>.nx-label</NxCode>{' '}
        (including those wrapped in <NxCode>NxFormGroup</NxCode>) should not be wrapped
        in <NxCode>NxFieldset</NxCode> as the label styles between the two are intended to be identical
        and not hierarchical.
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
            <NxTable.Cell>label</NxTable.Cell>
            <NxTable.Cell>string | ReactNode</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              JSX content to render as the label for the group. Must not be null or undefined.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>sublabel</NxTable.Cell>
            <NxTable.Cell>string | ReactNode</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>empty</NxTable.Cell>
            <NxTable.Cell>JSX content to render as the sublabel for the group.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>isRequired</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>false</NxTable.Cell>
            <NxTable.Cell>
              Sets whether the input should display the optional flag – the flag is present by default and
              setting <NxCode>isRequired</NxCode> to true removes the flag.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>children</NxTable.Cell>
            <NxTable.Cell>ReactNode</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              The child form elements to render within the fieldset – often a series
              of <NxCode>NxRadio</NxCode> or <NxCode>NxCheckbox</NxCode> components
              which represent different options for the same field.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;fieldset&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/fieldset">
                HTML fieldset Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              NxFieldset supports any HTML attribute that's normally supported
              by <NxCode>&lt;fieldset&gt;</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        liveExample={NxFieldsetExample}
                        codeExamples={nxFieldsetExampleCode}>
      A basic example of an <NxCode>NxFieldset</NxCode> wrapping
      some <NxCode>NxCheckbox</NxCode>s.
    </GalleryExampleTile>

    <GalleryExampleTile title="Required Example"
                        liveExample={NxFieldsetRequiredExample}
                        codeExamples={nxFieldsetRequiredExampleCode}>
      An example of an <NxCode>NxFieldset</NxCode> wrapping
      some <NxCode>NxRadio</NxCode>s which uses the isRequired flag to remove the "Optional"
      indicator.
    </GalleryExampleTile>

    <GalleryExampleTile title="Sublabel Example"
                        liveExample={NxFieldsetSublabelExample}
                        codeExamples={nxFieldsetSublabelExampleCode}>
      An example of an <NxCode>NxFieldset</NxCode> which includes a sublabel.
    </GalleryExampleTile>

    <GalleryExampleTile title="Rich Label Content Example"
                        liveExample={NxFieldsetRichLabelExample}
                        codeExamples={nxFieldsetRichLabelExampleCode}>
      This example demonstrates that the label and sublabel can be JSX rather than just strings.
    </GalleryExampleTile>
  </>;

export default NxFieldsetPage;
