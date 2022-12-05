/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxAccordion from '../NxAccordion';
import NxButton from '../../NxButton/NxButton';

function createClickEvent() {
  return new MouseEvent('click', { bubbles: true });
}

describe('NxAccordion', function() {
  const quickRender = rtlRender(NxAccordion, {});
  const renderEl = rtlRenderElement(NxAccordion, {});

  it('renders a <details> element with the provided props', function() {
    expect(quickRender({ id: 'foo' }).getByRole('group')).toHaveAttribute('id', 'foo');
    expect(renderEl({ open: true })).toHaveAttribute('open');
    expect(renderEl({ title: 'test title' })).toHaveAttribute('title', 'test title');
  });

  it('sets the provided className', function() {
    const el = renderEl()!;
    const customEl = renderEl({ className: 'foo' })!;

    expect(customEl).toHaveClass('foo');

    for (const cls of Array.from(el.classList)) {
      expect(customEl).toHaveClass(cls);
    }
  });

  it('sets an id if none is specified', function() {
    expect(quickRender().getByRole('group')).toHaveAttribute('id');
  });

  it('sets aria-expanded from the open prop', function() {
    expect(renderEl()).toHaveAttribute('aria-expanded', 'false');
    expect(renderEl({ open: false })).toHaveAttribute('aria-expanded', 'false');
    expect(renderEl({ open: true })).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders non-header children in an nx-accordion__content wrapper', function() {
    const { rerender, container } = quickRender();

    rerender(
      <NxAccordion>
        <NxAccordion.Header>
          <span className='foo'>Foo</span>
        </NxAccordion.Header>
        <span className='bar'>Bar</span>
      </NxAccordion>
    );

    expect(container.querySelector('.nx-accordion__header .foo')).toBeInTheDocument();
    expect(container.querySelector('.nx-accordion__content .bar')).toBeInTheDocument();
  });

  describe('Header', function() {
    it('renders the NxAccordion.Header as a <summary> containing a nx-accordion__summary-wrapper', function() {
      const { rerender, container } = quickRender();

      rerender(
        <NxAccordion.Header id="headerId">
          <span>Foo</span>
        </NxAccordion.Header>
      );

      expect(container.querySelector('#headerId')).toBeInTheDocument();
      expect(container.querySelector('.nx-accordion__summary-wrapper')).toBeInTheDocument();
    });

    it('sets the nx-accordion__header class along with any provided className on the header', function() {
      const { rerender, container } = quickRender();

      rerender(
        <NxAccordion.Header className="header-class">
          <span>Foo</span>
        </NxAccordion.Header>
      );

      expect(container.querySelector('.nx-accordion__header')).toBeInTheDocument();
      expect(container.querySelector('.nx-accordion__header')).toHaveClass('header-class');
      expect(quickRender({ children: <NxAccordion.Header /> }).getByRole('button'))
          .toHaveClass('nx-accordion__header');
    });

    it('renders an icon with nx-accordion__chevron class as the first child of the header wrapper', function() {
      const { rerender, container } = quickRender();

      rerender(
        <NxAccordion.Header>
          <span>Foo</span>
          <div className="nx-btn-bar">
            <NxButton />
          </div>
        </NxAccordion.Header>
      );

      expect(container.querySelector('.nx-accordion__chevron')).toBeInTheDocument();
    });

    it('sets aria-controls to the accordion id', function() {
      const { rerender, container } = quickRender();

      rerender(
        <NxAccordion id='foo'>
          <NxAccordion.Header>
            <span>Foo</span>
          </NxAccordion.Header>
        </NxAccordion>
      );

      expect(container.querySelector('.nx-accordion__header')).toHaveAttribute('aria-controls', 'foo');
    });
  });

  describe('onToggle', function() {
    let mountContainer: HTMLElement | null = null;

    beforeEach(function() {
      mountContainer = document.createElement('div');
      document.body.appendChild(mountContainer);
    });

    afterEach(function() {
      if (mountContainer) {
        document.body.removeChild(mountContainer);
      }
    });

    describe('when the accordion is currently closed', function() {
      it('fires with true', function() {
        const onToggle = jest.fn(),
            component = mount(
              <NxAccordion onToggle={onToggle} open={false}>
                <NxAccordion.Header>
                  <span>Foo</span>
                </NxAccordion.Header>
              </NxAccordion>,
              { attachTo: mountContainer }
            ),
            header = component.find('summary');

        expect(onToggle).not.toHaveBeenCalled();

        act(function() {
          header.getDOMNode().dispatchEvent(createClickEvent());
        });

        expect(onToggle).toHaveBeenCalledTimes(1);
        expect(onToggle).toHaveBeenCalledWith(true);

        act(function() {
          // click the accordion outside of the header
          component.getDOMNode().dispatchEvent(createClickEvent());
        });

        expect(onToggle).toHaveBeenCalledTimes(1);
      });
    });

    describe('when the accordion is currently open', function() {
      it('fires with false', function() {
        const onToggle = jest.fn(),
            component = mount(
              <NxAccordion onToggle={onToggle} open={true}>
                <NxAccordion.Header>
                  <span>Foo</span>
                </NxAccordion.Header>
              </NxAccordion>,
              { attachTo: mountContainer }
            ),
            header = component.find('summary');

        expect(onToggle).not.toHaveBeenCalled();

        act(function() {
          header.getDOMNode().dispatchEvent(createClickEvent());
        });

        expect(onToggle).toHaveBeenCalledTimes(1);
        expect(onToggle).toHaveBeenCalledWith(false);

        act(function() {
          // click the accordion outside of the header
          component.getDOMNode().dispatchEvent(createClickEvent());
        });

        expect(onToggle).toHaveBeenCalledTimes(1);
      });
    });

    describe('when a non-button element in the header with its own onClick handler is clicked', function() {
      it('fires', function() {
        const titleOnClick = jest.fn(),
            onToggle = jest.fn(),
            component = mount(
              <NxAccordion onToggle={onToggle}>
                <NxAccordion.Header>
                  <NxAccordion.Title onClick={titleOnClick}>Foo</NxAccordion.Title>
                </NxAccordion.Header>
              </NxAccordion>,
              { attachTo: mountContainer }
            ),
            title = component.find(NxAccordion.Title);

        expect(onToggle).not.toHaveBeenCalled();
        expect(titleOnClick).not.toHaveBeenCalled();

        act(function() {
          title.getDOMNode().dispatchEvent(createClickEvent());
        });

        expect(onToggle).toHaveBeenCalledTimes(1);
        expect(titleOnClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('when a button element in the header is clicked', function() {
      it('does not fire', function() {
        const btnOnClick = jest.fn(),
            onToggle = jest.fn(),
            component = mount(
              <NxAccordion onToggle={onToggle}>
                <NxAccordion.Header>
                  <NxAccordion.Title>Foo</NxAccordion.Title>
                  <div className="nx-btn-bar">
                    <NxButton id="btn1" />
                    <NxButton id="btn2" onClick={btnOnClick} />
                  </div>
                </NxAccordion.Header>
              </NxAccordion>,
              { attachTo: mountContainer }
            ),
            btn1 = component.find('button#btn1'),
            btn2 = component.find('button#btn2');

        act(function() {
          btn1.getDOMNode().dispatchEvent(createClickEvent());
        });

        expect(onToggle).not.toHaveBeenCalled();
        expect(btnOnClick).not.toHaveBeenCalled();

        act(function() {
          btn2.getDOMNode().dispatchEvent(createClickEvent());
        });

        expect(onToggle).not.toHaveBeenCalled();
        expect(btnOnClick).toHaveBeenCalled();
      });
    });
  });
});
