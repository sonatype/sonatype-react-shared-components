/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { MouseEventHandler } from 'react';

import AbstractDialog, { AbstractDialogContext } from '../NxModal/AbstractDialog';

import classnames from 'classnames';

import withClass from '../../util/withClass';

import {
  Props,
  PopOverHeaderProps
} from './types';

import './NxPopOver.scss';

import NxCloseButton from '../NxCloseButton/NxCloseButton';
import { useRef } from 'react';

const ANIMATION_OUT_DURATION_IN_MS = 120;

export const NxPopOverHeader = (props: PopOverHeaderProps) => {
  const dialogValue = React.useContext(AbstractDialogContext);

  const subtitle = props.subtitle ? <h3 className="nx-h3 nx-pop-over-header__subtitle">{props.subtitle}</h3> : null;
  const paragraph = props.paragraph ? <p className="nx-p nx-pop-over-header__paragraph">{props.paragraph}</p> : null;
  const handleCloseButton: MouseEventHandler<HTMLButtonElement> = (event) => {
    dialogValue?.onClose && dialogValue?.onClose(event);
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

const _NxPopOver = (props: Props) => {
  const {
    className,
    onClose,
    children,
    variant
    //...otherProps
  } = props;

  let timeOut: number | null = null;

  const closePopOver = () => {
    if (timeOut) {
      return;
    }
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    dialogRef.current?.classList.remove('nx-pop-over--slide-in');
    dialogRef.current?.classList.add('nx-pop-over--slide-out');
    timeOut = window.setTimeout(() => onClose(), prefersReducedMotion ? 0 : ANIMATION_OUT_DURATION_IN_MS);
  };

  const dialogRef = useRef<HTMLDialogElement>(null);

  const classes = classnames('nx-pop-over', 'nx-pop-over--slide-in', {
    'nx-pop-over--narrow': variant === 'narrow'
  }, className);

  return (
    <AbstractDialog closeOnClickOutside={true} ref={dialogRef} className={classes} onClose={closePopOver}>
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
