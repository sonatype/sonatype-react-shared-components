/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import _useMergedRef from '@react-hook/merged-ref';

// The third party function's typings limit it slightly: it can actually accept undefineds even though it doesn't
// declare that it can.  That is an important piece of functionality since hooks can't be called conditionally, so we
// re-export the same function with the type signature fixed
export default _useMergedRef as
  <T extends unknown>(...refs: (React.Ref<T> | undefined)[]) => (instance: T | null) => void;
