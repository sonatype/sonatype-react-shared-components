/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import { omit } from 'ramda';
import classnames from 'classnames';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import './NxFilterInput.scss';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';
import NxTextInput from '../NxTextInput/NxTextInput';
export { Props } from './types';

const NxFilterInput = forwardRef<HTMLDivElement, Props>(
    function NxFilterInput(props, ref) {
      const classes = classnames('nx-filter-input', props.className),

          // just in case these props get passed in, avoid passing them to NxTextInput as they would cause
          // malfunction
          otherProps = omit(['validatable', 'validationErrors', 'type'], props),
          filterIcon = <NxFontAwesomeIcon icon={faFilter} className="nx-icon--filter-icons" />;

      return <NxTextInput { ...otherProps }
                          ref={ref}
                          isPristine={false}
                          className={classes}
                          prefixContent={filterIcon} />;
    }
);

NxFilterInput.propTypes = propTypes;

export default NxFilterInput;
