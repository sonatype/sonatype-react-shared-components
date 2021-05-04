/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */
import React, { forwardRef } from 'react';
import './NxDonutChart.scss';
import {NxDonutChartDataPoint, Props, propTypes} from './types';
export { Props } from './types';

import classnames from 'classnames';
import { NxTooltip } from '../..';

const INNER_RADIUS_AS_PERCENT = 50; // The radius of the donut hole. Adjust this to change how "thick" the donut is.
const STROKE_WIDTH = 100 - INNER_RADIUS_AS_PERCENT; // The thickness of the donut.
const RADIUS = INNER_RADIUS_AS_PERCENT + (STROKE_WIDTH / 2);
const GAP = 0.2;

const getArcAngle = (angleOffset: number, arcLengthAsPercent: number) => {
  return angleOffset + (2 * Math.PI * ((arcLengthAsPercent) / 100));
};

const getArcEndPositionX = (radius: number, argAngle: number) => {
  return -1 * radius * Math.cos(argAngle);
};

const getArcEndPositionY = (radius: number, argAngle: number) => {
  return -1 * radius * Math.sin(argAngle);
};

const buildToolTip = (dataPoints: NxDonutChartDataPoint[]) => {
  return (
    <>
      {
          dataPoints.map(point => {
            return (
              <p key={point.label}
                 className={`nx-severity-donut-chart-tooltip__${point.severity}-arc`}
                 style={{color: point.severity}}>{point.label}: {point.value}%
              </p>
            );
          })
        }
    </>);
};

interface ArcPathProps {
  category: string;
  percentOfPie: number;
  arcStartX: number;
  arcStartY: number;
  arcEndX: number;
  arcEndY: number;
}

const ArcPath = (props: ArcPathProps) => {
  const {
    category, percentOfPie, arcStartX, arcStartY, arcEndX, arcEndY
  } = props;
  const isLargeArc = percentOfPie > 50 ? 1 : 0;
  return (
    <>
      {percentOfPie > 0 &&
        <path className={`nx-severity-donut-chart__${category}-arc`}
              d={`M ${arcStartX} ${arcStartY} A ${RADIUS} ${RADIUS} 0 ${isLargeArc} 1 ${arcEndX} ${arcEndY}`}
              strokeWidth={STROKE_WIDTH}
              stroke={category}/>
            }
    </>
  );
};

const NxDonutChart = forwardRef<SVGSVGElement, Props>(
    function NxBinaryDonutChart(props, ref) {
      const { dataPoints, className, ...svgAttrs } = props;
      const donutClasses = classnames('nx-donut-chart', className);

      let arcStartX = 0;
      let arcStartY = -RADIUS;
      let arcAngle = (Math.PI / 2);

      return (
        <NxTooltip title={buildToolTip(props.dataPoints)}>
          <svg ref={ref} viewBox="-100 -100 200 200" role="img" className={donutClasses} {...svgAttrs}>
            {
                      dataPoints.map(point => {
                        const arcEndAngle = getArcAngle(arcAngle, point.value - GAP);
                        const arcEndX = getArcEndPositionX(RADIUS, arcEndAngle);
                        const arcEndY = getArcEndPositionY(RADIUS, arcEndAngle);

                        const element = (
                          <ArcPath key={point.label}
                                   category={point.severity.valueOf()}
                                   percentOfPie={arcAngle}
                                   arcStartX={arcStartX}
                                   arcStartY={arcStartY}
                                   arcEndX={arcEndX}
                                   arcEndY={arcEndY}
                              />
                        );

                        arcAngle = getArcAngle(arcAngle, point.value);
                        arcStartX = getArcEndPositionX(RADIUS, arcAngle);
                        arcStartY = getArcEndPositionY(RADIUS, arcAngle);
                        return element;
                      })
                  }
          </svg>
        </NxTooltip>
      );
    }
);

NxDonutChart.propTypes = propTypes;

export default NxDonutChart;
