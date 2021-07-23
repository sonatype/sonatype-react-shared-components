/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import { NxListProps, nxListPropTypes, NxListTitleProps } from './types';
import NxListItemV2 from './NxListItemV2';
import { splitOutFirst } from '../../util/childUtil';
import NxListItemText from './NxListItemText';
import NxListItemSubtext from './NxListItemSubtext';
import NxListItemAction from './NxListItemAction';

const NxListTitle = (props: NxListTitleProps) => {
  const { children } = props;
  return (
    <h3 className="nx-h3">
      {children}
    </h3>
  );
};

const NxListV2 = (props: NxListProps) => {
  const {className, children, bulleted, ...attrs } = props;
  const classNames = classnames(className, 'nx-list',
      {'nx-list--bulleted': bulleted},
  );
  // const [title, otherChildren] = splitOutFirst(NxListTitle, children);
  const [title, otherChildren] = splitOutFirst(NxListTitle, children);
  return (
    <>
      {title}
      <ul className={classNames}
          {...attrs}>
        {otherChildren}
      </ul>
    </>
  );
};

NxListV2.propTypes = nxListPropTypes;
NxListV2.Item = NxListItemV2;
NxListV2.Text = NxListItemText;
NxListV2.Subtext = NxListItemSubtext;
NxListV2.Action = NxListItemAction;
NxListV2.Title = NxListTitle;

export default NxListV2;
export {NxListProps, nxListPropTypes} from './types';
