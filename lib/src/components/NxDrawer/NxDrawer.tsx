/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useEffect, useRef, useState } from 'react';
import classnames from 'classnames';

import AbstractDialog from '../AbstractDialog/AbstractDialog';
import NxCloseButton from '../NxCloseButton/NxCloseButton';
import withClass from '../../util/withClass';

import { Props, propTypes } from './types';

import './NxDrawer.scss';

const _NxDrawer = (props: Props) => {
  const {
    className,
    onCancel,
    children,
    variant,
    headerTitle,
    headerSubtitle,
    headerDescription,
    ...attrs
  } = props;

  const [isClosing, setIsClosing] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);

  // useEffect(() => {
  //   setIsClosing(true);
  // }, []);

  const closeDrawer = () => setIsClosing(true);

  const handleAnimationEnd = () => {
    if (isClosing) {
      onCancel();
    }
  };

  const classes = classnames('nx-drawer', {
    'nx-drawer--closing': isClosing,
    'nx-drawer--narrow': variant === 'narrow'
  }, className);

  const subtitleContent = headerSubtitle ?
    <h3 className="nx-h3 nx-drawer-header__subtitle">{headerSubtitle}</h3> : null;
  const descriptionContent = headerDescription ?
    <p className="nx-p nx-drawer-header__description">{headerDescription}</p> : null;

  // const clickOutsideTargetElement = cancelOnClickOutsideTargetClassName ?
  //   dialogRef.current?.getElementsByClassName(cancelOnClickOutsideTargetClassName)[0] :
  //   dialogRef.current;

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      // eslint-disable-next-line
      console.log(dialogRef);

      if (dialogRef.current && !(dialogRef.current as HTMLDialogElement).contains(event.target as Node)) {
        // eslint-disable-next-line
        console.log('close drawer');
        closeDrawer();
      }
    };

    document.addEventListener('click', listener);

    return () => document.removeEventListener('click', listener);
  }, [dialogRef]);

  return (
    <AbstractDialog ref={dialogRef}
                    className={classes}
                    onCancel={closeDrawer}
                    isModal={false}
                    {...attrs}>
      <div className="nx-drawer__inner" onAnimationEnd={handleAnimationEnd}>
        <header className="nx-drawer-header">
          <NxCloseButton className="nx-drawer-header__cancel-button"
                         type="button"
                         onClick={() => closeDrawer()}>
            Close
          </NxCloseButton>
          <h2 className="nx-h2 nx-drawer-header__title">
            {headerTitle}
          </h2>
          {subtitleContent}
          {descriptionContent}
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
