/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxTextLink, NxTable, NxP, NxCode, NxTile, NxH3 } from '@sonatype/react-shared-components';

import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';

import NxFormLayoutExample from './NxFormLayoutExample';
import NxFormHorizontalLayoutExample from './NxFormHorizontalLayoutExample';
import NxFormInlineLayoutExample from './NxFormInlineLayoutExample';

const NxFormLayoutCode = require('./NxFormLayoutExample?raw');
const NxFormHorizontalLayoutCode = require('./NxFormHorizontalLayoutExample?raw');
const NxFormInlineLayoutCode = require('./NxFormInlineLayoutExample?raw');

const NxFormLayoutPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        This page demonstrates holistic examples of forms built
        using <NxCode><NxTextLink href="#/pages/Form">NxForm</NxTextLink></NxCode>,{' '}
        <NxCode><NxTextLink href="#/pages/Form Group">NxFormGroup</NxTextLink></NxCode>,{' '}
        <NxCode><NxTextLink href="#/pages/Text Input">NxTextInput</NxTextLink></NxCode>, etc.
      </NxP>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Component Summary</NxH3>
        </NxTile.SubsectionHeader>
        <NxTable>
          <NxTable.Head>
            <NxTable.Row>
              <NxTable.Cell>Component</NxTable.Cell>
              <NxTable.Cell>Location</NxTable.Cell>
              <NxTable.Cell>Details</NxTable.Cell>
            </NxTable.Row>
          </NxTable.Head>
          <NxTable.Body>
            <NxTable.Row>
              <NxTable.Cell><NxCode><NxTextLink href="#/pages/Form">NxForm</NxTextLink></NxCode></NxTable.Cell>
              <NxTable.Cell>Top-Level</NxTable.Cell>
              <NxTable.Cell>
                Form component with styling reset and various default behaviors.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                <NxCode><NxTextLink href="#/pages/Stateful Form">NxStatefulForm</NxTextLink></NxCode>
              </NxTable.Cell>
              <NxTable.Cell>Top-Level alternative to <NxCode>NxForm</NxCode>.</NxTable.Cell>
              <NxTable.Cell>
                An alternative to <NxCode>NxForm</NxCode> that internalizes the logic around when to show form-wide
                validation errors.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell>
                <NxCode><NxTextLink href="#/pages/Form Group">NxFormGroup</NxTextLink></NxCode>
              </NxTable.Cell>
              <NxTable.Cell>
                Descendant of <NxCode>NxForm</NxCode>, potentially wrapped in <NxCode>NxFormRow</NxCode>.
              </NxTable.Cell>
              <NxTable.Cell>
                Wrapper for an individual form control which gives it a label and optional sublabel.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxFormRow</NxCode></NxTable.Cell>
              <NxTable.Cell>Descendant of <NxCode>NxForm</NxCode>.</NxTable.Cell>
              <NxTable.Cell>
                Container for multiple <NxCode>NxFormGroup</NxCode> or <NxCode>NxButtonBar</NxCode>s which causes them
                to lay out horizontally rather than stack vertically.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode><NxTextLink href="#/pages/Fieldset">NxFieldset</NxTextLink></NxCode></NxTable.Cell>
              <NxTable.Cell>Descendant of <NxCode>NxForm</NxCode>.</NxTable.Cell>
              <NxTable.Cell>
                A fieldset styled similarly to <NxCode>NxFormGroup</NxCode>, intended as a wrapper for groups of{' '}
                <NxCode>NxCheckbox</NxCode>es, <NxCode>NxRadio</NxCode>s, or <NxCode>NxToggle</NxCode>s.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode><NxTextLink href="#/pages/Read Only">NxReadOnly</NxTextLink></NxCode></NxTable.Cell>
              <NxTable.Cell>Descendant of <NxCode>NxForm</NxCode>.</NxTable.Cell>
              <NxTable.Cell>
                Static/read-only data presented in a format that matches the interactive parts of the form: the data
                labels are styled equivalently to <NxCode>NxFormGroup</NxCode>'s labels, and the data itself takes
                the place of a form control such as <NxCode>NxTextInput</NxCode>.
              </NxTable.Cell>
            </NxTable.Row>
            <NxTable.Row>
              <NxTable.Cell><NxCode>NxFooter</NxCode></NxTable.Cell>
              <NxTable.Cell>Part of <NxCode>NxForm</NxCode>, not used directly by calling code.</NxTable.Cell>
              <NxTable.Cell>
                <NxCode>NxForm</NxCode> renders a footer element which contains submission and form-wide validation
                errors (at the appropriate times), the submit button, optionally a cancel button, and additional
                buttons provided by the caller.
              </NxTable.Cell>
            </NxTable.Row>
          </NxTable.Body>
        </NxTable>
      </NxTile.Subsection>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>Form Accessibility</NxH3>
        </NxTile.SubsectionHeader>
        <NxP>
          Larger forms should be identified using either the <NxCode>aria-label</NxCode>
          {' '}attribute to provide a descriptive title, or the <NxCode>aria-labelledby</NxCode>
          {' '}attribute when existing text is available. Doing so will include the
          {' '}<NxCode>&lt;form&gt;</NxCode> element in the{' '}
          <NxTextLink href="https://www.w3.org/TR/wai-aria-practices/examples/landmarks/HTML5.html" external>
            landmark
          </NxTextLink>
          {' '}structure, and will be identified by screen readers.
        </NxP>
      </NxTile.Subsection>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="General Example"
                        id="nx-form-layout-example"
                        codeExamples={NxFormLayoutCode}
                        liveExample={NxFormLayoutExample}>
      This example shows a standard vertical form layout with validation on some fields and read-only data.
    </GalleryExampleTile>

    <GalleryExampleTile title="Horizontal form layout"
                        id="nx-form-layout-horizontal-example"
                        liveExample={NxFormHorizontalLayoutExample}
                        codeExamples={NxFormHorizontalLayoutCode}>
      This example demonstrates a form layout with horizontally placed text input fields. Note that the checkbox and
      radio fieldsets remain vertically separated, they should not be placed side-by-side. This example also
      demonstrates the use of an <NxCode>NxErrorAlert</NxCode> in the footer.
    </GalleryExampleTile>

    <GalleryExampleTile title="Inline form layout"
                        id="nx-form-layout-inline-example"
                        liveExample={NxFormInlineLayoutExample}
                        codeExamples={NxFormInlineLayoutCode}>
      This example demonstrates a form layout with a button placed inline with a text input field.
    </GalleryExampleTile>
  </>;

export default NxFormLayoutPage;
