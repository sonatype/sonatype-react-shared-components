/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, KeyboardEventHandler, KeyboardEvent } from 'react';
import { mergeDeepRight, omit } from 'ramda';
import classnames from 'classnames';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';

import './NxFilterInput.scss';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import Close from '../../icons/Close';
import NxButton from '../NxButton/NxButton';
import { Props, propTypes } from './types';
import { PrivateNxTextInput } from '../NxTextInput/NxTextInput';
export { Props } from './types';

const NxFilterInput = forwardRef<HTMLDivElement, Props>(
    function NxFilterInput(props, ref) {
      const { className: classNameProp, searchIcon, onKeyDown, value, inputAttributes, ...otherProps } = props,
          isEmpty = value.trim() === '',
          className = classnames('nx-filter-input', classNameProp, {
            'nx-filter-input--empty': isEmpty
          }),
          btnClassName = classnames('nx-btn--clear', { 'hidden': isEmpty }),
          // just in case these props get passed in, avoid passing them to NxTextInput as they would cause
          // malfunction
          cleanedProps = omit(['validatable', 'validationErrors', 'type'], otherProps),
          filterIcon = searchIcon ? faSearch : faFilter,
          btnTitle = searchIcon ? 'Clear search' : 'Clear filter',
          prefixContent = <NxFontAwesomeIcon icon={filterIcon} className="nx-icon--filter-icons" />,
          suffixContent =
            <NxButton className={btnClassName}
                      variant="icon-only"
                      title={btnTitle}
                      onClick={clearFilterInputText}
                      tabIndex={-1}
                      type="button">
              <Close/>
            </NxButton>;

      function clearFilterInputText() {
        props.onChange?.('');
      }

      const handleKeyDown: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
            if (e.key === 'Escape') {
              clearFilterInputText();

              if (value !== '') {
                // only prevent default if the ESC actually made a difference here
                e.preventDefault();
              }
            }

            // NxFilterInput always uses <input> and not <textarea>
            onKeyDown?.(e as KeyboardEvent<HTMLInputElement>);
          },
          mergedInputAttributes = mergeDeepRight(inputAttributes ?? {}, { onKeyDown: handleKeyDown });

      return <PrivateNxTextInput { ...cleanedProps }
                                 { ...{ prefixContent, className, suffixContent } }
                                 value={value}
                                 inputAttributes={mergedInputAttributes}
                                 ref={ref}
                                 isPristine={false} />;
    }
);

NxFilterInput.propTypes = propTypes;

export default NxFilterInput;
