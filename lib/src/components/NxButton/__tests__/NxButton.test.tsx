/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { waitFor, render } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxButton from '../NxButton';

describe('NxButton', function() {
  const quickRender = rtlRender(NxButton, {}),
      renderEl = rtlRenderElement(NxButton, {});

  it('sets ref on the button', function() {
    const ref = React.createRef<HTMLButtonElement>(),
        el = renderEl({ ref });

    expect(ref.current).toBe(el);
  });

  it('adds specified classNames to the element in addition to the defaults', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('passes additional attrs to the button', function() {
    const btn = quickRender({ id: 'foo', lang: 'en-US' }).getByRole('button');

    expect(btn).toHaveAttribute('id', 'foo');
    expect(btn).toHaveAttribute('lang', 'en-US');
  });

  it('sets disabled on the button when the disabled prop is true', function() {
    expect(quickRender().getByRole('button')).not.toBeDisabled();
    expect(quickRender({ disabled: undefined }).getByRole('button')).not.toBeDisabled();
    expect(quickRender({ disabled: false }).getByRole('button')).not.toBeDisabled();
    expect(quickRender({ disabled: true }).getByRole('button')).toBeDisabled();
  });

  it('disabled by class button has aria-disabled true', function() {
    expect(quickRender({ className: 'disabled' }).getByRole('button')).not.toBeDisabled();
    expect(quickRender({ className: 'disabled' }).getByRole('button')).toHaveAttribute('aria-disabled', 'true');
  });

  it('gives the icon-only button an accessible name when title prop is set', async function() {
    const iconOnlyBtnNoTitle = quickRender({ variant: 'icon-only' }).getByRole('button'),
        iconOnlyBtnTitle = quickRender({ variant: 'icon-only', title: 'Alert' }).getByRole('button');

    await waitFor(() => expect(iconOnlyBtnNoTitle).not.toHaveAccessibleName());
    await waitFor(() => expect(iconOnlyBtnTitle).toHaveAccessibleName('Alert'));
  });

  it('throws an error when it contains both disabled and title props', async function() {
    expect(() => render(<NxButton variant="icon-only" title="Save" className="disabled" />))
        .not.toThrow(TypeError);
    expect(() => render(<NxButton variant="icon-only" title="Save" disabled />))
        .toThrow(TypeError);
  });

  it('applies small modifier class when provided in className', function() {
    const smallBtn = quickRender({ className: 'nx-btn--small' }).getByRole('button');
    expect(smallBtn).toHaveClass('nx-btn--small');
  });

  it('works with small modifier across different button variants', function() {
    const smallSecondaryBtn = quickRender({ className: 'nx-btn--small' }).getByRole('button');
    expect(smallSecondaryBtn).toHaveClass('nx-btn--small');
    expect(smallSecondaryBtn).toHaveClass('nx-btn--secondary');

    const smallPrimaryBtn = quickRender({
      variant: 'primary',
      className: 'nx-btn--small'
    }).getByRole('button');
    expect(smallPrimaryBtn).toHaveClass('nx-btn--small');
    expect(smallPrimaryBtn).toHaveClass('nx-btn--primary');

    const smallTertiaryBtn = quickRender({
      variant: 'tertiary',
      className: 'nx-btn--small'
    }).getByRole('button');
    expect(smallTertiaryBtn).toHaveClass('nx-btn--small');
    expect(smallTertiaryBtn).toHaveClass('nx-btn--tertiary');

    const smallIconOnlyBtn = quickRender({
      variant: 'icon-only',
      className: 'nx-btn--small',
      title: 'Icon Only'
    }).getByRole('button');
    expect(smallIconOnlyBtn).toHaveClass('nx-btn--small');
    expect(smallIconOnlyBtn).toHaveClass('nx-btn--icon-only');
  });
});
