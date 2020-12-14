/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { NxFormGroup, NxStatefulTextInput } from '@sonatype/react-shared-components';

const NxFormGroupExistingAriaExample = () =>
  <>
    <p id="gallery-example-comment-description" className="nx-p">
      Comments are very useful to us so please tell us if you have any useful feedback below.
    </p>
    <NxFormGroup label="Comments" sublabel="Tell us what you really think…">
      <NxStatefulTextInput id="gallery-example-comments"
                           aria-describedby="gallery-example-comment-description"
                           className="nx-text-input--long"
                           type="textarea" />
    </NxFormGroup>
  </>;

export default NxFormGroupExistingAriaExample;
