/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxBinaryDonutChart } from '@sonatype/react-shared-components';

export default function NxBinaryDonutChartBackgroundColorExample() {
  return (
    <>
      <div className="gallery-binary-donut-chart-background"
           style={{backgroundColor: 'var(--nx-color-binary-donut-chart-background-fill)'}}>
        <NxBinaryDonutChart value={25} aria-label="25 out of 100 components identified" />
      </div>
      <div className="gallery-binary-donut-chart-background"
           style={{backgroundColor: 'var(--nx-color-binary-donut-chart-arc-stroke)'}}>
        <NxBinaryDonutChart value={25} innerRadiusPercent={25} aria-label="25 out of 100 components identified" />
        <NxBinaryDonutChart value={25} innerRadiusPercent={0} aria-label="25 out of 100 components identified" />
      </div>
    </>
  );
}
