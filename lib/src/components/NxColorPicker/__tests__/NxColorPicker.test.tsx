/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxColorPicker, { Props } from '../NxColorPicker';
import { selectableColors } from '../../../util/selectableColors';

describe('NxColorPicker', function() {
  const minimalProps = { label: 'My Color Picker' },
      quickRender = rtlRender<Props>(NxColorPicker, minimalProps),
      renderEl = rtlRenderElement<Props>(NxColorPicker, minimalProps);

  it('renders a fieldset with the specified attributes', function() {
    const el = renderEl({ id: 'foo', lang: 'en' })!;

    expect(el.tagName).toBe('FIELDSET');
    expect(el).toHaveAttribute('id', 'foo');
    expect(el).toHaveAttribute('lang', 'en');
  });

  it('adds any custom classes to the fieldset', function() {
    const el = renderEl({ className: 'foo' })!,
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('names the fieldset according to the label prop', function() {
    const fieldset = renderEl()!;

    expect(fieldset).toHaveAccessibleName('My Color Picker');
  });

  it('renders a radio for each color, named after the color and the color picker label', function() {
    const view = quickRender();

    expect(view.getAllByRole('radio')).toHaveLength(selectableColors.length);

    for (const selectableColor of selectableColors) {
      expect(view.getByRole('radio', { name: new RegExp(`My Color Picker ${selectableColor}`, 'i') }))
          .toBeInTheDocument();
    }
  });

  it('sets the checked attr to true on the radio matching the value prop', function() {
    const noneSelectedView = quickRender(),
        turquoiseSelectedView = quickRender({ value: 'turquoise' });

    expect(noneSelectedView.queryByRole('radio', { checked: true })).not.toBeInTheDocument();

    expect(turquoiseSelectedView.queryByRole('radio', { checked: true })).toHaveAccessibleName(/turquoise/i);
  });

  it('fires its onChange handler with the color of the clicked radio', async function() {
    const user = userEvent.setup(),
        onChange = jest.fn(),
        view = quickRender({ onChange }),
        radio = view.getByRole('radio', { name: /turquoise/i })

    expect(onChange).not.toHaveBeenCalled();

    await user.click(radio);

    expect(onChange).toHaveBeenCalledWith('turquoise');
  });

  it('does nothing when an input is clicked with no onChange prop', async function() {
    const user = userEvent.setup(),
        view = quickRender(),
        radio = view.getByRole('radio', { name: /turquoise/i })

    await user.click(radio);
  });
});
