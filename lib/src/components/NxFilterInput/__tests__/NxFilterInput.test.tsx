/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import { mount, shallow } from 'enzyme';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import NxFilterInput, { Props } from '../NxFilterInput';
import NxTextInput from '../../NxTextInput/NxTextInput';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

describe('NxFilterInput', function() {
  const minimalProps = { value: '' },
      shallowComponent = enzymeUtils.getShallowComponent<Props>(NxFilterInput, minimalProps);

  it('renders a NxTextInput with the nx-filter-input class', function() {
    const component = shallowComponent();
    expect(component).toHaveClassName('nx-filter-input');
    expect(component).toMatchSelector(NxTextInput);
  });

  it('adds custom classnames as specified', function() {
    const component = shallowComponent({ className: 'foo' });
    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-filter-input');
  });

  it('passes misc props to the NxTextInput', function() {
    const onChange = jest.fn(),
        onKeyPress = jest.fn(),
        component = shallowComponent({
          value: 'foo',
          onChange,
          onKeyPress,
          id: 'bar'
        });

    expect(component).toHaveProp('value', 'foo');
    expect(component).toHaveProp('onChange', onChange);
    expect(component).toHaveProp('onKeyPress', onKeyPress);
    expect(component).toHaveProp('id', 'bar');
  });

  it('does not pass validatable, validationErrors, or type props to the NxTextInput', function() {
    const component = shallowComponent({
      validatable: true,
      validationErrors: 'It\'s all wrong',
      type: 'textarea'
    } as Partial<Props>);

    expect(component).not.toHaveProp('validatable');
    expect(component).not.toHaveProp('validationErrors');
    expect(component).not.toHaveProp('type');
  });

  it('passes isPristine = false to the NxTextInput', function() {
    expect(shallowComponent()).toHaveProp('isPristine', false);
  });

  it('puts the ref on the NxTextInput', function() {
    const ref = React.createRef<HTMLDivElement>(),

        // note: the fragment is necessary to get around an enzyme issue:
        // https://github.com/enzymejs/enzyme/issues/1852#issuecomment-433145879
        component = mount(<><NxFilterInput { ...minimalProps } ref={ref} /></>),
        domNode = component.find('div.nx-filter-input').getDOMNode();

    expect(ref.current).toBe(domNode);
  });

  it('passes an icon with nx-icon--filter-icons as the prefixContent', function() {
    const IconFixture = function() {
          return shallowComponent().prop('prefixContent');
        },
        icon = shallow(<IconFixture />);

    expect(icon).toMatchSelector(NxFontAwesomeIcon);
    expect(icon).toHaveProp(icon, faFilter);
    expect(icon).toHaveClassName('nx-icon--filter-icons');
  });
});
