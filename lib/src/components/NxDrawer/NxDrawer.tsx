/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {
  forwardRef,
  HTMLAttributes,
  ReactNode,
  Ref,
  useContext,
  useEffect,
  useImperativeHandle,
  useRef,
  useState
} from 'react';
import classnames from 'classnames';
import { omit } from 'ramda';

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
    // We use <div> instead of <header> to prevent
    // double banner landmark with the parent global header.
    <div className={classes} {...attrs}>
      <NxCloseButton className="nx-drawer-header__cancel-button"
                     type="button"
                     onClick={() => closeDrawer()}>
        Close
      </NxCloseButton>
      {children}
    </div>
  );
};

export interface NxDrawerRef {
  dialog: HTMLDialogElement;
  closeDrawer: () => void;
}

function NxDrawer(props: Props, ref: Ref<NxDrawerRef>) {
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

  useImperativeHandle(ref, () => ({
    dialog: dialogRef.current as HTMLDialogElement,
    closeDrawer
  }));

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        closeDrawer();
      }
    };

    document.addEventListener('click', listener);

    return () => document.removeEventListener('click', listener);
  }, []);

  const drawerContextValue = { closeDrawer };

  const classes = classnames('nx-drawer', 'nx-viewport-sized', {
    'nx-drawer--close': isClosing,
    'nx-drawer--narrow': variant === 'narrow'
  }, className);

  const dialogAttrs = omit(['open'], attrs);

  return (
    <NxDrawerContext.Provider value={drawerContextValue}>
      <AbstractDialog ref={dialogRef}
                      className={classes}
                      onCancel={closeDrawer}
                      isModal={false}
                      onAnimationEnd={handleAnimationEnd}
                      {...dialogAttrs}>
        {children}
      </AbstractDialog>
    </NxDrawerContext.Provider>
  );
}

export default Object.assign(
    forwardRef<NxDrawerRef, Props>(NxDrawer),
    {
      propTypes,
      Header: NxDrawerHeader,
      // eslint-disable-next-line max-len
      Content: withClass('div', 'nx-drawer-content nx-scrollable nx-viewport-sized__scrollable', undefined, { tabIndex: 0 }),
      HeaderTitle: withClass('h2', 'nx-h2 nx-drawer-header__title'),
      HeaderSubtitle: withClass('h3', 'nx-h3 nx-drawer-header__subtitle'),
      HeaderDescription: withClass('p', 'nx-p nx-drawer-header__description')
    }
);

export { Props } from './types';
