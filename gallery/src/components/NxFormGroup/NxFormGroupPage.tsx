/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTable, NxTextLink, NxP, NxCode } from '@sonatype/react-shared-components';

import NxFormGroupExample from './NxFormGroupExample';
import NxFormGroupRequiredExample from './NxFormGroupRequiredExample';
import NxFormGroupSublabelExample from './NxFormGroupSublabelExample';
import NxFormGroupRichLabelExample from './NxFormGroupRichLabelExample';
import NxFormGroupExistingAriaExample from './NxFormGroupExistingAriaExample';

const nxFormGroupExampleCode = require('./NxFormGroupExample?raw'),
    nxFormGroupSublabelExampleCode = require('./NxFormGroupSublabelExample?raw'),
    nxFormGroupRichLabelExampleCode = require('./NxFormGroupRichLabelExample?raw'),
    nxFormGroupExistingAriaExampleCode = require('./NxFormGroupExistingAriaExample?raw'),
    nxFormGroupRequiredExampleCode = require('./NxFormGroupRequiredExample?raw');

const NxFormGroupPage = () =>
  <>
    <GalleryDescriptionTile>
      <NxP>
        An <NxCode>NxFormGroup</NxCode> is a wrapper around a form field which provides the labels
        and overall spacing. Most commonly, <NxCode>NxFormGroup</NxCode> wraps
        an <NxCode>NxTextInput</NxCode>, but it may wrap other content such as
        a <NxCode>&lt;select&gt;</NxCode>. It <em>should not</em> be used to wrap radio
        and checkbox groups, as those are best encapsulated
        in <NxCode>&lt;fieldset&gt;</NxCode> elements.
      </NxP>
      <NxTable>
        <NxTable.Head>
          <NxTable.Row>
            <NxTable.Cell>Prop</NxTable.Cell>
            <NxTable.Cell>Type</NxTable.Cell>
            <NxTable.Cell>Required</NxTable.Cell>
            <NxTable.Cell>Default</NxTable.Cell>
            <NxTable.Cell>Details</NxTable.Cell>
          </NxTable.Row>
        </NxTable.Head>
        <NxTable.Body>
          <NxTable.Row>
            <NxTable.Cell>label</NxTable.Cell>
            <NxTable.Cell>string | ReactNode</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              JSX content to render as the label for the group. Must not be null or undefined.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>sublabel</NxTable.Cell>
            <NxTable.Cell>string | ReactNode</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>empty</NxTable.Cell>
            <NxTable.Cell>JSX content to render as the sublabel for the group.</NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>isRequired</NxTable.Cell>
            <NxTable.Cell>boolean</NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>false</NxTable.Cell>
            <NxTable.Cell>
              Sets whether the input should display the optional flag – the flag is present by default and
              setting <NxCode>isRequired</NxCode> to true removes the flag.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>children</NxTable.Cell>
            <NxTable.Cell>A single ReactElement which can take an id as a prop</NxTable.Cell>
            <NxTable.Cell>Yes</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              The form element that this group wraps and labels. For accessibility reasons, it
              must be able to receive <NxCode>id</NxCode> and{' '}
              <NxCode>aria-describedby</NxCode> props which must ultimately get rendered onto the
              native input element. If these props are already present, their values
              will be respected. Otherwise, the <NxCode>NxFormGroup</NxCode> will clone and
              augment the child JSX node with autogenerated values for the props.
              If <NxCode>aria-describedby</NxCode> is provided, the autogenerated id of the sublabel
              will be appended to the existing values.
            </NxTable.Cell>
          </NxTable.Row>
          <NxTable.Row>
            <NxTable.Cell>HTML <NxCode>&lt;div&gt;</NxCode> Attributes</NxTable.Cell>
            <NxTable.Cell>
              <NxTextLink external href="https://developer.mozilla.org/en/docs/Web/HTML/Element/div">
                HTML div Attributes
              </NxTextLink>
            </NxTable.Cell>
            <NxTable.Cell>No</NxTable.Cell>
            <NxTable.Cell>N/A</NxTable.Cell>
            <NxTable.Cell>
              NxFormGroup supports any HTML attribute that's normally supported
              by <NxCode>&lt;div&gt;</NxCode>.
            </NxTable.Cell>
          </NxTable.Row>
        </NxTable.Body>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        liveExample={NxFormGroupExample}
                        codeExamples={nxFormGroupExampleCode}>
      A basic example of an <NxCode>NxFormGroup</NxCode> wrapping
      an <NxCode>NxTextInput</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Required Example"
                        liveExample={NxFormGroupRequiredExample}
                        codeExamples={nxFormGroupRequiredExampleCode}>
      An example of an <NxCode>NxFormGroup</NxCode> wrapping
      an <NxCode>NxTextInput</NxCode> which uses the isRequired flag to remove the "Optional"
      indicator.
    </GalleryExampleTile>

    <GalleryExampleTile title="Sublabel Example"
                        liveExample={NxFormGroupSublabelExample}
                        codeExamples={nxFormGroupSublabelExampleCode}>
      An example of an <NxCode>NxFormGroup</NxCode> which includes a sublabel. This example also
      shows that <NxCode>NxFormGroup</NxCode> can wrap a
      {' '}<NxCode>&lt;select&gt;</NxCode> in addition to
      an <NxCode>NxTextInput</NxCode>.
    </GalleryExampleTile>

    <GalleryExampleTile title="Rich Label Content Example"
                        liveExample={NxFormGroupRichLabelExample}
                        codeExamples={nxFormGroupRichLabelExampleCode}>
      This example demonstrates that the label and sublabel can be JSX rather than just strings.
    </GalleryExampleTile>

    <GalleryExampleTile title="Existing ID and ARIA Attributes Example"
                        liveExample={NxFormGroupExistingAriaExample}
                        codeExamples={nxFormGroupExistingAriaExampleCode}>
      This example shows how existing values of the id and aria-describedby attribute get respected/augmented.
      Inspect the live example to see the resulting attributes. This example also happens to demonstrate a
      different kind of text input – a large textarea.
    </GalleryExampleTile>
  </>;

export default NxFormGroupPage;
