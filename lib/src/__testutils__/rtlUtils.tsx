/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentType } from 'react';
import { render, RenderResult } from '@testing-library/react';

import '@testing-library/jest-dom';
import { path, pipe } from 'ramda';
import { within } from '@testing-library/dom';

export function rtlRender<P>(Component: ComponentType<P>, minimalProps: P) {
  return function renderWrapper(additionalProps?: Partial<P>): RenderResult {
    const renderResult = render(<Component { ...minimalProps } { ...additionalProps } />),
        // counterintuitively, the Queries on the return value of `render` are NOT bound to the container
        // of that render, but rather to the document. For our purposes it is much more helpful to
        // have them on the render container
        boundQueries = within(renderResult.container);

    return { ...renderResult, ...boundQueries };
  };
}

type RenderElementRetval<P> = (additionalProps?: Partial<P>) => HTMLElement | undefined;
export function rtlRenderElement<P>(Component: ComponentType<P>, minimalProps: P): RenderElementRetval<P> {
  return pipe(rtlRender(Component, minimalProps), path(['container', 'firstElementChild']));
}
