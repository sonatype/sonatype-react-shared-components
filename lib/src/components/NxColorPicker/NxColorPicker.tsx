/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useMemo } from 'react';
import classnames from 'classnames';
import { pipe, split, map, join, toUpper, head, tail } from 'ramda';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxTooltip from '../NxTooltip/NxTooltip';
import { SelectableColor, selectableColors } from '../../util/selectableColors';
import { useUniqueId } from '../../util/idUtil';
import { textContent } from '../../util/childUtil';
import { Props, propTypes } from './types';

export { Props } from './types';

import './NxColorPicker.scss';
import NxFieldset from '../NxFieldset/NxFieldset';

interface ColorRadioProps {
  pickerLabel: string;
  color: SelectableColor;
  value?: SelectableColor | null;
  name: string;
  onChange: Props['onChange'];
}

// convert a color name to a human-friendly string
// (i.e. spaced and capitalized)
const humanReadable: (c: SelectableColor) => string = pipe(
    split('-'),
    map(s => `${toUpper(head(s))}${tail(s)}`),
    join(' ')
);

function ColorRadio({ pickerLabel, color, value, onChange, name }: ColorRadioProps) {
  const selected = value === color,
      classes = classnames('nx-color-picker__label', `nx-selectable-color--${color}`, { selected }),
      humanReadableColor = useMemo(() => humanReadable(color), [color]),
      label = `${pickerLabel} ${humanReadableColor}`;

  function inputOnChange() {
    if (onChange) {
      onChange(color);
    }
  }

  return (
    <NxTooltip title={humanReadableColor}>
      <label aria-label={label} className={classes}>
        <input className="nx-color-picker__input"
               type="radio"
               name={name}
               value={color}
               checked={color === value}
               onChange={inputOnChange} />
        <svg className="nx-color-picker__circles" viewBox="-16 -16 32 32">
          <circle className="nx-color-picker__outline" r="15" />
          <circle className="nx-color-picker__color" r={selected ? 13.5 : 11.5} />
          { selected &&
            <NxFontAwesomeIcon className="nx-color-picker__check"
                               width="16"
                               height="100%"
                               x="-8"
                               y="-16"
                               icon={faCheck} />
          }
        </svg>
      </label>
    </NxTooltip>
  );
}

export default function NxColorPicker({ value, onChange, className, label, ...attrs }: Props) {
  const name = useUniqueId('nx-color-picker'),
      classes = classnames('nx-color-picker', className),
      pickerLabel = textContent(label);

  return (
    <NxFieldset label={label} className={classes} { ...attrs }>
      {selectableColors.map(color =>
        <ColorRadio key={color} { ...{ pickerLabel, color, name, value, onChange } } />
      )}
    </NxFieldset>
  );
}

NxColorPicker.propTypes = propTypes;
