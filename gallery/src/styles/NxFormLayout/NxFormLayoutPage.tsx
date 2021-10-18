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
        This page demonstrates the HTML and SCSS required for displaying form and form elements in an application.
        Note that all standard HTML elements in a form have corresponding SCSS classes. It's important that these
        classes are used correctly as they reset browser default form styles.
      </NxP>
      <NxP>
        This page does not demonstrate validation which is a part of the form element components which can be found
        in the menu to the left.
      </NxP>
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
            <NxTable.Cell><NxCode>.nx-form</NxCode></NxTable.Cell>
            <NxTable.Cell>Top-Level</NxTable.Cell>
            <NxTable.Cell>
              Default form class. Resets browser <NxCode>&lt;form&gt;</NxCode> attributes and applies
              NX styles.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-form-group</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Basic container for form elements. Typically it is best to use
              the <NxCode>NxFormGroup</NxCode> react component instead of using this class directly.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-form-row</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Used as a parent when you want <NxCode>.nx-form-group</NxCode> blocks to display
              horizontally rather than stack vertically.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-label</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Standard class for <NxCode>&lt;label&gt;</NxCode> elements. This element may either be
              wrapped around the form field and sublabel, or precede them and use
              the <NxCode>for</NxCode> attribute (<NxCode>htmlFor</NxCode> is react).
              When the sublabel is present, the label <em>should</em> be set up as a
              preceding element for accessibility reasons. Using the <NxCode>NxFormGroup</NxCode>
              react component handles all of this for you and is recommended.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-label--optional</NxCode></NxTable.Cell>
            <NxTable.Cell>Modifier</NxTable.Cell>
            <NxTable.Cell>
              Used when you want "Optional" text to appear after a <NxCode>&lt;label&gt;</NxCode>
              element.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-sub-label</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Used when you want text below the standard <NxCode>&lt;label&gt;</NxCode> text.
              <NxCode>.nx-sub-label</NxCode> is meant to be applied to a{' '}
              <NxCode>&lt;span&gt;</NxCode> located after the{' '}
              <NxCode>&lt;label&gt;</NxCode>, though for backwards compatibility placing it within
              the <NxCode>&lt;label&gt;</NxCode> is also supported. The sublabel <em>should</em> be
              referenced as the accessibility description (i.e.
              using <NxCode>aria-describedby</NxCode>) on the form field.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-fieldset</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Applied to a <NxCode>&lt;fieldset&gt;</NxCode> element that wraps checkboxes or
              radio buttons.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-footer</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Applied to a footer which contains the form action buttons (e.g. Submit, Cancel, etc).
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-legend</NxCode></NxTable.Cell>
            <NxTable.Cell>Element</NxTable.Cell>
            <NxTable.Cell>
              Standard class for <NxCode>&lt;legend&gt;</NxCode> elements. A legend is used inside of a
              <NxCode>&lt;fieldset&gt;</NxCode> in the place of a
              <NxCode>&lt;label&gt;</NxCode>
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell><NxCode>.nx-legend--optional</NxCode></NxTable.Cell>
            <NxTable.Cell>Modifier</NxTable.Cell>
            <NxTable.Cell>
              Used when you want "Optional" text to appear after a <NxCode>&lt;legend&gt;</NxCode>
              element.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
      <NxTile.Subsection>
        <NxTile.SubsectionHeader>
          <NxH3>&lt;form&gt; Accessibility</NxH3>
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
      This example shows a standard vertical form layout with validation on some fields.
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
      This example demonstrates a form layout with the submit button placed inline with a text input field.
    </GalleryExampleTile>
  </>;

export default NxFormLayoutPage;
