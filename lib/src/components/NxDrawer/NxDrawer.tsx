/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, {
  forwardRef,
  useContext,
  useEffect,
  useRef,
  useState
} from 'react';
import classnames from 'classnames';

import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import AbstractDialog from '../AbstractDialog/AbstractDialog';
import NxCloseButton from '../NxCloseButton/NxCloseButton';
import withClass from '../../util/withClass';

import {
  NxDrawerContextValue,
  NxDrawerHeaderProps,
  NxDrawerHeaderTitleProps,
  OpenState,
  Props,
  propTypes,
  nxDrawerHeaderTitlePropTypes
} from './types';

import './NxDrawer.scss';
import NxTooltip from '../NxTooltip/NxTooltip';

const NxDrawerContext = React.createContext<NxDrawerContextValue>({
  closeDrawer: () => {},
  closeDisabled: false,
  closeBtnTooltip: ''
});

const NxDrawerHeaderTitle = forwardRef<HTMLHeadingElement, NxDrawerHeaderTitleProps>((props, ref) => {
  const {
    className,
    children,
    ...attrs
  } = props;

  const classes = classnames('nx-drawer-header__title', className);

  return (
    <NxOverflowTooltip>
      <h2 className={classes} {...attrs} ref={ref}>
        {children}
      </h2>
    </NxOverflowTooltip>
  );
});

NxDrawerHeaderTitle.propTypes = nxDrawerHeaderTitlePropTypes;

const NxDrawerHeader = (props: NxDrawerHeaderProps) => {
  const {
    className,
    children,
    ...attrs
  } = props;
  const { closeDrawer, closeDisabled, closeBtnTooltip } = useContext(NxDrawerContext);

  const classes = classnames('nx-drawer-header', className);

  return (
    <header className={classes} role="none" {...attrs}>
      <NxTooltip title={closeBtnTooltip ? closeBtnTooltip : 'Close'}>
        <NxCloseButton className={`nx-drawer-header__close-button ${closeDisabled ? 'disabled' : ''}`}
                       type="button"
                       onClick={closeDrawer}>
          Close
        </NxCloseButton>
      </NxTooltip>
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
    closeDisabled,
    closeBtnTooltip,
    ...attrs
  } = props;

  const [openState, setOpenState] = useState<OpenState>('closed');

  const dialogRef = useRef<HTMLDialogElement>(null);

  const closeDrawer = closeDisabled ? () => {} : () => onClose();

  const handleAnimationEnd = () => {
    if (openState === 'closing') {
      setOpenState('closed');

      if (onCancel) {
        onCancel();
      }
    }
    else if (openState === 'opening') {
      setOpenState('open');
    }
    else {
      console.warn('Received animationEnd event when in unexpected openState', openState);
    }
  };

  useEffect(() => {
    if (open) {
      if (openState === 'closed') {
        setOpenState('opening');
      }

      const listener = (event: MouseEvent) => {
        const targetElement = event.target as Element;
        if (
          dialogRef.current
          && !dialogRef.current.contains(targetElement)
          && !targetElement.closest('.nx-toast')
        ) {
          closeDrawer();
        }
      };

      document.addEventListener('click', listener);

      return () => document.removeEventListener('click', listener);
    }
    else {
      if (openState === 'open') {
        setOpenState('closing');
      }

      return undefined;
    }
  }, [open, closeDisabled]);

  const classes = classnames('nx-drawer', 'nx-viewport-sized', {
    'nx-drawer--narrow': variant === 'narrow',
    [`nx-drawer--${openState}`]: openState !== 'open'
  }, className);

  const drawerContextValue = { closeDrawer, closeDisabled, closeBtnTooltip };

  return (
    <NxDrawerContext.Provider value={drawerContextValue}>
      <AbstractDialog ref={dialogRef}
                      className={classes}
                      onCancel={closeDrawer}
                      isModal={false}
                      onAnimationEnd={handleAnimationEnd}
                      open={openState === 'open'}
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
      Content: withClass('div', 'nx-drawer-content nx-scrollable nx-viewport-sized__scrollable'),
      HeaderTitle: NxDrawerHeaderTitle,
      HeaderSubtitle: withClass('h3', 'nx-h3 nx-drawer-header__subtitle'),
      HeaderDescription: withClass('p', 'nx-p nx-drawer-header__description')
    }
);

export { Props } from './types';
