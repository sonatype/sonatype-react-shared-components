/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { Ref, useRef } from 'react';
import { propEq, any } from 'ramda';
import classnames from 'classnames';
import useMergedRef from '@react-hook/merged-ref';

import { Props, propTypes } from './types';
import NxCheckbox from '../NxCheckbox/NxCheckbox';
import MultiSelectCounter from '../Counter/MultiSelectCounter';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import NxDropdown from '../NxDropdown/NxDropdown';
import DataItem from '../../util/DataItem';
import forwardRef from '../../util/genericForwardRef';
import Close from '../../icons/Close';

import './NxFilterDropdown.scss';

export { Props };

function NxFilterDropdownRender<T extends string | number = string>(props: Props<T>, ref: Ref<HTMLDivElement>) {
  const {
        onChange,
        selectedIds,
        isOpen,
        onToggleCollapse,
        options,
        className: classNameProp,
        showReset,
        placeholder,
        ...attrs
      } = props,
      menuRef = useRef<HTMLDivElement>(null),
      className = classnames('nx-filter-dropdown', classNameProp),
      hasSelection = !!selectedIds.size,
      containerRef = useRef<HTMLDivElement>(null),
      mergedRef = useMergedRef(containerRef, ref);

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

  function onResetClick() {
    onChange(new Set());
    if (containerRef && containerRef.current) {
      const toggleEl = containerRef.current.querySelector('.nx-dropdown__toggle');
      if (toggleEl) {
        (toggleEl as HTMLElement).focus();
      }
    }
  }

  const renderOption = ({ id, displayName }: DataItem<T>) => (
    <NxCheckbox key={id}
                onChange={() => toggle(id)}
                isChecked={selectedIds.has(id)}
                inputAttributes={{
                  role: 'menuitemcheckbox'
                }}>
      {displayName}
    </NxCheckbox>
  );

  const renderCounter = () => <MultiSelectCounter options={options} selectedIds={selectedIds} />,
      dropdownLabel = (
        <>
          <NxFontAwesomeIcon icon={faFilter} />
          { hasSelection ? renderCounter() : <span>{placeholder ?? 'Filter'}</span> }
        </>
      );

  const resetBtn = (
    <button key="reset-btn"
            disabled={!hasSelection}
            className="nx-dropdown-link nx-filter-dropdown__reset"
            onClick={onResetClick}
            role="menuitem">
      <Close />
      <span>Reset</span>
    </button>
  );

  const checkboxes = options.map(renderOption),
      children = showReset === false ? checkboxes : [...checkboxes, resetBtn];

  return (
    <NxDropdown className={className}
                label={dropdownLabel}
                isOpen={isOpen}
                onToggleCollapse={onToggleCollapse}
                onCloseClick={onCloseClick}
                menuRef={menuRef}
                ref={mergedRef}
                { ...attrs }>
      {children}
    </NxDropdown>
  );
}

const NxFilterDropdown = Object.assign(forwardRef(NxFilterDropdownRender), { propTypes });

export default NxFilterDropdown;
