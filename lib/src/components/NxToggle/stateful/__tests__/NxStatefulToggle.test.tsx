/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import NxToggle from '../../NxToggle';
import NxStatefulToggle, { Props } from '../NxStatefulToggle';
import {getShallowComponent} from '../../../../__testutils__/enzymeUtils';

describe('NxStatefulToggle', function() {
  const simpleProps: Props = {
    inputId: 'toggle-id',
    defaultChecked: false,
    onChange: () => {},
    disabled: undefined,
    children: 'Enables whales'
  };

  const getShallow = getShallowComponent<Props>(NxStatefulToggle, {defaultChecked: false});

  it('renders a NxToggle with the provided properties', function() {
    const shallowRender = getShallow(simpleProps);

    expect(shallowRender).toMatchSelector(NxToggle);

    expect(shallowRender).toHaveProp('inputId', 'toggle-id');
    expect(shallowRender).toHaveProp('isChecked', simpleProps.defaultChecked);
    expect(shallowRender).toHaveProp('onChange');
  });

  it('sets the initial value of isChecked to the value of defaultChecked prop', function() {
    const shallowRenderWithDefaultCheckedFalse = getShallow({defaultChecked: false});
    expect(shallowRenderWithDefaultCheckedFalse).toHaveProp('isChecked', false);

    const shallowRenderWithDefaultCheckedTrue = getShallow({defaultChecked: true});
    expect(shallowRenderWithDefaultCheckedTrue).toHaveProp('isChecked', true);
  });

  it('adds the nx-toggle--disabled class if disabled is set', function() {
    expect(getShallow()).not.toHaveProp('disabled');
    expect(getShallow({ disabled: true })).toHaveProp('disabled');
  });

  it('updates isChecked prop on NxToggle when the control is toggled', function() {
    const component = getShallow(simpleProps);
    expect(component).toHaveProp('isChecked', false);
    component.simulate('change');
    expect(component).toHaveProp('isChecked', true);
  });

  it('calls its onChange prop when the input fires a change event', function() {
    const onChange = jest.fn(),
        component = getShallow({ onChange });

    expect(onChange).not.toHaveBeenCalled();
    component.simulate('change', true);
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
