/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { faPlusCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';

import './NxTag.scss';
import '../../util/selectableColors.scss';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import { Props, propTypes, SelectableProps, selectablePropTypes } from './types';
export { SelectableProps, PublicProps } from './types';

const NxTag: FunctionComponent<Props> =
    function NxTag(props) {
      const { children, className, selectedIcons, color, ...attrs } = props,
          tagClasses = classnames('nx-tag', className, {
            'nx-selectable-color--indigo': !color, // the default
            [`nx-selectable-color--${color}`]: color
          });

      return (
        <NxOverflowTooltip>
          <label className={tagClasses} {...attrs}>
            <span className="nx-tag__text">{children}</span>
            {selectedIcons}
          </label>
        </NxOverflowTooltip>
      );
    };

NxTag.propTypes = propTypes;
export default NxTag;

export const NxSelectableTag: FunctionComponent<SelectableProps> =
    function NxSelectableTag(props) {
      const { children, className, selected, onSelect, ...attrs } = props,
          isSelected = selected,
          tagClasses = classnames('nx-tag--selectable', className, {
            'nx-tag--selected': isSelected,
            'nx-tag--unselected': !isSelected
          }),
          tagIcons =
            <NxFontAwesomeIcon icon={isSelected ? faTimesCircle : faPlusCircle} className="nx-tag__action" />;

      return (
        <NxTag className={tagClasses} selectedIcons={tagIcons} {...attrs}>
          {children}
          <input type="checkbox"
                 className="nx-tag__input"
                 checked={isSelected}
                 aria-checked={isSelected}
                 role="switch"
                 onChange={onSelect || undefined} />
        </NxTag>
      );
    };

NxSelectableTag.propTypes = selectablePropTypes;
