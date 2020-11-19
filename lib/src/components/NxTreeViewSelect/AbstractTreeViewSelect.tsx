/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/* eslint react/prop-types: 0 */
import React, { FunctionComponent, ReactElement } from 'react';

import { Option } from './commonTypes';
import NxTreeView, {NxTreeViewChild} from '../NxTreeView/NxTreeView';
import NxTooltip from '../NxTooltip/NxTooltip';
import NxFilterInput from '../NxFilterInput/NxFilterInput';
import { TooltipConfigProps } from '../../util/tooltipUtils';
import { ensureElement } from '../../util/reactUtil';

import { CommonProps } from './commonTypes';

import './NxTreeViewSelect.scss';

export interface Props extends CommonProps {
  renderOption: ((option: Option) => ReactElement);
  renderToggleAllOption?: (() => ReactElement | null) | null;
  renderCounter?: (() => ReactElement | null) | null;
}

export function generateId(groupName: string, elementId: string | null) {
  return `nx-tree-view-select-${groupName}-${elementId}`.replace(' ', '-').toLowerCase();
}

const AbstractTreeViewSelect: FunctionComponent<Props> = function AbstractTreeViewSelect(props) {

  const {
        options,
        onToggleCollapse,
        filterPlaceholder,
        children,
        id,
        filter,
        onFilterChange,
        disabledTooltip,
        optionTooltipGenerator,
        tooltipModifierClass,
        name,
        renderOption,
        renderToggleAllOption,
        renderCounter
      } = props,
      filterThreshold = props.filterThreshold || 10,
      isOpen = !!props.isOpen,
      disabled = !!props.disabled || !options.length,
      filteredOptions = props.filteredOptions || options;

  function getTooltipProps(title: string) {

    const tooltipProps: TooltipConfigProps = {
      title,
      placement: 'top'
    };

    if (tooltipModifierClass) {
      tooltipProps.className = tooltipModifierClass;
    }
    return tooltipProps;
  }

  const renderedOptions = filteredOptions.map((item: Option) => {
    const option = renderOption(item);
    return (
      <NxTreeViewChild key={`key-${item.id}`}>
        {optionTooltipGenerator ? (
          <NxTooltip {...getTooltipProps(optionTooltipGenerator(item))}>
            {option}
          </NxTooltip>
        ) : option}
      </NxTreeViewChild>
    );
  });

  const wrappedTriggerContent = ensureElement(children);

  const counter = renderCounter && renderCounter();

  const triggerWithCounter = counter ? (
    <>
      {wrappedTriggerContent}
      {counter}
    </>
  ) : wrappedTriggerContent;

  const filterContent = onFilterChange && options.length > filterThreshold && (
    <NxFilterInput disabled={disabled}
                   placeholder={filterPlaceholder || ''}
                   inputId={generateId(name, 'filter-input')}
                   onChange={onFilterChange}
                   value={filter || ''}/>
  );

  const selectAllOption = renderToggleAllOption && <NxTreeViewChild>{renderToggleAllOption()}</NxTreeViewChild>;

  const getTriggerTooltip = () => {
    if (disabled) {
      if (disabledTooltip) {
        return getTooltipProps(disabledTooltip);
      }
      else if (!options.length) {
        return getTooltipProps(`There are no ${name} options`);
      }
    }
    return null;
  };

  return (
    <NxTreeView onToggleCollapse={onToggleCollapse}
                isOpen={isOpen && options.length > 0}
                id={id}
                triggerContent={triggerWithCounter}
                triggerTooltip={getTriggerTooltip()}
                disabled={disabled}
                className="nx-tree-view--select"
                aria-describedby={counter && counter.props.id}>
      {filterContent}
      {selectAllOption}
      {renderedOptions}
    </NxTreeView>
  );
};

export default AbstractTreeViewSelect;
