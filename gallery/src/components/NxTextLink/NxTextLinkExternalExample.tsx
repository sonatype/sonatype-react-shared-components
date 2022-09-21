/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxCode, NxTextLink, NxP } from '@sonatype/react-shared-components';

export default () =>
  <>
    <NxP>
      The quick brown fox <NxTextLink external href="https://html.spec.whatwg.org/multipage/">MDN</NxTextLink> jumped
      over the lazy dog.
    </NxP>
    <NxP>
      <NxCode>
        <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">
          Another NxTextLink inside NxCode
        </NxTextLink>{' '}
      </NxCode>
    </NxP>
    <NxP>
      <NxCode>
        This is an example of{' '}
        <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a">
          another NxTextLink
        </NxTextLink>{' '}
        with text inside NxCode
      </NxCode>
    </NxP>
    <NxP>
      <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code">
        <NxCode>
          Another NxCode inside NxTextLink (Not Recommended)
        </NxCode>
      </NxTextLink>
    </NxP>
    <NxP>
      <NxTextLink external href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code">
        This is an example of another {' '}
        <NxCode>
          NxCode
        </NxCode>{' '}
        with text inside <NxCode>NxTextLink</NxCode>
      </NxTextLink>
    </NxP>
    <NxP>
      <NxTextLink external
                  href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a"
                  className="disabled"
                  onClick={evt => evt.preventDefault()}>
        This is an example of another disabled NxTextLink
      </NxTextLink>
    </NxP>
  </>;
