/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxDateInput, { Props } from '../NxDateInput';
import NxTextInput from '../../NxTextInput/NxTextInput';

describe('NxDateInput', function() {
  const minimalProps = {
        value: '',
        isPristine: false
      },
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxDateInput, minimalProps);

  it('should have an NxTextInput under the hood', function() {
    const component = getShallowComponent();
    const div = component.find(NxTextInput);
    expect(div).toExist();
  });

  it('should have an NxTextInput with isDateType set to true', function() {
    const component = getShallowComponent();
    const input = component.find(NxTextInput);
    expect(input).toHaveProp('isDateInput', true);
  });
});
