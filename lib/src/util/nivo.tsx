/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

export const NIVO_COLORS = [
  'var(--nx-swatch-teal-40)',
  'var(--nx-swatch-red-65)',
  'var(--nx-swatch-green-35)',
  'var(--nx-swatch-purple-60)',
  'var(--nx-swatch-orange-40)',
  'var(--nx-swatch-pink-60)',
  'var(--nx-swatch-turquoise-30)',
  'var(--nx-swatch-indigo-60)'
];

export const NIVO_THEME = {
  background: 'var(--nx-color-component-background)',
  axis: {
    domain: {
      line: { stroke: 'var(--nx-color-chart-line)' }
    },
    legend: {
      text: { fill: 'var(--nx-color-chart-text)' }
    },
    ticks: {
      line: { stroke: 'var(--nx-color-chart-line)' },
      text: { fill: 'var(--nx-color-chart-text)' }
    }
  },
  grid: {
    line: { stroke: 'var(--nx-color-chart-line)' }
  },
  legends: {
    title: {
      text: { fill: 'var(--nx-color-chart-text)' }
    },
    text: { fill: 'var(--nx-color-chart-text)' }
  },
  tooltip: {
    container: { color: 'var(--nx-color-chart-text)' }
  }
};
