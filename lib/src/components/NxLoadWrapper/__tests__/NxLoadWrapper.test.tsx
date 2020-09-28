/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import NxLoadWrapper, { Props } from '../NxLoadWrapper';
import NxLoadError from '../../NxLoadError/NxLoadError';
import NxLoadingSpinner from '../../NxLoadingSpinner/NxLoadingSpinner';

describe('NxLoadError', function() {
  const children = <div className="children"/>,
      retryHandler = jest.fn(),
      getShallowComponent = enzymeUtils.getShallowComponent<Props>(NxLoadWrapper, { children, retryHandler });

  it('renders a NxLoadError if there is an error', function() {
    const ErrorFixture = () => <NxLoadError error="foo" />;

    expect(getShallowComponent({ error: 'foo' })).toMatchElement(<ErrorFixture/>);
    expect(getShallowComponent({ error: 'foo', loading: true })).toMatchElement(<ErrorFixture />);
  });

  it('passes the retryHandler to NxLoadError', function () {
    expect(getShallowComponent({ error: 'foo' }).find(NxLoadError)).toHaveProp('retryHandler', retryHandler);
  });

  it('renders a loading spinner if error is not set and loading is true', function() {
    const SpinnerFixture = () => <NxLoadingSpinner />;

    expect(getShallowComponent({ loading: true })).toMatchElement(<SpinnerFixture/>);
    expect(getShallowComponent({ error: 'foo', loading: true })).not.toMatchElement(<SpinnerFixture/>);
  });

  it('renders provided children if loading is false and error is unset', function() {
    expect(getShallowComponent()).toContainReact(children);
    expect(getShallowComponent({ loading: false })).toContainReact(children);
    expect(getShallowComponent({ error: 'foo' })).not.toContainReact(children);
    expect(getShallowComponent({ loading: true })).not.toContainReact(children);
  });

  it('renders children provided by a function if loading is false and error is unset', function() {
    const childrenFn = () => children;

    expect(getShallowComponent({ children: childrenFn })).toContainReact(children);
    expect(getShallowComponent({ children: childrenFn, loading: false })).toContainReact(children);
    expect(getShallowComponent({ children: childrenFn, error: 'foo' })).not.toContainReact(children);
    expect(getShallowComponent({ children: childrenFn, loading: true })).not.toContainReact(children);
  });
});
