/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxCode, NxP, NxTextLink } from '@sonatype/react-shared-components';

export default function NxTextLinkTruncationExample() {
  return (
    <div style={{ width: '475px', border: '1px solid red' }}>
      <NxP>
        <NxTextLink href="#/">This link uses the default NxTextLink styling and wraps within its container</NxTextLink>
      </NxP>
      <NxP>
        <NxTextLink href="#/" truncate>
          This link uses the <NxCode>truncate</NxCode> prop and thus truncates with an ellipsis
        </NxTextLink>
      </NxP>
      <NxP>
        <NxTextLink href="https://www.google.com/" external truncate>
          This external link shows the icon even when the text is truncated.
        </NxTextLink>
      </NxP>
      <NxP>
        <button className="nx-text-link">
          This is a button styled like a link. As a <NxCode>&lt;button&gt;</NxCode>, it cannot wrap inline with
          other text content. Therefore it behaves in the same way as a truncating <NxCode>NxTextLink</NxCode>.
        </button>
      </NxP>
    </div>
  );
}
