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
