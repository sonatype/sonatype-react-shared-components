/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { MouseEvent, useContext, useRef } from 'react';
import classnames from 'classnames';
import { faChevronCircleDown, faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';
import { ensureElement } from '../../util/reactUtil';

import { HeaderContextType, HeaderProps, Props, propTypes } from './types';

import './NxAccordion.scss';
import { splitOutFirst } from '../../util/childUtil';

export { Props, HeaderProps };

const HeaderContext = React.createContext<HeaderContextType>({
  onClick: () => {},
  open: false
});

function NxAccordionHeader({ className, onClick: onClickProp, children, ...otherProps }: HeaderProps) {
  const classes = classnames('nx-accordion__header', className),
      { onClick: onClickContext, open } = useContext(HeaderContext),
      summaryElRef = useRef(null);

  // returns whether or not el is within a <button>. Assumes that el is a child of the <summary>
  function isWithinSummaryBtn(el: HTMLElement): boolean {
    return el.tagName === 'BUTTON' ? true :
      el === summaryElRef.current ? false :
      el.parentElement === null ? false :
      isWithinSummaryBtn(el.parentElement);
  }

  function onClick(evt: MouseEvent<HTMLElement>) {
    if (onClickProp) {
      onClickProp(evt);
    }

    // do not trigger collapse/expand for clicks on nested buttons, only on the header itself
    if (!isWithinSummaryBtn(evt.target as HTMLElement)) {
      onClickContext(evt);
    }
  }

  return (
    <summary className={classes} onClick={onClick} { ...otherProps } ref={summaryElRef}>
      <NxFontAwesomeIcon className="nx-accordion__chevron" icon={open ? faChevronCircleUp : faChevronCircleDown} />
      {ensureElement(children)}
    </summary>
  );
}

export default function NxAccordion(props: Props) {
  const { className, onToggle, open, children, ...otherProps } = props,
      classes = classnames('nx-accordion', className),
      [header, otherChildren] = splitOutFirst(NxAccordionHeader, children);

  function onHeaderClick(evt: MouseEvent) {
    evt.preventDefault();

    if (onToggle) {
      onToggle(!open);
    }
  }

  const headerContext = {
    onClick: onHeaderClick,
    open: open || false
  };

  return (
    <details className={classes} open={open} { ...otherProps}>
      <HeaderContext.Provider value={headerContext}>{header}</HeaderContext.Provider>
      <div className="nx-accordion__content">{otherChildren}</div>
    </details>
  );
}

NxAccordion.propTypes = propTypes;
NxAccordion.Header = NxAccordionHeader;
