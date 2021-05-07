/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import NxTextLink from '../NxTextLink/NxTextLink';

import { NxGlobalSidebarFooterProps as Props, nxGlobalSidebarFooterPropTypes } from './types';
export { NxGlobalSidebarFooterProps } from './types';

const NxGlobalSidebarFooter: FunctionComponent<Props> = function NxNavigationSidebarLinks(props) {
  const {
    className,
    showSupport,
    supportText,
    supportLink,
    releaseText,
    productText,
    showSonatype,
    sonatypeText,
    ...otherProps } = props;
  const classes = classnames(className, 'nx-global-sidebar__footer');

  return (
    <footer className={classes} {...otherProps}>
      { showSupport &&
        <div className="nx-global-sidebar__support">
          <NxTextLink external href={supportLink || undefined}>
            {supportText || 'Help and Support'}
          </NxTextLink>
        </div> }

      { releaseText ? <div className="nx-global-sidebar__release">{releaseText || undefined}</div> : null}

      { productText ? <div className="nx-global-sidebar__product">{productText || undefined}</div> : null}

      { showSonatype && <div className="nx-global-sidebar__sonatype">{sonatypeText || 'Created by Sonatype'}</div> }
    </footer>
  );
};

NxGlobalSidebarFooter.propTypes = nxGlobalSidebarFooterPropTypes;

export default NxGlobalSidebarFooter;
