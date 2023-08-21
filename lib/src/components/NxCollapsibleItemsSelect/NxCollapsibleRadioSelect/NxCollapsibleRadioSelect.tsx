/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { propEq, find } from 'ramda';

import { Props, propTypes, Option } from './types';
export { Props, Option } from './types';
import Counter from '../../Counter/Counter';
import NxRadio from '../../NxRadio/NxRadio';
import AbstractCollapsibleItemsSelect, { generateId } from '../AbstractCollapsibleItemsSelect';

function NxCollapsibleRadioSelect<T extends Option>(props: Props<T>) {
  const { selectedId, onChange, optionTooltipGenerator, ...otherProps } = props,
      {name, options} = otherProps,
      disabled = !!props.disabled,
      selectedItem = find(propEq(selectedId, 'id'), options);
  console.log(otherProps);

  const renderOption = ({id, name: optionName}: Option) => (
    // NxCollapsibleItemsChild takes empty role to mean no role and normalizes it correctly
    /* eslint-disable jsx-a11y/aria-role */
    <NxRadio radioId={generateId(name, id)}
             name={name}
             value={id}
             isChecked={id === selectedId}
             onChange={onChange}
             overflowTooltip={!optionTooltipGenerator}
             disabled={disabled}
             inputAttributes={{ role: 'menuitemradio' }}
             role="">
      {optionName}
    </NxRadio>
    /* eslint-enable jsx-a11y/aria-role */
  );

  const renderCounter = () =>
    selectedItem
    && selectedItem.name ? <Counter>{selectedItem.name}</Counter> : null;

  return <AbstractCollapsibleItemsSelect {...props}
                                         optionTooltipGenerator={optionTooltipGenerator}
                                         renderOption={renderOption}
                                         renderCounter={renderCounter}/>;
}

NxCollapsibleRadioSelect.propTypes = propTypes;

export default NxCollapsibleRadioSelect;
