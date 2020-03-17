/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, ReactNode } from 'react';
import { always } from 'ramda';

import NxLoadError from '../NxLoadError/NxLoadError';
import NxLoadingSpinner from '../NxLoadingSpinner/NxLoadingSpinner';

import { Props, propTypes } from './types';
export { Props, propTypes } from './types';

/**
 * A wrapper component that renders either a loading spinner, an error message, or if neither of those apply,
 * the specified children.  The children may optionally be specified as a function in order to compute their VDOM
 * lazily
 * @param error A message that represents an error that occurred.  If defined, will be rendered via NxLoadError
 * @param loading If true, and error is unset, a loading spinner will be rendered via NxLoadingSpinner
 * @param children VDOM to render if loading is false and error is not set
 * @param retryHandler If this is defined, a Retry button will be rendered in the NxLoadError which executes this
 * function when clicked
 */
const NxLoadWrapper: FunctionComponent<Props> =
  function NxLoadWrapper({ error, loading, children, retryHandler }) {
    const getChildren: (() => ReactNode) = children instanceof Function ? children : always(children);

    return error ? <NxLoadError error={error} retryHandler={retryHandler} /> :
      loading ? <NxLoadingSpinner /> :
      <>{getChildren()}</>;
  };

NxLoadWrapper.propTypes = propTypes;

export default NxLoadWrapper;
