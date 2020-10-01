/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { shallow } from 'enzyme';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxButton from '../NxButton';

describe('NxButton', function() {
  it('renders a button', function() {
    const button = shallow(<NxButton />);

    expect(button).toHaveClassName('nx-btn');
  });

  it('renders a primary button', function() {
    const button = shallow(<NxButton variant="primary">Primary Button</NxButton>);

    expect(button).toMatchSelector('button.nx-btn.nx-btn--primary');
    expect(button).toHaveText('Primary Button');
  });

  it('does not render a variant class if the variant is "secondary"', function() {
    const button = shallow(<NxButton variant="secondary">Secondary Button</NxButton>);

    expect(button).not.toHaveClassName('.nx-btn--secondary');
  });

  it('renders an icon-only button', function() {
    const button = shallow(<NxButton variant="icon-only"><NxFontAwesomeIcon icon={faCheck}/></NxButton>);

    expect(button).toMatchSelector('button.nx-btn.nx-btn--icon-only');
  });

  it('passes the disabled attribute through', function() {
    const button = shallow(<NxButton variant="error" disabled>Disabled Button</NxButton>);

    expect(button).toMatchSelector('button.nx-btn.nx-btn--error');
    expect(button).toBeDisabled();
  });

  it('renders an inline button', function() {
    const button = shallow(<NxButton variant="error" inline>Disabled Button</NxButton>);

    expect(button).toMatchSelector('button.nx-btn.nx-btn--error.nx-btn--inline');
  });
});
