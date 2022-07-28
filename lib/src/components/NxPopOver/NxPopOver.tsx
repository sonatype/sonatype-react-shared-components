/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useRef } from 'react';
import classnames from 'classnames';

import AbstractDialog from '../AbstractDialog/AbstractDialog';
import NxCloseButton from '../NxCloseButton/NxCloseButton';
import withClass from '../../util/withClass';

import { Props } from './types';

import './NxPopOver.scss';

const POP_OVER_OPEN_CLASS_NAME = 'nx-pop-over--open';

const _NxPopOver = (props: Props) => {
  const {
    className,
    onCancel,
    children,
    variant,
    headerTitle,
    headerSubtitle,
    headerParagraph,
    ...attrs
  } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => dialogRef.current?.classList.add(POP_OVER_OPEN_CLASS_NAME), [dialogRef]);

  const closePopOver = () => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    dialogRef.current?.classList.remove(POP_OVER_OPEN_CLASS_NAME);
    if (prefersReducedMotion) {
      onCancel();
    }
  };

  const handleTransitionEnd = () => {
    if (!dialogRef.current?.classList.contains(POP_OVER_OPEN_CLASS_NAME)) {
      onCancel();
    }
  };

  const classes = classnames('nx-pop-over', { 'nx-pop-over--narrow': variant === 'narrow' }, className);

  const subtitleContent = headerSubtitle ?
    <h3 className="nx-h3 nx-pop-over-header__subtitle">{headerSubtitle}</h3> : null;
  const paragraphContent = headerParagraph ?
    <p className="nx-p nx-pop-over-header__paragraph">{headerParagraph}</p> : null;

  return (
    <AbstractDialog ref={dialogRef}
                    className={classes}
                    onCancel={closePopOver}
                    cancelOnClickOutside={true}
                    cancelOnClickOutsideTargetClassName={'nx-pop-over__inner'}
                    onTransitionEnd={handleTransitionEnd}
                    {...attrs}>
      <div className="nx-pop-over__inner">
        <header className="nx-pop-over-header">
          <NxCloseButton className="nx-pop-over-header__close"
                         type="button"
                         onClick={() => onCancel()}>
            Close
          </NxCloseButton>
          <h2 className="nx-h2 nx-pop-over-header__title">
            {headerTitle}
          </h2>
          {subtitleContent}
          {paragraphContent}
        </header>
        {children}
      </div>
    </AbstractDialog>
  );
};

const NxPopOver = Object.assign(_NxPopOver, {
  Content: withClass('div', 'nx-pop-over-content'),
  Footer: withClass('footer', 'nx-pop-over-footer')
});

export default NxPopOver;
export { Props } from './types';
