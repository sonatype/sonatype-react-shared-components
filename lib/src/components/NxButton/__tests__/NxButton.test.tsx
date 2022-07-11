/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount, shallow } from 'enzyme';
import { faCheck, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

import NxFontAwesomeIcon from '../../NxFontAwesomeIcon/NxFontAwesomeIcon';
import NxButton from '../NxButton';
import { TooltipContext } from '../../NxTooltip/NxTooltip';

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

  it('renders a secondary button by default', function() {
    const button = shallow(<NxButton>Secondary Button</NxButton>);

    expect(button).toHaveClassName('.nx-btn--secondary');
  });

  it('renders an icon-only button', function() {
    const button = shallow(<NxButton title="Check" variant="icon-only"><NxFontAwesomeIcon icon={faCheck}/></NxButton>);

    expect(button.find('button')).toMatchSelector('.nx-btn.nx-btn--icon-only');
  });

  it('passes the disabled attribute through', function() {
    const button = shallow(<NxButton variant="error" disabled>Disabled Button</NxButton>);

    expect(button).toMatchSelector('button.nx-btn.nx-btn--error');
    expect(button).toBeDisabled();
  });

  it('disabled by class button has aria-disabled true', function() {
    const button = shallow(<NxButton className="disabled">Disabled Button</NxButton>);

    expect(button).toHaveProp('aria-disabled', true);
  });

  it('wraps the button in a tooltip if the title is set and the TooltipContext is not set to true', function() {
    const noTitleNoContext = mount(<NxButton>foo</NxButton>).children(),
        titleNoContext = mount(<NxButton title="bar">foo</NxButton>).children(),
        noTitleContext = mount(
          <TooltipContext.Provider value={true}>
            <NxButton>foo</NxButton>
          </TooltipContext.Provider>
        ).children(),
        titleContext = mount(
          <TooltipContext.Provider value={true}>
            <NxButton title="bar">foo</NxButton>
          </TooltipContext.Provider>
        ).children();

    expect(noTitleNoContext).toMatchSelector('button');
    expect(noTitleNoContext).toHaveProp('title', undefined);

    expect(titleContext).toMatchSelector('button');
    expect(titleContext).toHaveProp('title', 'bar');

    expect(noTitleContext).toMatchSelector('button');
    expect(noTitleContext).toHaveProp('title', undefined);

    expect(titleNoContext).toMatchSelector('NxTooltip');
    expect(titleNoContext).toHaveProp('title', 'bar');
  });

  it('throws an error when it contains both disabled and title props', function() {
    expect(() => {
      shallow(<NxButton variant="icon-only" title="Delete" disabled><NxFontAwesomeIcon icon={faTrashAlt}/></NxButton>);
    }).toThrow(TypeError);
  });
});
