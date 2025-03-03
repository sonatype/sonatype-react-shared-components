/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentPropsWithoutRef } from 'react';
import classnames from 'classnames';
import { omit } from 'ramda';
import './NxRadio.scss';

import { Props, propTypes } from './types';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';

export { Props } from './types';

export default function NxRadio(props: Props) {
  const {
        className,
        name,
        value,
        onChange,
        isChecked,
        disabled,
        children,
        radioId,
        overflowTooltip,
        inputAttributes = {},
        ...otherProps
      } = props,
      labelClasses = classnames('nx-radio-checkbox', 'nx-radio', className, {
        'nx-radio-checkbox--disabled': disabled,
        'tm-checked': isChecked,
        'tm-unchecked': !isChecked
      }),
      content = children && <span className="nx-radio-checkbox__content nx-radio__content">{children}</span>;

  const {
    className: radioClassName,
    ...unfilteredInputAttributes
  } = inputAttributes as ComponentPropsWithoutRef<'input'>;

  const otherInputAttributes = omit(
      ['name', 'disabled', 'checked', 'onChange', 'readOnly'],
      unfilteredInputAttributes
  );

  return (
    <label { ...otherProps } className={labelClasses}>
      <input className={classnames('nx-radio-checkbox__input', 'nx-radio__input', radioClassName)}
             id={otherInputAttributes.id || radioId || undefined}
             type="radio"
             name={name}
             disabled={!!disabled}
             checked={isChecked}
             onChange={() => onChange && onChange(value)}
             readOnly={!onChange}
             { ...otherInputAttributes } />
      <span className="nx-radio-checkbox__control nx-radio__circle"></span>
      <span className="nx-radio__focus"></span>
      { content &&
        (overflowTooltip !== false ? <NxOverflowTooltip>{content}</NxOverflowTooltip> : content)
      }
    </label>
  );
}

NxRadio.propTypes = propTypes;
