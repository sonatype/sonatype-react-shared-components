/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

export const NIVO_COLORS = [
  'var(--nx-color-chart-data-1)',
  'var(--nx-color-chart-data-2)',
  'var(--nx-color-chart-data-3)',
  'var(--nx-color-chart-data-4)',
  'var(--nx-color-chart-data-5)',
  'var(--nx-color-chart-data-6)',
  'var(--nx-color-chart-data-7)',
  'var(--nx-color-chart-data-8)'
];

export const NIVO_THEME = {
  background: 'var(--nx-color-component-background)',
  textColor: 'var(--nx-color-chart-text)',
  axis: {
    domain: {
      line: { stroke: 'var(--nx-color-chart-line)' }
    },
    ticks: {
      line: { stroke: 'var(--nx-color-chart-line)' }
    }
  },
  grid: {
    line: { stroke: 'var(--nx-color-chart-line)' }
  }
};
