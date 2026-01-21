/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import NxNavPillMenu, { NavPillMenuItem } from '../NxNavPillMenu';

describe('NxNavPillMenu', () => {
  const mockItems: NavPillMenuItem[] = [
    { id: 'item1', label: 'Item 1', scrollTarget: 'section1' },
    { id: 'item2', label: 'Item 2', scrollTarget: 'section2' },
    { id: 'item3', label: 'Item 3', href: '/item3' },
    { id: 'item4', label: 'Disabled Item', scrollTarget: 'section4', disabled: true }
  ];

  const mockScrollTo = jest.fn();
  
  beforeAll(() => {
    Object.defineProperty(window, 'scrollTo', {
      value: mockScrollTo,
      writable: true
    });
  });

  beforeEach(() => {
    mockScrollTo.mockClear();
    
    // Mock getBoundingClientRect
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

    // Mock pageYOffset
    Object.defineProperty(window, 'pageYOffset', {
      value: 0,
      writable: true
    });
  });

  it('renders correctly with basic props', () => {
    render(<NxNavPillMenu items={mockItems} />);
    
    expect(screen.getByRole('navigation')).toBeInTheDocument();
    expect(screen.getByText('Item 1')).toBeInTheDocument();
    expect(screen.getByText('Item 2')).toBeInTheDocument();
    expect(screen.getByText('Item 3')).toBeInTheDocument();
    expect(screen.getByText('Disabled Item')).toBeInTheDocument();
  });

  it('applies active state correctly', () => {
    render(<NxNavPillMenu items={mockItems} activeItem="item1" />);
    
    const activeItem = screen.getByText('Item 1');
    expect(activeItem).toHaveClass('nx-nav-pill-menu__item--active');
    expect(activeItem).toHaveAttribute('aria-current', 'page');
  });

  it('applies disabled state correctly', () => {
    render(<NxNavPillMenu items={mockItems} />);
    
    const disabledItem = screen.getByText('Disabled Item');
    expect(disabledItem).toHaveClass('nx-nav-pill-menu__item--disabled');
    expect(disabledItem).toHaveAttribute('aria-disabled', 'true');
    expect(disabledItem).toHaveAttribute('tabIndex', '-1');
  });

  it('handles scroll navigation on item click', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'section1';
    document.body.appendChild(mockElement);

    render(<NxNavPillMenu items={mockItems} scrollOffset={50} />);
    
    const item1 = screen.getByText('Item 1');
    fireEvent.click(item1);

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 50, // 100 (mock getBoundingClientRect top) + 0 (pageYOffset) - 50 (scrollOffset)
      behavior: 'smooth'
    });

    document.body.removeChild(mockElement);
  });

  it('calls onItemClick callback', () => {
    const mockOnItemClick = jest.fn();
    
    render(<NxNavPillMenu items={mockItems} onItemClick={mockOnItemClick} />);
    
    const item1 = screen.getByText('Item 1');
    fireEvent.click(item1);

    expect(mockOnItemClick).toHaveBeenCalledWith(
      mockItems[0],
      expect.any(Object)
    );
  });

  it('calls onItemClick for disabled items but does not scroll', () => {
    const mockOnItemClick = jest.fn();
    
    render(<NxNavPillMenu items={mockItems} onItemClick={mockOnItemClick} />);
    
    const disabledItem = screen.getByText('Disabled Item');
    fireEvent.click(disabledItem);

    expect(mockOnItemClick).toHaveBeenCalledWith(
      mockItems[3],
      expect.any(Object)
    );
    expect(mockScrollTo).not.toHaveBeenCalled();
  });

  it('renders with custom className', () => {
    render(<NxNavPillMenu items={mockItems} className="custom-class" />);
    
    const nav = screen.getByRole('navigation');
    expect(nav).toHaveClass('nx-nav-pill-menu', 'custom-class');
  });

  it('supports ref forwarding', () => {
    const ref = React.createRef<HTMLElement>();
    render(<NxNavPillMenu ref={ref} items={mockItems} />);
    
    expect(ref.current).toBeInstanceOf(HTMLElement);
    expect(ref.current?.tagName).toBe('NAV');
  });

  it('uses auto scroll behavior when specified', () => {
    const mockElement = document.createElement('div');
    mockElement.id = 'section1';
    document.body.appendChild(mockElement);

    render(<NxNavPillMenu items={mockItems} scrollBehavior="auto" />);
    
    const item1 = screen.getByText('Item 1');
    fireEvent.click(item1);

    expect(mockScrollTo).toHaveBeenCalledWith({
      top: 100,
      behavior: 'auto'
    });

    document.body.removeChild(mockElement);
  });

  it('handles items with href attribute', () => {
    render(<NxNavPillMenu items={mockItems} />);
    
    const item3 = screen.getByText('Item 3');
    expect(item3).toHaveAttribute('href', '/item3');
  });
});