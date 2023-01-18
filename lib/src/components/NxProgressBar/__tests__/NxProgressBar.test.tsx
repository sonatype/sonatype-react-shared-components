/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { within } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxProgressBar, { Props } from '../NxProgressBar';

describe('NxProgressBar', function() {
  const minimalProps = {
        value: 0,
        label: 'current progress'
      },
      quickRender = rtlRender<Props>(NxProgressBar, minimalProps),
      renderEl = rtlRenderElement<Props>(NxProgressBar, minimalProps);

  it('renders the label text', function() {
    expect(quickRender().getByText('current progress')).toBeInTheDocument();
  });

  it('renders an element with a role of "progressbar"', function() {
    const el = renderEl()!,
        progressBar = within(el).getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
  });

  it('forwards its ref to the progressbar', function() {
    const ref = React.createRef<HTMLProgressElement>(),
        el = quickRender({ ref: ref } as Partial<Props>),
        progressBar = el.getByRole('progressbar');

    expect(ref.current).toBe(progressBar);
  });

  it('passes the value prop to the progressbar', function() {
    const noProgressEl = quickRender(),
        partialProgressEl = quickRender({ value: 50 }),
        noProgressBar = noProgressEl.getByRole('progressbar'),
        partialProgressBar = partialProgressEl.getByRole('progressbar');

    expect(noProgressBar).toHaveAttribute('value', '0');
    expect(partialProgressBar).toHaveAttribute('value', '50');
  });

  it('sets the max prop to 100 when unspecified and passes it to the progressbar', function() {
    const defaultEl = quickRender(),
        customMaxEl = quickRender({ max: 200 }),
        progressEl = defaultEl.getByRole('progressbar'),
        customMaxProgressEl = customMaxEl.getByRole('progressbar');

    expect(progressEl).toHaveAttribute('max', '100');
    expect(customMaxProgressEl).toHaveAttribute('max', '200');
  });

  it('sets the correct counter percentage value', function() {
    const noProgressEl = renderEl()!,
        inProgressEl = renderEl({ value: 50 })!,
        finishedEl = renderEl({ value: 100 })!,
        inProgressWithMaxEl = renderEl({ value: 20, max: 40 });

    expect(noProgressEl).toHaveTextContent('0%'),
    expect(inProgressEl).toHaveTextContent('50%'),
    expect(finishedEl).toHaveTextContent('100%');
    expect(inProgressWithMaxEl).toHaveTextContent('50%');
  });

  it('renders a counter when showCounter is not false', function() {
    const defaultEl = renderEl()!,
        counterEl = renderEl({ showCounter: true })!,
        noCounterEl = renderEl({ showCounter: false })!;

    expect(defaultEl).toHaveTextContent('0%');
    expect(counterEl).toHaveTextContent('0%');
    expect(noCounterEl).not.toHaveTextContent('0%');
  });

  it('renders a counter in all variants except inline', function() {
    const defaultEl = renderEl({ showCounter: true })!,
        normalEl = renderEl({ variant: 'normal', showCounter: true })!,
        smallEl = renderEl({ variant: 'small', showCounter: true })!,
        fullEl = renderEl({ variant: 'full', showCounter: true })!,
        inlineEl = renderEl({ variant: 'inline', showCounter: true })!;

    expect(defaultEl).toHaveTextContent('0%');
    expect(normalEl).toHaveTextContent('0%');
    expect(smallEl).toHaveTextContent('0%');
    expect(fullEl).toHaveTextContent('0%');
    expect(inlineEl).not.toHaveTextContent('0%');
  });

  describe('label', function() {
    it('renders only for normal(default) and full variants', function() {
      expect(quickRender().queryByText('current progress')).toBeInTheDocument();
      expect(quickRender({ variant: 'normal' }).getByText('current progress')).toBeInTheDocument();
      expect(quickRender({ variant: 'full' }).getByText('current progress')).toBeInTheDocument();
      expect(quickRender({ variant: 'small' }).queryByText('current progress')).not.toBeInTheDocument();
      expect(quickRender({ variant: 'inline' }).queryByText('current progress'))
          .not.toBeInTheDocument();
    });

    it('doesn\'t render when inlineCounter is set to true', function() {
      expect(quickRender().queryByText('current progress')).toBeInTheDocument();
      expect(quickRender({ inlineCounter: false }).getByText('current progress')).toBeInTheDocument();
      expect(quickRender({ inlineCounter: true }).queryByText('current progress'))
          .not.toBeInTheDocument();
    });

    it('is overridden by labelSuccess when it is specified and progress reaches 100%', function() {
      const inProgressEl = renderEl({ labelSuccess: 'complete', value: 50 })!,
          finishedEl = renderEl({ value: 100 })!,
          finishedElWithProp = renderEl({ labelSuccess: 'complete', value: 100 })!,
          finishedElWithPropAndMax = renderEl({ labelSuccess: 'complete', value: 10, max: 10 });

      expect(inProgressEl).toHaveTextContent('current progress');
      expect(finishedEl).toHaveTextContent('current progress');
      expect(finishedElWithProp).not.toHaveTextContent('current progress');
      expect(finishedElWithProp).toHaveTextContent('complete');
      expect(finishedElWithPropAndMax).not.toHaveTextContent('current progress');
      expect(finishedElWithPropAndMax).toHaveTextContent('complete');
    });

    it('is overriden by labelError when it is specified', function() {
      const el = renderEl()!,
          elWithError = renderEl({ labelError: 'oops!' })!;

      expect(el).toHaveTextContent('current progress');
      expect(elWithError).not.toHaveTextContent('current progress');
      expect(elWithError).toHaveTextContent('oops!');
    });
  });

  it('sets progress to 0 when labelError is defined', function() {
    const elWithError = renderEl({ labelError: 'oops!', value: 50 })!;
    expect(within(elWithError).getByRole('progressbar')).toHaveAttribute('value', '0');
    expect(elWithError).toHaveTextContent('0%');
  });

  it('assigns an accessible name to the progressbar regardless of if the label text is rendered', function() {
    const elWithLabelAndCounter = renderEl()!,
        progressBarWithLabelAndCounter = within(elWithLabelAndCounter).getByRole('progressbar'),
        elWithLabelAndNoCounter = renderEl({ showCounter: false })!,
        progressBarWithLabelAndNoCounter = within(elWithLabelAndNoCounter).getByRole('progressbar'),
        elWithoutLabel = renderEl({ inlineCounter: true})!,
        progressBarWithoutLabel = within(elWithoutLabel).getByRole('progressbar');

    expect(elWithLabelAndCounter).toHaveTextContent('current progress');
    expect(progressBarWithLabelAndCounter).toHaveAccessibleName('0% current progress');

    expect(elWithLabelAndNoCounter).toHaveTextContent('current progress');
    expect(progressBarWithLabelAndNoCounter).toHaveAccessibleName('current progress');

    expect(elWithoutLabel).not.toHaveTextContent('current progress');
    expect(progressBarWithoutLabel).toHaveAccessibleName('current progress');
  });

  describe('showSteps', function() {
    it('renders an additional child div with the presentation role', function() {
      const elWithoutSteps = renderEl()!,
          elWithSteps = renderEl({ showSteps: true })!;

      expect(elWithoutSteps.childElementCount).toBe(2);
      expect(within(elWithoutSteps).queryByRole('presenation')).not.toBeInTheDocument();

      expect(elWithSteps.childElementCount).toBe(3);
      expect(within(elWithSteps).getByRole('presentation')).toBeInTheDocument();
    });

    it('doesn\'t render a counter when showSteps is true', function() {
      const el = renderEl({ showSteps: true, showCounter: true })!;
      expect(el).not.toHaveTextContent('0%');
    });

    it('adds the number of step elements equal to one less than max when true', function() {
      expect(quickRender({ showSteps: true }).getByRole('presentation').childElementCount).toBe(99);
      expect(quickRender({ showSteps: true, max: 10 }).getByRole('presentation').childElementCount).toBe(9);
      expect(quickRender({ showSteps: true, max: 5 }).getByRole('presentation').childElementCount).toBe(4);
    });

  // Note: the visiblity of the step matching the progress bar's current value is implemented in CSS and
  // therefore not tested here
  });
});
