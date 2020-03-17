/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';

import NxLoadingSpinner from '../../NxLoadingSpinner/NxLoadingSpinner';
import NxSubmitMask from '../NxSubmitMask';

describe('NxSubmitMask', function() {
  it('renders a .nx-submit-mask div containing a .nx-submit-mask__message h3 containing a NxLoadingSpinner',
      function() {
        const component = shallow(<NxSubmitMask/>);

        expect(component).toMatchSelector('div.nx-submit-mask');
        expect(component.find('h3')).toHaveClassName('nx-h3');
        expect(component.find('h3')).toHaveClassName('nx-submit-mask__message');
        expect(component.find('h3').find(NxLoadingSpinner)).toExist();
      }
  );

  it('applies the nx-submit-mask--fullscreen class iff the fullscreen prop is set', function() {
    expect(shallow(<NxSubmitMask/>)).not.toHaveClassName('nx-submit-mask--fullscreen');
    expect(shallow(<NxSubmitMask fullscreen={false}/>)).not.toHaveClassName('nx-submit-mask--fullscreen');
    expect(shallow(<NxSubmitMask fullscreen/>)).toHaveClassName('nx-submit-mask--fullscreen');
  });

  it('applies the nx-submit-mask--success class iff the success prop is set', function() {
    expect(shallow(<NxSubmitMask/>)).not.toHaveClassName('nx-submit-mask--success');
    expect(shallow(<NxSubmitMask success={false}/>)).not.toHaveClassName('nx-submit-mask--success');
    expect(shallow(<NxSubmitMask success/>)).toHaveClassName('nx-submit-mask--success');
  });

  it('passes the message prop as the child of NxLoadingSpinner', function() {
    expect(shallow(<NxSubmitMask/>).find(NxLoadingSpinner).children()).not.toExist();
    expect(shallow(<NxSubmitMask message={null} />).find(NxLoadingSpinner).children()).not.toExist();
    expect(shallow(<NxSubmitMask message="foo" />).find(NxLoadingSpinner).children()).toHaveText('foo');
  });

  it('passes the successMessage prop as the child of NxLoadingSpinner when the success prop is true', function() {
    const spinnerChildren = shallow(<NxSubmitMask message="foo" successMessage="bar" success />)
        .find(NxLoadingSpinner).children();

    expect(spinnerChildren).toHaveText('bar');
    expect(spinnerChildren).not.toHaveText('foo');
  });

  it('passes "Success!" as the child of NxLoadingSpinner when the success is true and successMessage is not specified',
      function() {
        expect(shallow(<NxSubmitMask success />).find(NxLoadingSpinner).children()).toHaveText('Success!');
        expect(shallow(<NxSubmitMask successMessage={null} success />).find(NxLoadingSpinner).children())
            .toHaveText('Success!');
      }
  );
});
