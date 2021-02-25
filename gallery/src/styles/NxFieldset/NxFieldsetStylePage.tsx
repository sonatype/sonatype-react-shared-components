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
        <code className="nx-code">.nx-fieldset</code> is a wrapper around a collection of checkboxes, radios, or
        similar form elements which should be displayed to the user as a group with an overall label. When used
        with <code className="nx-code">NxCheckbox</code> or <code className="nx-code">NxRadio</code>, all inputs
        contained within a single NxFieldset should represent different options/values of the same field.
      </p>
      <p className="nx-p">
        Form fields which have their own individual label styled using <code className="nx-code">.nx-label</code>{' '}
        (including those wrapped in <code className="nx-code">.nx-form-group</code>) should not be wrapped
        in <code className="nx-code">.nx-fieldset</code> as the label styles between the two are intended to be
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
            <NxTableCell><code className="nx-code">nx-fieldset</code></NxTableCell>
            <NxTableCell>
              A <code className="nx-code">&lt;fieldset&gt;</code> within
              an <code className="nx-code">.nx-form</code>
            </NxTableCell>
            <NxTableCell>
              Wraps a collection of checkboxes or radios that represent different selections within the same
              category.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><code className="nx-code">nx-legend</code></NxTableCell>
            <NxTableCell>
              A <code className="nx-code">&lt;legend&gt;</code> element within
              the <code className="nx-code">.nx-fieldset</code>.
            </NxTableCell>
            <NxTableCell>
              The label for the fieldset.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><code className="nx-code">nx-legend--optional</code></NxTableCell>
            <NxTableCell>Modifier on <code className="nx-code">.nx-legend</code></NxTableCell>
            <NxTableCell>
              This class should be present on the <code className="nx-code">.nx-legend</code> of any form
              field which does not require a value to be entered before the form can be submitted. It adds a
              small "Optional" tag to the legend UI.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><code className="nx-code">nx-legend__text</code></NxTableCell>
            <NxTableCell>Wrapping text content within the <code className="nx-code">.nx-legend</code></NxTableCell>
            <NxTableCell>
              The text content within the <code className="nx-code">.nx-label</code> should be wrapped in a span
              with this class. This exists to maintain compatibility with the deprecated way of laying
              out <code className="nx-code">.nx-fieldset</code>s.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><code className="nx-code">nx-sub-label</code></NxTableCell>
            <NxTableCell>Following the <code className="nx-code">.nx-legend</code></NxTableCell>
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
      A simple example of an <code className="nx-code">nx-form-group</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Complex Example"
                        liveExample={NxFieldsetComplexExample}
                        codeExamples={nxFormGroupComplexExampleCode}>
      An example of an <code className="nx-code">nx-form-group</code> containing a sublabel and the "Optional"
      modifier
    </GalleryExampleTile>

    <GalleryExampleTile title="Deprecated Layout Example"
                        id="nx-fieldset-deprecated-example"
                        liveExample={NxFieldsetDeprecatedExample}
                        codeExamples={nxFormGroupDeprecatedExampleCode}>
      This example show an alternative layout of the <code className="nx-code">nx-fieldset</code> internals. In this
      layout, the <code className="nx-code">nx-sub-label</code> is inside of
      the <code className="nx-code">.nx-legend</code>. This layout is deprecated since it is inconsistent with
      the way that <code className="nx-code">.nx-sub-labels</code> are used
      within <code className="nx-code">.nx-form-group</code>.
    </GalleryExampleTile>
  </>;

export default NxFieldsetPage;
