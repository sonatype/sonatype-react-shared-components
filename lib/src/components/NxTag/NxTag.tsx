/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { FunctionComponent } from 'react';
import classnames from 'classnames';
// import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

// import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import './NxTag.scss';
import { Props, propTypes } from './types';
export { Props } from './types';

const NxTag:FunctionComponent<Props> =
    function NxTag(props) {
      const { children, className, tagSelected, onTagSelect, ...attrs } = props;
          
      const isSelected = tagSelected,
          tagClasses = classnames('nx-tag', className, {
            'nx-tag--selected': isSelected,
            'nx-tag--unselected': !isSelected
          });

      return (
        <button className={tagClasses} {...attrs} onClick={onTagSelect || undefined}>
          <div className="nx-tag__text">
            {children}
          </div>
        </button>
      );
    };


NxTag.propTypes = propTypes;
export default NxTag;
