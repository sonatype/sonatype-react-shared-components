/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { userEvent } from '../../../__testutils__/rtlUtils';

import { rtlRender, rtlRenderElement } from '../../../__testutils__/rtlUtils';

import NxAccordion from '../NxAccordion';
import NxButton from '../../NxButton/NxButton';
import { render } from '@testing-library/react';

describe('NxAccordion', function() {
  const quickRender = rtlRender(NxAccordion, {});
  const renderEl = rtlRenderElement(NxAccordion, {});

  it('renders a <details> element with the provided props', function() {
    const el = renderEl({ id: 'foo'})!;
    expect(el.tagName).toBe('DETAILS');
    expect(el).toHaveAttribute('id', 'foo');
  });

  it('sets the open attribute as specified', function() {
    expect(renderEl()).not.toHaveAttribute('open');
    expect(renderEl({ open: true })).toHaveAttribute('open');
    expect(renderEl({ open: false })).not.toHaveAttribute('open');
    expect(renderEl({ open: undefined })).not.toHaveAttribute('open');
  });

  it('sets the provided className', function() {
    const el = renderEl()!;
    const customEl = renderEl({ className: 'foo' })!;

    expect(customEl).toHaveClass('foo');

    for (const cls of Array.from(el.classList)) {
      expect(customEl).toHaveClass(cls);
    }
  });

  it('sets aria-expanded from the open prop', function() {
    expect(renderEl()).toHaveAttribute('aria-expanded', 'false');
    expect(renderEl({ open: false })).toHaveAttribute('aria-expanded', 'false');
    expect(renderEl({ open: true })).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders non-header children in content wrapper', function() {
    const { container } = quickRender({
      children: (
        <>
          <NxAccordion.Header>
            <span>Foo</span>
          </NxAccordion.Header>
          <span className="bar">Bar</span>
        </>
      )
    });

    expect(container.querySelector('summary .bar')).not.toBeInTheDocument();
    expect(container.querySelector('.bar')).toBeInTheDocument();
  });

  describe('Header', function() {
    const renderEl = rtlRenderElement(NxAccordion.Header, {});

    it('sets the provided className', function() {
      const el = renderEl()!;
      const customEl = renderEl({ className: 'foo' })!;

      expect(customEl).toHaveClass('foo');

      for (const cls of Array.from(el.classList)) {
        expect(customEl).toHaveClass(cls);
      }
    });

    it('renders the NxAccordion.Header as a <summary>', function() {
      const el = renderEl({ id: 'foo' })!;
      expect(el.tagName).toBe('SUMMARY');
      expect(el).toHaveAttribute('id', 'foo');
    });

    it('sets aria-controls to the accordion id when id is not specified', function() {
      const { container } = quickRender({
        children: (
          <NxAccordion.Header></NxAccordion.Header>
        )
      });
      const id = container.querySelector('DETAILS')?.getAttribute('id');
      expect(container.querySelector('SUMMARY')).toHaveAttribute('aria-controls', id);
    });

    it('sets aria-controls to the specified accordion id', function() {
      const { container } = quickRender({
        id: 'foo',
        children: (
          <NxAccordion.Header>
            <span>Foo</span>
          </NxAccordion.Header>
        )
      });

      expect(container.querySelector('SUMMARY')).toHaveAttribute('aria-controls', 'foo');
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
