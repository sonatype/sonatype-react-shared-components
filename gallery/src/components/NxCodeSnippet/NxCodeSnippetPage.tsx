/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import {
  NxP,
  NxCode,
  NxTextLink,
  NxWarningAlert
} from '@sonatype/react-shared-components';

import { GalleryDescriptionTile } from '../../gallery-components/GalleryTiles';

export default function NxCodeSnippetPage() {
  return (
    <GalleryDescriptionTile>
      <NxWarningAlert>
        <NxCode>NxCodeSnippet</NxCode> has been renamed to <NxCode>NxCopyToClipboard</NxCode>
        {' '}and is now deprecated and will be removed in the future.
        Please use <NxTextLink href="#/pages/Copy%20To%20Clipboard">NxCopyToClipboard</NxTextLink> instead.
      </NxWarningAlert>

      <NxP>
        A read-only textarea containing specified text content with a button to enable the user to copy that text{' '}
        content to the clipboard.
      </NxP>
    </GalleryDescriptionTile>
  );
}
