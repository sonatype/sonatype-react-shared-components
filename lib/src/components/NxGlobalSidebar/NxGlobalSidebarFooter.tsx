/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

import React, { FunctionComponent } from 'react';
import classnames from 'classnames';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxTextLink from '../NxTextLink/NxTextLink';

import { NxGlobalSidebarFooterProps as Props, nxGlobalSidebarFooterPropTypes } from './types';
import { faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
export { NxGlobalSidebarFooterProps } from './types';

const NxGlobalSidebarFooter: FunctionComponent<Props> = function NxNavigationSidebarLinks(props) {
  const {
    className,
    showSupport,
    supportIcon,
    supportText,
    supportLink,
    releaseText,
    releaseNumber,
    productText,
    showSonatype,
    sonatypeText,
    ...otherProps } = props;
  const classes = classnames(className, 'nx-global-sidebar__footer');

  return (
    <footer className={classes} {...otherProps}>
      { showSupport &&
        <div className="nx-global-sidebar__support">
          <NxTextLink href={supportLink || undefined}>
            <NxFontAwesomeIcon icon={supportIcon || faQuestionCircle} />
            <span className="nx-global-sidebar__support-text nx-global-sidebar__expanded-content">
              {supportText || 'Help and Support'}
            </span>
          </NxTextLink>
        </div> }

      { releaseText || releaseNumber ?
        <div className="nx-global-sidebar__release">
          <span className="nx-global-sidebar__release-text nx-global-sidebar__expanded-content">
            {releaseText || undefined}
          </span>{' '}
          <span className="nx-global-sidebar__release-number">{releaseNumber || undefined}</span>
        </div> : null
      }

      { productText ?
        <div className="nx-global-sidebar__product nx-global-sidebar__expanded-content">
          {productText || undefined}
        </div> : null
      }

      { showSonatype &&
        <div className="nx-global-sidebar__sonatype nx-global-sidebar__expanded-content">
          {sonatypeText || 'Created by Sonatype'}
        </div>
      }
    </footer>
  );
};

NxGlobalSidebarFooter.propTypes = nxGlobalSidebarFooterPropTypes;

export default NxGlobalSidebarFooter;
