/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
/// <reference types="./__testutils__/jest-enzyme-overrides" />

import 'jest-enzyme';

// We can't have @testing-library/jest-dom imported globally
// because it will overwrite some of the jest-enzyme matchers.
// Instead, we need to import them individual in the test modules
// until we fully transitioned to react-testing-library.
// import '@testing-library/jest-dom';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
