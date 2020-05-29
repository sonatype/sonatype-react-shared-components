/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import './FallbackFontExample.scss';

const FallbackFontExample = () =>
  <div>
    <span className="gallery-highlight-background-example">🙂</span>
    <span className="gallery-highlight-background-example gallery-system-default-font-face-example">🙂</span>
  </div>;

export default FallbackFontExample;
