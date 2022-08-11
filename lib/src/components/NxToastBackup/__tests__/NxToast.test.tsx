// /*
//  * Copyright (c) 2019-present Sonatype, Inc.
//  * This program and the accompanying materials are made available under
//  * the terms of the Eclipse Public License 2.0 which accompanies this
//  * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
//  */
// import {
//   faCheckCircle,
//   faExclamationCircle,
//   faExclamationTriangle,
//   faInfoCircle
// } from '@fortawesome/free-solid-svg-icons';
// import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
// import NxCloseButton from '../../NxCloseButton/NxCloseButton';
// import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';

// import NxToast from '../NxToast';
// import { NxToastProps } from '../types';

// describe('NxToast', function() {
//   const simpleProps: NxToastProps = {
//         toastId: 1,
//         type: 'success',
//         message: 'Test toast message',
//         toastContainerRef: null
//       },
//       getShallow = getShallowComponent<NxToastProps>(NxToast, simpleProps);

//   it('renders a toast', function() {
//     const nxToast = getShallow();
//     expect(nxToast).toMatchSelector('.nx-toast');
//   });

//   it('renders the classNames given to it', function() {
//     const extendedProps: Partial<NxToastProps> = {
//       className: 'test-classname ufo'
//     };
//     const nxToast = getShallow(extendedProps);
//     expect(nxToast).toMatchSelector('.nx-toast.test-classname.ufo');
//   });

//   it('renders the toast message in an .nx-toast__content', function() {
//     const contentEl = getShallow({ ...simpleProps, message: 'test123'}).find('.nx-toast__content');

//     expect(contentEl).toExist();
//     expect(contentEl).toHaveText('test123');
//   });

//   describe('Icons', function() {
//     it('renders correct icon and aria-label props for toast of type "error"', function() {
//       const nxToast = getShallow({ ...simpleProps, type: 'error'});

//       expect(nxToast.find(NxFontAwesomeIcon)).toExist();
//       expect(nxToast.find(NxFontAwesomeIcon)).toHaveProp('icon', faExclamationCircle);
//       expect(nxToast.find(NxFontAwesomeIcon)).toHaveProp('aria-label', 'Error');
//     });

//     it('renders correct icon and aria-label props for toast of type "warning"', function() {
//       const nxToast = getShallow({ ...simpleProps, type: 'warning'});

//       expect(nxToast.find(NxFontAwesomeIcon)).toExist();
//       expect(nxToast.find(NxFontAwesomeIcon)).toHaveProp('icon', faExclamationTriangle);
//       expect(nxToast.find(NxFontAwesomeIcon)).toHaveProp('aria-label', 'Warning');
//     });

//     it('renders correct icon and aria-label props for toast of type "success"', function() {
//       const nxToast = getShallow({ ...simpleProps, type: 'success'});

//       expect(nxToast.find(NxFontAwesomeIcon)).toExist();
//       expect(nxToast.find(NxFontAwesomeIcon)).toHaveProp('icon', faCheckCircle);
//       expect(nxToast.find(NxFontAwesomeIcon)).toHaveProp('aria-label', 'Success');
//     });

//     it('renders correct icon and aria-label props for toast of type "info"', function() {
//       const nxToast = getShallow({ ...simpleProps, type: 'info'});

//       expect(nxToast.find(NxFontAwesomeIcon)).toExist();
//       expect(nxToast.find(NxFontAwesomeIcon)).toHaveProp('icon', faInfoCircle);
//       expect(nxToast.find(NxFontAwesomeIcon)).toHaveProp('aria-label', 'Info');
//     });
//   });

//   it('passes any other props to the div', function() {
//     const nxToast = getShallow({ id: 'foo', title: 'baz' });
//     expect(nxToast).toHaveProp('id', 'foo');
//     expect(nxToast).toHaveProp('title', 'baz');
//   });

//   it('sets aria-atomic on the div', function() {
//     expect(getShallow()).toHaveProp('aria-atomic', true);
//   });

//   it('renders a Close button', function() {
//     const nxToast = getShallow();

//     expect(nxToast).toContainMatchingElement(NxCloseButton);
//   });
// });
