/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import { mount, shallow } from 'enzyme';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

import NxFilterInput, { Props } from '../NxFilterInput';
import { PrivateNxTextInput } from '../../NxTextInput/NxTextInput';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxButton from '../../NxButton/NxButton';
import Close from '../../../icons/Close';

describe('NxFilterInput', function() {
  const minimalProps = { value: '' },
      shallowComponent = enzymeUtils.getShallowComponent<Props>(NxFilterInput, minimalProps),
      MountedComponent = enzymeUtils.getMountedComponent<Props>(NxFilterInput, minimalProps);

  it('renders a PrivateNxTextInput with the nx-filter-input class', function() {
    const component = shallowComponent();
    expect(component).toHaveClassName('nx-filter-input');
    expect(component).toMatchSelector(PrivateNxTextInput);
  });

  it('adds custom classnames as specified', function() {
    const component = shallowComponent({ className: 'foo' });
    expect(component).toHaveClassName('foo');
    expect(component).toHaveClassName('nx-filter-input');
  });

  it('passes misc props to the PrivateNxTextInput', function() {
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

  it('does not pass validatable, validationErrors, or type props to the PrivateNxTextInput', function() {
    const component = shallowComponent({
      validatable: true,
      validationErrors: 'It\'s all wrong',
      type: 'textarea'
    } as Partial<Props>);

    expect(component).not.toHaveProp('validatable');
    expect(component).not.toHaveProp('validationErrors');
    expect(component).not.toHaveProp('type');
  });

  it('passes isPristine = false to the PrivateNxTextInput', function() {
    expect(shallowComponent()).toHaveProp('isPristine', false);
  });

  it('puts the ref on the PrivateNxTextInput', function() {
    const ref = React.createRef<HTMLDivElement>(),

        // note: the fragment is necessary to get around an enzyme issue:
        // https://github.com/enzymejs/enzyme/issues/1852#issuecomment-433145879
        component = mount(<><NxFilterInput { ...minimalProps } ref={ref} /></>),
        domNode = component.find('div.nx-filter-input').getDOMNode();

    expect(ref.current).toBe(domNode);
  });

  it('passes an faFilter icon with nx-icon--filter-icons as the prefixContent when searchIcon is undefined',
      function() {
        const IconFixture = function() {
              return shallowComponent().prop('prefixContent');
            },
            icon = shallow(<IconFixture />);

        expect(icon).toMatchSelector(NxFontAwesomeIcon);
        expect(icon).toHaveProp(icon, faFilter);
        expect(icon).toHaveClassName('nx-icon--filter-icons');
      }
  );

  it('passes an faSearch icon with nx-icon--filter-icons as the prefixContent when searchIcon is true', function() {
    const IconFixture = function() {
          return shallowComponent({ searchIcon: true }).prop('prefixContent');
        },
        icon = shallow(<IconFixture />);

    expect(icon).toMatchSelector(NxFontAwesomeIcon);
    expect(icon).toHaveProp(icon, faSearch);
    expect(icon).toHaveClassName('nx-icon--filter-icons');
  });

  it('passes an NxButton with the Close icon and nx-btn--clear classname as the suffixContent', function() {
    const BtnFixture = function() {
          return shallowComponent().prop('suffixContent');
        },
        btn = shallow(<BtnFixture />);

    expect(btn).toExist();
    expect(btn).toMatchSelector(NxButton);
    expect(btn.children()).toMatchSelector(Close);
    expect(btn).toHaveClassName('nx-btn--clear');
  });

  it('clears input text when the Escape key is pressed', function() {
    const onKeyDown = jest.fn(),
        component = shallowComponent({ onKeyDown, value: 'a' });

    component.simulate('keyDown', { key: 'Escape' });

    expect(component).toHaveText('');
  });

  it('clears input text when the clear filter button is clicked', function() {
    const component = MountedComponent({ value: 'a' }),
        btn = component.find('.nx-btn--clear').hostNodes();

    expect(btn).toExist();

    btn.simulate('click');

    expect(component).toHaveText('');
  });

  it('sets the nx-filter-input--empty class if the value is empty or only whitespace', function() {
    expect(shallowComponent()).toHaveClassName('nx-filter-input--empty');
    expect(shallowComponent({ value: '\n\t \u00A0' })).toHaveClassName('nx-filter-input--empty');
    expect(shallowComponent({ value: 'a' })).not.toHaveClassName('nx-filter-input--empty');
    expect(shallowComponent({ value: ' a ' })).not.toHaveClassName('nx-filter-input--empty');
    expect(shallowComponent({ value: 'a b' })).not.toHaveClassName('nx-filter-input--empty');
  });
});
