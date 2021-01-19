/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import './NxTag.scss';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxTag: FunctionComponent<Props> =
    function NxTag(props) {
      const { children, className, ...attrs } = props,
          tagClasses = classnames('nx-tag', className);

      return (
        <div className={tagClasses} {...attrs}>
          <div className="nx-tag__text">
            {children}
          </div>
        </div>
      );
    };

NxTag.propTypes = propTypes;
export default NxTag;

export const NxSelectableTag: FunctionComponent<Props> =
    function NxSelectableTag(props) {
      const { children, className, tagSelected, onTagSelect, ...attrs } = props,
          isSelected = tagSelected,
          tagClasses = classnames('nx-tag nx-tag--selectable', className, {
            'nx-tag--selected': isSelected,
            'nx-tag--unselected': !isSelected
          });

      return (
        <div className={tagClasses} {...attrs} onClick={onTagSelect || undefined}>
          <div className="nx-tag__text">
            {children}
          </div>
          <div className="nx-tag__action">
            <NxFontAwesomeIcon icon={faPlusCircle} />
          </div>
        </div>
      );
    };

NxSelectableTag.propTypes = propTypes;
