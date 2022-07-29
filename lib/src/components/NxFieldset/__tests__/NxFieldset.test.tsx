/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render } from '@testing-library/react';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxFieldset, { Props } from '../NxFieldset';
import NxStatefulTextInput from '../../NxTextInput/stateful/NxStatefulTextInput';

describe('NxFieldset', function() {
  const minimalProps = {
        label: 'foo',
        children: <NxStatefulTextInput/>
      },
      quickRender = rtlRender<Props>(NxFieldset, minimalProps),
      renderElement = rtlRenderElement<Props>(NxFieldset, minimalProps);

  it('renders a .nx-fieldset fieldset with the specified attributes', function() {
    const component = renderElement({ id: 'groupId', lang: 'en_US' })!;

    expect(component.tagName).toBe('FIELDSET');
    expect(component).toHaveClass('nx-fieldset');
    expect(component).toHaveAttribute('id', 'groupId');
    expect(component).toHaveAttribute('lang', 'en_US');
  });

  it('adds nx-fieldset to the specified classnames', function() {
    const component = renderElement({ className: 'asdf' });

    expect(component).toHaveClass('asdf');
    expect(component).toHaveClass('nx-fieldset');
  });

  it('sets the ref on the fieldset', function() {
    const ref = React.createRef<HTMLFieldSetElement>(),
        domNode = render(<NxFieldset { ...minimalProps } ref={ref} />).container.firstElementChild!;

    expect(ref.current).toBe(domNode);
  });

  it('contains the specified children', function() {
    const children = <input type="checkbox" id="bar" className="foo" />,
        { getByRole } = quickRender({ children }),
        checkbox = getByRole('checkbox');

    expect(checkbox).toHaveAttribute('id', 'bar');
    expect(checkbox).toHaveClass('foo');
  });

  it('sets the name of the fieldset based on its legend', function() {
    const { getByRole, container } = quickRender(),
        fieldset = container.firstElementChild!,
        legend = fieldset.querySelector('legend');

    expect(getByRole('group', { name: 'foo' })).toBe(fieldset);
    expect(legend).toHaveTextContent('foo');
  });

  it('sets the nx-legend--optional class on the legend unless the isRequired prop is true', function() {
    expect(renderElement()!.querySelector('.nx-legend')).toHaveClass('nx-legend--optional');
    expect(renderElement({ isRequired: undefined })!.querySelector('.nx-legend')).toHaveClass('nx-legend--optional');
    expect(renderElement({ isRequired: null })!.querySelector('.nx-legend')).toHaveClass('nx-legend--optional');
    expect(renderElement({ isRequired: false })!.querySelector('.nx-legend')).toHaveClass('nx-legend--optional');
    expect(renderElement({ isRequired: true })!.querySelector('.nx-legend')).not.toHaveClass('nx-legend--optional');
  });

  it('includes the sublabel content if specified', function() {
    expect(renderElement({ sublabel: 'qwerty' })).toHaveTextContent('qwerty');

    const elementWithHtmlSublabel = renderElement({ sublabel: <span className="foo">bar</span> })!,
        sublabelContent = elementWithHtmlSublabel.querySelector('.foo');

    expect(sublabelContent).toBeTruthy();
    expect(sublabelContent).toHaveTextContent('bar');
  });
});
