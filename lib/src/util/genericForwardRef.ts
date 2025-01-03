/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { Ref, RefAttributes, forwardRef, PropsWithoutRef, ReactNode } from 'react';

/*
 * The type signature that forwardRef ships with cannot pass through generic type parameters from the render
 * function that it receives - meaning that it can't decently be used with components that have parameterized types.
 * This is partially due to some of the legacy react stuff that has to be in the forwardRef type signature. Stuff like
 * `defaultProps`. When not using those legacy features, it is possible to create a simpler forwardRef type signature
 * which does enable typescript to carry through the generic type parameter to the function returned by
 * forwardRef. Note that this also strips out the propTypes property, so you'll need to add that back in
 * at the component level after using forwardRef
 *
 * Thanks to https://fettblog.eu/typescript-react-generic-forward-refs/ for help with this solution
 */
interface Holder {
  forwardRef<T, P = Record<string, unknown>>(
    render: (props: PropsWithoutRef<P>, ref: Ref<T>) => ReactNode
  ): (props: PropsWithoutRef<P> & RefAttributes<T>) => ReactNode;
}

const holder: Holder = { forwardRef };

export default holder.forwardRef;
