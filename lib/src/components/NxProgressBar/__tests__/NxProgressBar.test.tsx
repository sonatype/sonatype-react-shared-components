/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React from 'react';
import { within, render } from '@testing-library/react';
import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxProgressBar, { Props } from '../NxProgressBar';

describe('NxProgressBar', function() {
  const minimalProps = {
        value: 0,
        label: 'current progress'
      },
      quickRender = rtlRender<Props>(NxProgressBar, minimalProps),
      renderEl = rtlRenderElement<Props>(NxProgressBar, minimalProps);

  it('render a <label> as the top level element', function() {
    expect(renderEl()!.tagName).toBe('LABEL');
  });

  it('renders a <progress> as a child', function() {
    const el = renderEl()!,
        progressBar = within(el).getByRole('progressbar');
    expect(progressBar).toBeInTheDocument();
  });

  it('forwards its ref to the <progress> element', function() {
    const ref = React.createRef<HTMLProgressElement>(),
        el = render(<NxProgressBar {...minimalProps} ref={ref}/>),
        progressBar = el.getByRole('progressbar');

    expect(ref.current).toBe(progressBar);
  });

  it('passes the value prop to the progress element', function() {
    const noProgressEl = quickRender(),
        partialProgressEl = quickRender({ value: 50 }),
        noProgressBar = noProgressEl.getByRole('progressbar'),
        partialProgressBar = partialProgressEl.getByRole('progressbar');

    expect(noProgressBar).toHaveAttribute('value', '0');
    expect(partialProgressBar).toHaveAttribute('value', '50');
  });

  it('sets the max prop to 100 when unspecified and passes to progress element', function() {
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
    const counterSelector = '.nx-progress-bar__counter';
    const defaultEl = renderEl()!,
        counterEl = renderEl({ showCounter: true })!,
        noCounterEl = renderEl({ showCounter: false })!;

    expect(defaultEl.querySelector(counterSelector)).toBeInTheDocument();
    expect(counterEl.querySelector(counterSelector)).toBeInTheDocument();
    expect(noCounterEl.querySelector(counterSelector)).not.toBeInTheDocument();
  });

  it('doesn\'t render a counter for the inline variant, even if showCounter is true', function() {
    const inlineEl = renderEl({ variant: 'inline', showCounter: true})!;
    expect(inlineEl.querySelector('.nx-progress-bar__counter')).not.toBeInTheDocument();
  });

  describe('label', function() {
    it('renders only for normal and full variants', function() {
      expect(quickRender().queryByText('current progress')).toBeInTheDocument();
      expect(quickRender({ variant: 'normal' }).queryByText('current progress')).toBeInTheDocument();
      expect(quickRender({ variant: 'full' }).queryByText('current progress')).toBeInTheDocument();
      expect(quickRender({ variant: 'small' }).queryByText('current progress')).not.toBeInTheDocument();
      expect(quickRender({ variant: 'inline' }).queryByText('current progress'))
          .not.toBeInTheDocument();
    });

    it('doesn\'t render when inlineCounter is set to true', function() {
      expect(quickRender().queryByText('current progress')).toBeInTheDocument();
      expect(quickRender({ inlineCounter: false }).queryByText('current progress')).toBeInTheDocument();
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

  it('assigns an aria-label when component\'s label text is not rendered', function() {
    const progressBarWithLabel = quickRender().getByRole('progressbar');
    const progressBarWithoutLabel = quickRender({ inlineCounter: true }).getByRole('progressbar');

    expect(progressBarWithLabel).not.toHaveAttribute('aria-label', 'current progress');
    expect(progressBarWithoutLabel).toHaveAttribute('aria-label', 'current progress');
  });

  describe('showSteps', function() {
    it('renders an additional child div with the presentation role', function() {
      const elWithoutSteps = renderEl()!,
          elWithSteps = renderEl({ showSteps: true })!;

      expect(elWithoutSteps.childElementCount).toBe(2);
      expect(within(elWithoutSteps).queryByRole('presenation')).not.toBeInTheDocument();

      expect(elWithSteps.childElementCount).toBe(3);
      expect(within(elWithSteps).queryByRole('presentation')).toBeInTheDocument();
    });

    it('doesn\'t render a counter when showSteps is true', function() {
      const el = renderEl({ showSteps: true, showCounter: true })!;
      expect(el.querySelector('.nx-progress-bar__counter')).not.toBeInTheDocument();
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

//   describe('showSteps', function() {
////////DONE?
//     it('adds an .nx-progress-bar__step-container when true', function() {
//       expect(getMountedComponent()).not.toContainMatchingElement('.nx-progress-bar__step-container');
//       expect(getMountedComponent({ showSteps: true })).toContainMatchingElement('.nx-progress-bar__step-container');
//     });
/////// DONE
//     it('removes the .nx-progress-bar__counter when true', function() {
//       expect(getMountedComponent({ showSteps: true })).not.toContainMatchingElement('.nx-progress-bar__counter');
//     });
////// DONE
//     it('adds a number of .nx-progress-bar__step elements equal to one less than the max when true', function() {
//       expect(getMountedComponent()).not.toContainMatchingElement('.nx-progress-bar__step');
//       expect(getMountedComponent({ showSteps: true }).find('.nx-progress-bar__step').length).toBe(99);
//       expect(getMountedComponent({ showSteps: true, max: 12 }).find('.nx-progress-bar__step').length).toBe(11);
//       expect(getMountedComponent({ showSteps: true, max: 1 }).find('.nx-progress-bar__step').length).toBe(0);
//     });

//     it('adds the appropriate modifier class to each step depending on whether it is above, below, or at the ' +
//          'current value', function() {
//       const zeroBar = getMountedComponent({ showSteps: true, max: 12, value: 0 }),
//           partialBar = getMountedComponent({ showSteps: true, max: 12, value: 3 }),
//           fullBar = getMountedComponent({ showSteps: true, max: 12, value: 12 });

//       expect(zeroBar.find('.nx-progress-bar__step--below-value')).not.toExist();
//       expect(zeroBar.find('.nx-progress-bar__step--at-value')).not.toExist();
//       expect(zeroBar.find('.nx-progress-bar__step--above-value').length).toBe(11);

//       expect(partialBar.find('.nx-progress-bar__step--below-value').length).toBe(2);
//       expect(partialBar.find('.nx-progress-bar__step--at-value').length).toBe(1);
//       expect(partialBar.find('.nx-progress-bar__step--above-value').length).toBe(8);

//       // ensure correct ordering
//       expect(partialBar.find('.nx-progress-bar__step--at-value ~ .nx-progress-bar__step--below-value')).not.toExist()
//       expect(partialBar.find('.nx-progress-bar__step--above-value ~ .nx-progress-bar__step--at-value')).not.toExist()

//       expect(fullBar.find('.nx-progress-bar__step--below-value').length).toBe(11);
//       expect(fullBar.find('.nx-progress-bar__step--at-value')).not.toExist();
//       expect(fullBar.find('.nx-progress-bar__step--above-value')).not.toExist();
//     });

//     it('renders all .nx-progress-bar__step elements with .nx-progress-bar__ste--above-value when labelError is set',
//         function() {
//           expect(
//               getMountedComponent({ showSteps: true, max: 12, value: 3, labelError: 'asdf' })
//                   .find('.nx-progress-bar__step--above-value').length
//           ).toBe(11);
//         }
//     );
//   });
// });
