/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

/**
 * All Possible Policy Threat Level Categories
 */
export const allThreatLevelCategories = ['unspecified', 'none', 'low', 'moderate', 'severe', 'critical'] as const;

/**
 * All Possible Policy Threat Levels
 */
export const allThreatLevelNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

/**
 * The type containing only the possible ThreatLevelCategory values
 */
export type ThreatLevelCategory = (typeof allThreatLevelCategories)[number];

/**
 * The type containing only the possible ThreatLevelNumber values
 */
export type ThreatLevelNumber = (typeof allThreatLevelNumbers)[number];

type ThreatLevelCategoryLookup = {
    readonly [idx in ThreatLevelNumber]: ThreatLevelCategory;
};

/**
 * A lookup array used for mapping ThreatLevelNumbers to ThreatLevelCategories. Indexing into this array using a
 * given ThreatLevelNumber will result in the ThreatLevelCategory to which that number belongs.
 */
export const categoryByPolicyThreatLevel: ThreatLevelCategoryLookup = [
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
] as const;

Object.freeze(allThreatLevelCategories);
Object.freeze(allThreatLevelNumbers);
Object.freeze(categoryByPolicyThreatLevel);
