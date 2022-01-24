/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

const raw = [
  ['fox', 102],
  ['wolf', 134],
  ['dog', 24],
  ['cat', 502],
  ['penguin', 53],
  ['chewbacca', 1],
  ['weasel', 164],
  // ['raccon', 11231],
  ['panda', 124],
  ['deer', 332],
  ['bear', 231]
];

export const data = raw.map(([id, value]) => ({ id, label: id, value }));
