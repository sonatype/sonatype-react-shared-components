/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { faCheck } from '@fortawesome/free-solid-svg-icons';

import { rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxFontAwesomeIcon from '../NxFontAwesomeIcon';

describe('NxFontAwesomeIcon', function() {
  const minimalProps = { icon: faCheck },
      renderEl = rtlRenderElement(NxFontAwesomeIcon, minimalProps);

  it('renders a FontAwesomeIcon', function () {
    const component = renderEl();

    expect(component).toHaveAttribute('role', 'img');
    expect(component).toHaveAttribute('data-icon', 'check');
  });

  it('renders passed props correctly', function() {
    const component = renderEl({ color: 'foo', spin: true, flip: 'both' });

    expect(component).toHaveAttribute('color', 'foo');
    expect(component).toHaveClass('fa-spin');
    expect(component).toHaveClass('fa-flip-horizontal');
    expect(component).toHaveClass('fa-flip-vertical');
  });

  it('merges any passed in className to rendered SVG', function() {
    const component = renderEl()!,
        componentWithClassName = renderEl({ className: 'foo' })!;

    expect(componentWithClassName).toHaveClass('foo');

    for (const cls of Array.from(component.classList)) {
      expect(componentWithClassName).toHaveClass(cls);
    }
  });

  it('passes a unique titleId to FontAwesomeIcon if title is defined', function() {
    const component1 = renderEl({ title: 'foo' })!,
        component2 = renderEl({ title: 'foo' })!,
        component1TitleId = component1.querySelector('title')!.id,
        component2TitleId = component2.querySelector('title')!.id;

    expect(component1TitleId).not.toEqual(component2TitleId);
  });
});
