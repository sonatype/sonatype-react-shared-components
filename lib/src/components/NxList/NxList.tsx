/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';
import { NxListProps, nxListPropTypes, NxListTitleProps } from './types';
import { splitOutFirst } from '../../util/childUtil';
import NxListText from './NxListText';
import NxListSubtext from './NxListSubtext';
import NxListActions from './NxListActions';
import NxListButton from './NxListButton';
import NxListLink from './NxListLink';
import NxListItem from './NxListItem';
import NxListError from './NxListError';
import NxListLoading from './NxListLoading';
import NxListEmpty from './NxListEmpty';
import NxListDescriptionTerm from './NxListDescriptionTerm';
import NxListDescription from './NxListDescription';

const NxListTitle = (props: NxListTitleProps) => {
  const { children } = props;
  return (
    <h3 className="nx-h3">
      {children}
    </h3>
  );
};

const NxList = (props: NxListProps) => {
  const {className, children, bulleted, ...attrs } = props;
  const classNames = classnames(className, 'nx-list',
      {'nx-list--bulleted': bulleted},
  );
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

NxList.propTypes = nxListPropTypes;
NxList.Item = NxListItem;
NxList.Text = NxListText;
NxList.Subtext = NxListSubtext;
NxList.Actions = NxListActions;
NxList.Title = NxListTitle;
NxList.Button = NxListButton;
NxList.Link = NxListLink;
NxList.Error = NxListError;
NxList.Empty = NxListEmpty;
NxList.Loading = NxListLoading;
NxList.DescriptionTerm = NxListDescriptionTerm;
NxList.Description = NxListDescription;

export default NxList;
export {NxListProps, nxListPropTypes} from './types';
