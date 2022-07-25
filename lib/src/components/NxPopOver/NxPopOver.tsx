/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { MouseEventHandler, useEffect } from 'react';

import AbstractDialog, { AbstractDialogContext } from '../AbstractDialog/AbstractDialog';

import classnames from 'classnames';

import withClass from '../../util/withClass';

import {
  Props,
  PopOverHeaderProps
} from './types';

import './NxPopOver.scss';

import NxCloseButton from '../NxCloseButton/NxCloseButton';
import { useRef } from 'react';

export const NxPopOverHeader = (props: PopOverHeaderProps) => {
  const dialogValue = React.useContext(AbstractDialogContext);

  const subtitle = props.subtitle ? <h3 className="nx-h3 nx-pop-over-header__subtitle">{props.subtitle}</h3> : null;
  const paragraph = props.paragraph ? <p className="nx-p nx-pop-over-header__paragraph">{props.paragraph}</p> : null;
  const handleCloseButton: MouseEventHandler<HTMLButtonElement> = () => {
    dialogValue?.onCancel && dialogValue?.onCancel();
  };

  return (
    <header className="nx-pop-over-header">
      <NxCloseButton className="nx-pop-over-header__close"
                     type="button"
                     onClick={handleCloseButton}>
        Close
      </NxCloseButton>

      <h2 className="nx-h2 nx-pop-over-header__title">
        {props.title}
      </h2>

      {subtitle}
      {paragraph}
    </header>
  );
};

const POP_OVER_OPEN_CLASS_NAME = 'nx-pop-over--open';

const _NxPopOver = (props: Props) => {
  const {
    className,
    onCancel,
    children,
    variant
    //...otherProps
  } = props;

  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    dialogRef.current?.classList.add(POP_OVER_OPEN_CLASS_NAME);
  }, [dialogRef]);

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

  const classes = classnames('nx-pop-over', {
    'nx-pop-over--narrow': variant === 'narrow'
  }, className);

  return (
    <AbstractDialog cancelOnClickOutside={true}
                    ref={dialogRef}
                    className={classes}
                    onCancel={closePopOver}
                    cancelOnClickOutsideTargetClassName="nx-pop-over__inner"
                    onTransitionEnd={handleTransitionEnd}>
      <div className='nx-pop-over__inner'>{children}</div>
    </AbstractDialog>
  );
};

const NxPopOver = Object.assign(_NxPopOver, {
  Header: NxPopOverHeader,
  Content: withClass('div', 'nx-pop-over-content'),
  Footer: withClass('footer', 'nx-pop-over-footer')
});

export default NxPopOver;

export {Props} from './types';
