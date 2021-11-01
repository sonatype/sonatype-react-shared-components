import React, { forwardRef } from 'react';
import { omit } from 'ramda';

import NxTextInput from '../../components/NxTextInput/NxTextInput';

import {
  Props,
  propTypes
} from './types';

export { Props, PublicProps, StateProps, propTypes } from './types';

const NxDateInput = forwardRef<HTMLDivElement, Props>((props, ref) => {
  const filteredProps = omit(['type'], props);

  return <NxTextInput overrideType={'date'}
                      ref={ref}
                      { ...filteredProps } />;
});

NxDateInput.propTypes = propTypes;

export default NxDateInput;
