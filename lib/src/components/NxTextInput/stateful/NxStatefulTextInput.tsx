/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useState } from 'react';

import { initialState, userInput } from '../stateHelpers';
import { PrivateNxTextInput } from '../NxTextInput';

import { Props, PublicProps, propTypes } from './types';
export { Props, PublicProps, propTypes } from './types';

/* eslint-disable react/prop-types */
export const PrivateNxStatefulTextInput = forwardRef<HTMLDivElement, Props>(
    function PrivateNxStatefulTextInput(props, ref) {
      const { defaultValue, onChange, validator, ...attrs } = props,
          [state, setState] = useState(initialState(defaultValue || '', validator));

      function changeHandler(newValue: string) {
        setState(userInput(validator || null, newValue));

        if (onChange) {
          onChange(newValue);
        }
      }

      return <PrivateNxTextInput validatable={!!validator}
                                 ref={ref}
                                 { ...attrs }
                                 { ...state }
                                 onChange={changeHandler} />;
    }
);
/* eslint-enable react/prop-types */

const NxStatefulTextInput = forwardRef<HTMLDivElement, PublicProps>(
    function NxStatefulTextInput(props, ref) {
      return <PrivateNxStatefulTextInput ref={ref} { ...props } />;
    }
);

NxStatefulTextInput.propTypes = propTypes;

export default NxStatefulTextInput;
