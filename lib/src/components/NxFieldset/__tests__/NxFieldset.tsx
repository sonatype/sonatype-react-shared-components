/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxFieldset, { Props } from '../NxFieldset';
import NxStatefulTextInput from '../../NxTextInput/stateful/NxStatefulTextInput';
import NxStatefulCheckbox from '../../NxCheckbox/stateful/NxStatefulCheckbox';

describe('NxFieldset', function() {
  const minimalProps = {
        label: 'foo',
        children: <NxStatefulTextInput/>
      },
      getShallow = getShallowComponent<Props>(NxFieldset, minimalProps);

  it('renders a .nx-fieldset fieldset with the specified attributes', function() {
    const component = getShallow({ id: 'groupId', lang: 'en_US' });

    expect(component).toMatchSelector('fieldset.nx-fieldset');
    expect(component).toHaveProp('id', 'groupId');
    expect(component).toHaveProp('lang', 'en_US');
  });

  it('adds nx-fieldset to the specified classnames', function() {
    const component = getShallow({ className: 'asdf' });

    expect(component).toHaveClassName('asdf');
    expect(component).toHaveClassName('nx-fieldset');
  });

  it('sets the ref on the fieldset', function() {
      const ref = React.createRef<HTMLFieldSetElement>(),

          // note: the fragment is necessary to get around an enzyme issue:
          // https://github.com/enzymejs/enzyme/issues/1852#issuecomment-433145879
          component = mount(<><NxFieldset { ...minimalProps } ref={ref} /></>),
          domNode = component.find('fieldset').getDOMNode();

      expect(ref.current).toBe(domNode);
  });

  it('contains the specified children', function() {
    const children = <NxStatefulCheckbox defaultChecked={false} className="foo" />,
        component = getShallow({ children });

    expect(component).toContainMatchingElement(NxStatefulCheckbox);
    expect(component.find(NxStatefulCheckbox)).toHaveClassName('foo');
  });

  describe('nx-legend', function() {
    it('is a <legend> child of NxFieldset', function() {
      expect(getShallow()).toContainMatchingElement('legend.nx-legend');
    });

    it('contains an nx-legend__text populated from the label prop', function() {
      expect(getShallow().find('.nx-legend')).toContainMatchingElement('.nx-legend__text');
      expect(getShallow().find('.nx-legend__text')).toHaveText('foo');

      expect(getShallow({ label: <span className="foo">bar</span> }).find('.nx-legend__text')).toContainReact(
        <span className="foo">bar</span>
      );
    });

    it('has the nx-legend--optional class unless the isRequired prop is true', function() {
      expect(getShallow().find('.nx-legend')).toHaveClassName('nx-legend--optional');
      expect(getShallow({ isRequired: undefined }).find('.nx-legend')).toHaveClassName('nx-legend--optional');
      expect(getShallow({ isRequired: null }).find('.nx-legend')).toHaveClassName('nx-legend--optional');
      expect(getShallow({ isRequired: false }).find('.nx-legend')).toHaveClassName('nx-legend--optional');
      expect(getShallow({ isRequired: true }).find('.nx-legend')).not.toHaveClassName('nx-legend--optional');
    });
  });

  describe('nx-sub-label', function() {
    it('is not present by default', function() {
      expect(getShallow()).not.toContainMatchingElement('.nx-sub-label');
    });

    it('is populated with the sublabel content', function() {
      expect(getShallow({ sublabel: 'qwerty' })).toContainMatchingElement('.nx-sub-label');
      expect(getShallow({ sublabel: 'qwerty' }).find('.nx-sub-label')).toHaveText('qwerty');

      expect(getShallow({ sublabel: <span className="foo">bar</span> }).find('.nx-sub-label')).toContainReact(
        <span className="foo">bar</span>
      );
    });
  });
});
