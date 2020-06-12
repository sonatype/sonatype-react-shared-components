/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxLoadError, { Props } from '../NxLoadError';
import NxButton from '../../NxButton/NxButton';
import { NxErrorAlert } from '../../NxAlert/NxAlert';

describe('NxLoadError', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxLoadError, {});

  it('does not render anything if error is unset', function() {
    expect(getShallowComponent()).toBeEmptyRender();
  });

  it('renders an error alert when error is set', function() {
    expect(getShallowComponent({ error: 'Error!' }))
        .toContainMatchingElement(NxErrorAlert);
  });

  it('passes a default title message if there is an error', function() {
    expect(getShallowComponent({ error: 'Error!' }).render().text())
        .toContain('An error occurred loading data');
  });

  it('uses the specified title message instead of the default', function() {
    expect(getShallowComponent({ error: 'Error!', titleMessage: 'This is bad' }).render().text())
        .not.toContain('An error occurred loading data');

    expect(getShallowComponent({ error: 'Error!', titleMessage: 'This is bad' }).render().text())
        .toContain('This is bad');
  });

  it('Uses the error as children', function() {
    expect(getShallowComponent({ error: 'Server Error', titleMessage: 'This is bad!' }).render().text())
        .toContain('Server Error');
  });

  it('renders the full error message', function() {
    const shallowComponent = getShallowComponent({ error: 'Server Error', titleMessage: 'This is bad!' }),
        childrenText = shallowComponent.render().text();

    expect(childrenText).toEqual('This is bad! Server Error');
  });

  it('renders a retry button if there is an error and retryHandler is set', function() {
    expect(getShallowComponent({ error: 'Error!' })).not.toContainMatchingElement(NxButton);

    expect(getShallowComponent({ error: 'Error!', retryHandler: () => {} })).toContainMatchingElement(NxButton);
    expect(getShallowComponent({ error: 'Error!', retryHandler: () => {} }).find(NxButton)).toIncludeText('Retry');
  });

  it('calls the retryHandler when the retry button is clicked', function() {
    const retryHandler = jest.fn(),
        props = { error: 'Error!', canRetry: true, retryHandler },
        component = getShallowComponent(props);

    expect(retryHandler).not.toHaveBeenCalled();

    component.find(NxButton).simulate('click');

    expect(retryHandler).toHaveBeenCalled();
  });

  it('passes unknown props to the NxErrorAlert element', function() {
    const onClick = jest.fn(),
        component = getShallowComponent({ error: 'err', id: 'foo', onClick });

    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('onClick', onClick);
  });
});
