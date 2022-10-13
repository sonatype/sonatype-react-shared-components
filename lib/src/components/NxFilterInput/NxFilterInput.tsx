/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, KeyboardEventHandler, useRef } from 'react';
import useMergedRef from '@react-hook/merged-ref';
import { omit } from 'ramda';
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
      const { className: classNameProp, searchIcon, ...otherProps } = props,
          isEmpty = props.value.trim() === '',
          className = classnames('nx-filter-input', classNameProp, {
            'nx-filter-input--empty': isEmpty
          }),
          btnClassName = classnames('nx-btn--clear-filter-btn', { 'hidden': isEmpty }),
          fieldRef = useRef<HTMLDivElement>(null),
          mergedRef = useMergedRef(fieldRef, ref),
          // just in case these props get passed in, avoid passing them to NxTextInput as they would cause
          // malfunction
          cleanedProps = omit(['validatable', 'validationErrors', 'type'], otherProps),
          filterIcon = searchIcon ? faSearch : faFilter,
          prefixContent = <NxFontAwesomeIcon icon={filterIcon} className="nx-icon--filter-icons" />,
          suffixContent =
            <NxButton className={btnClassName}
                      variant="icon-only"
                      title="clear filter"
                      onClick={clearFilterInputText}
                      tabIndex={-1}><Close/>
            </NxButton>;

      function clearFilterInputText() {
        if (fieldRef.current) {
          const input = fieldRef.current.querySelector('input') as HTMLInputElement;
          const setter = Object.getOwnPropertyDescriptor(HTMLInputElement.prototype, 'value')?.set;
          if (setter) {
            setter.call(input, '');
            input.dispatchEvent(new Event('change', { bubbles: true }));
          }
        }
      }

      const handleKeyDown: KeyboardEventHandler<HTMLInputElement | HTMLTextAreaElement> = (e) => {
        if (e.key === 'Escape') {
          clearFilterInputText();
        }
      };

      return <PrivateNxTextInput { ...cleanedProps }
                                 { ...{ prefixContent, className, suffixContent } }
                                 onKeyDown={handleKeyDown}
                                 ref={mergedRef}
                                 isPristine={false} />;
    }
);

NxFilterInput.propTypes = propTypes;

export default NxFilterInput;
