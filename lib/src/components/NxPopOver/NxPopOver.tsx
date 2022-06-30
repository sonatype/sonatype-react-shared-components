/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
// import classnames from 'classnames';

//import withClass from '../../util/withClass';
import {Props, PopOverContextType, PopOverHeaderProps} from './types';

import './NxPopOver.scss';

const PopOverContext = React.createContext<PopOverContextType>({
  onClose: () => {}
});
export const NxPopOverHeader = (props: PopOverHeaderProps) => {
  const { onClose } = React.useContext(PopOverContext);
  const subtitle = props.subtitle ? <h3>{props.subtitle}</h3> : null;
  const paragraph = props.paragraph ? <p>{props.paragraph}</p> : null;
  return (
    <header className='nx-pop-over-header'>
      <button type='button' onClick={onClose}>Close</button>
      <h2>{props.title}</h2>
      {subtitle}
      {paragraph}
    </header>
  );
};

// const NxPopOverContent = ( props ) => {

// };

// const NxPopOverFooter = ( props ) => {

// };

const NxPopOver = (props: Props) => {
  const {
    onClose,
    children,
    ...otherProps
  } = props;
  const popOverContextValue = {
    onClose
  };

  return (
    <PopOverContext.Provider value={popOverContextValue}>
      <aside {...otherProps}>{children}</aside>
    </PopOverContext.Provider>
  );
};

//export NxPopOverHeader;
export default NxPopOver;
export {Props} from './types';
