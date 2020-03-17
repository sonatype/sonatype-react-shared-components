/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent, useRef, useState } from 'react';

import NxSubmitMask, { SUCCESS_VISIBLE_TIME_MS, Props } from '../NxSubmitMask';

type InternalState = 'pending' | 'success' | 'done';

const propsToState = ({ success }: Props) => success ? 'success' : 'pending';

const NxStatefulSubmitMask: FunctionComponent<Props> =
  function NxStatefulSubmitMask(props) {
    // internalState is used to track the timer-based hiding of the mask in the success scenario
    const stateFromProps = propsToState(props),
        [internalState, setInternalState] = useState<InternalState>(stateFromProps),

        // the pattern for using timeouts with react hooks is to use `useRef` to create a 'box' for a mutable value,
        // and in that box store the Timeout value so that it may be cancelled later
        successTimeoutHolder = useRef<ReturnType<typeof setTimeout> | null>(null),

        isSuccess = internalState === 'success';

    // if the external props are trying to change the state, and aren't trying to simply set it back
    // to "success" when it's already "done", change the state
    if (internalState !== stateFromProps && !(internalState === 'done' && stateFromProps === 'success')) {
      setInternalState(stateFromProps);
    }

    if (isSuccess) {
      if (!successTimeoutHolder.current) {
        successTimeoutHolder.current = setTimeout(setInternalState.bind(null, 'done'), SUCCESS_VISIBLE_TIME_MS);
      }
    }
    else if (successTimeoutHolder.current) {
      clearTimeout(successTimeoutHolder.current);
      successTimeoutHolder.current = null;
    }

    return internalState === 'done' ? null : <NxSubmitMask { ...props } success={isSuccess} />;
  };

NxStatefulSubmitMask.propTypes = NxSubmitMask.propTypes;
export default NxStatefulSubmitMask;
