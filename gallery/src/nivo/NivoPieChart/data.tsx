/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

export const generateData = (numberOfItems: number, range: [number, number]) =>
  Array.from({ length: numberOfItems })
      .map((_, index) => ({
        id: `item-${index}`,
        value: Math.floor(Math.random() * (range[1] - range[0] + 1) + range[0])
      }));

const raw = [
  ['repo1', 102],
  ['repo2', 134],
  ['repo3', 24],
  ['repo4', 502],
  ['repo5', 53],
  ['repo6', 200],
  ['repo7', 164],
  ['repo8', 124],
  ['repo9', 332],
  ['repo10', 231],
  ['repo11', 1503]
];

export const data = raw.map(([id, value]) => ({ id, label: id, value }));

const raw2 = [
  ['critical', 102],
  ['severe', 134],
  ['moderate', 24],
  ['low', 302],
  ['none', 83],
  ['unspecified', 240]
];

export const THREAT_COLORS = [
  '#CC0028',
  '#FF8600',
  '#FFC333',
  '#00B2FF',
  '#495AB6',
  '#666666'
];

export const DATA_CVE_AFFECTED = raw2.map(([id, value]) => ({ id, label: id, value }));
