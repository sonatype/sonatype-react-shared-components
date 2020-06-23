/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import './NxTruncateExample.scss';

const NxTruncateExample = () =>
  <div className="nx-truncation-examples">
    <div className="nx-truncate-example1">
      This is a very long sentence which is going to truncate with an ellipsis when it hits the end of the bounding box
      because this style is amazing.
    </div>

    <div className="nx-truncate-example2">
      This is a very long sentence which is going to truncate with an ellipsis when it hits the end of the bounding box
      because this style is amazing.
    </div>
  </div>

export default NxTruncateExample;
