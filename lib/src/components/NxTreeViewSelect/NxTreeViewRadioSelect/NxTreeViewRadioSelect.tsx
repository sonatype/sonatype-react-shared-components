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
import NxTreeViewCounter from '../NxTreeViewCounter';
import NxRadio from '../../NxRadio/NxRadio';
import AbstractTreeViewSelect, { generateId } from '../AbstractTreeViewSelect';

function NxTreeViewRadioSelect<T extends Option>(props: Props<T>) {
  const { selectedId, onChange, optionTooltipGenerator, ...otherProps } = props,
      {name, options} = otherProps,
      disabled = !!props.disabled,
      selectedItem = find(propEq('id', selectedId), options);

  const renderOption = ({id, name: optionName}: Option) => (
    <NxRadio radioId={generateId(name, id)}
             name={name}
             value={id}
             isChecked={id === selectedId}
             onChange={onChange}
             overflowTooltip={!optionTooltipGenerator}
             disabled={disabled}>
      {optionName}
    </NxRadio>
  );

  const renderCounter = () =>
    selectedItem && selectedItem.name ? <NxTreeViewCounter>{selectedItem.name}</NxTreeViewCounter> : null;

  return <AbstractTreeViewSelect {...props}
                                 optionTooltipGenerator={optionTooltipGenerator}
                                 renderOption={renderOption}
                                 renderCounter={renderCounter}/>;
}

NxTreeViewRadioSelect.propTypes = propTypes;

export default NxTreeViewRadioSelect;
