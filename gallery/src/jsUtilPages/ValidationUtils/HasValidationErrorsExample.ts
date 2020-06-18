/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { hasValidationErrors } from '@sonatype/react-shared-components';

hasValidationErrors(null); // false
hasValidationErrors('too long'); // true
hasValidationErrors([]); // false
hasValidationErrors(['too short']); // true
hasValidationErrors(['invalid date format', 'too long']); // true
