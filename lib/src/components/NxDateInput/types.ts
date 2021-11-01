import { omit } from 'ramda';

import {
  PublicProps as NxTextInputProps,
  propTypes as NxTextInputPropTypes
} from '../../components/NxTextInput/NxTextInput';

export {
  StateProps
} from '../../components/NxTextInput/NxTextInput';

export type Props = Omit<NxTextInputProps, 'type'>;

export type PublicProps = Omit<Props, 'prefixContent'>;

export const propTypes = omit(['type'], NxTextInputPropTypes);
