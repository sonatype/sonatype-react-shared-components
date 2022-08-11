// /*
//  * Copyright (c) 2019-present Sonatype, Inc.
//  * This program and the accompanying materials are made available under
//  * the terms of the Eclipse Public License 2.0 which accompanies this
//  * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
//  */
// import React from 'react';
// import useToast from '../../../util/useToast';
// import { getMountedComponent } from '../../../__testutils__/enzymeUtils';
// import NxButton from '../../NxButton/NxButton';
// import NxToast from '../NxToast';

// import NxToastProvider from '../NxToastProvider';
// import { NxToastProviderProps } from '../types';

// describe('NxToastContainer', function() {
//   const SomeConsumerComponent = () => {
//     const { showSuccessToast } = useToast();

//     return <NxButton onClick={() => showSuccessToast('Policy added!')}>Show success toast</NxButton>;
//   };

//   const simpleProps: NxToastProviderProps = { children: <SomeConsumerComponent /> },
//       getMounted = getMountedComponent<NxToastProviderProps>(NxToastProvider, simpleProps);

//   it('doesn\'t render any toasts on init', function() {
//     const nxToastContainer = getMounted();
//     expect(nxToastContainer).not.toContain(NxToast);
//   });

//   it('renders a success toast when showSuccessToast() is called', function() {
//     const nxToastContainer = getMounted();
//     expect(nxToastContainer).not.toContain(NxToast);

//     const button = nxToastContainer.find('button');
//     button.simulate('click');

//     expect(nxToastContainer).toContainExactlyOneMatchingElement(NxToast);
//   });

//   it('clicking on close button of toasts dismisses the toast', function() {
//     const nxToastContainer = getMounted();
//     expect(nxToastContainer).not.toContain(NxToast);

//     const button = nxToastContainer.find('button');
//     button.simulate('click');

//     expect(nxToastContainer).toContainExactlyOneMatchingElement(NxToast);

//     const closeButton = nxToastContainer.find('.nx-btn--close');
//     closeButton.simulate('click');

//     expect(nxToastContainer).not.toContain(NxToast);
//   });
// });
