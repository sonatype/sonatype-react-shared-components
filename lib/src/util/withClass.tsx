/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentProps, JSXElementConstructor, ReactElement } from 'react';
import classnames from 'classnames';

export default function withClass<E extends keyof JSX.IntrinsicElements>(
  withClassName: string,
  El: E
): JSXElementConstructor<ComponentProps<E>> {
  return function WithClassWrapper({ className, ...otherProps }: ComponentProps<E>): ReactElement {
    // There should be a safer way but I can't figure it out; TS keeps thinking that
    // the props need to satisfy all possible types of E at the same time if I construct the JSX
    // using El
    const CastEl = El as any,
        classes = classnames(withClassName, className);

    return <CastEl className={classes} { ...otherProps } />;
  };
}
