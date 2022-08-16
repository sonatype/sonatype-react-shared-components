/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { pipe } from 'ramda';

import { rtlRender, rtlRenderElement } from '../../../../__testutils__/rtlUtils';
import NxStatefulFileUpload from '../NxStatefulFileUpload';

describe('NxStatefulFileUpload', function() {
  const minimalProps = {
        onChange: () => {}
      },
      render = rtlRender(NxStatefulFileUpload, minimalProps),
      renderEl = rtlRenderElement(NxStatefulFileUpload, minimalProps),
      renderInput = pipe(renderEl, el => el?.querySelector('input[type=file]'));

  it('renders a file input and a button', function() {
    const component = render(),

        // file inputs have no aria role and the label text is outside of the scope of this component,
        // so we have to query like this
        input = component.container.querySelector('input[type=file]'),
        button = component.queryByRole('button', { name: 'Choose File' });

    expect(input).toBeDefined();
    expect(button).toBeDefined();

    // cannot effectively test that the button activates the input here, will do in functional test
  });

  it('initially renders a "No file selected" message', function() {
    expect(renderEl()).toHaveTextContent('No file selected');
  });

  it('sets aria-required on the input if isRequired is true', function() {
    expect(renderInput()?.getAttribute('aria-required')).not.toBe('true');
    expect(renderInput({ isRequired: false })?.getAttribute('aria-required')).not.toBe('true');
    expect(renderInput({ isRequired: true })?.getAttribute('aria-required')).toBe('true');
  });

  it('attaches a ref to the top-level element', function() {
    const ref = React.createRef<HTMLDivElement>(),
        renderedEl = renderEl({ ref });

    expect(ref.current).toBe(renderedEl);
  });

  // Everything that involves actually selecting a file cannot be cleanly tested in RTL, will be done in
  // functional tests
});
