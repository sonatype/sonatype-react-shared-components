/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { act } from '@testing-library/react';
import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';
import NxPolicyThreatSlider, { Props } from '../NxPolicyThreatSlider';

describe('NxPolicyThreatSlider', function() {
  const minimalProps: Props = { value: [0, 10] },
      quickRender = rtlRender(NxPolicyThreatSlider, minimalProps),
      renderEl = rtlRenderElement(NxPolicyThreatSlider, minimalProps);

  it('renders two slider elements', function() {
    const view = quickRender(),
        sliders = view.getAllByRole('slider');

    expect(sliders).toHaveLength(2);
  });

  it('adds any specified class name to the top-level element', function() {
    const el = renderEl({ className: 'foo' }),
        defaultEl = renderEl()!;

    expect(el).toHaveClass('foo');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('sets the accessible name of the first slider to "threat level min"', function() {
    const sliders = quickRender().getAllByRole('slider'),
        backwardsValueSliders = quickRender({ value: [10, 0] }).getAllByRole('slider');

    expect(sliders[0]).toHaveAccessibleName('threat level min');
    expect(backwardsValueSliders[0]).toHaveAccessibleName('threat level min');
  });

  it('sets the accessible name of the second slider to "threat level max"', function() {
    const sliders = quickRender().getAllByRole('slider'),
        backwardsValueSliders = quickRender({ value: [10, 0] }).getAllByRole('slider');

    expect(sliders[1]).toHaveAccessibleName('threat level max');
    expect(backwardsValueSliders[1]).toHaveAccessibleName('threat level max');
  });

  it('sets aria-valuemin to 0 and aria-valuemax to 10 on both sliders', function() {
    const sliders = quickRender().getAllByRole('slider');

    expect(sliders[0]).toHaveAttribute('aria-valuemin', '0');
    expect(sliders[1]).toHaveAttribute('aria-valuemin', '0');

    expect(sliders[0]).toHaveAttribute('aria-valuemax', '10');
    expect(sliders[1]).toHaveAttribute('aria-valuemax', '10');
  });

  it('sets the aria-valuenow of the min slider to the smaller value in the value prop', function() {
    expect(quickRender().getByRole('slider', { name: 'threat level min' })).toHaveAttribute('aria-valuenow', '0');
    expect(quickRender({ value: [1, 8] }).getByRole('slider', { name: 'threat level min' }))
        .toHaveAttribute('aria-valuenow', '1');
    expect(quickRender({ value: [5, 5] }).getByRole('slider', { name: 'threat level min' }))
        .toHaveAttribute('aria-valuenow', '5');
    expect(quickRender({ value: [5, 2] }).getByRole('slider', { name: 'threat level min' }))
        .toHaveAttribute('aria-valuenow', '2');
  });

  it('sets the aria-valuetext of the min slider to the smaller value in the value prop along with ' +
      'its threat level category', function() {
    expect(quickRender().getByRole('slider', { name: 'threat level min' }))
        .toHaveAttribute('aria-valuetext', '0 (none)');
    expect(quickRender({ value: [1, 8] }).getByRole('slider', { name: 'threat level min' }))
        .toHaveAttribute('aria-valuetext', '1 (low)');
    expect(quickRender({ value: [3, 3] }).getByRole('slider', { name: 'threat level min' }))
        .toHaveAttribute('aria-valuetext', '3 (moderate)');
    expect(quickRender({ value: [10, 7] }).getByRole('slider', { name: 'threat level min' }))
        .toHaveAttribute('aria-valuetext', '7 (severe)');
    expect(quickRender({ value: [10, 10] }).getByRole('slider', { name: 'threat level min' }))
        .toHaveAttribute('aria-valuetext', '10 (critical)');
  });

  it('sets the aria-valuenow of the max slider to the larger value in the value prop', function() {
    expect(quickRender().getByRole('slider', { name: 'threat level max' })).toHaveAttribute('aria-valuenow', '10');
    expect(quickRender({ value: [1, 8] }).getByRole('slider', { name: 'threat level max' }))
        .toHaveAttribute('aria-valuenow', '8');
    expect(quickRender({ value: [5, 5] }).getByRole('slider', { name: 'threat level max' }))
        .toHaveAttribute('aria-valuenow', '5');
    expect(quickRender({ value: [5, 2] }).getByRole('slider', { name: 'threat level max' }))
        .toHaveAttribute('aria-valuenow', '5');
  });

  it('sets the aria-valuetext of the max slider to the larger value in the value prop along with ' +
      'its threat level category', function() {
    expect(quickRender().getByRole('slider', { name: 'threat level max' }))
        .toHaveAttribute('aria-valuetext', '10 (critical)');
    expect(quickRender({ value: [1, 7] }).getByRole('slider', { name: 'threat level max' }))
        .toHaveAttribute('aria-valuetext', '7 (severe)');
    expect(quickRender({ value: [3, 3] }).getByRole('slider', { name: 'threat level max' }))
        .toHaveAttribute('aria-valuetext', '3 (moderate)');
    expect(quickRender({ value: [1, 0] }).getByRole('slider', { name: 'threat level max' }))
        .toHaveAttribute('aria-valuetext', '1 (low)');
    expect(quickRender({ value: [0, 0] }).getByRole('slider', { name: 'threat level max' }))
        .toHaveAttribute('aria-valuetext', '0 (none)');
  });

  it('sets disabled to true on the sliders when they are disabled', function() {
    const disabledSliders = quickRender({ disabled: true }).getAllByRole('slider'),
        enabledSliders = quickRender().getAllByRole('slider');

    for (const slider of disabledSliders) {
      expect(slider).toBeDisabled();
    }

    for (const slider of enabledSliders) {
      expect(slider).toBeEnabled();
    }
  });

  describe('mouse interactions', function() {
    beforeAll(function() {
      // The slider must have some semblance of layout for mouse moves to work
      jest.spyOn(Element.prototype, 'getBoundingClientRect').mockImplementation(() => ({
        width: 100,
        right: 100,
        height: 10,
        bottom: 10,
        top: 0,
        y: 0,
        left: 0,
        x: 0
      } as DOMRect));
    });

    it('fires onChange with the new value range when the min slider is dragged', async function() {
      const user = userEvent.setup(),
          onChange = jest.fn(),
          view = quickRender({ onChange }),
          slider = view.getByRole('slider', { name: 'threat level min' });

      expect(onChange).not.toHaveBeenCalled();

      await act(async () => {
        await user.pointer([
          { target: slider, coords: { x: 0, y: 5 }, keys: '[MouseLeft>]' },   // mouse down on slider
          { target: slider, coords: { x: 20, y: 5 } },                        // drag to (20, 5)
          '[/MouseLeft]'                                                      // mouse up
        ]);
      });

      expect(onChange).toHaveBeenCalledWith([2, 10]);
    });

    it('does not fire onChange when a min value less than zero when the slider is dragged beyond the left edge',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({ onChange, value: [3, 4] }),
              slider = view.getByRole('slider', { name: 'threat level min' });

          expect(onChange).not.toHaveBeenCalled();

          await act(async () => {
            await user.pointer([
              { target: slider, coords: { x: 30, y: 5 }, keys: '[MouseLeft>]' },
              { target: slider, coords: { x: -20, y: 5 } },
              '[/MouseLeft]'
            ]);
          });

          const onChangeMinVals = onChange.mock.calls.map(([[minVal]]) => minVal),
              minMinVal = Math.min(...onChangeMinVals);

          expect(minMinVal).toBe(0);
        }
    );

    it('fires onChange with the new value range when the max slider is dragged', async function() {
      const user = userEvent.setup(),
          onChange = jest.fn(),
          view = quickRender({ onChange }),
          slider = view.getByRole('slider', { name: 'threat level max' });

      expect(onChange).not.toHaveBeenCalled();

      await act(async () => {
        await user.pointer([
          { target: slider, coords: { x: 100, y: 5 }, keys: '[MouseLeft>]' },     // mouse down on slider
          { target: slider, coords: { x: 20, y: 5 } },                            // drag to (20, 5)
          '[/MouseLeft]'                                                          // mouse up
        ]);
      });

      expect(onChange).toHaveBeenCalledWith([0, 2]);
    });

    it('does not fire onChange when a max value greater than 10 when the slider is dragged beyond the right edge',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({ onChange, value: [3, 4] }),
              slider = view.getByRole('slider', { name: 'threat level max' });

          expect(onChange).not.toHaveBeenCalled();

          await act(async () => {
            await user.pointer([
              { target: slider, coords: { x: 40, y: 5 }, keys: '[MouseLeft>]' },
              { target: slider, coords: { x: 150, y: 5 } },
              '[/MouseLeft]'
            ]);
          });

          const onChangeMaxVals = onChange.mock.calls.map(([[, maxVal]]) => maxVal),
              maxMaxVal = Math.max(...onChangeMaxVals);

          expect(maxMaxVal).toBe(10);
        }
    );

    it('fires onChange with the values ordered from least to greatest when the sliders cross over one another',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({ onChange, value: [3, 4] }),
              slider = view.getByRole('slider', { name: 'threat level max' });

          expect(onChange).not.toHaveBeenCalled();

          await act(async () => {
            await user.pointer([
              { target: slider, coords: { x: 40, y: 5 }, keys: '[MouseLeft>]' },     // mouse down on slider
              { target: slider, coords: { x: 20, y: 5 } },                           // drag to (20, 5)
              '[/MouseLeft]'                                                         // mouse up
            ]);
          });

          expect(onChange).toHaveBeenCalledWith([2, 3]);
        }
    );

    it('fires onChange with the the same value twice when the slider are set to the same value',
        async function() {
          const user = userEvent.setup(),
              onChange = jest.fn(),
              view = quickRender({ onChange, value: [3, 4] }),
              slider = view.getByRole('slider', { name: 'threat level max' });

          expect(onChange).not.toHaveBeenCalled();

          await act(async () => {
            await user.pointer([
              { target: slider, coords: { x: 40, y: 5 }, keys: '[MouseLeft>]' },      // mouse down on slider
              { target: slider, coords: { x: 30, y: 5 } },                            // drag to (30, 5)
              '[/MouseLeft]'                                                          // mouse up
            ]);
          });

          expect(onChange).toHaveBeenCalledWith([3, 3]);
        }
    );

    it('does not fire onChange in response to mouse events when disabled', async function() {
      const user = userEvent.setup(),
          onChange = jest.fn(),
          view = quickRender({ disabled: true, onChange }),
          sliders = view.getAllByRole('slider');

      // user.pointer throws an exception when used on an element with pointer-events: none.
      // This is the recommended recourse.
      // See https://github.com/testing-library/user-event/issues/708#issuecomment-889953363
      await expect(async () => {
        await act(async () => {
          await user.pointer([
            { target: sliders[0], coords: { x: 0, y: 5 }, keys: '[MouseLeft>]' },
            { target: sliders[0], coords: { x: 20, y: 5 } },
            '[/MouseLeft]'
          ]);
        });
      }).rejects.toThrow();

      await expect(async () => {
        await act(async () => {
          await user.pointer([
            { target: sliders[1], coords: { x: 100, y: 5 }, keys: '[MouseLeft>]' },
            { target: sliders[1], coords: { x: 90, y: 5 } },
            '[/MouseLeft]'
          ]);
        });
      }).rejects.toThrow();

      expect(onChange).not.toHaveBeenCalled();
    });
  });

  describe('keyboard interactions', function() {
    /*
     * NOTE: RTL userEvent does not currently support keyboard events on <input type="range">. This will
     * have to be tested in functional tests
     */

    it('is not included in the tab order if disabled', async function() {
      const user = userEvent.setup(),
          onChange = jest.fn(),
          view = quickRender({ disabled: true, onChange }),
          sliders = view.getAllByRole('slider');

      await user.tab();
      expect(sliders).not.toContain(document.activeElement);

      await user.tab();
      expect(sliders).not.toContain(document.activeElement);
    });
  });
});
