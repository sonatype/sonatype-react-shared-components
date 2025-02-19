/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { JSX } from 'react';
import classnames from 'classnames';

export default function withClass<E extends keyof JSX.IntrinsicElements>(
  El: E,
  withClassName: string,
  withRole?: string
) {
  return (props: JSX.IntrinsicElements[E]) => {
    const { className, ...otherProps } = props,
        classes = classnames(withClassName, className);

    return React.createElement(El, { className: classes, role: withRole, ...otherProps});
  };
}
