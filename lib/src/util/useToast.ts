/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import {useContext} from 'react';

import {ToastContext} from '../components/NxToast/contexts';

function useToast() {
  const context = useContext(ToastContext);
  /**
   * Base component that renders a standardized toast.
   * @param message Message to show on the toast.
   */
  const showErrorToast = (message: string) => context?.addToast({type: 'error', message});
  const showSuccessToast = (message: string) => context?.addToast({type: 'success', message});
  const showWarningToast = (message: string) => context?.addToast({type: 'warning', message});
  const showInfoToast = (message: string) => context?.addToast({type: 'info', message});

  return { showErrorToast, showSuccessToast, showWarningToast, showInfoToast };
}

export default useToast;
