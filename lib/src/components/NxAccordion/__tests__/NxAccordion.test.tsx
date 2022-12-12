/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import userEvent from '@testing-library/user-event';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxAccordion from '../NxAccordion';
import NxButton from '../../NxButton/NxButton';
import { render } from '@testing-library/react';

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
          <span>Foo</span>
        </NxAccordion.Header>
        <span className='bar'>Bar</span>
      </NxAccordion>
    );

    expect(container.querySelector('summary .bar')).not.toBeInTheDocument();
    expect(container.querySelector('.nx-accordion .bar')).toBeInTheDocument();
  });

  describe('Header', function() {
    it('sets the provided className', function() {
      const el = renderEl({children: (
        <NxAccordion.Header></NxAccordion.Header>)})!;
      const customEl = renderEl({ children: (
        <NxAccordion.Header>
          <span>foo</span>
        </NxAccordion.Header>),
      className: 'foo' })!;

      expect(customEl).toHaveClass('foo');

      for (const cls of Array.from(el.classList)) {
        expect(customEl).toHaveClass(cls);
      }
    });

    it('renders the NxAccordion.Header as a <summary>', function() {
      const { container } = quickRender({ children:
        (
          <NxAccordion.Header id="headerId">
            <span>Foo</span>
          </NxAccordion.Header>
        )});

      expect(container.querySelector('#headerId')).toBeInTheDocument();
      expect(container.querySelector('summary')).toBeInTheDocument();
    });

    it('sets aria-controls to the accordion id', function() {
      const { container } = quickRender({ id: 'foo',
        children: (
          <NxAccordion.Header>
            <span>Foo</span>
          </NxAccordion.Header>
        ) });

      expect(container.querySelector('.nx-accordion__header')).toHaveAttribute('aria-controls', 'foo');
    });
  });

  describe('onToggle', function() {

    describe('when the accordion is currently closed', function() {
      it('fires with true', async function() {
        const user = userEvent.setup();
        const onToggle = jest.fn();

        const { container } = render(
          <NxAccordion onToggle={onToggle} open={false}>
            <NxAccordion.Header>
              <span>Foo</span>
            </NxAccordion.Header>
          </NxAccordion>,
        );

        const header = container.querySelector<HTMLElement>('summary')!;

        expect(onToggle).not.toHaveBeenCalled();

        await user.click(header);

        expect(onToggle).toHaveBeenCalledTimes(1);
        expect(onToggle).toHaveBeenCalledWith(true);

        // click the accordion outside of the header
        await user.click(container);

        expect(onToggle).toHaveBeenCalledTimes(1);
      });
    });

    describe('when the accordion is currently open', function() {
      it('fires with false', async function() {
        const user = userEvent.setup();
        const onToggle = jest.fn();

        const { container } = render(
          <NxAccordion onToggle={onToggle} open={true}>
            <NxAccordion.Header>
              <span>Foo</span>
            </NxAccordion.Header>
          </NxAccordion>,
        );

        const header = container.querySelector<HTMLElement>('summary')!;

        expect(onToggle).not.toHaveBeenCalled();

        await user.click(header);

        expect(onToggle).toHaveBeenCalledTimes(1);
        expect(onToggle).toHaveBeenCalledWith(false);

        // click the accordion outside of the header
        await user.click(container);

        expect(onToggle).toHaveBeenCalledTimes(1);
      });
    });

    describe('when a non-button element in the header with its own onClick handler is clicked', function() {
      it('fires', async function() {
        const user = userEvent.setup();
        const titleOnClick = jest.fn(),
            onToggle = jest.fn();

        const { container } = render(
          <NxAccordion onToggle={onToggle}>
            <NxAccordion.Header>
              <NxAccordion.Title onClick={titleOnClick}>Foo</NxAccordion.Title>
            </NxAccordion.Header>
          </NxAccordion>,
        );
        const title = container.querySelector<HTMLElement>('.nx-accordion__header-title')!;

        expect(onToggle).not.toHaveBeenCalled();
        expect(titleOnClick).not.toHaveBeenCalled();

        await user.click(title);

        expect(onToggle).toHaveBeenCalledTimes(1);
        expect(titleOnClick).toHaveBeenCalledTimes(1);
      });
    });

    describe('when a button element in the header is clicked', function() {
      it('does not fire', async function() {
        const user = userEvent.setup();
        const btnOnClick = jest.fn(),
            onToggle = jest.fn();

        const { container } = render(
          <NxAccordion onToggle={onToggle}>
            <NxAccordion.Header>
              <NxAccordion.Title>Foo</NxAccordion.Title>
              <div className="nx-btn-bar">
                <NxButton id="btn1" />
                <NxButton id="btn2" onClick={btnOnClick} />
              </div>
            </NxAccordion.Header>
          </NxAccordion>,
        );
        const btn1 = container.querySelector('button#btn1') as HTMLElement,
            btn2 = container.querySelector('button#btn2') as HTMLElement;

        await user.click(btn1);

        expect(onToggle).not.toHaveBeenCalled();
        expect(btnOnClick).not.toHaveBeenCalled();

        await user.click(btn2);

        expect(onToggle).not.toHaveBeenCalled();
        expect(btnOnClick).toHaveBeenCalled();
      });
    });
  });
});
