/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { ShallowWrapper, mount, shallow } from 'enzyme';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxForm, { Props } from '../NxForm';
import NxButton from '../../NxButton/NxButton';
import NxTooltip from '../../NxTooltip/NxTooltip';
import NxLoadError from '../../NxLoadError/NxLoadError';
import NxSubmitMask from '../../NxSubmitMask/NxSubmitMask';
import NxLoadWrapper from '../../NxLoadWrapper/NxLoadWrapper';

describe('NxForm', function() {
  const minimalProps = {
        onSubmit: () => {},
        children: <div/>
      },
      getShallow = getShallowComponent<Props>(NxForm, minimalProps);

  describe('when doLoad is not defined', function() {
    it('renders a form with .nx-form', function() {
      expect(getShallow()).toMatchSelector('form.nx-form');
    });

    it('adds extra specified classes', function() {
      const component = getShallow({ className: 'foo' });

      expect(component).toHaveClassName('foo');
      expect(component).toHaveClassName('nx-form');
    });

    it('sets extra attrs on the form', function() {
      const component = getShallow({ id: 'foo', lang: 'en_US' });

      expect(component).toHaveProp('id', 'foo');
      expect(component).toHaveProp('lang', 'en_US');
    });

    it('puts the ref on the form', function() {
      const ref = React.createRef<HTMLFormElement>(),

          // note: the fragment is necessary to get around an enzyme issue:
          // https://github.com/enzymejs/enzyme/issues/1852#issuecomment-433145879
          component = mount(<><NxForm { ...minimalProps } ref={ref} /></>),
          domNode = component.find('form').getDOMNode();

      expect(ref.current).toBe(domNode);
    });

    describe('on form submit', function() {
      describe('when there are validation errors', function() {
        let component: ShallowWrapper,
            onSubmit: jest.Mock;

        beforeEach(function() {
          onSubmit = jest.fn();
          component = getShallow({ validationErrors: 'its broke', onSubmit });
        });

        it('calls preventDefault on the event', function() {
          const event = { preventDefault: jest.fn() };

          component.simulate('submit', event);
          expect(event.preventDefault).toHaveBeenCalled();
        });

        it('does not call the onSubmit prop', function() {
          component.simulate('submit', { preventDefault: jest.fn() });

          expect(onSubmit).not.toHaveBeenCalled();
        });
      });

      describe('when there are not validation errors', function() {
        let component: ShallowWrapper,
            onSubmit: jest.Mock;

        beforeEach(function() {
          onSubmit = jest.fn();
          component = getShallow({ onSubmit });
        });

        it('calls preventDefault on the event', function() {
          const event = { preventDefault: jest.fn() };

          component.simulate('submit', event);
          expect(event.preventDefault).toHaveBeenCalled();
        });

        it('calls the onSubmit prop', function() {
          component.simulate('submit', { preventDefault: jest.fn() });

          expect(onSubmit).toHaveBeenCalled();
        });
      });
    });

    it('renders children', function() {
      expect(getShallow({ children: <div id="foo" /> })).toContainMatchingElement('div#foo');
    });

    it('renders children passed as a function', function() {
      expect(getShallow({ children: () => <div id="foo" /> })).toContainMatchingElement('div#foo');
    });

    describe('submit button', function() {
      it('renders an nx-footer with the submit button', function() {
        expect(getShallow()).toContainMatchingElement('.nx-footer');
        expect(getShallow().find('.nx-footer .nx-btn-bar').find(NxButton)).toHaveText('Submit');
      });

      it('adds submitBtnClassesProp classes to the submit button', function() {
        const submitBtn = getShallow({ submitBtnClasses: 'foo bar' })
            .find(NxButton)
            .filterWhere(btn => btn.prop('variant') === 'primary');

        expect(submitBtn).toHaveClassName('foo');
        expect(submitBtn).toHaveClassName('bar');
      });

      it('adds the disabled class to the submit button iff there are validation errors', function() {
        const disabledSubmitBtn = getShallow({ validationErrors: 'bad' })
            .find(NxButton)
            .filterWhere(btn => btn.prop('variant') === 'primary');

        expect(disabledSubmitBtn).toHaveClassName('disabled');

        const enabledSubmitBtn = getShallow()
            .find(NxButton)
            .filterWhere(btn => btn.prop('variant') === 'primary');

        expect(enabledSubmitBtn).not.toHaveClassName('disabled');
      });

      it('uses the submitBtnText in place of "Submit" if provided', function() {
        const submitBtn = getShallow({ submitBtnText: 'Save' })
            .find(NxButton)
            .filterWhere(btn => btn.prop('variant') === 'primary');

        expect(submitBtn).toHaveText('Save');
      });

      it('wraps the submit button in an NxTooltip with the first validation message if present', function() {
        const validComponent = getShallow(),
            invalidComponent = getShallow({ validationErrors: ['Broken', 'Foobarred'] }),
            validComponentTooltip = validComponent.find('.nx-footer .nx-btn-bar').find(NxTooltip),
            invalidComponentTooltip = invalidComponent.find('.nx-footer .nx-btn-bar').find(NxTooltip);

        expect(validComponentTooltip).toContainMatchingElement(NxButton);
        expect(invalidComponentTooltip).toContainMatchingElement(NxButton);

        expect(validComponentTooltip).toHaveProp('title', '');
        expect(invalidComponentTooltip).toHaveProp('title', 'Broken');
      });

      it('does not render the submit button is there is a submitError', function() {
        const submitBtn = getShallow({ submitError: 'bad' })
              .find(NxButton)
              .filterWhere(btn => btn.prop('variant') === 'primary');

        expect(submitBtn).not.toExist();
      });
    });

    describe('load error', function() {
      it('renders an NxLoadError in the nx-footer with the submitError and an appropriate title message', function() {
        const noErrorComponent = getShallow(),
            errorComponent = getShallow({ submitError: 'BAAAAD' }),
            loadError = errorComponent.find('.nx-footer').find(NxLoadError);

        expect(noErrorComponent.find(NxLoadError)).not.toExist();
        expect(loadError).toExist();
        expect(loadError.prop('titleMessage')).toContain('saving');
        expect(loadError).toHaveProp('error', 'BAAAAD');
      });

      it('attaches the onSubmit function to the NxLoadError retryHandler', function() {
        const onSubmit = jest.fn(),
            errorComponent = getShallow({ submitError: 'BAAAAD', onSubmit }),
            loadError = errorComponent.find('.nx-footer').find(NxLoadError);

        expect(loadError).toHaveProp('retryHandler', onSubmit);
      });
    });

    describe('other buttons', function() {
      it('renders a cancel button before the submit button, hooked to onCancel if present', function() {
        const onCancel = jest.fn(),
            component = getShallow({ onCancel }),
            cancelBtn = component.find(NxButton).at(0);

        expect(cancelBtn).toHaveText('Cancel');
        expect(cancelBtn).toHaveProp('type', 'button');
        expect(cancelBtn).toHaveProp('onClick', onCancel);

        // Cancel button comes before submit button
        expect(component.find(NxButton).at(1)).toHaveProp('variant', 'primary');
      });

      it('renders additionalFooterBtns before the cancel and submit buttons', function() {
        const additionalFooterBtns = <NxButton>Foo</NxButton>,
            component = getShallow({ onCancel: jest.fn(), additionalFooterBtns }),
            additionalBtn = component.find(NxButton).at(0);

        expect(additionalBtn).toHaveText('Foo');

        expect(component.find(NxButton).at(1)).toHaveText('Cancel');
      });
    });

    describe('submit mask', function() {
      it('renders an NxSubmitMask if submitMaskState is defined', function() {
        expect(getShallow()).not.toContainMatchingElement(NxSubmitMask);
        expect(getShallow({ submitMaskState: null })).not.toContainMatchingElement(NxSubmitMask);
        expect(getShallow({ submitMaskState: false })).toContainMatchingElement(NxSubmitMask);
        expect(getShallow({ submitMaskState: true })).toContainMatchingElement(NxSubmitMask);
      });

      it('passes submitMaskState as the mask\'s success prop', function() {
        expect(getShallow({ submitMaskState: true }).find(NxSubmitMask)).toHaveProp('success', true);
        expect(getShallow({ submitMaskState: false }).find(NxSubmitMask)).toHaveProp('success', false);
      });

      it('sets the mask\'s message from the submitMaskMessage prop', function() {
        expect(getShallow({ submitMaskState: true }).find(NxSubmitMask)).toHaveProp('message', undefined);
        expect(getShallow({
          submitMaskState: true,
          submitMaskMessage: 'running'
        }).find(NxSubmitMask)).toHaveProp('message', 'running');
      });

      it('sets the mask\'s fullscreen prop from submitMaskFullscreen, defaulting to true', function() {
        expect(getShallow({ submitMaskState: true }).find(NxSubmitMask)).toHaveProp('fullscreen', true);

        expect(getShallow({
          submitMaskState: true,
          submitMaskFullscreen: null
        }).find(NxSubmitMask)).toHaveProp('fullscreen', true);

        expect(getShallow({
          submitMaskState: true,
          submitMaskFullscreen: true
        }).find(NxSubmitMask)).toHaveProp('fullscreen', true);

        expect(getShallow({
          submitMaskState: true,
          submitMaskFullscreen: false
        }).find(NxSubmitMask)).toHaveProp('fullscreen', false);
      });

      it('sets the mask\'s successMessage prop from submitMaskSuccessMessage', function() {
        expect(getShallow({ submitMaskState: true }).find(NxSubmitMask)).toHaveProp('successMessage', undefined);
        expect(getShallow({
          submitMaskState: true,
          submitMaskSuccessMessage: 'succeeded'
        }).find(NxSubmitMask)).toHaveProp('successMessage', 'succeeded');
      });
    });
  });

  describe('when doLoad is defined', function() {
    const getShallow = getShallowComponent<Props>(NxForm, { ...minimalProps, doLoad: () => {} });

    it('renders the form lazily within NxLoadWrapper', function() {
      const component = getShallow({ id: 'foo' }),
          formRenderFn = component.prop('children');

      expect(component).toMatchSelector(NxLoadWrapper);
      expect(formRenderFn).toBeInstanceOf(Function);

      const form = shallow(formRenderFn());

      expect(form).toMatchSelector('form#foo.nx-form');
    });

    it('passes the loading prop to the wrapper', function() {
      expect(getShallow()).toHaveProp('loading', undefined);
      expect(getShallow({ loading: null })).toHaveProp('loading', null);
      expect(getShallow({ loading: true })).toHaveProp('loading', true);
      expect(getShallow({ loading: false })).toHaveProp('loading', false);
    });

    it('passes the loadError prop as the error prop to the wrapper', function() {
      expect(getShallow()).toHaveProp('error', undefined);
      expect(getShallow({ loadError: null })).toHaveProp('error', null);
      expect(getShallow({ loadError: 'foo' })).toHaveProp('error', 'foo');
    });

    it('sets the wrapper\'s retryHandler to doLoad', function() {
      const doLoad = jest.fn();

      expect(getShallow({ doLoad })).toHaveProp('retryHandler', doLoad);
    });
  });
});
