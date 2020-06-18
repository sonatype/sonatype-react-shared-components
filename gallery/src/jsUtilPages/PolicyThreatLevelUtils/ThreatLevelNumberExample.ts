/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ThreatLevelNumber, allThreatLevelNumbers } from '@sonatype/react-shared-components';

const threatLevel: ThreatLevelNumber = 9;

allThreatLevelNumbers.indexOf(threatLevel) >= 0; // true

/*
 * The following statements do not compile in TypeScript due to the strict type safety enforcing that
 * only valid threat levels can be used in the ThreatLevelNumber type
 *
 * const category2: ThreatLevelNumber = 'foo';
 *
 * allThreatLevelNumbers.indexOf('foo') >= 0;
 */
