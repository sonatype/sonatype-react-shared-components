/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useContext } from 'react';
import classnames from 'classnames';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './NxTag.scss';
import '../../util/selectableColors.scss';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import { TooltipContext } from '../NxTooltip/NxTooltip';
import { Props, propTypes, SelectableProps, selectablePropTypes } from './types';
export { SelectableProps, PublicProps } from './types';

const NxTag = forwardRef<HTMLLabelElement, Props>(function NxTag(props, ref) {
  const hasTooltip = useContext(TooltipContext);

  const { children, className, selectedIcons, color, title, ...attrs } = props,
      tagClasses = classnames('nx-tag', className, {
        'nx-selectable-color--indigo': !color, // the default
        [`nx-selectable-color--${color}`]: color
      });

  const label = (
    <label className={tagClasses} title={title} ref={ref} {...attrs}>
      <span className="nx-tag__text">{children}</span>
      {selectedIcons}
    </label>
  );

  return !hasTooltip ? <NxOverflowTooltip ref={ref}>{label}</NxOverflowTooltip> : label;
});

NxTag.propTypes = propTypes;
export default NxTag;

export const NxSelectableTag = forwardRef<HTMLLabelElement, SelectableProps>(
    function NxSelectableTag(props, ref) {
      const { children, className, selected, onSelect, ...attrs } = props,
          isSelected = selected,
          tagClasses = classnames('nx-tag--selectable', className, {
            'nx-tag--selected': isSelected,
            'nx-tag--unselected': !isSelected
          }),
          tagIcons =
            <NxFontAwesomeIcon icon={isSelected ? faTimesCircle : faPlusCircle} className="nx-tag__action" />;

      return (
        <NxTag className={tagClasses} selectedIcons={tagIcons} ref={ref} {...attrs}>
          {children}
          <input type="checkbox"
                 className="nx-tag__input"
                 checked={isSelected}
                 aria-checked={isSelected}
                 role="switch"
                 onChange={onSelect || undefined} />
        </NxTag>
      );
    }
);

NxSelectableTag.propTypes = selectablePropTypes;
