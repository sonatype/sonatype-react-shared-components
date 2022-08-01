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

import { Props, propTypes } from './types';

import './NxDrawer.scss';

const POP_OVER_OPEN_CLASS_NAME = 'nx-drawer--open';

const _NxDrawer = (props: Props) => {
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

  const closeDrawer = () => {
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

  const classes = classnames('nx-drawer', { 'nx-drawer--narrow': variant === 'narrow' }, className);

  const subtitleContent = headerSubtitle ?
    <h3 className="nx-h3 nx-drawer-header__subtitle">{headerSubtitle}</h3> : null;
  const paragraphContent = headerParagraph ?
    <p className="nx-p nx-drawer-header__paragraph">{headerParagraph}</p> : null;

  return (
    <AbstractDialog ref={dialogRef}
                    className={classes}
                    onCancel={closeDrawer}
                    cancelOnClickOutside={true}
                    cancelOnClickOutsideTargetClassName={'nx-drawer__inner'}
                    onTransitionEnd={handleTransitionEnd}
                    {...attrs}>
      <div className="nx-drawer__inner">
        <header className="nx-drawer-header">
          <NxCloseButton className="nx-drawer-header__close"
                         type="button"
                         onClick={() => onCancel()}>
            Close
          </NxCloseButton>
          <h2 className="nx-h2 nx-drawer-header__title">
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

const NxDrawer = Object.assign(_NxDrawer, {
  propTypes,
  Content: withClass('div', 'nx-drawer-content'),
  Footer: withClass('footer', 'nx-drawer-footer')
});

export default NxDrawer;
export { Props } from './types';
