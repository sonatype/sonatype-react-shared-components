/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {
  HTMLAttributes,
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
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
  open: boolean;
  isVisible: boolean;
}

const NxDrawerContext = React.createContext<NxDrawerContextValue>({
  closeDrawer: () => {},
  open: false,
  isVisible: false
});

const NxDrawerHeader = (props: NxDrawerHeaderProps) => {
  const {
    className,
    children,
    ...attrs
  } = props;

  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const { closeDrawer, isVisible } = useContext(NxDrawerContext);

  useEffect(() => {
    if (isVisible && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isVisible]);

  const classes = classnames('nx-drawer-header', className);

  return (
    <header className={classes} role="none" {...attrs}>
      <NxCloseButton className="nx-drawer-header__cancel-button"
                     type="button"
                     ref={closeButtonRef}
                     onClick={() => closeDrawer()}>
        Close
      </NxCloseButton>
      {children}
    </header>
  );
};

function NxDrawer(props: Props) {
  const {
    className,
    open,
    onClose,
    onCancel,
    children,
    variant,
    ...attrs
  } = props;
  const [isVisible, setIsVisible] = useState(false);
  const previouslyActiveElement = useRef<HTMLElement | null>(null);

  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeDrawer = () => onClose(true);

  const handleAnimationEnd = () => {
    if (!open) {
      setIsVisible(false);
      if (onCancel) {
        onCancel();
      }
    }
  };

  const updatePreviouslyActiveElement = () => {
    previouslyActiveElement.current = document.activeElement as HTMLElement;
  };

  useEffect(() => {
    const listener = (event: MouseEvent) => {
      if (dialogRef.current && !dialogRef.current.contains(event.target as Node)) {
        closeDrawer();
      }
    };

    if (open) {
      updatePreviouslyActiveElement();
      setIsVisible(true);
      document.addEventListener('click', listener);
    }
    else {
      if (previouslyActiveElement.current) {
        previouslyActiveElement.current.focus();
      }
    }

    return () => document.removeEventListener('click', listener);
  }, [open]);

  const classes = classnames('nx-drawer', 'nx-viewport-sized', {
    'nx-drawer--visible': isVisible,
    'nx-drawer--opening': open,
    'nx-drawer--closing': isVisible && !open,
    'nx-drawer--narrow': variant === 'narrow'
  }, className);

  const drawerContextValue = { closeDrawer, open, isVisible };

  return (
    <NxDrawerContext.Provider value={drawerContextValue}>
      <AbstractDialog ref={dialogRef}
                      className={classes}
                      onCancel={closeDrawer}
                      isModal={false}
                      onAnimationEnd={handleAnimationEnd}
                      {...attrs}>
        {children}
      </AbstractDialog>
    </NxDrawerContext.Provider>
  );
}

export default Object.assign(
    NxDrawer,
    {
      propTypes,
      Header: NxDrawerHeader,
      // eslint-disable-next-line max-len
      Content: withClass('div', 'nx-drawer-content nx-scrollable nx-viewport-sized__scrollable'),
      HeaderTitle: withClass('h2', 'nx-h2 nx-drawer-header__title'),
      HeaderSubtitle: withClass('h3', 'nx-h3 nx-drawer-header__subtitle'),
      HeaderDescription: withClass('p', 'nx-p nx-drawer-header__description')
    }
);

export { Props } from './types';
