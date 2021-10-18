/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ComponentType } from 'react';
import { mount, shallow, MountRendererProps } from 'enzyme';

export function getShallowComponent<P>(Component: ComponentType<P>, minimalProps: P) {
  return function getShallowComponent(additionalProps?: Partial<P>) {
    return shallow(<Component { ...minimalProps } { ...additionalProps } />);
  };
}

export function getMountedComponent<P>(Component: ComponentType<P>, minimalProps: P) {
  return function getMountedComponent(additionalProps?: Partial<P>, mountOptions?: MountRendererProps) {
    return mount(<Component { ...minimalProps } { ...additionalProps } />, mountOptions);
  };
}
