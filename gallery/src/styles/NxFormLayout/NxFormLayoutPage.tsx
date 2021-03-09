/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

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
      <p className="nx-p">
        This page demonstrates the HTML and SCSS required for displaying form and form elements in an application.
        Note that all standard HTML elements in a form have corresponding SCSS classes. It's important that these
        classes are used correctly as they reset browser default form styles.
      </p>
      <p className="nx-p">
        This page does not demonstrate validation which is a part of the form element components which can be found
        in the menu to the left.
      </p>
      <table className="nx-table nx-table--gallery-props">
        <thead>
          <tr className="nx-table-row nx-table-row--header">
            <th className="nx-cell nx-cell--header">Class</th>
            <th className="nx-cell nx-cell--header">Location</th>
            <th className="nx-cell nx-cell--header">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-form</NxCode></td>
            <td className="nx-cell">Top-Level</td>
            <td className="nx-cell">
              Default form class. Resets browser <NxCode>&lt;form&gt;</NxCode> attributes and applies
              NX styles.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-form-group</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Basic container for form elements. Typically it is best to use
              the <NxCode>NxFormGroup</NxCode> react component instead of using this class directly.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-form-row</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Used as a parent when you want <NxCode>.nx-form-group</NxCode> blocks to display
              horizontally rather than stack vertically.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-label</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Standard class for <NxCode>&lt;label&gt;</NxCode> elements. This element may either be
              wrapped around the form field and sublabel, or precede them and use
              the <NxCode>for</NxCode> attribute (<NxCode>htmlFor</NxCode> is react).
              When the sublabel is present, the label <em>should</em> be set up as a
              preceding element for accessibility reasons. Using the <NxCode>NxFormGroup</NxCode>
              react component handles all of this for you and is recommended.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-label--optional</NxCode></td>
            <td className="nx-cell">Modifier</td>
            <td className="nx-cell">
              Used when you want "Optional" text to appear after a <NxCode>&lt;label&gt;</NxCode>
              element.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-sub-label</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Used when you want text below the standard <NxCode>&lt;label&gt;</NxCode> text.
              <NxCode>.nx-sub-label</NxCode> is meant to be applied to a{' '}
              <NxCode>&lt;span&gt;</NxCode> located after the{' '}
              <NxCode>&lt;label&gt;</NxCode>, though for backwards compatibility placing it within
              the <NxCode>&lt;label&gt;</NxCode> is also supported. The sublabel <em>should</em> be
              referenced as the accessibility description (i.e.
              using <NxCode>aria-describedby</NxCode>) on the form field.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-fieldset</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Applied to a <NxCode>&lt;fieldset&gt;</NxCode> element that wraps checkboxes or
              radio buttons.
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-footer</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Applied to a footer which contains the form action buttons (e.g. Submit, Cancel, etc).
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-legend</NxCode></td>
            <td className="nx-cell">Element</td>
            <td className="nx-cell">
              Standard class for <NxCode>&lt;legend&gt;</NxCode> elements. A legend is used inside of a
              <NxCode>&lt;fieldset&gt;</NxCode> in the place of a
              <NxCode>&lt;label&gt;</NxCode>
            </td>
          </tr>
          <tr className="nx-table-row">
            <td className="nx-cell"><NxCode>.nx-legend--optional</NxCode></td>
            <td className="nx-cell">Modifier</td>
            <td className="nx-cell">
              Used when you want "Optional" text to appear after a <NxCode>&lt;legend&gt;</NxCode>
              element.
            </td>
          </tr>
        </tbody>
      </table>
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
