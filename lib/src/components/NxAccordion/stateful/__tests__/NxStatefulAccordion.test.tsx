/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import userEvent from '@testing-library/user-event';

import NxStatefulAccordion from '../NxStatefulAccordion';
import NxAccordion from '../../NxAccordion';
import { rtlRender, rtlRenderElement } from '../../../../__testutils__/rtlUtils';
import { render } from '@testing-library/react';
import NxButton from '../../../NxButton/NxButton';

describe('NxStatefulAccordion', function() {

  const quickRender = rtlRender(NxStatefulAccordion, {});
  const renderEl = rtlRenderElement(NxStatefulAccordion, {});

  it('renders a <details> with the specified props', function() {
    const onToggle = jest.fn(),
        component = renderEl({ onToggle, id: 'bar' });

    expect(component!.tagName).toBe('DETAILS');
    expect(component).toHaveAttribute('id', 'bar');
  });

  it('sets the provided className', function() {
    const el = renderEl()!;
    const customEl = renderEl({ className: 'foo' })!;

    expect(customEl).toHaveClass('foo');

    for (const cls of Array.from(el.classList)) {
      expect(customEl).toHaveClass(cls);
    }
  });

  it('sets the NxAccordion open prop to the defaultOpen prop initially', function() {
    expect(renderEl()).not.toHaveAttribute('open');
    expect(renderEl({ defaultOpen: false })).not.toHaveAttribute('open');
    expect(renderEl({ defaultOpen: true })).toHaveAttribute('open');
  });

  it('renders non-header children in content wrapper', function() {
    const { container } = render(
      <NxStatefulAccordion>
        <NxAccordion.Header>
          <span>Foo</span>
        </NxAccordion.Header>
        <span className="bar">Bar</span>
      </NxStatefulAccordion>
    );

    expect(container.querySelector('summary .bar')).not.toBeInTheDocument();
    expect(container.querySelector('.bar')).toBeInTheDocument();
  });

  describe('Header', function() {
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

  describe('accordion header click', function() {
    describe('when the accordion is currently closed', function() {
      it('calls onToggle', async function() {
        const user = userEvent.setup(),
            onToggle = jest.fn(),
            el = quickRender({
              onToggle,
              children: (
                <NxAccordion.Header>
                  <NxAccordion.Title>Foo</NxAccordion.Title>
                </NxAccordion.Header>
              )});
        const header = el.getByRole('button')!;
        expect(onToggle).not.toHaveBeenCalled();

        await user.click(header);

        expect(onToggle).toHaveBeenCalled();
      });

      it('toggles the accordion open prop', async function() {
        const user = userEvent.setup(),
            onToggle = jest.fn(),
            el = quickRender({
              onToggle,
              children: (
                <NxAccordion.Header>
                  <NxAccordion.Title>Foo</NxAccordion.Title>
                </NxAccordion.Header>
              )});
        const header = el.getByRole('button')!;
        expect(el.getByRole('group')).not.toHaveAttribute('open');

        await user.click(header);

        expect(el.getByRole('group')).toHaveAttribute('open');
      });
    });

    describe('when the accordion is currently open', function() {
      it('calls onToggle', async function() {
        const user = userEvent.setup();
        const onToggle = jest.fn();

        const { container } = quickRender({
          onToggle,
          defaultOpen: true,
          children: (
            <NxAccordion.Header>
              <span>Foo</span>
            </NxAccordion.Header>
          )});

        const header = container.querySelector<HTMLElement>('summary')!;

        expect(onToggle).not.toHaveBeenCalled();

        await user.click(header);

        expect(onToggle).toHaveBeenCalledTimes(1);

        await user.click(container);

        expect(onToggle).toHaveBeenCalledTimes(1);
      });

      it('toggles the accordion open prop', async function() {
        const user = userEvent.setup();
        const onToggle = jest.fn();

        const el = quickRender({
          onToggle,
          defaultOpen: true,
          children: (
            <NxAccordion.Header>
              <span>Foo</span>
            </NxAccordion.Header>
          )});

        const header = el.getByRole('button')!;

        expect(el.getByRole('group')).toHaveAttribute('open');

        await user.click(header);

        expect(el.getByRole('group')).not.toHaveAttribute('open');
      });
    });

    describe('when a non-button element in the header with its own onClick handler is clicked', function() {
      it('changes the open state and fires onToggle', async function() {
        const user = userEvent.setup();
        const titleOnClick = jest.fn(),
            onToggle = jest.fn();

        const component = render(
          <NxStatefulAccordion onToggle={onToggle}>
            <NxAccordion.Header>
              <span data-testid="foo" onClick={titleOnClick}>Foo</span>
            </NxAccordion.Header>
          </NxStatefulAccordion>,
        );
        const title = component.getByTestId('foo');

        expect(onToggle).not.toHaveBeenCalled();
        expect(titleOnClick).not.toHaveBeenCalled();
        expect(component.getByRole('group')).not.toHaveAttribute('open');

        await user.click(title);

        expect(onToggle).toHaveBeenCalledTimes(1);
        expect(titleOnClick).toHaveBeenCalledTimes(1);
        expect(component.getByRole('group')).toHaveAttribute('open');
      });
    });

    describe('when a button element in the header is clicked', function() {
      it('does not change the open state or fire onToggle', async function() {
        const user = userEvent.setup();
        const btnOnClick = jest.fn(),
            onToggle = jest.fn();

        const component = render(
          <NxStatefulAccordion onToggle={onToggle}>
            <NxAccordion.Header>
              <NxAccordion.Title>Foo</NxAccordion.Title>
              <div className="nx-btn-bar">
                <NxButton data-testid="btn1"/>
                <NxButton data-testid="btn2" onClick={btnOnClick} />
              </div>
            </NxAccordion.Header>
          </NxStatefulAccordion>,
        );
        const btn1 = component.getByTestId('btn1'),
            btn2 = component.getByTestId('btn2');

        expect(component.getByRole('group')).not.toHaveAttribute('open');
        await user.click(btn1);

        expect(onToggle).not.toHaveBeenCalled();
        expect(btnOnClick).not.toHaveBeenCalled();
        expect(component.getByRole('group')).not.toHaveAttribute('open');

        await user.click(btn2);

        expect(onToggle).not.toHaveBeenCalled();
        expect(btnOnClick).toHaveBeenCalled();
        expect(component.getByRole('group')).not.toHaveAttribute('open');
      });
    });
  });

});
