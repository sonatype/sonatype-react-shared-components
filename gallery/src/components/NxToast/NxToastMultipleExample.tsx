// /*
//  * Copyright (c) 2019-present Sonatype, Inc.
//  * This program and the accompanying materials are made available under
//  * the terms of the Eclipse Public License 2.0 which accompanies this
//  * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
//  */
// import React from 'react';

// import { NxButton, useToast } from '@sonatype/react-shared-components';

// const Child = () => {
//   const { showErrorToast, showSuccessToast, showWarningToast, showInfoToast } = useToast();

//   const handleClick = () => {
//     showSuccessToast('Logged in as client.');
//     showInfoToast('Software version 7.0.');
//     showWarningToast('Invalid directoty structure.');
//     showErrorToast('Malware detected.');

//     setTimeout(() => {
//       showInfoToast('Logging out in 1 minute.');
//     }, 2000);

//     setTimeout(() => {
//       showWarningToast('Missing credentials.');
//     }, 4000);

//     setTimeout(() => {
//       showErrorToast('Error. Please try again.');
//     }, 6000);
//   };

//   return (
//     <NxButton onClick={handleClick}>
//       Show multiple toasts
//     </NxButton>
//   );
// };

// export default function NxToastExample() {
//   return (
//     <Child />
//   );
// }
