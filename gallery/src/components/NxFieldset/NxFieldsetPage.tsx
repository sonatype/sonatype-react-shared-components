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

const nxFieldsetExampleCode = require('!raw-loader!!./NxFieldsetExample').default,
    nxFieldsetSublabelExampleCode = require('!raw-loader!!./NxFieldsetSublabelExample').default,
    nxFieldsetRichLabelExampleCode = require('!raw-loader!!./NxFieldsetRichLabelExample').default,
    nxFieldsetRequiredExampleCode = require('!raw-loader!!./NxFieldsetRequiredExample').default;

const NxFieldsetPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        An <code className="nx-code">NxFieldset</code> is a wrapper around a collection of checkboxes, radios, or
        similar form elements which should be displayed to the user as a group with an overall label. When used
        with <code className="nx-code">NxCheckbox</code> or <code className="nx-code">NxRadio</code>, all inputs
        contained within a single NxFieldset should represent different options/values of the same field.
      </p>
      <p className="nx-p">
        Form fields which have their own individual label styled using <code className="nx-code">.nx-label</code>{' '}
        (including those wrapped in <code className="nx-code">NxFormGroup</code>) should not be wrapped
        in <code className="nx-code">NxFieldset</code> as the label styles between the two are intended to be identical
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
              setting <code className="nx-code">isRequired</code> to true removes the flag.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell>children</NxTableCell>
            <NxTableCell>ReactNode</NxTableCell>
            <NxTableCell>Yes</NxTableCell>
            <NxTableCell>N/A</NxTableCell>
            <NxTableCell>
              The child form elements to render within the fieldset – often a series
              of <code className="nx-code">NxRadio</code> or <code className="nx-code">NxCheckbox</code> components
              which represent different options for the same field.
            </NxTableCell>
          </NxTableRow>
        </NxTableBody>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        liveExample={NxFieldsetExample}
                        codeExamples={nxFieldsetExampleCode}>
      A basic example of an <code className="nx-code">NxFieldset</code> wrapping
      some <code className="nx-code">NxCheckbox</code>s.
    </GalleryExampleTile>

    <GalleryExampleTile title="Required Example"
                        liveExample={NxFieldsetRequiredExample}
                        codeExamples={nxFieldsetRequiredExampleCode}>
      An example of an <code className="nx-code">NxFieldset</code> wrapping
      some <code className="nx-code">NxRadio</code>s which uses the isRequired flag to remove the "Optional"
      indicator.
    </GalleryExampleTile>

    <GalleryExampleTile title="Sublabel Example"
                        liveExample={NxFieldsetSublabelExample}
                        codeExamples={nxFieldsetSublabelExampleCode}>
      An example of an <code className="nx-code">NxFieldset</code> which includes a sublabel.
    </GalleryExampleTile>

    <GalleryExampleTile title="Rich Label Content Example"
                        liveExample={NxFieldsetRichLabelExample}
                        codeExamples={nxFieldsetRichLabelExampleCode}>
      This example demonstrates that the label and sublabel can be JSX rather than just strings.
    </GalleryExampleTile>
  </>;

export default NxFieldsetPage;
