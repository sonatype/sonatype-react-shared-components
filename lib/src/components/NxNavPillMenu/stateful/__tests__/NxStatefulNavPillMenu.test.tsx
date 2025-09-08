/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import NxStatefulNavPillMenu from '../NxStatefulNavPillMenu';
import { NavPillMenuItem } from '../../types';

describe('NxStatefulNavPillMenu', () => {
  const mockItems: NavPillMenuItem[] = [
    { id: 'item1', label: 'Item 1', scrollTarget: 'section1' },
    { id: 'item2', label: 'Item 2', scrollTarget: 'section2' },
    { id: 'item3', label: 'Item 3', href: '/item3' },
    { id: 'item4', label: 'Disabled Item', scrollTarget: 'section4', disabled: true }
  ];

  beforeAll(() => {
    Object.defineProperty(window, 'scrollTo', {
      value: jest.fn(),
      writable: true
    });
  });

  beforeEach(() => {
    Element.prototype.getBoundingClientRect = jest.fn(() => ({
      top: 100,
      left: 0,
      bottom: 200,
      right: 200,
      width: 200,
      height: 100,
      x: 0,
      y: 100,
      toJSON: jest.fn()
    }));

    Object.defineProperty(window, 'pageYOffset', {
      value: 0,
      writable: true
    });
  });

  it('renders correctly with basic props', () => {
    render(<NxStatefulNavPillMenu items={mockItems} />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(screen.getByText('Disabled Item')).toBeInTheDocument();
  });

  it('sets initial active item', () => {
    render(<NxStatefulNavPillMenu items={mockItems} initialActiveItem="item2" />);
    
    const activeItem = screen.getByText('Item 2');
    expect(activeItem).toHaveClass('nx-nav-pill-menu__item--active');
    expect(activeItem).toHaveAttribute('aria-current', 'page');
  });

  it('manages active state internally', () => {
    render(<NxStatefulNavPillMenu items={mockItems} />);
    
    // Initially no item should be active
    expect(screen.getByText('Item 1')).not.toHaveClass('nx-nav-pill-menu__item--active');
    expect(screen.getByText('Item 2')).not.toHaveClass('nx-nav-pill-menu__item--active');

    // Click on Item 1
    fireEvent.click(screen.getByText('Item 1'));
    
    expect(screen.getByText('Item 1')).toHaveClass('nx-nav-pill-menu__item--active');
    expect(screen.getByText('Item 2')).not.toHaveClass('nx-nav-pill-menu__item--active');

    // Click on Item 2
    fireEvent.click(screen.getByText('Item 2'));
    
    expect(screen.getByText('Item 1')).not.toHaveClass('nx-nav-pill-menu__item--active');
    expect(screen.getByText('Item 2')).toHaveClass('nx-nav-pill-menu__item--active');
  });

  it('calls onItemChange callback when item is clicked', () => {
    const mockOnItemChange = jest.fn();
    
    render(<NxStatefulNavPillMenu items={mockItems} onItemChange={mockOnItemChange} />);
    
    fireEvent.click(screen.getByText('Item 1'));

    expect(mockOnItemChange).toHaveBeenCalledWith(mockItems[0]);
  });

  it('does not change state or call callback for disabled items', () => {
    const mockOnItemChange = jest.fn();
    
    render(<NxStatefulNavPillMenu items={mockItems} onItemChange={mockOnItemChange} />);
    
    // First click on enabled item
    fireEvent.click(screen.getByText('Item 1'));
    expect(screen.getByText('Item 1')).toHaveClass('nx-nav-pill-menu__item--active');
    expect(mockOnItemChange).toHaveBeenCalledTimes(1);

    // Then click on disabled item
    fireEvent.click(screen.getByText('Disabled Item'));
    
    // Active state should not change
    expect(screen.getByText('Item 1')).toHaveClass('nx-nav-pill-menu__item--active');
    expect(screen.getByText('Disabled Item')).not.toHaveClass('nx-nav-pill-menu__item--active');
    
    // Callback should not be called again
    expect(mockOnItemChange).toHaveBeenCalledTimes(1);
  });

  it('supports ref forwarding', () => {
    const ref = React.createRef<HTMLElement>();
    render(<NxStatefulNavPillMenu ref={ref} items={mockItems} />);
    
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName).toBe('NAV');
  });

  it('passes through other props to underlying component', () => {
    render(
      <NxStatefulNavPillMenu 
        items={mockItems} 
        className="custom-class"
        scrollBehavior="auto"
        scrollOffset={100}
      />
    );
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('nx-nav-pill-menu', 'custom-class');
  });
});