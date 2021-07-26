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
  const [title, otherChildren] = splitOutFirst(NxListTitle, children);

  return (
    <>
      {title}
      <ul className={classNames}
          {...attrs}>
        {
          React.Children.count(otherChildren) ? otherChildren :
          <li className="nx-list__item nx-list__item--empty">
            <span className="nx-list__text">This list is empty</span>
          </li>
        }
      </ul>
    </>
  );
};

NxListV2.propTypes = nxListPropTypes;
NxListV2.Item = NxListItem;
NxListV2.Text = NxListText;
NxListV2.Subtext = NxListSubtext;
NxListV2.Actions = NxListActions;
NxListV2.Title = NxListTitle;
NxListV2.Button = NxListButton;
NxListV2.Link = NxListLink;
NxListV2.Error = NxListError;
NxListV2.Loading = NxListLoading;

export default NxListV2;
export {NxListProps, nxListPropTypes} from './types';
