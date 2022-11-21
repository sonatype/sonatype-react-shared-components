/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useReducer } from 'react';
import { NxButton, NxColorPicker, nxFieldsetStateHelpers, SelectableColor } from '@sonatype/react-shared-components';
const { radioGroupInitialState, radioGroupUserInput } = nxFieldsetStateHelpers;

interface State {
  color: nxFieldsetStateHelpers.RadioStateProps<SelectableColor>;
}

const requiredMessage = 'At least one color must be selected',
    radioValidator = (v: string | null) => v ? null : requiredMessage;

const initialState: State = {
  color: radioGroupInitialState<SelectableColor>(undefined, radioValidator)
};

/**
 * Normally these stateHelpers would be used when the state management is done entirely outside of the React
 * component file. For simplicity however this example just uses a simple reducer defined here
 */
function reducer(state: State, { type, payload }: { type: string, payload: SelectableColor | null }): State {
  switch (type) {
    case 'setColor':
      return { ...state, color: radioGroupUserInput<SelectableColor>(payload, radioValidator) };
    default:
      return state;
  }
}

export default function NxColorPickerRequiredPureStateHelperExample() {
  const [{ color }, dispatch] = useReducer(reducer, initialState),
      setColor = (color: SelectableColor | null) => {
        dispatch({ type: 'setColor', payload: color });
      };

  return (
    <div>
      <NxColorPicker isRequired label="Pick a color" { ...color } onChange={setColor} />
      <NxButton onClick={() => setColor(null)}>Clear</NxButton>
    </div>
  );
}
