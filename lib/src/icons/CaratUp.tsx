/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import CaratPath from './CaratPath';

import './CaratUp.scss';

const CaratUp = () =>
  <svg viewBox="0 0 12 8"
       className="nx-icon nx-icon--carat-up">
    <g transform="rotate(180, 6, 4)">
      <CaratPath/>
    </g>
  </svg>;

export default CaratUp;
