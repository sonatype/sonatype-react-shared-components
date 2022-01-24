/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

const raw: [string, number][] = [
  ['foxes', 102],
  ['wolves', 134],
  ['dogs', 24],
  ['cats', 502],
  ['penguins', 53],
  ['chewbaccas', 1],
  ['weasels', 164],
  ['raccons', 12],
  ['pandas', 124],
  ['deers', 332],
  ['bears', 231]
];

export const data = raw.map(([id, value]) => ({ id, value }));
