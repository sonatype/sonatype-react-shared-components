/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
// import classnames from 'classnames';

import './NxProgressBar.scss';

const NxProgressBar = forwardRef<HTMLProgressElement, Props>(
  function NxProgressBar(props, ref) {
    const {
          className,
          content,
          ...otherProps
        } = props;

    return (
      <div { ...otherProps } ref={ref} className={className}>
        <progress></progress>
      </div>
    );
  }
);

NxProgressBar.propTypes = propTypes;

export default NxProgressBar;
