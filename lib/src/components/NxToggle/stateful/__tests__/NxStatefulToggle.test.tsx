/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { screen, within } from '@testing-library/react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../../__testutils__/rtlUtils';

import NxStatefulToggle, { Props } from '../NxStatefulToggle';

describe('NxStatefulToggle', function() {
  const simpleProps: Props = {
    inputId: 'toggle-id',
    defaultChecked: false,
    onChange: () => {},
    disabled: undefined,
    children: 'Enables whales'
  };

  const quickRender = rtlRender<Props>(NxStatefulToggle, { defaultChecked: false });
  const renderEl = rtlRenderElement<Props>(NxStatefulToggle, simpleProps);

  it('sets the initial value of isChecked to the value of defaultChecked prop', function() {
    const switchWithDefaultCheckedFalse =
      within(renderEl({ defaultChecked: false })!).getByRole('switch') as HTMLInputElement;
    expect(switchWithDefaultCheckedFalse.checked).toBe(false);

    const switchWithDefaultCheckedTrue =
      within(renderEl({ defaultChecked: true })!).getByRole('switch') as HTMLInputElement;
    expect(switchWithDefaultCheckedTrue.checked).toBe(true);
  });

  it('disables switch when disabled prop is true', function() {
    expect(quickRender().getByRole('switch')).not.toBeDisabled();
    expect(quickRender({ disabled: true }).getByRole('switch')).toBeDisabled();
  });

  it('updates isChecked prop on NxToggle when the control is toggled', async function() {
    const user = userEvent.setup();
    quickRender(simpleProps);
    const switchEl = screen.getByRole('switch') as HTMLInputElement;
    expect(switchEl.checked).toBe(false);
    await user.click(switchEl);
    expect(switchEl.checked).toBe(true);
  });

  it('calls its onChange prop when the input fires a change event', async function() {
    const user = userEvent.setup();
    const onChange = jest.fn();

    quickRender({ onChange });

    const switchEl = screen.getByRole('switch') as HTMLInputElement;

    expect(onChange).not.toHaveBeenCalled();
    await user.click(switchEl);
    expect(onChange).toHaveBeenCalledWith(true);
  });
});
