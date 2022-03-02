/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxTextLink } from '@sonatype/react-shared-components';

export default function NxTextLinkTruncationExample() {
  return (
    <div style={{ width: '100px' }}>
      <NxTextLink href="#/">This link uses the default NxTextLink styling and wraps within its container</NxTextLink>
      <NxTextLink href="#/" className="nx-text-link--truncate">
        This link uses the <NxCode>nx-text-link--truncate</NxCode> class and thus truncates with an ellipsis
      </NxTextLink>
      <NxTextLink href="https://www.google.com/" external className="nx-text-link--truncate">
        This external link uses the <NxCode>nx-text-link--truncate</NxCode> class and thus truncates with an ellipsis.
        Note that the text before the external link icon truncates, so that the icon itself is always visible.
      </NxTextLink>
    </div>
  );
}
