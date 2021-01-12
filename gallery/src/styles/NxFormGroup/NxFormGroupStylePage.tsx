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

const nxFormGroupExampleCode = require('!raw-loader!!./NxFormGroupExample').default,
    nxFormGroupComplexExampleCode = require('!raw-loader!!./NxFormGroupComplexExample').default,
    nxFormGroupDeprecatedExampleCode = require('!raw-loader!!./NxFormGroupDeprecatedExample').default;

const NxFormGroupPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        <code className="nx-code">.nx-form-group</code> is a wrapper around a form field which provides the labels
        and overall spacing for the field. Most commonly, <code className="nx-code">.nx-form-group</code> wraps
        an <code className="nx-code">NxTextInput</code>, but it may wrap other content such as
        a <code className="nx-code">&lt;select&gt;</code>. It <em>should not</em> be used to wrap radio
        and checkbox groups, as those are best encapsulated
        in <code className="nx-code">&lt;fieldset&gt;</code> elements.
      </p>
      <NxWarningAlert>
        Using these styles manually is not recommended, due to the complexity of setting up the proper attributes
        for screenreader support. Use the <code className="nx-code">NxFormGroup</code> react component instead
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
            <NxTableCell><code className="nx-code">nx-form-group</code></NxTableCell>
            <NxTableCell>Typically within an <code className="nx-code">.nx-form</code></NxTableCell>
            <NxTableCell>
              Wraps a form field along with its label and sublabel. Also manages the layout of the form field
              relative to its surroundings.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><code className="nx-code">nx-label</code></NxTableCell>
            <NxTableCell>
              A <code className="nx-code">&lt;label&gt;</code> element within
              the <code className="nx-code">.nx-form-group</code>.
            </NxTableCell>
            <NxTableCell>
              The label for the form field. The label must be associated with the form field itself, this should
              be accomplished using the <code className="nx-code">for</code> attribute.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><code className="nx-code">nx-label--optional</code></NxTableCell>
            <NxTableCell>Modifier on <code className="nx-code">.nx-label</code></NxTableCell>
            <NxTableCell>
              This class should be present on the <code className="nx-code">.nx-label</code> of any form
              field which does not require a value to be entered before the form can be submitted. It adds a
              small "Optional" tag to the label UI.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><code className="nx-code">nx-label__text</code></NxTableCell>
            <NxTableCell>Wrapping text content within the <code className="nx-code">.nx-label</code></NxTableCell>
            <NxTableCell>
              The text content within the <code className="nx-code">.nx-label</code> should be wrapped in a span
              with this class. This exists to maintain compatibility with the deprecated way of laying
              out <code className="nx-code">.nx-form-group</code>s.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><code className="nx-code">nx-sub-label</code></NxTableCell>
            <NxTableCell>Following the <code className="nx-code">.nx-label</code></NxTableCell>
            <NxTableCell>
              The optional sublabel content should be displayed in this element. It should have an id which is
              referenced using <code className="nx-code">aria-describedby</code> on the form field.
            </NxTableCell>
          </NxTableRow>
        </NxTableBody>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Example"
                        liveExample={NxFormGroupExample}
                        codeExamples={nxFormGroupExampleCode}>
      A simple example of an <code className="nx-code">nx-form-group</code>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Complex Example"
                        liveExample={NxFormGroupComplexExample}
                        codeExamples={nxFormGroupComplexExampleCode}>
      An example of an <code className="nx-code">nx-form-group</code> containing a sublabel and the "Optional"
      modifier
    </GalleryExampleTile>

    <GalleryExampleTile title="Deprecated Layout Example"
                        id="nx-form-group-deprecated-example"
                        liveExample={NxFormGroupDeprecatedExample}
                        codeExamples={nxFormGroupDeprecatedExampleCode}>
      This example show an alternative layout of the <code className="nx-code">nx-form-group</code> internals. This
      layout does not require ids on any elements but at the same time does not properly support screenreaders,
      which is why it is deprecated.
    </GalleryExampleTile>
  </>;

export default NxFormGroupPage;
