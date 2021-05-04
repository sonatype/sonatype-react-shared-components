/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxDonutChart from '../NxDonutChart';

describe('NxDonutChart', function() {
    const getShallowComponent = enzymeUtils.getShallowComponent(NxDonutChart, {dataPoints: []});

    it('renders an svg with the expected properties', function() {
        expect(getShallowComponent({ dataPoints: [] })).toHaveClassName('.nx-binary-donut-chart');
        expect(getShallowComponent({ dataPoints: [] })).toHaveProp('viewBox', '-100 -100 200 200');
        expect(getShallowComponent({ dataPoints: [] })).toMatchSelector('svg');
    });

});
