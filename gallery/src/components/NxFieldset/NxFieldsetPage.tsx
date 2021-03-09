/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTableHead, NxTableRow, NxTableCell, NxTable, NxTableBody } from '@sonatype/react-shared-components';

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
      <p className="nx-p">
        An <NxCode>NxFieldset</NxCode> is a wrapper around a collection of checkboxes, radios, or
        similar form elements which should be displayed to the user as a group with an overall label. When used
        with <NxCode>NxCheckbox</NxCode> or <NxCode>NxRadio</NxCode>, all inputs
        contained within a single NxFieldset should represent different options/values of the same field.
      </p>
      <p className="nx-p">
        Form fields which have their own individual label styled using <NxCode>.nx-label</NxCode>{' '}
        (including those wrapped in <NxCode>NxFormGroup</NxCode>) should not be wrapped
        in <NxCode>NxFieldset</NxCode> as the label styles between the two are intended to be identical
        and not hierarchical.
      </p>
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell>Prop</NxTableCell>
            <NxTableCell>Type</NxTableCell>
            <NxTableCell>Required</NxTableCell>
            <NxTableCell>Default</NxTableCell>
            <NxTableCell>Details</NxTableCell>
          </NxTableRow>
        </NxTableHead>
        <NxTableBody>
          <NxTableRow>
            <NxTableCell>label</NxTableCell>
            <NxTableCell>string | ReactNode</NxTableCell>
            <NxTableCell>Yes</NxTableCell>
            <NxTableCell>N/A</NxTableCell>
            <NxTableCell>JSX content to render as the label for the group. Must not be null or undefined.</NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>sublabel</NxTableCell>
            <NxTableCell>string | ReactNode</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>empty</NxTableCell>
            <NxTableCell>JSX content to render as the sublabel for the group.</NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>isRequired</NxTableCell>
            <NxTableCell>boolean</NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>false</NxTableCell>
            <NxTableCell>
              Sets whether the input should display the optional flag – the flag is present by default and
              setting <NxCode>isRequired</NxCode> to true removes the flag.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>children</NxTableCell>
            <NxTableCell>ReactNode</NxTableCell>
            <NxTableCell>Yes</NxTableCell>
            <NxTableCell>N/A</NxTableCell>
            <NxTableCell>
              The child form elements to render within the fieldset – often a series
              of <NxCode>NxRadio</NxCode> or <NxCode>NxCheckbox</NxCode> components
              which represent different options for the same field.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>HTML <NxCode>&lt;fieldset&gt;</NxCode> Attributes</NxTableCell>
            <NxTableCell>
              <a target="_blank"
                 rel="noopener"
                 href="https://developer.mozilla.org/en/docs/Web/HTML/Element/fieldset">
                HTML fieldset Attributes
              </a>
            </NxTableCell>
            <NxTableCell>No</NxTableCell>
            <NxTableCell>N/A</NxTableCell>
            <NxTableCell>
              NxFieldset supports any HTML attribute that's normally supported
              by <NxCode>&lt;fieldset&gt;</NxCode>.
            </NxTableCell>
          </NxTableRow>
        </NxTableBody>
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
