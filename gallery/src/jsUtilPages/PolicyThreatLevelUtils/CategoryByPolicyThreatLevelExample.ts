/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { categoryByPolicyThreatLevel } from '@sonatype/react-shared-components';

/* eslint-disable no-console */
console.log('CategoryByPolicyThreatLevelExample');

console.log(categoryByPolicyThreatLevel[5]); // 'severe'
console.log(categoryByPolicyThreatLevel[0]); // 'none'
console.log(categoryByPolicyThreatLevel[9]); // 'critical'

/*
 * The following statements do not compile in TypeScript due to the strict type safety enforcing that
 * only valid threat levels can be used to index into categoryByPolicyThreatLevel
 *
 * console.log(categoryByPolicyThreatLevel[11]);
 */
