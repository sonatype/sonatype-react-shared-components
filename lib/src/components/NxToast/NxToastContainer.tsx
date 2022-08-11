/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactNode } from 'react';

// import classNames from 'classnames';

// export { Props } from './types';

interface NxToastContainerProps {
  children: ReactNode | null;
}

const NxToastContainer = (props: NxToastContainerProps) => {
  const { children } = props;

  return (
    <div className="nx-toast__wrapper">
      {children}
    </div>
  );
};

// NxToastContainer.propType = nxToastContainerPropTypes;

export default NxToastContainer;
