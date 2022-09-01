/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useContext, useEffect, useRef, useState, HTMLAttributes, ReactNode } from 'react';
import classnames from 'classnames';

import AbstractDialog from '../AbstractDialog/AbstractDialog';
import NxCloseButton from '../NxCloseButton/NxCloseButton';
import withClass from '../../util/withClass';

import { Props, propTypes } from './types';

import './NxDrawer.scss';

interface NxDrawerHeaderProps extends HTMLAttributes<HTMLElement>{
  children: ReactNode;
}

interface NxDrawerContextValue {
  closeDrawer: () => void;
}

const NxDrawerContext = React.createContext<NxDrawerContextValue>({
  closeDrawer: () => {}
});

const NxDrawerHeader = (props: NxDrawerHeaderProps) => {
  const {
    className,
    children,
    ...attrs
  } = props;

  const { closeDrawer } = useContext(NxDrawerContext);

  const classes = classnames('nx-drawer-header', className);

  return (
    <header className={classes} {...attrs}>
      <NxCloseButton className="nx-drawer-header__cancel-button"
                     type="button"
                     onClick={() => closeDrawer()}>
        Close
      </NxCloseButton>
      {children}
    </header>
  );
};

const _NxDrawer = (props: Props) => {
  const {
    className,
    onCancel,
    children,
    variant,
    ...attrs
  } = props;
  const [isClosing, setIsClosing] = useState(false);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeDrawer = () => setIsClosing(true);

  const handleAnimationEnd = () => {
    if (isClosing) {
      onCancel();
    }
  };

  useEffect(() => {
    const clickOutsideTargetElement = dialogRef.current?.getElementsByClassName('nx-drawer__panel')[0];

    const listener = (event: MouseEvent) => {
      if (clickOutsideTargetElement && !(clickOutsideTargetElement as HTMLDivElement).contains(event.target as Node)) {
        closeDrawer();
      }
    };

    document.addEventListener('click', listener);

    return () => document.removeEventListener('click', listener);
  }, [dialogRef]);

  const drawerContextValue = { closeDrawer };

  const classes = classnames('nx-drawer', {
    'nx-drawer--narrow': variant === 'narrow'
  }, className);

  const animationWrapperClasses = classnames('nx-drawer__animation-wrapper', {
    'nx-drawer__animation-wrapper--close': isClosing
  });

  return (
    <NxDrawerContext.Provider value={drawerContextValue}>
      <AbstractDialog ref={dialogRef}
                      className={classes}
                      onCancel={closeDrawer}
                      isModal={false}
                      {...attrs}>
        <div className={animationWrapperClasses} onAnimationEnd={handleAnimationEnd}>
          <div className="nx-drawer__panel">
            {children}
          </div>
        </div>
      </AbstractDialog>
    </NxDrawerContext.Provider>
  );
};

const NxDrawer = Object.assign(_NxDrawer, {
  propTypes,
  Header: NxDrawerHeader,
  Content: withClass('div', 'nx-drawer-content'),
  HeaderTitle: withClass('h2', 'nx-h2 nx-drawer-header__title'),
  HeaderSubtitle: withClass('h3', 'nx-h3 nx-drawer-header__subtitle'),
  HeaderDescription: withClass('p', 'nx-p nx-drawer-header__description')
});

export default NxDrawer;
export { Props } from './types';
