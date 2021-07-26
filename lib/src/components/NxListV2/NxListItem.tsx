/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import {NxListItemProps, nxListItemPropTypes} from './types';

const NxListItem = forwardRef<HTMLLIElement, NxListItemProps>(
    function NxListItem({ className, children, ...attrs }, ref) {
      const classNames = classnames(className, 'nx-list__item'),
          listItem = (
            <li ref={ref}
                className={classNames}
                {...attrs}>
              {children}
            </li>
          );
      return listItem;
    }
);

NxListItem.propTypes = nxListItemPropTypes;

export default NxListItem;
