/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { useState, useRef, useEffect } from 'react';
import { NxStatefulNavPillMenu, NavPillMenuItem, NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';

const items: NavPillMenuItem[] = [
  { id: 'home', label: 'Home', scrollTarget: 'home-section' },
  { id: 'about', label: 'About Us', scrollTarget: 'about-section' },
  { id: 'services', label: 'Services', scrollTarget: 'services-section' },
  { id: 'portfolio', label: 'Portfolio', scrollTarget: 'portfolio-section' },
  { id: 'contact', label: 'Contact', scrollTarget: 'contact-section' }
];

export default function NxStatefulNavPillMenuExample() {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const handleItemChange = (item: NavPillMenuItem) => {
    console.log('Navigation changed to:', item.label);
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
        <NxStatefulNavPillMenu 
          items={items}
          onItemChange={handleItemChange}
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
          <section id="home-section" style={{ padding: '24px', marginBottom: '24px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h2>Home</h2>
            <p>Welcome to our homepage! This nav pill menu works within a contained scrollable area.</p>
            <p>The navigation stays at the top of this container, not the entire page.</p>
          </section>
          
          <section id="about-section" style={{ padding: '24px', marginBottom: '24px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h2>About Us</h2>
            <p>Learn more about our company and mission. The pills provide smooth navigation between sections.</p>
            <p>The scroll behavior is isolated within this demo container.</p>
          </section>
          
          <section id="services-section" style={{ padding: '24px', marginBottom: '24px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h2>Services</h2>
            <p>Discover the services we offer. Each pill scrolls smoothly to its target section.</p>
            <p>This prevents conflicts with the main gallery page scroll.</p>
          </section>
          
          <section id="portfolio-section" style={{ padding: '24px', marginBottom: '24px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h2>Portfolio</h2>
            <p>View our portfolio of work and achievements. The contained scroll works perfectly.</p>
            <p>This approach isolates the navigation scroll context.</p>
          </section>
          
          <section id="contact-section" style={{ padding: '24px', marginBottom: '24px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h2>Contact</h2>
            <p>Get in touch with us. The scrollable container ensures proper behavior.</p>
            <p>Each section remains fully accessible via the sticky navigation.</p>
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