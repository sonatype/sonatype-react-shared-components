/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import classnames from 'classnames';

import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import withClass from '../../util/withClass';

import { NxTileHeaderTitleProps } from './types';

const NxTileHeaderTitle = (props: NxTileHeaderTitleProps) => {
  const {
    className,
    children,
    ...attrs
  } = props;

  const classes = classnames('nx-tile-header__title', className);

  return (
    <NxOverflowTooltip>
      <div className={classes} {...attrs}>
        {children}
      </div>
    </NxOverflowTooltip>
  );
};

const NxTile = Object.assign(withClass('section', 'nx-tile'), {
  Header: withClass('header', 'nx-tile-header'),
  Headings: withClass('hgroup', 'nx-tile-header__headings'),
  HeaderTitle: NxTileHeaderTitle,
  HeaderSubtitle: withClass('h3', 'nx-tile-header__subtitle'),
  HeaderActions: withClass('div', 'nx-tile__actions'),
  Content: withClass('div', 'nx-tile-content'),
  Subsection: withClass('section', 'nx-tile-subsection'),
  SubsectionHeader: withClass('header', 'nx-tile-subsection__header'),
  HeaderTags: withClass('div', 'nx-tile__tags')
});

export default NxTile;
