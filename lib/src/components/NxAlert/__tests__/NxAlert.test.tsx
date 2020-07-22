/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import * as enzymeUtils from '../../../__testutils__/enzymeUtils';
import {
  faExclamationTriangle,
  faBiohazard,
  faCrow,
  faInfoCircle,
  faExclamationCircle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';
import NxAlert, {
  NxErrorAlert,
  NxWarningAlert,
  NxInfoAlert,
  NxAlertProps,
  Props,
  NxSuccessAlert
} from '../NxAlert';
import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxCloseButton from '../../NxCloseButton/NxCloseButton';

describe('NxAlert', function() {
  const minimalProps: NxAlertProps = {
    children: 'A message to show in an alert',
    icon: faBiohazard
  };

  const getNxAlert = enzymeUtils.getShallowComponent<NxAlertProps>(NxAlert, minimalProps);

  it('renders an alert', function() {
    const nxAlert = getNxAlert();
    expect(nxAlert).toMatchSelector('.nx-alert');
  });

  it('renders the classNames given to it', function() {
    const extendedProps: Partial<NxAlertProps> = {
      className: 'test-classname ufo'
    };
    const nxAlert = getNxAlert(extendedProps);
    expect(nxAlert).toMatchSelector('.nx-alert.test-classname.ufo');
  });

  it('renders the children in an .nx-alert__content', function() {
    const children = [
      <p key="1" className="test-paragraph">Test Paragraph</p>,
      <div key="2" className="test-container"></div>
    ];

    const contentEl = getNxAlert({ children }).find('.nx-alert__content');

    expect(contentEl).toExist();
    expect(contentEl.find('.test-paragraph')).toExist();
    expect(contentEl.find('.test-container')).toExist();
  });

  it('renders the icon passed to it', function() {
    expect(getNxAlert())
        .toContainReact(<NxFontAwesomeIcon icon={faBiohazard}/>);

    expect(getNxAlert({icon: faCrow}))
        .toContainReact(<NxFontAwesomeIcon icon={faCrow}/>);
  });

  it('passes any other props to the div', function() {
    const component = getNxAlert({ id: 'foo', title: 'baz' });
    expect(component).toHaveProp('id', 'foo');
    expect(component).toHaveProp('title', 'baz');
  });

  it('renders a Close button if given an onClose prop', function() {
    const onClose = jest.fn(),
        component = getNxAlert({ onClose });

    expect(component).toContainMatchingElement(NxCloseButton);
    expect(onClose).not.toHaveBeenCalled();

    component.find(NxCloseButton).simulate('click');
    expect(onClose).toHaveBeenCalled();
  });

  it('does not render a Close button if not given an onClose prop', function() {
    expect(getNxAlert()).not.toContainMatchingElement(NxCloseButton);
  });

  describe('NxAlert variations', function() {
    const minimalProps = { children: <p>Hello</p> };

    describe('NxErrorAlert', function() {
      const getNxErrorAlert = enzymeUtils.getShallowComponent<Props>(NxErrorAlert, minimalProps);

      it('renders an NxAlert', function() {
        const nxErrorAlert = getNxErrorAlert();
        expect(nxErrorAlert).toMatchSelector(NxAlert);
      });

      it('uses the appropriate error classes', function() {
        const nxErrorAlert = getNxErrorAlert();
        expect(nxErrorAlert).toMatchSelector(NxAlert);
        expect(nxErrorAlert).toHaveClassName('nx-alert--error');
      });

      it('renders the appropriate error icon', function() {
        const nxErrorAlert = getNxErrorAlert();
        expect(nxErrorAlert).toMatchSelector(NxAlert);
        expect(nxErrorAlert).toHaveProp('icon', faExclamationCircle);
      });

      it('renders the children passed into it', function() {
        const nxErrorAlert = getNxErrorAlert();
        expect(nxErrorAlert).toContainReact(<p>Hello</p>);
      });

      it('passes any other props to the NxAlert', function() {
        const onClose = jest.fn(),
            component = getNxErrorAlert({ id: 'foo', title: 'baz', onClose });
        expect(component).toHaveProp('id', 'foo');
        expect(component).toHaveProp('title', 'baz');
        expect(component).toHaveProp('onClose', onClose);
      });
    });

    describe('NxWarningAlert', function() {
      const getNxWarningAlert = enzymeUtils.getShallowComponent<Props>(NxWarningAlert, minimalProps);

      it('renders an NxAlert', function() {
        const nxWarningAlert = getNxWarningAlert();
        expect(nxWarningAlert).toMatchSelector(NxAlert);
      });

      it('renders the appropriate alert icon', function() {
        const nxWarningAlert = getNxWarningAlert();
        expect(nxWarningAlert).toMatchSelector(NxAlert);
        expect(nxWarningAlert).toHaveProp('icon', faExclamationTriangle);
      });

      it('uses the appropriate warning classes', function() {
        const nxWarningAlert = getNxWarningAlert();
        expect(nxWarningAlert).toMatchSelector(NxAlert);
        expect(nxWarningAlert).toHaveClassName('nx-alert--warning');
      });

      it('renders the children passed into it', function() {
        const nxWarningAlert = getNxWarningAlert();
        expect(nxWarningAlert).toContainReact(<p>Hello</p>);
      });

      it('passes any other props to the NxAlert', function() {
        const onClose = jest.fn(),
            component = getNxWarningAlert({ id: 'foo', title: 'baz', onClose });
        expect(component).toHaveProp('id', 'foo');
        expect(component).toHaveProp('title', 'baz');
        expect(component).toHaveProp('onClose', onClose);
      });
    });

    describe('NxInfoAlert', function() {
      const getNxInfoAlert = enzymeUtils.getShallowComponent<Props>(NxInfoAlert, minimalProps);

      it('renders an NxAlert', function() {
        const nxInfoAlert = getNxInfoAlert();
        expect(nxInfoAlert).toMatchSelector(NxAlert);
      });

      it('renders the appropriate info classes', function() {
        const nxInfoAlert = getNxInfoAlert();
        expect(nxInfoAlert).toMatchSelector(NxAlert);
        expect(nxInfoAlert).toHaveClassName('nx-alert--info');
      });

      it('renders the appropriate info icon', function() {
        const nxInfoAlert = getNxInfoAlert();
        expect(nxInfoAlert).toMatchSelector(NxAlert);
        expect(nxInfoAlert).toHaveProp('icon', faInfoCircle);
      });

      it('renders the children passed into it', function() {
        const nxInfoAlert = getNxInfoAlert();
        expect(nxInfoAlert).toContainReact(<p>Hello</p>);
      });

      it('passes any other props to the NxAlert', function() {
        const onClose = jest.fn(),
            component = getNxInfoAlert({ id: 'foo', title: 'baz', onClose });
        expect(component).toHaveProp('id', 'foo');
        expect(component).toHaveProp('title', 'baz');
        expect(component).toHaveProp('onClose', onClose);
      });
    });

    describe('NxSuccessAlert', function() {
      const getNxSuccessAlert = enzymeUtils.getShallowComponent<Props>(NxSuccessAlert, minimalProps);

      it('renders an NxAlert', function() {
        const nxSuccessAlert = getNxSuccessAlert();
        expect(nxSuccessAlert).toMatchSelector(NxAlert);
      });

      it('renders the appropriate info classes', function() {
        const nxSuccessAlert = getNxSuccessAlert();
        expect(nxSuccessAlert).toMatchSelector(NxAlert);
        expect(nxSuccessAlert).toHaveClassName('nx-alert--success');
      });

      it('renders the appropriate info icon', function() {
        const nxSuccessAlert = getNxSuccessAlert();
        expect(nxSuccessAlert).toMatchSelector(NxAlert);
        expect(nxSuccessAlert).toHaveProp('icon', faCheckCircle);
      });

      it('renders the children passed into it', function() {
        const nxSuccessAlert = getNxSuccessAlert();
        expect(nxSuccessAlert).toContainReact(<p>Hello</p>);
      });

      it('passes any other props to the NxAlert', function() {
        const onClose = jest.fn(),
            component = getNxSuccessAlert({ id: 'foo', title: 'baz', onClose });
        expect(component).toHaveProp('id', 'foo');
        expect(component).toHaveProp('title', 'baz');
        expect(component).toHaveProp('onClose', onClose);
      });
    });
  });
});
