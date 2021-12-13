/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import { omit } from 'ramda';
import classnames from 'classnames';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

import './NxFilterInput.scss';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';
import { PrivateNxTextInput } from '../NxTextInput/NxTextInput';
export { Props } from './types';

const NxFilterInput = forwardRef<HTMLDivElement, Props>(
    function NxFilterInput(props, ref) {
      const { className: classNameProp, searchIcon, ...otherProps } = props,
          isEmpty = props.value.trim() === '',
          className = classnames('nx-filter-input', classNameProp, {
            'nx-filter-input--empty': isEmpty
          }),

          // just in case these props get passed in, avoid passing them to NxTextInput as they would cause
          // malfunction
          cleanedProps = omit(['validatable', 'validationErrors', 'type'], otherProps),
          filterIcon = searchIcon ? faSearch : faFilter,
          prefixContent = <NxFontAwesomeIcon icon={filterIcon} className="nx-icon--filter-icons" />;

      return <PrivateNxTextInput { ...cleanedProps }
                                 { ...{ prefixContent, className } }
                                 ref={ref}
                                 isPristine={false} />;
    }
);

NxFilterInput.propTypes = propTypes;

export default NxFilterInput;
