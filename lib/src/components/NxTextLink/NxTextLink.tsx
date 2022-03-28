/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef } from 'react';
import classnames from 'classnames';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

import { ensureElement } from '../../util/reactUtil';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { Props, propTypes } from './types';

export { Props };

const NxTextLink = forwardRef<HTMLAnchorElement, Props>(
    function NxTextLink(props, ref) {
      const {
            children,
            external,
            noReferrer,
            newTab,
            truncate,
            className: specifiedClassName,
            rel: specifiedRel,
            target: specifiedTarget,
            ...attrs
          } = props,

          className = classnames('nx-text-link', specifiedClassName, {
            'nx-text-link--external': external,
            'nx-text-link--truncate': truncate
          }),

          // add the noreferrer rel if `noReferrer` prop is explicitly true, or its an external link and
          // the `noReferrer` prop isn't explicitly false
          rel = classnames(specifiedRel, {
            noreferrer: noReferrer || (external && noReferrer !== false)
          }),

          // unless the caller specified a different target, set it to _blank if the `newTab` prop is true or if
          // this is an external link and the newTab prop isn't explicitly false
          target = specifiedTarget || (newTab || (external && newTab !== false) ? '_blank' : ''),
          wrappedChildren = truncate ?
            <span className="nx-text-link__truncate-text">{children}</span> : ensureElement(children),
          icon = <NxFontAwesomeIcon icon={faExternalLinkAlt} size="sm" />;

      return (
        <a { ...{ ref, className, rel, target } } { ...attrs }>
          {wrappedChildren}
          { external &&
            (truncate ?
              // this wrapper element is needed for vertical alignment in the truncate case. It provides a strut
              // character which makes the two flex children equal in height with matching baselines
              <span className="nx-text-link__icon">{icon}</span> :
              icon
            )
          }
        </a>
      );
    }
);

NxTextLink.propTypes = propTypes;

export default NxTextLink;
