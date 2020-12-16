/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { combineValidationErrors } from '@sonatype/react-shared-components';

combineValidationErrors(undefined); // []
combineValidationErrors(null); // []
combineValidationErrors('too long'); // ['too long']
combineValidationErrors([]); // []
combineValidationErrors('too long', ['too short', 'needs numbers'], null); // ['too long', 'too short', 'needs number's]
