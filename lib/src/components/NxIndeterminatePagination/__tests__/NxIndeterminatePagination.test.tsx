/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';

import NxIndeterminatePagination, { Props } from '../NxIndeterminatePagination';

describe('NxIndeterminatePagination', function() {
  const minimalProps: Props = {
        onPrevPageSelect: () => {},
        onNextPageSelect: () => {}
      },
      quickRender = rtlRender(NxIndeterminatePagination, minimalProps),
      renderEl = rtlRenderElement(NxIndeterminatePagination, minimalProps);

  it('renders a button with type="button" and accessible name of previous page', function() {
    const component = quickRender(),
        button = component.getByRole('button', { name: 'previous page' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAccessibleName('previous page');
  });

  it('renders a button with type="button" and accessible name of next page', function() {
    const component = quickRender(),
        button = component.getByRole('button', { name: 'next page' });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute('type', 'button');
    expect(button).toHaveAccessibleName('next page');
  });

  it('adds specified classNames to the element in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('adds specified attrs', function() {
    const el = renderEl({ id: 'foo', lang: 'en' });

    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('fires onPrevPageSelect when the prev page button is clicked', async function() {
    const user = userEvent.setup(),
        onPrevPageSelect = jest.fn(),
        prevPageBtn = quickRender({ onPrevPageSelect }).getByRole('button', { name: 'previous page' });

    expect(onPrevPageSelect).not.toHaveBeenCalled();

    await user.click(prevPageBtn);

    expect(onPrevPageSelect).toHaveBeenCalled();
  });

  it('fires onNextPageSelect when the next page button is clicked', async function() {
    const user = userEvent.setup(),
        onNextPageSelect = jest.fn(),
        nextPageBtn = quickRender({ onNextPageSelect }).getByRole('button', { name: 'next page' });

    expect(onNextPageSelect).not.toHaveBeenCalled();

    await user.click(nextPageBtn);

    expect(onNextPageSelect).toHaveBeenCalled();
  });
});
