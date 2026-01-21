/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, useRef, useEffect } from 'react';
import { NxNavPillMenu, NavPillMenuItem, NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const items: NavPillMenuItem[] = [
  { id: 'overview', label: 'Overview', scrollTarget: 'overview-section' },
  { id: 'features', label: 'Features', scrollTarget: 'features-section' },
  { id: 'getting-started', label: 'Getting Started', scrollTarget: 'getting-started-section' },
  { id: 'api', label: 'API Reference', scrollTarget: 'api-section' },
  { id: 'examples', label: 'Examples', scrollTarget: 'examples-section' }
];

export default function NxNavPillMenuExample() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleItemClick = (item: NavPillMenuItem) => {
    console.log('Clicked nav pill:', item.label);
  };

  // Back to top functionality
  const scrollToTop = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  // Monitor scroll position to show/hide back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollTop = scrollContainerRef.current.scrollTop;
        setShowBackToTop(scrollTop > 200); // Show after scrolling 200px
      }
    };

    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
    
    return undefined; // Explicit return for when scrollContainer is null
  }, []);

  return (
    <div 
      data-scroll-container="true"
      style={{ 
        height: '500px', 
        overflow: 'hidden',
        padding: '20px'
      }}>
      <div style={{ position: 'relative' }}>
        <NxNavPillMenu 
          items={items}
          onItemClick={handleItemClick}
          scrollBehavior="smooth"
          scrollOffset={0}
        />
        
        {/* Scrollable content container */}
        <div 
          ref={scrollContainerRef}
          data-nav-scroll-area="true"
          style={{ 
            height: 'calc(480px - 41px)', // Subtract nav height and container padding
            overflowY: 'auto',
            marginTop: '0px' // No gap between nav and content
          }}>
          <section id="overview-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h3>Overview Section</h3>
            <p>This is the overview section. Clicking the "Overview" pill will scroll to this section within this container.</p>
            <p>The navigation bar stays at the top of this container, not the entire page.</p>
          </section>
          
          <section id="features-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h3>Features Section</h3>
            <p>This is the features section. Notice how the navigation scrolls within this bounded area.</p>
            <p>This prevents conflicts with the main page scroll.</p>
          </section>
          
          <section id="getting-started-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h3>Getting Started Section</h3>
            <p>This is the getting started section. Click the pill to scroll here.</p>
            <p>The scroll behavior is contained within this example area.</p>
          </section>
          
          <section id="api-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h3>API Reference Section</h3>
            <p>This is the API reference section with detailed documentation.</p>
            <p>Each section has enough content to demonstrate the scroll behavior.</p>
          </section>
          
          <section id="examples-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h3>Examples Section</h3>
            <p>This is the examples section showing various use cases.</p>
            <p>The contained scroll area ensures the sticky navigation works properly.</p>
          </section>
        </div>

        {/* Back to top button - demo pattern for nav pill menu */}
        {showBackToTop && (
          <button
            onClick={scrollToTop}
            style={{
              position: 'absolute',
              bottom: '20px',
              right: '20px',
              width: '48px',
              height: '48px',
              borderRadius: '24px',
              backgroundColor: 'white',
              border: 'none',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)', // Lighter shadow
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '16px',
              color: 'var(--nx-swatch-indigo-40)',
              transition: 'all 0.2s ease-in-out',
              zIndex: 1000
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
            }}
            aria-label="Back to top"
          >
            <NxFontAwesomeIcon icon={faArrowUp} />
          </button>
        )}
      </div>
    </div>
  );
}