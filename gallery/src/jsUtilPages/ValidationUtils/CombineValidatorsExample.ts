/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { combineValidators } from '@sonatype/react-shared-components';

export const isRequired = (value: string) => !(value?.length > 0) ? 'This field is required' : null;
export const maxLength = (max: number) => (value: string) =>
  value?.length > max ? `This value may be no more than ${max} charcters` : null;
export const noZero = (value: string) =>
  value?.includes('0') ? 'This value may not contain "0"' : null;

const validator = combineValidators(isRequired, maxLength(5), noZero);

validator('123456'); // ['This value may be no more than 5 characters']
validator('1234560'); // ['This value may be no more than 5 characters', 'This value may be contain "0"']
validator('12345'); // []
validator(''); // ['This field is required']
