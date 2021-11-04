/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { omit } from 'ramda';

import {
  Props as NxTextInputProps,
  PublicProps as NxTextInputPublicProps,
  propTypes as NxTextInputPropTypes
} from '../../components/NxTextInput/NxTextInput';

export {
  StateProps
} from '../../components/NxTextInput/NxTextInput';

export type Props = Omit<NxTextInputProps, 'type'>;

export type PublicProps = Omit<NxTextInputPublicProps, 'type'>;

export const propTypes = omit(['type'], NxTextInputPropTypes);
