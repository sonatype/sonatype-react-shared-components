/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTable, NxP, NxCode, NxWarningAlert } from '@sonatype/react-shared-components';

import NxFormGroupExample from './NxFormGroupExample';
import NxFormGroupComplexExample from './NxFormGroupComplexExample';
import NxFormGroupDeprecatedExample from './NxFormGroupDeprecatedExample';

const nxFormGroupExampleCode = require('./NxFormGroupExample?raw'),
    nxFormGroupComplexExampleCode = require('./NxFormGroupComplexExample?raw'),
    nxFormGroupDeprecatedExampleCode = require('./NxFormGroupDeprecatedExample?raw');

const NxFormGroupPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        <NxCode>.nx-form-group</NxCode> is a wrapper around a form field which provides the labels
        and overall spacing for the field. Most commonly, <NxCode>.nx-form-group</NxCode> wraps
        an <NxCode>NxTextInput</NxCode>, but it may wrap other content such as
        a <NxCode>&lt;select&gt;</NxCode>. It <em>should not</em> be used to wrap radio
        and checkbox groups, as those are best encapsulated
        in <NxCode>&lt;fieldset&gt;</NxCode> elements.
      </NxP>
      <NxWarningAlert>
        Using these styles manually is not recommended, due to the complexity of setting up the proper attributes
        for screenreader support. Use the <NxCode>NxFormGroup</NxCode> react component instead
        where possible.
      </NxWarningAlert>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Class</NxTable.Cell>
            <NxTable.Cell>Location</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-form-group</NxCode></NxTable.Cell>
            <NxTable.Cell>Typically within an <NxCode>.nx-form</NxCode></NxTable.Cell>
            <NxTable.Cell>
              Wraps a form field along with its label and sublabel. Also manages the layout of the form field
              relative to its surroundings.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-label</NxCode></NxTable.Cell>
            <NxTable.Cell>
              A <NxCode>&lt;label&gt;</NxCode> element within
              the <NxCode>.nx-form-group</NxCode>.
            </NxTable.Cell>
            <NxTable.Cell>
              The label for the form field. The label must be associated with the form field itself, this should
              be accomplished using the <NxCode>for</NxCode> attribute.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-label--optional</NxCode></NxTable.Cell>
            <NxTable.Cell>Modifier on <NxCode>.nx-label</NxCode></NxTable.Cell>
            <NxTable.Cell>
              This class should be present on the <NxCode>.nx-label</NxCode> of any form
              field which does not require a value to be entered before the form can be submitted. It adds a
              small "Optional" tag to the label UI.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-label__text</NxCode></NxTable.Cell>
            <NxTable.Cell>Wrapping text content within the <NxCode>.nx-label</NxCode></NxTable.Cell>
            <NxTable.Cell>
              The text content within the <NxCode>.nx-label</NxCode> should be wrapped in a span
              with this class. This exists to maintain compatibility with the deprecated way of laying
              out <NxCode>.nx-form-group</NxCode>s.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>nx-sub-label</NxCode></NxTable.Cell>
            <NxTable.Cell>Following the <NxCode>.nx-label</NxCode></NxTable.Cell>
            <NxTable.Cell>
              The optional sublabel content should be displayed in this element. It should have an id which is
              referenced using <NxCode>aria-describedby</NxCode> on the form field.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
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
