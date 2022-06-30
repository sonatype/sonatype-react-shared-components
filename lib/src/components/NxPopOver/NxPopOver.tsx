/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import classnames from 'classnames';

//import withClass from '../../util/withClass';
import {
  Props,
  PopOverContextType,
  PopOverHeaderProps,
  PopOverContentProps,
  PopOverFooterProps
} from './types';

import './NxPopOver.scss';

const PopOverContext = React.createContext<PopOverContextType>({
  onClose: () => {}
});

export const NxPopOverHeader = (props: PopOverHeaderProps) => {
  const { onClose } = React.useContext(PopOverContext);

  const subtitle = props.subtitle ? <h3 className="nx-pop-over-header__subtitle">{props.subtitle}</h3> : null;
  const paragraph = props.paragraph ? <p className="nx-pop-over-header__paragraph">{props.paragraph}</p> : null;

  return (
    <header className="nx-pop-over-header">
      <button className="nx-pop-over-header__close" type="button" onClick={onClose}>
        Close
      </button>

      <h2 className="nx-pop-over-header__title">
        {props.title}
      </h2>

      {subtitle}
      {paragraph}
    </header>
  );
};

export const NxPopOverContent = (props: PopOverContentProps) => {
  const { children } = props;

  return (
    <div className="nx-pop-over-content">
      {children}
    </div>
  );
};

export const NxPopOverFooter = (props: PopOverFooterProps) => {
  const { children } = props;

  return (
    <footer className="nx-pop-over-footer">
      {children}
    </footer>
  );
};

const NxPopOver = (props: Props) => {
  const {
    className,
    onClose,
    children,
    ...otherProps
  } = props;

  const popOverContextValue = {
    onClose
  };

  const classes = classnames('nx-pop-over', className);

  return (
    <PopOverContext.Provider value={popOverContextValue}>
      <aside className={classes} {...otherProps}>{children}</aside>
    </PopOverContext.Provider>
  );
};

export default NxPopOver;

export {Props} from './types';
