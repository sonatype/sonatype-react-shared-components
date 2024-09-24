/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ThreatLevelCategory, allThreatLevelCategories } from '@sonatype/react-shared-components';

const category: ThreatLevelCategory = 'severe';

allThreatLevelCategories.indexOf(category) >= 0; // true

/*
 * The following statements do not compile in TypeScript due to the strict type safety enforcing that
 * only valid categories can be used in the ThreatLevelCategory type
 *
 * const category2: ThreatLevelCategory = 'foo';
 *
 * allThreatLevelCategories.indexOf('foo') >= 0;
 */
