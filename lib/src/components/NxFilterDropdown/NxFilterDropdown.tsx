/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { Ref, useRef } from 'react';
import { propEq, any } from 'ramda';

import { Props, propTypes } from './types';
import NxCheckbox from '../NxCheckbox/NxCheckbox';
import MultiSelectCounter from '../Counter/MultiSelectCounter';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import NxDropdown from '../NxDropdown/NxDropdown';
import DataItem from '../../util/DataItem';
import forwardRef from '../../util/genericForwardRef';

export { Props };

function NxFilterDropdownRender<T extends string | number = string>(props: Props<T>, ref: Ref<HTMLDivElement>) {
  const { onChange, selectedIds, isOpen, onToggleCollapse, options, ...attrs } = props,
      menuRef = useRef<HTMLDivElement>(null);

  // Throw an error if one of the selectedIds is not part of the available options
  selectedIds.forEach(itemId => {
    if (!any(propEq('id', itemId), options)) {
      throw new Error(`You are attempting to select "${itemId}", but it is not part of the available options`);
    }
  });

  function toggle(id: T) {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    }
    else {
      newSelected.add(id);
    }
    onChange(newSelected, id);
  }

  // Avoid closing dropdown when a click occurs within it (e.g. when a checkbox is toggled)
  function onCloseClick(evt: MouseEvent) {
    const { target } = evt,
        menuEl = menuRef.current;

    if (menuEl && target instanceof Element && menuEl.contains(target)) {
      evt.preventDefault();
    }
  }

  const renderOption = ({ id, displayName }: DataItem<T>) => (
    <NxCheckbox key={id}
                onChange={() => toggle(id)}
                isChecked={selectedIds.has(id)}>
      {displayName}
    </NxCheckbox>
  );

  const renderCounter = () => <MultiSelectCounter options={options} selectedIds={selectedIds} />,
      dropdownLabel = (
        <>
          <NxFontAwesomeIcon icon={faFilter} />
          { selectedIds.size ? renderCounter() : null }
        </>
      );

  return (
    <NxDropdown label={dropdownLabel}
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}
                onCloseClick={onCloseClick}
                menuRef={menuRef}
                ref={ref}
                { ...attrs }>
      { options.map(renderOption) }
    </NxDropdown>
  );
}

const NxFilterDropdown = Object.assign(forwardRef(NxFilterDropdownRender), { propTypes });

export default NxFilterDropdown;
