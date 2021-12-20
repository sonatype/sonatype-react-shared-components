/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useContext, ButtonHTMLAttributes } from 'react';
import classnames from 'classnames';

import {Props, propTypes} from './types';
import NxTooltip, { TooltipContext } from '../NxTooltip/NxTooltip';
import { includesDisabledClass } from '../../util/classUtil';

const NxButton = forwardRef<HTMLButtonElement, Props>(
    function NxButton({ variant, className, children, title: titleProp, ...attrs }, ref) {
      const classNames = classnames(className, 'nx-btn', `nx-btn--${variant || 'secondary'}`),
          alreadyHasTooltip = useContext(TooltipContext),
          title = titleProp || undefined,
          getBtn = (extraProps?: Partial<ButtonHTMLAttributes<HTMLButtonElement>>) => (
            <button key="button"
                    aria-disabled={includesDisabledClass(className)}
                    ref={ref}
                    className={classNames}
                    {...extraProps}
                    {...attrs}>
              {children}
            </button>
          );

      if (variant === 'icon-only' && !title && !attrs.disabled) {
        console.warn('Using icon-only buttons without the title prop is deprecated');
      }

      return title && !alreadyHasTooltip ? <NxTooltip title={title}>{getBtn()}</NxTooltip> : getBtn({ title });
    }
);

NxButton.propTypes = propTypes;

export default NxButton;
export {Props, propTypes} from './types';
