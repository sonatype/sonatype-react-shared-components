/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { render } from '@testing-library/react';
import React from 'react';

import { rtlRenderElement } from '../../__testutils__/rtlUtils';
import withClass from '../withClass';

describe('withClass', function() {
  const ExampleComponent = withClass('hgroup', 'foo-bar'),
      renderEl = rtlRenderElement(ExampleComponent, {});

  it('forwards a ref to the element', function() {
    const ExampleLabelComponent = withClass('label', 'foo-bar');
    const ref = React.createRef<HTMLLabelElement>();

    const label = render(<ExampleLabelComponent ref={ref}>foo</ExampleLabelComponent>).container.firstElementChild;

    expect(label).toBeInTheDocument();
    expect(ref.current).toBe(label);
  });

  it('creates a component constructor that makes an element with the specified tag and class', function() {
    const el = renderEl()!;

    expect(el.tagName).toBe('HGROUP');
    expect(el).toHaveClass('foo-bar');
  });

  it('creates a component constructor that makes an element with the specified role', function() {
    const ExampleComponentWithRole = withClass('span', 'baz', 'status'),
        el = render(<ExampleComponentWithRole />).container.firstElementChild;

    expect(el).toHaveAttribute('role', 'status');
  });

  it('creates a component which can take classNames to add to the return element', function() {
    const el = renderEl({ className: 'baz' });

    expect(el).toHaveClass('baz');
    expect(el).toHaveClass('foo-bar');
  });

  it('creates a component which can take a role which overrides the role specified in the withClass invocation',
      function() {
        const elWithNoDefaultRole = renderEl({ className: 'baz', role: 'modal' });
        expect(elWithNoDefaultRole).toHaveAttribute('role', 'modal');

        const ExampleComponentWithRole = withClass('span', 'baz', 'status'),
            elWithDefaultRole = render(<ExampleComponentWithRole role="modal" />).container.firstElementChild;

        expect(elWithDefaultRole).toHaveAttribute('role', 'modal');
      }
  );

  it('creates a component which can take additional props for its native element', function() {
    const el = renderEl({ id: 'baz', lang: 'en_US' });

    expect(el).toHaveAttribute('id', 'baz');
    expect(el).toHaveAttribute('lang', 'en_US');
  });
});
