/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { SelectableColor, selectableColors } from '../../util/selectableColors';
import { useRandomId } from '../../util/idUtil';
import { Props, propTypes } from './types';

export { Props } from './types';

import './NxColorPicker.scss';

interface ColorRadioProps {
  color: SelectableColor;
  selectedColor?: SelectableColor | null;
  name: string;
  onChange: Props['onChange'];
}

function ColorRadio({ color, selectedColor, onChange, name }: ColorRadioProps) {
  function inputOnChange() {
    if (onChange) {
      onChange(color);
    }
  }

  return (
    <label aria-label={color}>
      <input type="radio" name={name} checked={color === selectedColor} onChange={inputOnChange} />
    </label>
  );
}

export default function NxColorPicker({selectedColor, onChange, className, ...attrs }: Props) {
  const name = useRandomId('nx-color-picker'),
      classes = classnames('nx-color-picker', className);

  return (
    <fieldset className={classes} { ...attrs }>
      { selectableColors.map(color => <ColorRadio key={color} { ...{ color, name, selectedColor, onChange } } />)}
    </fieldset>
  );
}

NxColorPicker.propTypes = propTypes;
