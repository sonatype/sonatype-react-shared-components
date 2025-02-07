/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

declare global {
  namespace JSX {
    // React used to export a JSX namespace globally, but as of React 19 no longer does. The same thing is still
    // exported as React.JSX. react-fontawesome uses the global JSX.Element, so we need to re-export it here.
    export import Element = React.JSX.Element;
  }
}
