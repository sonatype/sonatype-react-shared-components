/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTableHead, NxTableRow, NxTableCell, NxTable, NxTableBody }
  from '@sonatype/react-shared-components';

import NxFieldsetExample from './NxFieldsetExample';
import NxFieldsetComplexExample from './NxFieldsetComplexExample';
import NxFieldsetDeprecatedExample from './NxFieldsetDeprecatedExample';

const nxFormGroupExampleCode = require('./NxFieldsetExample?raw'),
    nxFormGroupComplexExampleCode = require('./NxFieldsetComplexExample?raw'),
    nxFormGroupDeprecatedExampleCode = require('./NxFieldsetDeprecatedExample?raw');

const NxFieldsetPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <NxCode>.nx-fieldset</NxCode> is a wrapper around a collection of checkboxes, radios, or
        similar form elements which should be displayed to the user as a group with an overall label. When used
        with <NxCode>NxCheckbox</NxCode> or <NxCode>NxRadio</NxCode>, all inputs
        contained within a single NxFieldset should represent different options/values of the same field.
      </p>
      <p className="nx-p">
        Form fields which have their own individual label styled using <NxCode>.nx-label</NxCode>{' '}
        (including those wrapped in <NxCode>.nx-form-group</NxCode>) should not be wrapped
        in <NxCode>.nx-fieldset</NxCode> as the label styles between the two are intended to be
        identical and not hierarchical.
      </p>
      <NxTable>
        <NxTableHead>
          <NxTableRow>
            <NxTableCell>Class</NxTableCell>
            <NxTableCell>Location</NxTableCell>
            <NxTableCell>Details</NxTableCell>
          </NxTableRow>
        </NxTableHead>
        <NxTableBody>
          <NxTableRow>
            <NxTableCell><NxCode>nx-fieldset</NxCode></NxTableCell>
            <NxTableCell>
              A <NxCode>&lt;fieldset&gt;</NxCode> within
              an <NxCode>.nx-form</NxCode>
            </NxTableCell>
            <NxTableCell>
              Wraps a collection of checkboxes or radios that represent different selections within the same
              category.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><NxCode>nx-legend</NxCode></NxTableCell>
            <NxTableCell>
              A <NxCode>&lt;legend&gt;</NxCode> element within
              the <NxCode>.nx-fieldset</NxCode>.
            </NxTableCell>
            <NxTableCell>
              The label for the fieldset.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><NxCode>nx-legend--optional</NxCode></NxTableCell>
            <NxTableCell>Modifier on <NxCode>.nx-legend</NxCode></NxTableCell>
            <NxTableCell>
              This class should be present on the <NxCode>.nx-legend</NxCode> of any form
              field which does not require a value to be entered before the form can be submitted. It adds a
              small "Optional" tag to the legend UI.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><NxCode>nx-legend__text</NxCode></NxTableCell>
            <NxTableCell>Wrapping text content within the <NxCode>.nx-legend</NxCode></NxTableCell>
            <NxTableCell>
              The text content within the <NxCode>.nx-label</NxCode> should be wrapped in a span
              with this class. This exists to maintain compatibility with the deprecated way of laying
              out <NxCode>.nx-fieldset</NxCode>s.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><NxCode>nx-sub-label</NxCode></NxTableCell>
            <NxTableCell>Following the <NxCode>.nx-legend</NxCode></NxTableCell>
            <NxTableCell>
              The optional sublabel content should be displayed in this element.
            </NxTableCell>
          </NxTableRow>
        </NxTableBody>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxFieldsetExample}
                        codeExamples={nxFormGroupExampleCode}>
      A simple example of an <NxCode>nx-form-group</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Complex Example"
                        liveExample={NxFieldsetComplexExample}
                        codeExamples={nxFormGroupComplexExampleCode}>
      An example of an <NxCode>nx-form-group</NxCode> containing a sublabel and the "Optional"
      modifier
    </GalleryExampleTile>

    <GalleryExampleTile title="Deprecated Layout Example"
                        id="nx-fieldset-deprecated-example"
                        liveExample={NxFieldsetDeprecatedExample}
                        codeExamples={nxFormGroupDeprecatedExampleCode}>
      This example show an alternative layout of the <NxCode>nx-fieldset</NxCode> internals. In this
      layout, the <NxCode>nx-sub-label</NxCode> is inside of
      the <NxCode>.nx-legend</NxCode>. This layout is deprecated since it is inconsistent with
      the way that <NxCode>.nx-sub-labels</NxCode> are used
      within <NxCode>.nx-form-group</NxCode>.
    </GalleryExampleTile>
  </>;

export default NxFieldsetPage;
