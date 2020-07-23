/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { faBiohazard } from '@fortawesome/free-solid-svg-icons';
import NxAlert, { NxErrorAlert, NxWarningAlert, NxInfoAlert, NxSuccessAlert } from '../NxAlert';

describe('NxAlert', function() {
  const MESSAGE = 'A message to show in an alert';

  it('renders an accessible alert with a message', function() {
    render(<NxAlert>{MESSAGE}</NxAlert>);

    const alert = screen.getByRole('alert');

    expect(alert).toHaveTextContent(MESSAGE);
  });

  it('renders the classNames given to it', function() {
    const customClassNames = 'test-classname ufo';
    render(<NxAlert className={customClassNames}>{MESSAGE}</NxAlert>);

    const alert = screen.getByRole('alert');

    expect(alert).toHaveClass(customClassNames);
  });

  it('renders the children passed to it', function() {
    render(
      <NxAlert>
        <p data-testid='test-p'>Test Paragraph</p>
        <div data-testid='test-div'>Test Div</div>
      </NxAlert>
    );

    const alert = screen.getByRole('alert');
    const p = screen.getByTestId('test-p');
    const div = screen.getByTestId('test-div');

    expect(alert).toContainElement(p);
    expect(alert).toContainElement(div);
    expect(p).toHaveTextContent('Test Paragraph');
    expect(div).toHaveTextContent('Test Div');
  });

  it('wraps children in a span if they are just a text node', function() {
    render(<NxAlert>{MESSAGE}</NxAlert>);

    const alert = screen.getByRole('alert');

    expect(alert).toContainHTML(`<span>${MESSAGE}</span>`);
  });

  it('renders the icon passed to it', function () {
    render(<NxAlert icon={faBiohazard} />);

    const alert = screen.getByRole('alert');
    const img = screen.getByRole('img', { hidden: true });

    expect(alert).toContainElement(img);
    expect(img).toHaveClass('fa-biohazard');
  });

  it('passes additional props to the div', function() {
    render(<NxAlert id="foo" title="baz" />);

    const alert = screen.getByRole('alert');

    expect(alert).toHaveAttribute('id', 'foo');
    expect(alert).toHaveAttribute('title', 'baz');
  });

  describe('NxErrorAlert', function() {
    it('renders an NxAlert', function() {
      render(<NxErrorAlert>{MESSAGE}</NxErrorAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('nx-alert');
    });

    it('uses the appropriate error classes', function () {
      render(<NxErrorAlert>{MESSAGE}</NxErrorAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('nx-alert--error');
    });

    it('renders the appropriate error icon', function () {
      render(<NxErrorAlert>{MESSAGE}</NxErrorAlert>);

      const alert = screen.getByRole('alert');
      const icon = screen.getByLabelText('Error');

      expect(alert).toContainElement(icon);
      expect(icon).toHaveClass('fa-exclamation-circle');
    });

    it('renders the children passed into it', function () {
      render(<NxErrorAlert>{MESSAGE}</NxErrorAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveTextContent(MESSAGE);
    });

    it('passes any other props to the div', function () {
      render(<NxErrorAlert id="foo" title="baz">{MESSAGE}</NxErrorAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('id', 'foo');
      expect(alert).toHaveAttribute('title', 'baz');
    });
  });

  describe('NxWarningAlert', function() {
    it('renders an NxAlert', function () {
      render(<NxWarningAlert>{MESSAGE}</NxWarningAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('nx-alert');
    });

    it('uses the appropriate error classes', function () {
      render(<NxWarningAlert>{MESSAGE}</NxWarningAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('nx-alert--warning');
    });

    it('renders the appropriate warning icon', function () {
      render(<NxWarningAlert>{MESSAGE}</NxWarningAlert>);

      const alert = screen.getByRole('alert');
      const icon = screen.getByLabelText('Warning');

      expect(alert).toContainElement(icon);
      expect(icon).toHaveClass('fa-exclamation-triangle');
    });

    it('renders the children passed into it', function () {
      render(<NxWarningAlert>{MESSAGE}</NxWarningAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveTextContent(MESSAGE);
    });

    it('passes any other props to the div', function () {
      render(<NxWarningAlert id="foo" title="baz">{MESSAGE}</NxWarningAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('id', 'foo');
      expect(alert).toHaveAttribute('title', 'baz');
    });
  });

  describe('NxInfoAlert', function() {
    it('renders an NxAlert', function () {
      render(<NxInfoAlert>{MESSAGE}</NxInfoAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('nx-alert');
    });

    it('uses the appropriate error classes', function () {
      render(<NxInfoAlert>{MESSAGE}</NxInfoAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('nx-alert--info');
    });

    it('renders the appropriate info icon', function () {
      render(<NxInfoAlert>{MESSAGE}</NxInfoAlert>);

      const alert = screen.getByRole('alert');
      const icon = screen.getByLabelText('Information');

      expect(alert).toContainElement(icon);
      expect(icon).toHaveClass('fa-info-circle');
    });

    it('renders the children passed into it', function () {
      render(<NxInfoAlert>{MESSAGE}</NxInfoAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveTextContent(MESSAGE);
    });

    it('passes any other props to the div', function () {
      render(<NxInfoAlert id="foo" title="baz">{MESSAGE}</NxInfoAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('id', 'foo');
      expect(alert).toHaveAttribute('title', 'baz');
    });
  });

  describe('NxSuccessAlert', function () {
    it('renders an NxAlert', function () {
      render(<NxSuccessAlert>{MESSAGE}</NxSuccessAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('nx-alert');
    });

    it('uses the appropriate error classes', function () {
      render(<NxSuccessAlert>{MESSAGE}</NxSuccessAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveClass('nx-alert--success');
    });

    it('renders the appropriate info icon', function () {
      render(<NxSuccessAlert>{MESSAGE}</NxSuccessAlert>);

      const alert = screen.getByRole('alert');
      const icon = screen.getByLabelText('Success');

      expect(alert).toContainElement(icon);
      expect(icon).toHaveClass('fa-check-circle');
    });

    it('renders the children passed into it', function () {
      render(<NxSuccessAlert>{MESSAGE}</NxSuccessAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveTextContent(MESSAGE);
    });

    it('passes any other props to the div', function () {
      render(<NxSuccessAlert id="foo" title="baz">{MESSAGE}</NxSuccessAlert>);

      const alert = screen.getByRole('alert');

      expect(alert).toHaveAttribute('id', 'foo');
      expect(alert).toHaveAttribute('title', 'baz');
    });
  });
});
