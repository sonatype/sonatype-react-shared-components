/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { act } from 'react-dom/test-utils';
import { mount } from 'enzyme';

import * as enzymeUtils from '../../../../__testutils__/enzymeUtils';
import NxStatefulSubmitMask from '../NxStatefulSubmitMask';
import NxSubmitMask, { Props } from '../../NxSubmitMask';

describe('NxStatefulSubmitMask', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxStatefulSubmitMask, {}),
      getMountedComponent = enzymeUtils.getMountedComponent<Props>(NxStatefulSubmitMask, {});

  beforeEach(function() {
    jest.useFakeTimers();
  });

  it('renders a NxSubmitMask, passing on its message and successMessage props', function() {
    const defaultPropsComponent = getShallowComponent();

    expect(defaultPropsComponent).toMatchSelector(NxSubmitMask);
    expect(defaultPropsComponent).not.toHaveProp('fullscreen');
    expect(defaultPropsComponent).not.toHaveProp('message');
    expect(defaultPropsComponent).not.toHaveProp('successMessage');

    const nonDefaultPropsComponent = getShallowComponent({
      message: 'foo',
      successMessage: 'bar',
      success: false
    });

    expect(nonDefaultPropsComponent).toMatchSelector(NxSubmitMask);
    expect(nonDefaultPropsComponent).toHaveProp('message', 'foo');
    expect(nonDefaultPropsComponent).toHaveProp('successMessage', 'bar');
    expect(nonDefaultPropsComponent).toHaveProp('success', false);
  });

  it('renders the NxSubmitMask with success=false when its success prop is not true', function() {
    expect(getShallowComponent()).toHaveProp('success', false);
    expect(getShallowComponent({ success: false })).toHaveProp('success', false);
  });

  async function runAllTimers(component: ReturnType<typeof mount>) {
    await act(async function() {
      await jest.runAllTimers();
      component.update();
    });
  }

  it('briefly renders the NxSubmitMask with success=true when its success prop is true and then renders nothing',
      async function() {
        const component = getMountedComponent({ success: true });

        // we have to use mount due to the use of useEffect, and that means we only see the actual DOM nodes
        // not the shallow children
        expect(component).toContainExactlyOneMatchingElement('.nx-submit-mask--success');

        await runAllTimers(component);

        expect(component).toBeEmptyRender();
      }
  );

  it('does not disappear if set back to pending from success', async function() {
    const component = getMountedComponent({ success: true});

    expect(component).toContainExactlyOneMatchingElement('.nx-submit-mask--success');

    component.setProps({ success: false, fullscreen: false, message: null, successMessage: null });

    expect(component).toContainExactlyOneMatchingElement('.nx-submit-mask');
    expect(component.find('.nx-submit-mask')).not.toHaveClassName('nx-submit-mask--success');

    await runAllTimers(component);

    expect(component.find('.nx-submit-mask')).not.toHaveClassName('nx-submit-mask--success');
  });

  it('reappears if set back to pending from success after it disappears', async function() {
    const component = getMountedComponent({ success: true});

    expect(component.find('.nx-submit-mask')).toHaveClassName('nx-submit-mask--success');

    await runAllTimers(component);

    expect(component).toBeEmptyRender();

    component.setProps({ success: false, fullscreen: false, message: null, successMessage: null });

    expect(component.find('.nx-submit-mask')).not.toHaveClassName('nx-submit-mask--success');
  });

  it('disappears after a time when passed success=true multiple times', async function() {
    const component = getMountedComponent({ success: true });

    expect(component.find('.nx-submit-mask')).toHaveClassName('nx-submit-mask--success');

    component.setProps({ success: true, fullscreen: false, message: null, successMessage: null });

    expect(component.find('.nx-submit-mask')).toHaveClassName('nx-submit-mask--success');

    await runAllTimers(component);

    expect(component).toBeEmptyRender();
  });
});
