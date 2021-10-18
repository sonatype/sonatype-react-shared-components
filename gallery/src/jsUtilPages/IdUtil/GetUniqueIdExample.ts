/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { getUniqueId } from '@sonatype/react-shared-components';

/* eslint-disable no-console */

// uniqueId will be a string along the lines of "my-prefix-3d9ea23dbee12f01"
const uniqueId = getUniqueId('my-prefix');
console.log(uniqueId);

// uniqueId2 will be a string again with the specified prefix ("my-prefix") but with different
// hex characters afterwards
const uniqueId2 = getUniqueId('my-prefix');
console.log(uniqueId2);
