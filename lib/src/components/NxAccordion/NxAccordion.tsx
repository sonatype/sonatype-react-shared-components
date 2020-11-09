/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { MouseEvent } from 'react';
import classnames from 'classnames';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { ensureElement } from '../../util/reactUtil';

import { Props, propTypes } from './types';

import './NxAccordion.scss';

export default function NxAccordion(props: Props) {
  const { className, onToggle, open, onClick: onClickProp, headerContent, children, ...otherProps } = props,
      classes = classnames('nx-accordion', className);

  function onClick(evt: MouseEvent<HTMLDetailsElement>) {
    evt.preventDefault();

    if (onToggle) {
      onToggle(!evt.currentTarget.open);
    }

    if (onClickProp) {
      onClickProp(evt);
    }
  }

  return (
    <details className={classes} open={open} { ...otherProps} onClick={onClick}>
      <summary className="nx-accordion__header">
        <NxFontAwesomeIcon icon={open ? faChevronCircleUp : faChevronCircleDown} />
        {ensureElement(headerContent)}
      </summary>
      <div className="nx-accordion__content">{children}</div>
    </details>
  );
}

NxAccordion.propTypes = propTypes;
