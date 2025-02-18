/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render } from '@testing-library/react';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';
import NxFormGroup, { Props } from '../NxFormGroup';
import NxStatefulTextInput from '../../NxTextInput/stateful/NxStatefulTextInput';

describe('NxFormGroup', function() {
  const minimalProps: Props = {
        label: 'foo',
        children: <NxStatefulTextInput/>
      },
      quickRender = rtlRender(NxFormGroup, minimalProps),
      renderEl = rtlRenderElement(NxFormGroup, minimalProps);

  it('renders a top-level element with the specified attributes and classnames', function() {
    const el = renderEl({ id: 'groupId', lang: 'en_US', className: 'asdf' }),
        defaultEl = renderEl()!;

    expect(el).toHaveAttribute('id', 'groupId');
    expect(el).toHaveAttribute('lang', 'en_US');
    expect(el).toHaveClass('asdf');

    for (const cls of Array.from(defaultEl.classList)) {
      expect(el).toHaveClass(cls);
    }
  });

  it('contains the specified child', function() {
    const input = <input type="text" data-testid="child" />,
        view = quickRender({ children: input });

    expect(view.getByTestId('child')).toBeInTheDocument();
  });

  it('includes the label in the text content and as the name of the child form field', function() {
    const input = <input type="text" />,
        inputWithId = <input type="text" id="child-id" />,
        view = quickRender({ children: input }),
        viewWithId = quickRender({ children: inputWithId });

    expect(view.container).toHaveTextContent('foo');
    expect(view.getByRole('textbox')).toHaveAccessibleName('foo');

    expect(viewWithId.container).toHaveTextContent('foo');
    expect(viewWithId.getByRole('textbox')).toHaveAccessibleName('foo');
  });

  it('does not override the id of the child', function() {
    const children = <input type="text" id="child-id" />,
        view = quickRender({ children });

    expect(view.getByRole('textbox')).toHaveAttribute('id', 'child-id');
  });

  it('includes the sublabel in the text content and as the description of the child form field', function() {
    const input = <input type="text" />,
        view = quickRender({ children: input, sublabel: 'bar' }),
        viewWithoutSublabel = quickRender({ children: input });

    expect(view.container).toHaveTextContent('bar');
    expect(view.getByRole('textbox')).toHaveAccessibleDescription('bar');

    expect(viewWithoutSublabel.getByRole('textbox')).not.toHaveAccessibleDescription();
  });

  it('appends the sublabel to any already-existing description of the form field', function() {
    render(<div id="description">Explicit Description</div>);

    const input = <input aria-describedby="description" type="text" />,
        view = quickRender({ children: input, sublabel: 'bar' }),
        viewWithoutSublabel = quickRender({ children: input });

    expect(view.container).toHaveTextContent('bar');
    expect(view.getByRole('textbox')).toHaveAccessibleDescription('Explicit Description bar');

    expect(viewWithoutSublabel.getByRole('textbox')).toHaveAccessibleDescription('Explicit Description');
  });

  it('sets aria-required on the child to the value of isRequired', function() {
    const children = <input type="text" />;

    expect(quickRender({ children }).getByRole('textbox')).not.toBeRequired();
    expect(quickRender({ children, isRequired: undefined }).getByRole('textbox')).not.toBeRequired();
    expect(quickRender({ children, isRequired: null }).getByRole('textbox')).not.toBeRequired();
    expect(quickRender({ children, isRequired: false }).getByRole('textbox')).not.toBeRequired();
    expect(quickRender({ children, isRequired: true }).getByRole('textbox')).toBeRequired();
  });

  it('does not override aria-required if already set on the child', function() {
    const childrenWithRequired = <input type="text" aria-required="true" />,
        childrenWithoutRequired = <input type="text" aria-required="false" />;

    expect(quickRender({ children: childrenWithRequired }).getByRole('textbox')).toBeRequired();
    expect(quickRender({ children: childrenWithRequired, isRequired: undefined }).getByRole('textbox')).toBeRequired();
    expect(quickRender({ children: childrenWithRequired, isRequired: null }).getByRole('textbox')).toBeRequired();
    expect(quickRender({ children: childrenWithRequired, isRequired: false }).getByRole('textbox')).toBeRequired();
    expect(quickRender({ children: childrenWithoutRequired, isRequired: true }).getByRole('textbox'))
        .not.toBeRequired();

  });
});
