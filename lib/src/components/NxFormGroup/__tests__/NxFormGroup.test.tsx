/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { getShallowComponent } from '../../../__testutils__/enzymeUtils';
import NxFormGroup, { Props } from '../NxFormGroup';
import NxStatefulTextInput from '../../NxTextInput/stateful/NxStatefulTextInput';

describe('NxFormGroup', function() {
  const minimalProps = {
        label: 'foo',
        children: <NxStatefulTextInput/>
      },
      getShallow = getShallowComponent<Props>(NxFormGroup, minimalProps);

  it('renders a .nx-form-group div with the specified attributes', function() {
    const component = getShallow({ id: 'groupId', lang: 'en_US' });

    expect(component).toMatchSelector('div.nx-form-group');
    expect(component).toHaveProp('id', 'groupId');
    expect(component).toHaveProp('lang', 'en_US');
  });

  it('adds nx-form-group to the specified classnames', function() {
    const component = getShallow({ className: 'asdf' });

    expect(component).toHaveClassName('asdf');
    expect(component).toHaveClassName('nx-form-group');
  });

  it('contains the specified child', function() {
    const input = <NxStatefulTextInput className="foo" />,
        component = getShallow({ children: input });

    expect(component).toContainMatchingElement(NxStatefulTextInput);
    expect(component.find(NxStatefulTextInput)).toHaveClassName('foo');
  });

  describe('nx-label', function() {
    it('is a <label> child of NxFormGroup', function() {
      expect(getShallow()).toContainMatchingElement('label.nx-label');
    });

    it('contains an nx-label__text populated from the label prop', function() {
      expect(getShallow().find('.nx-label')).toContainMatchingElement('.nx-label__text');
      expect(getShallow().find('.nx-label__text')).toHaveText('foo');

      expect(getShallow({ label: <span className="foo">bar</span> }).find('.nx-label__text')).toContainReact(
        <span className="foo">bar</span>
      );
    });

    it('has the nx-label--optional class unless the isRequired prop is true', function() {
      expect(getShallow().find('.nx-label')).toHaveClassName('nx-label--optional');
      expect(getShallow({ isRequired: undefined }).find('.nx-label')).toHaveClassName('nx-label--optional');
      expect(getShallow({ isRequired: null }).find('.nx-label')).toHaveClassName('nx-label--optional');
      expect(getShallow({ isRequired: false }).find('.nx-label')).toHaveClassName('nx-label--optional');
      expect(getShallow({ isRequired: true }).find('.nx-label')).not.toHaveClassName('nx-label--optional');
    });
  });

  describe('nx-sub-label', function() {
    it('is not present by default', function() {
      expect(getShallow()).not.toContainMatchingElement('.nx-sub-label');
    });

    it('is populated with the sublabel content', function() {
      expect(getShallow({ sublabel: 'qwerty' })).toContainMatchingElement('.nx-sub-label');
      expect(getShallow({ sublabel: 'qwerty' }).find('.nx-sub-label')).toHaveText('qwerty');

      expect(getShallow({ sublabel: <span className="foo">bar</span> }).find('.nx-sub-label')).toContainReact(
        <span className="foo">bar</span>
      );
    });
  });

  /*
   * the tests in this group represent every combination of the following options
   * 1. child does or doesn't have an explicit id
   * 2. child does or doesn't have an existing aria-describedby
   * 3. sublabel is or isn't specified
   */
  describe('id handling', function() {
    describe('when the child has an explicit id', function() {
      const childIdProps = { id: 'foo' };

      describe('when the child has an existing aria-describedby', function() {
        const childProps = { ...childIdProps, 'aria-describedby': 'bar' };

        describe('when there is a sublabel', function() {
          const props = { sublabel: 'asdf', children: <NxStatefulTextInput { ...childProps } /> };

          it('sets the child id in the htmlFor of the label', function() {
            expect(getShallow(props).find('.nx-label')).toHaveProp('htmlFor', 'foo');
          });

          it('keeps the explicit id on the child', function() {
            expect(getShallow(props).find(NxStatefulTextInput)).toHaveProp('id', 'foo');
          });

          it('generates a unique id for the sublabel', function() {
            const component1 = getShallow(props),
                component2 = getShallow(props),
                id1 = component1.find('.nx-sub-label').prop('id'),
                id2 = component2.find('.nx-sub-label').prop('id');

            expect(id1).toMatch(/^nx-sub-label.+/);
            expect(id2).toMatch(/^nx-sub-label.+/);
            expect(id1).not.toBe(id2);
          });

          it('adds the id for the sublabel to the child aria-describedby', function() {
            const component = getShallow(props),
                sublabelId = component.find('.nx-sub-label').prop('id');

            expect(component.find(NxStatefulTextInput)).toHaveProp('aria-describedby', `bar ${sublabelId}`);
          });
        });

        describe('when there is not a sublabel', function() {
          const props = { children: <NxStatefulTextInput { ...childProps } /> };

          it('sets the child id in the htmlFor of the label', function() {
            expect(getShallow(props).find('.nx-label')).toHaveProp('htmlFor', 'foo');
          });

          it('keeps the explicit id on the child', function() {
            expect(getShallow(props).find(NxStatefulTextInput)).toHaveProp('id', 'foo');
          });

          it('keeps the child aria-describedby', function() {
            const component = getShallow(props);
            expect(component.find(NxStatefulTextInput)).toHaveProp('aria-describedby', 'bar');
          });
        });
      });

      describe('when the child does not have an existing aria-describedby', function() {
        const childProps = childIdProps;

        describe('when there is a sublabel', function() {
          const props = { sublabel: 'asdf', children: <NxStatefulTextInput { ...childProps } /> };

          it('sets the child id in the htmlFor of the label', function() {
            expect(getShallow(props).find('.nx-label')).toHaveProp('htmlFor', 'foo');
          });

          it('keeps the explicit id on the child', function() {
            expect(getShallow(props).find(NxStatefulTextInput)).toHaveProp('id', 'foo');
          });

          it('generates a unique id for the sublabel', function() {
            const component1 = getShallow(props),
                component2 = getShallow(props),
                id1 = component1.find('.nx-sub-label').prop('id'),
                id2 = component2.find('.nx-sub-label').prop('id');

            expect(id1).toMatch(/^nx-sub-label.+/);
            expect(id2).toMatch(/^nx-sub-label.+/);
            expect(id1).not.toBe(id2);
          });

          it('sets the id for the sublabel as the child aria-describedby', function() {
            const component = getShallow(props),
                sublabelId = component.find('.nx-sub-label').prop('id');

            expect(component.find(NxStatefulTextInput)).toHaveProp('aria-describedby', sublabelId);
          });
        });

        describe('when there is not a sublabel', function() {
          const props = { children: <NxStatefulTextInput { ...childProps } /> };

          it('sets the child id in the htmlFor of the label', function() {
            expect(getShallow(props).find('.nx-label')).toHaveProp('htmlFor', 'foo');
          });

          it('keeps the explicit id on the child', function() {
            expect(getShallow(props).find(NxStatefulTextInput)).toHaveProp('id', 'foo');
          });

          it('does not set any ids in the child aria-describedby', function() {
            const component = getShallow(props);

            expect(component.find(NxStatefulTextInput)).not.toHaveProp('aria-describedby');
          });
        });
      });
    });

    describe('when the child does not have an explicit id', function() {
      const childIdProps = {};

      describe('when the child has an existing aria-describedby', function() {
        const childProps = { ...childIdProps, 'aria-describedby': 'bar' };

        describe('when there is a sublabel', function() {
          const props = { sublabel: 'asdf', children: <NxStatefulTextInput { ...childProps } /> };

          it('generates a unique id on the child', function() {
            const component1 = getShallow(props),
                component2 = getShallow(props),
                id1 = component1.find(NxStatefulTextInput).prop('id'),
                id2 = component2.find(NxStatefulTextInput).prop('id');

            expect(id1).toMatch(/^nx-form-group-child.+/);
            expect(id2).toMatch(/^nx-form-group-child.+/);
            expect(id1).not.toBe(id2);
          });

          it('sets the child id in the htmlFor of the label', function() {
            const component = getShallow(props),
                inputId = component.find(NxStatefulTextInput).prop('id');

            expect(component.find('.nx-label')).toHaveProp('htmlFor', inputId);
          });

          it('generates a unique id for the sublabel', function() {
            const component1 = getShallow(props),
                component2 = getShallow(props),
                id1 = component1.find('.nx-sub-label').prop('id'),
                id2 = component2.find('.nx-sub-label').prop('id');

            expect(id1).toMatch(/^nx-sub-label.+/);
            expect(id2).toMatch(/^nx-sub-label.+/);
            expect(id1).not.toBe(id2);
          });

          it('adds the id for the sublabel to the child aria-describedby', function() {
            const component = getShallow(props),
                sublabelId = component.find('.nx-sub-label').prop('id');

            expect(component.find(NxStatefulTextInput)).toHaveProp('aria-describedby', `bar ${sublabelId}`);
          });
        });

        describe('when there is not a sublabel', function() {
          const props = { children: <NxStatefulTextInput { ...childProps } /> };

          it('generates a unique id on the child', function() {
            const component1 = getShallow(props),
                component2 = getShallow(props),
                id1 = component1.find(NxStatefulTextInput).prop('id'),
                id2 = component2.find(NxStatefulTextInput).prop('id');

            expect(id1).toMatch(/^nx-form-group-child.+/);
            expect(id2).toMatch(/^nx-form-group-child.+/);
            expect(id1).not.toBe(id2);
          });


          it('sets the child id in the htmlFor of the label', function() {
            const component = getShallow(props),
                inputId = component.find(NxStatefulTextInput).prop('id');

            expect(component.find('.nx-label')).toHaveProp('htmlFor', inputId);
          });

          it('keeps the child aria-describedby', function() {
            const component = getShallow(props);
            expect(component.find(NxStatefulTextInput)).toHaveProp('aria-describedby', 'bar');
          });
        });
      });

      describe('when the child does not have an existing aria-describedby', function() {
        const childProps = childIdProps;

        describe('when there is a sublabel', function() {
          const props = { sublabel: 'asdf', children: <NxStatefulTextInput { ...childProps } /> };

          it('generates a unique id on the child', function() {
            const component1 = getShallow(props),
                component2 = getShallow(props),
                id1 = component1.find(NxStatefulTextInput).prop('id'),
                id2 = component2.find(NxStatefulTextInput).prop('id');

            expect(id1).toMatch(/^nx-form-group-child.+/);
            expect(id2).toMatch(/^nx-form-group-child.+/);
            expect(id1).not.toBe(id2);
          });


          it('sets the child id in the htmlFor of the label', function() {
            const component = getShallow(props),
                inputId = component.find(NxStatefulTextInput).prop('id');

            expect(component.find('.nx-label')).toHaveProp('htmlFor', inputId);
          });

          it('generates a unique id for the sublabel', function() {
            const component1 = getShallow(props),
                component2 = getShallow(props),
                id1 = component1.find('.nx-sub-label').prop('id'),
                id2 = component2.find('.nx-sub-label').prop('id');

            expect(id1).toMatch(/^nx-sub-label.+/);
            expect(id2).toMatch(/^nx-sub-label.+/);
            expect(id1).not.toBe(id2);
          });

          it('sets the id for the sublabel as the child aria-describedby', function() {
            const component = getShallow(props),
                sublabelId = component.find('.nx-sub-label').prop('id');

            expect(component.find(NxStatefulTextInput)).toHaveProp('aria-describedby', sublabelId);
          });
        });

        describe('when there is not a sublabel', function() {
          const props = { children: <NxStatefulTextInput { ...childProps } /> };

          it('generates a unique id on the child', function() {
            const component1 = getShallow(props),
                component2 = getShallow(props),
                id1 = component1.find(NxStatefulTextInput).prop('id'),
                id2 = component2.find(NxStatefulTextInput).prop('id');

            expect(id1).toMatch(/^nx-form-group-child.+/);
            expect(id2).toMatch(/^nx-form-group-child.+/);
            expect(id1).not.toBe(id2);
          });


          it('sets the child id in the htmlFor of the label', function() {
            const component = getShallow(props),
                inputId = component.find(NxStatefulTextInput).prop('id');

            expect(component.find('.nx-label')).toHaveProp('htmlFor', inputId);
          });

          it('does not set any ids in the child aria-describedby', function() {
            const component = getShallow(props);

            expect(component.find(NxStatefulTextInput)).toHaveProp('aria-describedby', '');
          });
        });
      });
    });
  });
});
