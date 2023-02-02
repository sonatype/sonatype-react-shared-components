/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import NxGlobalSidebarNavigation, { NxGlobalSidebarNavigationProps as Props } from '../NxGlobalSidebarNavigation';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

describe('NxGlobalSidebarNavigation', function() {
  const minimalProps: Props = {},
      quickRender = rtlRender<Props>(NxGlobalSidebarNavigation, minimalProps),
      renderEl = rtlRenderElement<Props>(NxGlobalSidebarNavigation, minimalProps);

  it('has a role=navigation', function() {
    expect(quickRender().getByRole('navigation')).toBeInTheDocument();
  });

  it('passes additional classes specified as props to <nav>', function() {
    const el = renderEl({ className: 'class-A' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('class-A');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes additional attributes to <nav>', function() {
    expect(renderEl({ title: 'a-title' })).toHaveAttribute('title', 'a-title');
    expect(renderEl({ id: 'some-id' })).toHaveAttribute('id', 'some-id');
  });
});
