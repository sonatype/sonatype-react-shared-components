/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext } from 'react';
import classnames from 'classnames';

import { Props, propTypes } from './types';
import NxTooltip, { TooltipContext } from '../NxTooltip/NxTooltip';
import { includesDisabledClass } from '../../util/classUtil';

export default function NxButton({ variant, className, children, title: titleProp, disabled, ...attrs }: Props) {
  const classNames = classnames(className, 'nx-btn', `nx-btn--${variant || 'secondary'}`),
      alreadyHasTooltip = useContext(TooltipContext),
      title = titleProp || undefined,
      isIconOnly = variant === 'icon-only',
      getBtn = (title?: string) => (
        <button aria-disabled={includesDisabledClass(className) || disabled}
                disabled={disabled}
                className={classNames}
                title={title}
                {...attrs}>
          {children}
        </button>
      ),
      wrapInTooltip = title && !disabled && !alreadyHasTooltip;
  if (disabled && title) {
    throw new TypeError('NxButton cannot contain both the \'disabled\' and \'title\' props.');
  }
  if (isIconOnly && !title && !disabled && !alreadyHasTooltip) {
    console.warn('Using icon-only buttons without the title prop is deprecated');
  }
  return wrapInTooltip ? <NxTooltip isName={isIconOnly} title={title}>{getBtn()}</NxTooltip> : getBtn(title);
}

NxButton.propTypes = propTypes;

export {Props, propTypes} from './types';
