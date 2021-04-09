/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentProps, ReactElement } from 'react';
import classnames from 'classnames';

type ElementType<E extends keyof JSX.IntrinsicElements> = ReactElement<ComponentProps<E>, E>;
type ComponentConstructorType<E extends keyof JSX.IntrinsicElements> = (p: ComponentProps<E>) => ElementType<E>;

export default function withClass<E extends keyof JSX.IntrinsicElements>(
  El: E,
  withClassName: string
): ComponentConstructorType<E> {
  return function WithClassWrapper({ className, ...otherProps }: ComponentProps<E>): ElementType<E> {
    // There should be a safer way but I can't figure it out; TS keeps thinking that
    // the props need to satisfy all possible types of E at the same time if I construct the JSX
    // using El
    /* eslint-disable @typescript-eslint/no-explicit-any */
    const CastEl = El as any,
        classes = classnames(withClassName, className);

    return <CastEl className={classes} { ...otherProps } />;
  };
}
