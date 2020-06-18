/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ValidationErrors } from '@sonatype/react-shared-components';

const noError: ValidationErrors = null;
const alsoNoError: ValidationErrors = [];
const oneError: ValidationErrors = 'too long';
const anotherOneError: ValidationErrors = ['too short'];
const multipleErrors: ValidationErrors = ['invalid date format', 'too long'];

// just to avoid unused variable errors...
/* eslint-disable no-console */
console.log(noError, alsoNoError, oneError, anotherOneError, multipleErrors);
