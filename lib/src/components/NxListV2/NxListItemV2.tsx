/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import {NxListItemProps, nxListItemPropTypes} from './types';
import { NxFontAwesomeIcon } from '../..';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { matchingChildren, splitOutFirst } from '../../util/childUtil';
import NxListItemText from './NxListItemText';
import NxListItemSubtext from './NxListItemSubtext';
import NxListItemAction from './NxListItemAction';

const NxListItemV2 = forwardRef<HTMLLIElement, NxListItemProps>(
    function NxList({ className, children, clickable, ...attrs }, ref) {
      const [nxListItemText, childrenBesidesNxListItemText] = splitOutFirst(NxListItemText, children);
      const [nxListItemSubText, childrenBesidesNxListItemSubText]
      = splitOutFirst(NxListItemSubtext, childrenBesidesNxListItemText);
      const [nxListItemAction, allOther] = matchingChildren(NxListItemAction, childrenBesidesNxListItemSubText);

      const classNames = classnames(className, 'nx-list__item',
              {'nx-list__item--clickable': clickable}),
          listItem = (
            <li ref={ref}
                className={classNames}
                {...attrs}>
              {
                clickable ?
                  <button className="nx-list__btn">
                    {nxListItemText}
                    {nxListItemSubText}
                    <NxFontAwesomeIcon icon={faAngleRight} className="nx-chevron" />
                  </button> :
                  <>
                    {nxListItemText}
                    {nxListItemSubText}
                    {nxListItemAction && nxListItemAction.length > 0 ?
                      <div className="nx-list__actions">
                        {nxListItemAction.map(child => child)}
                      </div> : allOther
                  }
                  </>
              }

            </li>
          );
      return listItem;
    }
);

NxListItemV2.propTypes = nxListItemPropTypes;

export default NxListItemV2;
export {NxListItemProps, nxListItemPropTypes} from './types';
