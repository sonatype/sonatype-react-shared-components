/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';

export default function withClass<E extends keyof JSX.IntrinsicElements, R extends HTMLElement = HTMLElement>(
  El: E,
  withClassName: string
) {
  return forwardRef<R, JSX.IntrinsicElements[E]>((props: JSX.IntrinsicElements[E], ref) => {
    const {
      className,
      ...otherProps
    } = props;
    const classes = classnames(withClassName, className);
    return React.createElement(El, { className: classes, ref, ...otherProps});
  });
}
