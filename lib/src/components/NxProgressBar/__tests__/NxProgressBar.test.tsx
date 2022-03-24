/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';

import NxProgressBar from '../NxProgressBar';

import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

describe('NxProgressBar', function() {
  const getShallowComponent = enzymeUtils.getShallowComponent(NxProgressBar, { value: 50, label: 'test label' });

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
        const inlineCounterComponent = getShallowComponent({ value: 100, inlineCounter: true, label: 'hello' });

        const labelTextSelector = '.nx-progress-bar__label-text';

        expect(component).not.toHaveClassName('nx-progress-bar--inline-counter');
        expect(component.find(labelTextSelector)).toExist();
        expect(component.find(labelTextSelector)).toHaveText('hello');

        expect(inlineCounterComponent).toHaveClassName('nx-progress-bar--inline-counter');
        expect(inlineCounterComponent.find(labelTextSelector)).not.toExist();
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
        const inlineComponent = getShallowComponent({ variant: 'inline', showCounter: true, label: 'label' });
        const smallComponent = getShallowComponent({ variant: 'small', showCounter: true, label: 'label' });
        const fullComponent = getShallowComponent({ variant: 'full', showCounter: true, label: 'label' });

        const counterSelector = '.nx-progress-bar__counter';
        const labelTextSelector = '.nx-progress-bar__label-text';

        expect(inlineComponent).toHaveClassName('nx-progress-bar--inline');
        expect(inlineComponent.find(counterSelector)).not.toExist();
        expect(inlineComponent.find(labelTextSelector)).not.toExist();

        expect(smallComponent).toHaveClassName('nx-progress-bar--small');
        expect(smallComponent.find(counterSelector)).toExist();
        expect(smallComponent.find(labelTextSelector)).not.toExist();

        expect(fullComponent).toHaveClassName('nx-progress-bar--full');
        expect(fullComponent.find(counterSelector)).toExist();
        expect(fullComponent.find(labelTextSelector)).toExist();
      }
  );
});
