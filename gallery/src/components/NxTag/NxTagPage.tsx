/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import {GalleryDescriptionTile, GalleryExampleTile} from '../../gallery-components/GalleryTiles';
import NxTagExample from './NxTagExample';
import NxSelectableTagExample from './NxSelectableTagExample';
import { NxTable, NxTableHead, NxTableCell, NxTableRow, NxTableBody } from '@sonatype/react-shared-components';

const NxTagExampleCode = require('!!raw-loader!./NxTagExample').default;
const NxSelectableTagExampleCode = require('!!raw-loader!./NxSelectableTagExample').default;

const NxTagPage = () =>
  <>
    <GalleryDescriptionTile>
        <p className="nx-p">
          There are two types of <code className="nx-code">NxTag</code> the basic tags have a single state.
          <code className="nx-code">NxSelectableTag</code> can be selected and deselected. It is up to the consumer
          what that means in the context of the UI. The are many colors provided for
          <code className="nx-code">NxTag</code> which can be specified via props.
        </p>
        <NxTable>
          <NxTableHead>
            <NxTableRow>
              <NxTableCell>Prop</NxTableCell>
              <NxTableCell>Type</NxTableCell>
              <NxTableCell>Required</NxTableCell>
              <NxTableCell>Default</NxTableCell>
              <NxTableCell>Details</NxTableCell>
            </NxTableRow>
          </NxTableHead>
          <NxTableBody>
            <NxTableRow>
              <NxTableCell>tagColor</NxTableCell>
              <NxTableCell>
                'light-blue' | 'purple' | 'pink' | 'blue' | 'red' | 'green' | 'orange' | 'yellow' | 'lime' | 'indigo'
              </NxTableCell>
              <NxTableCell>No</NxTableCell>
              <NxTableCell></NxTableCell>
              <NxTableCell>
                If no `tagColor` is specified then the default (dark blue with a grey unselected state) colors are used.
              </NxTableCell>
            </NxTableRow>
          </NxTableBody>
        </NxTable>
      </GalleryDescriptionTile>

    <GalleryExampleTile title="Simple Tag Example"
                        liveExample={NxTagExample}
                        codeExamples={NxTagExampleCode}>
      Basic tags in all available colors.
    </GalleryExampleTile>

    <GalleryExampleTile title="Selectable NxTags Example"
                        liveExample={NxSelectableTagExample}
                        codeExamples={NxSelectableTagExampleCode}>
      Selectable tags in all available colors.
    </GalleryExampleTile>

  </>;

export default NxTagPage;
