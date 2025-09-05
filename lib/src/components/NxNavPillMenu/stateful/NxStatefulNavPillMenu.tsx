/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under  
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';

import NxNavPillMenu from '../NxNavPillMenu';
import { NavPillMenuItem } from '../types';
import { NxStatefulNavPillMenuProps, nxStatefulNavPillMenuPropTypes } from './types';

export { NxStatefulNavPillMenuProps };

const NxStatefulNavPillMenu = forwardRef<HTMLElement, NxStatefulNavPillMenuProps>(
  function NxStatefulNavPillMenuElement(props, ref) {
    const {
      items,
      onItemChange,
      ...otherProps
    } = props;

    const handleItemClick = (item: NavPillMenuItem) => {
      if (!item.disabled) {
        onItemChange?.(item);
      }
    };

    return (
      <NxNavPillMenu
        ref={ref}
        items={items}
        onItemClick={handleItemClick}
        {...otherProps}
      />
    );
  }
);

NxStatefulNavPillMenu.propTypes = nxStatefulNavPillMenuPropTypes;

export default NxStatefulNavPillMenu;