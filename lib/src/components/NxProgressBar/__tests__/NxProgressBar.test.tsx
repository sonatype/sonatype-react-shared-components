/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import 'jest-enzyme';

import NxProgressBar from '../NxProgressBar';

import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

describe('NxProgressBar', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxProgressBar, { value: 50, label: 'test label' }),
      getMountedComponent = enzymeUtils.getMountedComponent(NxProgressBar, { value: 50, label: 'test label' });

  it('sets the correct max and value to the progress element',
      function() {
        const progressSelector = 'progress.nx-progress-bar__progress';
        expect(getShallowComponent({ value: 0 }).find(progressSelector)).toHaveProp('max', 100);
        expect(getShallowComponent({ value: 0, max: 50 }).find(progressSelector)).toHaveProp('max', 50);
        expect(getShallowComponent({ value: 20, max: 40 }).find(progressSelector)).toHaveProp('value', 20);
      }
  );

  it('displays the correct className and hides label when inlineCounter is set to true',
      function() {
        const component = getShallowComponent({ value: 100, label: 'hello' });
        const inlineCounterComponent = getShallowComponent({ value: 50, inlineCounter: true, label: 'hello' });
        const successCounterComponent = getShallowComponent({ value: 100, inlineCounter: true, label: 'hello' });
        const errorCounterComponent = getShallowComponent({
          value: 50, inlineCounter: true, labelError: 'error', label: 'hello'
        });

        const labelTextSelector = '.nx-progress-bar__label-text';

        expect(component).not.toHaveClassName('nx-progress-bar--inline-counter');
        expect(component.find(labelTextSelector)).toExist();
        expect(component.find(labelTextSelector)).toHaveText('hello');

        expect(inlineCounterComponent).toHaveClassName('nx-progress-bar--inline-counter');
        expect(inlineCounterComponent.find(labelTextSelector)).not.toExist();
        expect(successCounterComponent.find(labelTextSelector)).not.toExist();
        expect(errorCounterComponent.find(labelTextSelector)).not.toExist();
      }
  );

  it('sets the correct counter percentage value',
      function() {
        const counterSelector = '.nx-progress-bar__counter';

        expect(getShallowComponent({ value: 20, max: 40 }).find(counterSelector)).toHaveText('50%');
        expect(getShallowComponent({ value: 0 }).find(counterSelector)).toHaveText('0%');
        expect(getShallowComponent({ value: 50 }).find(counterSelector)).toHaveText('50%');
        expect(getShallowComponent({ value: 100 }).find(counterSelector)).toHaveText('100%');
      }
  );

  it('sets the correct success className when progress is 100%',
      function() {
        const component = getShallowComponent({ value: 0 });
        const successComponent = getShallowComponent({ value: 100 });
        const successComponentWithCustomMax = getShallowComponent({ value: 50, max: 50 });
        expect(component).not.toHaveClassName('nx-progress-bar--success');
        expect(successComponent).toHaveClassName('nx-progress-bar--success');
        expect(successComponentWithCustomMax).toHaveClassName('nx-progress-bar--success');
      }
  );

  it('shows the correct label and icon when progress is 100%',
      function() {
        const component = getShallowComponent({ value: 100, label: 'normal label' });
        const successLabelComponent = getShallowComponent({ value: 100, label: 'success label' });

        const labelTextSelector = '.nx-progress-bar__label-text';

        expect(component).toContainMatchingElement(NxFontAwesomeIcon);
        expect(component.find(labelTextSelector)).toHaveText('normal label');

        expect(successLabelComponent).toContainMatchingElement(NxFontAwesomeIcon);
        expect(successLabelComponent.find(labelTextSelector)).toHaveText('success label');
      }
  );

  it('sets the correct error className when labelError is set',
      function() {
        const component = getShallowComponent({ value: 100 });
        const errorComponent = getShallowComponent({ labelError: 'Something went wrong!' });
        expect(component).not.toHaveClassName('nx-progress-bar--error');
        expect(errorComponent).toHaveClassName('nx-progress-bar--error');
      }
  );

  it('shows the correct label and icon when labelError is set',
      function() {
        const TEST_ERROR_LABEL = 'error label';

        const component = getShallowComponent({ value: 100, label: 'normal label', labelError: TEST_ERROR_LABEL });

        const labelTextSelector = '.nx-progress-bar__label-text';
        expect(component).toContainMatchingElement(NxFontAwesomeIcon);
        expect(component.find(labelTextSelector)).toHaveText(TEST_ERROR_LABEL);
      }
  );

  it('sets the correct classname and displays the correct element based on the variant',
      function() {
        const defaultComponent = getShallowComponent({ showCounter: true, label: 'label' });
        const normalComponent = getShallowComponent({ variant: 'normal', showCounter: true, label: 'label' });
        const inlineComponent = getShallowComponent({ variant: 'inline', showCounter: true, label: 'label' });
        const smallComponent = getShallowComponent({ variant: 'small', showCounter: true, label: 'label' });
        const fullComponent = getShallowComponent({ variant: 'full', showCounter: true, label: 'label' });

        const counterSelector = '.nx-progress-bar__counter';
        const labelTextSelector = '.nx-progress-bar__label-text';

        expect(defaultComponent).toHaveClassName('nx-progress-bar--normal');
        expect(defaultComponent).not.toHaveClassName('nx-progress-bar--undefined');
        expect(defaultComponent.find(counterSelector)).toExist();
        expect(defaultComponent.find(labelTextSelector)).toExist();

        expect(normalComponent).toHaveClassName('nx-progress-bar--normal');
        expect(normalComponent).not.toHaveClassName('nx-progress-bar--undefined');
        expect(normalComponent.find(counterSelector)).toExist();
        expect(normalComponent.find(labelTextSelector)).toExist();

        expect(inlineComponent).toHaveClassName('nx-progress-bar--inline');
        expect(inlineComponent).not.toHaveClassName('nx-progress-bar--undefined');
        expect(inlineComponent.find(counterSelector)).not.toExist();
        expect(inlineComponent.find(labelTextSelector)).not.toExist();

        expect(smallComponent).toHaveClassName('nx-progress-bar--small');
        expect(smallComponent).not.toHaveClassName('nx-progress-bar--undefined');
        expect(smallComponent.find(counterSelector)).toExist();
        expect(smallComponent.find(labelTextSelector)).not.toExist();

        expect(fullComponent).toHaveClassName('nx-progress-bar--full');
        expect(fullComponent).not.toHaveClassName('nx-progress-bar--undefined');
        expect(fullComponent.find(counterSelector)).toExist();
        expect(fullComponent.find(labelTextSelector)).toExist();
      }
  );

  describe('showSteps', function() {
    it('adds an .nx-progress-bar__step-container when true', function() {
      expect(getMountedComponent()).not.toContainMatchingElement('.nx-progress-bar__step-container');
      expect(getMountedComponent({ showSteps: true })).toContainMatchingElement('.nx-progress-bar__step-container');
    });

    it('removes the .nx-progress-bar__counter when true', function() {
      expect(getMountedComponent({ showSteps: true })).not.toContainMatchingElement('.nx-progress-bar__counter');
    });

    it('adds a number of .nx-progress-bar__step elements equal to one less than the max when true', function() {
      expect(getMountedComponent()).not.toContainMatchingElement('.nx-progress-bar__step');
      expect(getMountedComponent({ showSteps: true }).find('.nx-progress-bar__step').length).toBe(99);
      expect(getMountedComponent({ showSteps: true, max: 12 }).find('.nx-progress-bar__step').length).toBe(11);
      expect(getMountedComponent({ showSteps: true, max: 1 }).find('.nx-progress-bar__step').length).toBe(0);
    });

    it('adds the appropriate modifier class to each step depending on whether it is above, below, or at the ' +
         'current value', function() {
      const zeroBar = getMountedComponent({ showSteps: true, max: 12, value: 0 }),
          partialBar = getMountedComponent({ showSteps: true, max: 12, value: 3 }),
          fullBar = getMountedComponent({ showSteps: true, max: 12, value: 12 });

      expect(zeroBar.find('.nx-progress-bar__step--below-value')).not.toExist();
      expect(zeroBar.find('.nx-progress-bar__step--at-value')).not.toExist();
      expect(zeroBar.find('.nx-progress-bar__step--above-value').length).toBe(11);

      expect(partialBar.find('.nx-progress-bar__step--below-value').length).toBe(2);
      expect(partialBar.find('.nx-progress-bar__step--at-value').length).toBe(1);
      expect(partialBar.find('.nx-progress-bar__step--above-value').length).toBe(8);

      // ensure correct ordering
      expect(partialBar.find('.nx-progress-bar__step--at-value ~ .nx-progress-bar__step--below-value')).not.toExist();
      expect(partialBar.find('.nx-progress-bar__step--above-value ~ .nx-progress-bar__step--at-value')).not.toExist();

      expect(fullBar.find('.nx-progress-bar__step--below-value').length).toBe(11);
      expect(fullBar.find('.nx-progress-bar__step--at-value')).not.toExist();
      expect(fullBar.find('.nx-progress-bar__step--above-value')).not.toExist();
    });

    it('renders all .nx-progress-bar__step elements with .nx-progress-bar__ste--above-value when labelError is set',
        function() {
          expect(
              getMountedComponent({ showSteps: true, max: 12, value: 3, labelError: 'asdf' })
                  .find('.nx-progress-bar__step--above-value').length
          ).toBe(11);
        }
    );
  });
});
