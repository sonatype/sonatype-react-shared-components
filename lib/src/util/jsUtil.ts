/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { curry, lensPath, set } from 'ramda';

// Workaround for https://github.com/microsoft/TypeScript/issues/47663 regarding ts-toolbelt being a transitive
// dep of ramda
import {} from 'ts-toolbelt';

/**
 * [String] -> a -> b -> b
 * Set nested property using path
 */
export const pathSet = curry((path, value, target) => set(lensPath(path), value, target));
