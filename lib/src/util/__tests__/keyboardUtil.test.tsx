/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState } from 'react';
import { without } from 'ramda';

import { rtlRender } from '../../__testutils__/rtlUtils';
import { userEvent } from '../../__testutils__/rtlUtils';
import { modifierKeyIsPressed, MODIFIER_KEYS } from '../keyboardUtil';

describe('modifierKeyIsPressed', function () {
  const Fixture = () => {
    const [isPressed, setIsPressed] = useState(false);
    const handleKeyDown = (event: React.KeyboardEvent) => {
      event.preventDefault();
      setIsPressed(modifierKeyIsPressed(event));
    };
    return <div tabIndex={1} data-testid="target" onKeyDown={handleKeyDown}>{isPressed.toString()}</div>;
  };

  const quickRender = rtlRender(Fixture, {});

  it('should only return true when a modifier key is pressed', async () => {
    const user = userEvent.setup();
    const { getByTestId } = quickRender();

    const targetEl = getByTestId('target');
    expect(targetEl).toHaveTextContent('false');
    targetEl.focus();

    // "OS" is not playing nicely with js-dom
    for (const modifier of without(['OS'], MODIFIER_KEYS)) {
      await user.keyboard(`{${modifier}}`);
      expect(targetEl).toHaveTextContent('true');
      await user.keyboard('A');
      expect(targetEl).toHaveTextContent('false');

      await user.keyboard(`{${modifier}>}`);
      await user.keyboard('{ArrowUp}');
      expect(targetEl).toHaveTextContent('true');
      await user.keyboard('{ArrowLeft}');
      expect(targetEl).toHaveTextContent('true');
      await user.keyboard('{ArrowRight}');
      expect(targetEl).toHaveTextContent('true');
      await user.keyboard('{ArrowDown}');
      expect(targetEl).toHaveTextContent('true');
      await user.keyboard('A');
      expect(targetEl).toHaveTextContent('true');
      await user.keyboard(`{/${modifier}}`);
    }
  });
});
