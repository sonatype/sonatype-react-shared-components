/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { forwardRef, useRef, useState, useEffect } from 'react';
import classnames from 'classnames';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

import { NxNavPillMenuProps, NavPillMenuItem, nxNavPillMenuPropTypes } from './types';
import NxOverflowTooltip from '../NxTooltip/NxOverflowTooltip';
import NxFontAwesomeIcon from '../NxFontAwesomeIcon/NxFontAwesomeIcon';

import './NxNavPillMenu.scss';

export { NxNavPillMenuProps, NavPillMenuItem };

const NxNavPillMenu = forwardRef<HTMLElement, NxNavPillMenuProps>(function NxNavPillMenuElement(props, ref) {
  const {
    items,
    onItemClick,
    scrollBehavior = 'smooth',
    scrollOffset = 0,
    className,
    ...otherProps
  } = props;

  const pillListRef = useRef<HTMLUListElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const [showScrollArrows, setShowScrollArrows] = useState(false);

  const handleItemClick = (item: NavPillMenuItem, event: React.MouseEvent<HTMLAnchorElement>) => {
    // Handle scroll navigation
    if (item.scrollTarget && !item.disabled) {
      event.preventDefault();
      
      const targetElement = document.getElementById(item.scrollTarget) || 
                           document.querySelector(item.scrollTarget);
      
      console.log('=== DEBUG NAV PILL CLICK ===');
      console.log('Target element:', targetElement);
      console.log('Target ID:', item.scrollTarget);
      
      if (targetElement) {
        // Try to find the scroll container that contains the target element
        let scrollContainer: Element | null = null;
        let currentElement: Element | null = targetElement.parentElement;
        
        // Walk up from the target element to find a scrollable container
        while (currentElement && currentElement !== document.body && currentElement !== document.documentElement) {
          const computedStyle = window.getComputedStyle(currentElement);
          console.log('Checking element:', currentElement, {
            overflowY: computedStyle.overflowY,
            overflow: computedStyle.overflow,
            hasDataAttr: currentElement.hasAttribute('data-nav-scroll-area')
          });
          
          if (currentElement.hasAttribute('data-nav-scroll-area') || 
              computedStyle.overflowY === 'auto' || 
              computedStyle.overflowY === 'scroll' || 
              computedStyle.overflow === 'auto' || 
              computedStyle.overflow === 'scroll') {
            scrollContainer = currentElement;
            console.log('FOUND SCROLL CONTAINER:', scrollContainer);
            break;
          }
          
          currentElement = currentElement.parentElement;
        }
        
        // If we found a scrollable container, scroll within it
        if (scrollContainer && scrollContainer !== document.body && scrollContainer !== document.documentElement) {
          console.log('SCROLLING IN CONTAINER');
          console.log('Container scroll top before:', scrollContainer.scrollTop);
          
          const containerRect = scrollContainer.getBoundingClientRect();
          const targetRect = targetElement.getBoundingClientRect();
          const relativeTop = targetRect.top - containerRect.top + scrollContainer.scrollTop;
          const offsetPosition = Math.max(0, relativeTop - scrollOffset);
          
          console.log('Scroll calculation:', {
            containerTop: containerRect.top,
            targetTop: targetRect.top,
            currentScrollTop: scrollContainer.scrollTop,
            relativeTop,
            offsetPosition
          });
          
          scrollContainer.scrollTo({
            top: offsetPosition,
            behavior: scrollBehavior
          });
          
          // Verify scroll happened
          setTimeout(() => {
            console.log('Container scroll top after:', scrollContainer!.scrollTop);
          }, 100);
        } else {
          console.log('NO SCROLL CONTAINER FOUND - USING WINDOW SCROLL');
          const elementTop = targetElement.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementTop - scrollOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: scrollBehavior
          });
        }
      }
    }

    // Call user-provided callback
    onItemClick?.(item, event);
  };

  const renderPillItem = (item: NavPillMenuItem) => {
    const isDisabled = item.disabled;

    const pillClassNames = classnames('nx-nav-pill-menu__item', {
      'nx-nav-pill-menu__item--disabled': isDisabled
    });

    const pillContent = (
      <a
        className={pillClassNames}
        href={item.href || (item.scrollTarget ? `#${item.scrollTarget}` : undefined)}
        onClick={(event) => handleItemClick(item, event)}
        aria-disabled={isDisabled}
        tabIndex={isDisabled ? -1 : undefined}
      >
        {item.label}
      </a>
    );

    return (
      <li key={item.id} className="nx-nav-pill-menu__list-item">
        <NxOverflowTooltip>
          {pillContent}
        </NxOverflowTooltip>
      </li>
    );
  };

  // Check if scrolling is needed and update arrow visibility
  const updateScrollArrows = () => {
    if (pillListRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = pillListRef.current;
      const hasOverflow = scrollWidth > clientWidth;
      const canScrollLeftValue = scrollLeft > 0;
      const canScrollRightValue = scrollLeft < (scrollWidth - clientWidth - 1); // -1 for rounding
      
      setShowScrollArrows(hasOverflow);
      setCanScrollLeft(canScrollLeftValue);
      setCanScrollRight(canScrollRightValue);
    }
  };

  // Handle scroll arrow clicks  
  const scrollLeft = () => {
    if (pillListRef.current) {
      pillListRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (pillListRef.current) {
      pillListRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    }
  };


  // Update scroll arrows on mount and when items change
  useEffect(() => {
    updateScrollArrows();
    
    const handleResize = () => updateScrollArrows();
    window.addEventListener('resize', handleResize);
    
    return () => window.removeEventListener('resize', handleResize);
  }, [items]);

  // Update scroll arrows on scroll
  const handleScroll = () => {
    updateScrollArrows();
  };

  const navClassNames = classnames('nx-nav-pill-menu', className, {
    'nx-nav-pill-menu--scrollable': showScrollArrows
  });

  return (
    <nav
      ref={ref}
      className={navClassNames}
      role="navigation"
      aria-label="Navigation pills"
      {...otherProps}
    >
      {showScrollArrows && canScrollLeft && (
        <button
          className="nx-nav-pill-menu__scroll-arrow nx-nav-pill-menu__scroll-arrow--left"
          onClick={scrollLeft}
          aria-label="Scroll left"
          type="button"
        >
          <NxFontAwesomeIcon icon={faChevronLeft} />
        </button>
      )}
      
      <ul 
        ref={pillListRef}
        className="nx-nav-pill-menu__list"
        onScroll={handleScroll}
      >
        {items.map(renderPillItem)}
      </ul>
      
      {showScrollArrows && canScrollRight && (
        <button
          className="nx-nav-pill-menu__scroll-arrow nx-nav-pill-menu__scroll-arrow--right"
          onClick={scrollRight}
          aria-label="Scroll right"
          type="button"
        >
          <NxFontAwesomeIcon icon={faChevronRight} />
        </button>
      )}
    </nav>
  );
});

NxNavPillMenu.propTypes = nxNavPillMenuPropTypes;

export default NxNavPillMenu;