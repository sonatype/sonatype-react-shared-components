/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { useState } from 'react';

type ReturnType = [boolean, () => void, (b: boolean) => void];

/**
 * Convenience hook for boolean pieces of react state that are primarily interacted with via
 * "toggling". Using this hook in place of `useState` directly saves the caller from having to
 * implement toggleState themselves.
 * @return an array containing the following:
 * 0: the current boolean state value
 * 1: a parameterless function that toggles the value of the state boolean
 * 2: a function which sets the value of the state boolean based on its value
 */
export default function useToggle(initialValue: boolean): ReturnType {
  const [state, setState] = useState(initialValue);

  function toggleState() {
    setState(!state);
  }

  return [state, toggleState, setState];
}
