/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useLayoutEffect, useRef, useState } from 'react';
import useResizeObserver from '@react-hook/resize-observer';
import classnames from 'classnames';
import { inc, map, splitAt } from 'ramda';

import NxIconDropdown from '../NxIconDropdown/NxIconDropdown';

import { Props } from './types';

import './NxScrollNav.scss';

export default function NxScrollNav(props: Props) {
  const { scrollSections, onScrollSectionClick, isDropdownOpen, onToggleDropdownCollapse } = props,
      [overflowCount, setOverflowCount] = useState(0),
      ref = useRef<HTMLElement>(null),
      classes = classnames('nx-scroll-nav', {
        'nx-scroll-nav--overflowing': !!overflowCount
      }),
      buttons = map(s => <button key={s} onClick={() => onScrollSectionClick(s)}>{s}</button>, scrollSections),
      [buttonsBeforeOverflow, buttonsAfterOverflow] = splitAt(scrollSections.length - overflowCount, buttons);

  useResizeObserver(ref, recalculateOverflow);
  useLayoutEffect(recalculateOverflow, [scrollSections]);
  useLayoutEffect(checkOverflow, [overflowCount]);

  // Reset the overflowCount, triggering the checkOverflow useLayoutEffect to repeatedly increment it
  // until things fit
  function recalculateOverflow() {
    setOverflowCount(0);
  }

  // Check whether the main list of buttons is overflowing and if so increment the overflowCount.
  // That increment will trigger a re-render and then a re-call of this function via useLayoutEffect
  function checkOverflow() {
    const container = ref.current;

    if (container && container.scrollWidth > container.clientWidth && overflowCount < scrollSections.length) {
      setOverflowCount(inc);
    }
  }

  return (
    <nav ref={ref} className={classes}>
      {buttonsBeforeOverflow}
      { overflowCount && <NxIconDropdown isOpen={isDropdownOpen}
                                         className="nx-scroll-nav__overflow-dropdown"
                                         onToggleCollapse={onToggleDropdownCollapse} />
      }
      {buttonsAfterOverflow}
    </nav>
  );
}
