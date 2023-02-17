/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentType } from 'react';
import { act, render, RenderResult } from '@testing-library/react';

import realUserEvent from '@testing-library/user-event';
import { path, pipe } from 'ramda';
import { within } from '@testing-library/dom';
import { Options } from '@testing-library/user-event/dist/types/options';

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

export async function runTimers() {
  await act(async () => { await jest.runAllTimers(); });
}

export async function advanceTimers(time: number) {
  await act(async () => { await jest.advanceTimersByTime(time); });
}

export const userEvent = {
  ...realUserEvent,
  setup(options?: Options) {
    return realUserEvent.setup({ advanceTimers, ...options });
  }
};
