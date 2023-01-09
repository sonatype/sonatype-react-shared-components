/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/// <reference types="./__testutils__/jest-enzyme-overrides" />

import 'jest-enzyme';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// JSDOM is missing this function. https://github.com/jsdom/jsdom/issues/3002
Range.prototype.getBoundingClientRect = jest.fn().mockReturnValue({
  bottom: 0,
  height: 0,
  left: 0,
  right: 0,
  top: 0,
  width: 0
} as DOMRect);
