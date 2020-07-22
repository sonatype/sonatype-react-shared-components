/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import * as enzymeUtils from '../../../../__testutils__/enzymeUtils';
import NxStatefulAlert, {
  NxStatefulInfoAlert,
  NxStatefulErrorAlert,
  NxStatefulWarningAlert,
  NxStatefulSuccessAlert
} from '../NxStatefulAlert';

import NxAlert, {
  NxInfoAlert,
  NxErrorAlert,
  NxWarningAlert,
  NxSuccessAlert
} from '../../NxAlert';
import { JSXElementConstructor } from 'react';

function statefulAlertTests(
  StatefulAlert: JSXElementConstructor<any>,
  StatelessAlert: JSXElementConstructor<any>,
  minimalProps = {})
{
  return function() {
    const getShallowComponent = enzymeUtils.getShallowComponent<any>(StatefulAlert, minimalProps);

    it('renders a NxAlert with the passed-in props', function() {
      const component = getShallowComponent({ className: 'bar', id: 'baz' });

      expect(component).toMatchSelector(StatelessAlert);
      expect(component).toHaveProp({
        ...minimalProps,
        className: 'bar',
        id: 'baz',
      });
    });

    it('passes an onClose prop to the NxAlert, that when triggered causes the render to become empty', function() {
      const component = getShallowComponent();

      component.simulate('close');
      expect(component).toBeEmptyRender();
    });
  }
}

describe('NxStatefulAlert', statefulAlertTests(NxStatefulAlert, NxAlert, { icon: faCheckCircle }));
describe('NxStatefulErrorAlert', statefulAlertTests(NxStatefulErrorAlert, NxErrorAlert));
describe('NxStatefulWarningAlert', statefulAlertTests(NxStatefulWarningAlert, NxWarningAlert));
describe('NxStatefulSuccessAlert', statefulAlertTests(NxStatefulSuccessAlert, NxSuccessAlert));
describe('NxStatefulInfoAlert', statefulAlertTests(NxStatefulInfoAlert, NxInfoAlert));
