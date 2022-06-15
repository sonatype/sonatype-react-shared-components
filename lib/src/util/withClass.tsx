/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, DetailedHTMLProps, SVGProps } from 'react';
import classnames from 'classnames';

type NativeElType<E extends keyof JSX.IntrinsicElements> =
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  JSX.IntrinsicElements[E] extends DetailedHTMLProps<any, infer A> ? A :
  JSX.IntrinsicElements[E] extends SVGProps<infer B> ? B :
  never;

export default function withClass<E extends keyof JSX.IntrinsicElements>(
  El: E,
  withClassName: string,
  withRole?: string
) {
  return forwardRef<NativeElType<E>, JSX.IntrinsicElements[E]>((props: JSX.IntrinsicElements[E], ref) => {
    const {
      className,
      ...otherProps
    } = props;
    const classes = classnames(withClassName, className);
    return React.createElement(El, { className: classes, role: withRole, ref, ...otherProps});
  });
}
