/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { GalleryDescriptionTile, GalleryExampleTile } from '../../gallery-components/GalleryTiles';
import { NxTableRow, NxTableBody, NxTableHead, NxTableCell, NxTable } from '@sonatype/react-shared-components';

const NxDefinitionListSimpleCode = require('!!raw-loader!./NxDefinitionListExample.html').default;

const NxDefinitionListPage = () =>
  <>
    <GalleryDescriptionTile>
      <p className="nx-p">
        A definition list styling where terms and definitions are laid out side by side in rows. Currently only
        supports zero or one definitions per term.
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
            <NxTableCell><code className="nx-code">.nx-list--definition-list</code></NxTableCell>
            <NxTableCell>
              <code className="nx-code">&lt;dl&gt;</code> which also
              has <code className="nx-code">.nx-list</code>.
            </NxTableCell>
            <NxTableCell>Root class to apply RSC definition list styles</NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><code className="nx-code">.nx-list__item</code></NxTableCell>
            <NxTableCell>
              <code className="nx-code">&lt;div&gt;</code> wrapping <code className="nx-code">&lt;dt&gt;</code>{' '}
              and <code className="nx-code">&lt;dd&gt;</code> elements
            </NxTableCell>
            <NxTableCell>
              Each <code className="nx-code">&lt;dt&gt;</code>/<code className="nx-code">&lt;dd&gt;</code> pairing
              should be wrapped in a div which is styled similarly to an item row in a normal nx-list.
            </NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><code className="nx-code">.nx-list__term</code></NxTableCell>
            <NxTableCell><code className="nx-code">&lt;dt&gt;</code></NxTableCell>
            <NxTableCell>Styles the definition term elements</NxTableCell>
          </NxTableRow>
          <NxTableRow>
            <NxTableCell><code className="nx-code">.nx-list__definition</code></NxTableCell>
            <NxTableCell><code className="nx-code">&lt;dd&gt;</code></NxTableCell>
            <NxTableCell>Styles the definition elements</NxTableCell>
          </NxTableRow>
        </NxTableBody>
      </NxTable>
    </GalleryDescriptionTile>

    <GalleryExampleTile title="Basic Example"
                        id="nx-definition-list-simple-example"
                        htmlExample={NxDefinitionListSimpleCode}
                        codeExamples={NxDefinitionListSimpleCode}>
      Basic <code className="nx-code">nx-list--definition</code> with a heading.
    </GalleryExampleTile>
  </>;

export default NxDefinitionListPage;
