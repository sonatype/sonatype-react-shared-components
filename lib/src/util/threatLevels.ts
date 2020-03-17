/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
export const allThreatLevelCategories = ['unspecified', 'none', 'low', 'moderate', 'severe', 'critical'] as const;
export const allThreatLevelNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

export type ThreatLevelCategory = (typeof allThreatLevelCategories)[number];
export type ThreatLevelNumber = (typeof allThreatLevelNumbers)[number];

export const categoryByPolicyThreatLevel: readonly ThreatLevelCategory[] = Object.freeze([
  'none',
  'low',
  'moderate',
  'moderate',
  'severe',
  'severe',
  'severe',
  'severe',
  'critical',
  'critical',
  'critical'
]);
