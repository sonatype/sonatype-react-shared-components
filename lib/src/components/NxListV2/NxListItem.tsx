/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import {NxListItemProps, nxListItemPropTypes} from './types';
import { matchingChildren } from '../../util/childUtil';
import NxListItemAction from './NxListAction';

const NxListItem = forwardRef<HTMLLIElement, NxListItemProps>(
    function NxListItem({ className, children, ...attrs }, ref) {
      const [nxListItemAction, childrenBesidesNxListItemAction]
        = matchingChildren(NxListItemAction, children);
      const classNames = classnames(className, 'nx-list__item'),
          listItem = (
            <li ref={ref}
                className={classNames}
                {...attrs}>
              {
                nxListItemAction && nxListItemAction.length > 0 ?
                  <>
                    {childrenBesidesNxListItemAction}
                    <div className="nx-list__actions">
                      {nxListItemAction.map(child => child)}
                    </div>
                  </> : children
              }
            </li>
          );
      return listItem;
    }
);

NxListItem.propTypes = nxListItemPropTypes;

export default NxListItem;
