/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { rtlRender, rtlRenderElement, userEvent } from '../../../__testutils__/rtlUtils';

import NxToggle, { Props } from '../NxToggle';

describe('NxToggle', function() {
  const simpleProps: Props = {
    inputId: 'toggle-id',
    isChecked: false,
    onChange: () => {},
    disabled: undefined,
    children: 'Enables whales'
  };

  const quickRender = rtlRender<Props>(NxToggle, simpleProps);
  const renderEl = rtlRenderElement(NxToggle, simpleProps);

  it('passes general attributes to top-level element', function() {
    const component = renderEl({ id: 'dolphin', lang: 'en-CA' });
    expect(component).toHaveAttribute('id', 'dolphin');
    expect(component).toHaveAttribute('lang', 'en-CA');
  });

  it('renders a switch with the correct label', function() {
    const checkbox = quickRender().getByRole('switch', { name: 'Enables whales' });
    expect(checkbox).toBeInTheDocument();
  });

  it('renders an input element with role=switch with the correct attributes', function() {
    const checkbox = quickRender().getByRole('switch');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('id', 'toggle-id');
  });

  it('merges any passed in className', function() {
    const componentWithAddedClass = renderEl({ className: 'foo' });
    const component = renderEl()!;

    expect(componentWithAddedClass).toHaveClass('foo');

    for (const cls of Array.from(component.classList)) {
      expect(componentWithAddedClass).toHaveClass(cls);
    }
  });

  it('calls its onChange prop with the inverse of isChecked when the input is clicked', async function() {
    const user = userEvent.setup(),
        uncheckedOnChange = jest.fn(),
        checkedOnChange = jest.fn(),
        uncheckedInput = quickRender({ onChange: uncheckedOnChange }).getByRole('switch'),
        checkedInput = quickRender({ isChecked: true, onChange: checkedOnChange }).getByRole('switch');

    expect(uncheckedOnChange).not.toHaveBeenCalled();
    expect(checkedOnChange).not.toHaveBeenCalled();

    await user.click(uncheckedInput);
    expect(uncheckedOnChange).toHaveBeenCalledWith(true);

    await user.click(checkedInput);
    expect(checkedOnChange).toHaveBeenCalledWith(false);
  });

  it('calls its onChange prop when the input is focused and space key is pressed', async function() {
    const user = userEvent.setup();
    const onChange = jest.fn();

    const checkbox = quickRender({ onChange }).getByRole('switch');

    expect(onChange).not.toHaveBeenCalled();

    await checkbox.focus();
    await user.keyboard(' ');

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('passes input attributes into the input element and does not clash with top-level attributes', function() {
    const props: Props = {
      inputId: 'not-garfield',
      disabled: true,
      isChecked: true,
      className: 'label-classname',
      inputAttributes: {
        id: 'garfield',
        name: 'garfield',
        className: 'input-classname'
      }
    };

    const checkbox = quickRender(props).getByRole('switch');

    expect(checkbox).toHaveAttribute('id', 'garfield');
    expect(checkbox).toHaveAttribute('name', 'garfield');
    expect(checkbox).toBeDisabled();
    expect(checkbox).toHaveClass('input-classname');
    expect(checkbox).not.toHaveClass('label-classname');
    expect(checkbox).toBeChecked();
  });
});
