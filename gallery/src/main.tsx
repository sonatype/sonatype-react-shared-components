/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/// <reference types="./require" />

import 'es6-set/implement';
import 'es6-object-assign/auto';

import React from 'react';
import ReactDOM from 'react-dom';

import './main.scss';

import Application from './Application';

ReactDOM.render(<Application />, document.getElementById('ui'));
