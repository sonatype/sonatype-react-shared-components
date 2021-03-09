/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTableHead, NxTableRow, NxTableCell, NxTable, NxTableBody, NxWarningAlert }
  from '@sonatype/react-shared-components';

import NxFormGroupExample from './NxFormGroupExample';
import NxFormGroupComplexExample from './NxFormGroupComplexExample';
import NxFormGroupDeprecatedExample from './NxFormGroupDeprecatedExample';

const nxFormGroupExampleCode = require('./NxFormGroupExample?raw'),
    nxFormGroupComplexExampleCode = require('./NxFormGroupComplexExample?raw'),
    nxFormGroupDeprecatedExampleCode = require('./NxFormGroupDeprecatedExample?raw');

const NxFormGroupPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <NxCode>.nx-form-group</NxCode> is a wrapper around a form field which provides the labels
        and overall spacing for the field. Most commonly, <NxCode>.nx-form-group</NxCode> wraps
        an <NxCode>NxTextInput</NxCode>, but it may wrap other content such as
        a <NxCode>&lt;select&gt;</NxCode>. It <em>should not</em> be used to wrap radio
        and checkbox groups, as those are best encapsulated
        in <NxCode>&lt;fieldset&gt;</NxCode> elements.
      </p>
      <NxWarningAlert>
        Using these styles manually is not recommended, due to the complexity of setting up the proper attributes
        for screenreader support. Use the <NxCode>NxFormGroup</NxCode> react component instead
        where possible.
      </NxWarningAlert>
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
            <NxTableCell><NxCode>nx-form-group</NxCode></NxTableCell>
            <NxTableCell>Typically within an <NxCode>.nx-form</NxCode></NxTableCell>
            <NxTableCell>
              Wraps a form field along with its label and sublabel. Also manages the layout of the form field
              relative to its surroundings.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><NxCode>nx-label</NxCode></NxTableCell>
            <NxTableCell>
              A <NxCode>&lt;label&gt;</NxCode> element within
              the <NxCode>.nx-form-group</NxCode>.
            </NxTableCell>
            <NxTableCell>
              The label for the form field. The label must be associated with the form field itself, this should
              be accomplished using the <NxCode>for</NxCode> attribute.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><NxCode>nx-label--optional</NxCode></NxTableCell>
            <NxTableCell>Modifier on <NxCode>.nx-label</NxCode></NxTableCell>
            <NxTableCell>
              This class should be present on the <NxCode>.nx-label</NxCode> of any form
              field which does not require a value to be entered before the form can be submitted. It adds a
              small "Optional" tag to the label UI.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><NxCode>nx-label__text</NxCode></NxTableCell>
            <NxTableCell>Wrapping text content within the <NxCode>.nx-label</NxCode></NxTableCell>
            <NxTableCell>
              The text content within the <NxCode>.nx-label</NxCode> should be wrapped in a span
              with this class. This exists to maintain compatibility with the deprecated way of laying
              out <NxCode>.nx-form-group</NxCode>s.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><NxCode>nx-sub-label</NxCode></NxTableCell>
            <NxTableCell>Following the <NxCode>.nx-label</NxCode></NxTableCell>
            <NxTableCell>
              The optional sublabel content should be displayed in this element. It should have an id which is
              referenced using <NxCode>aria-describedby</NxCode> on the form field.
            </NxTableCell>
          </NxTableRow>
        </NxTableBody>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxFormGroupExample}
                        codeExamples={nxFormGroupExampleCode}>
      A simple example of an <NxCode>nx-form-group</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Complex Example"
                        liveExample={NxFormGroupComplexExample}
                        codeExamples={nxFormGroupComplexExampleCode}>
      An example of an <NxCode>nx-form-group</NxCode> containing a sublabel and the "Optional"
      modifier
    </GalleryExampleTile>

    <GalleryExampleTile title="Deprecated Layout Example"
                        id="nx-form-group-deprecated-example"
                        liveExample={NxFormGroupDeprecatedExample}
                        codeExamples={nxFormGroupDeprecatedExampleCode}>
      This example show an alternative layout of the <NxCode>nx-form-group</NxCode> internals. This
      layout does not require ids on any elements but at the same time does not properly support screenreaders,
      which is why it is deprecated.
    </GalleryExampleTile>
  </>;

export default NxFormGroupPage;
