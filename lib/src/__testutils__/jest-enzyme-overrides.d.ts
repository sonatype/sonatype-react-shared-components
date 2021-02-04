/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/// <reference types="react" />
/// <reference types="jest-enzyme" />

/* eslint-disable */
type Selector = string | React.ComponentType<any>;

declare namespace jest {
  interface Matchers {
    // the type defs that ship with jest-enzyme say that these methods only take strings, but they can actually take
    // React Components as well
    toMatchSelector(s: Selector): void;
    toContainMatchingElement(s: Selector): void;
    toContainMatchingElements(n: number, s: Selector): void;
    toContainExactlyOneMatchingElement(s: Selector): void;
  }
}
