/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxNavPillMenu, NavPillMenuItem } from '@sonatype/react-shared-components';

const manyItems: NavPillMenuItem[] = [
  { id: 'introduction', label: 'Introduction', scrollTarget: 'intro-section' },
  { id: 'installation', label: 'Installation', scrollTarget: 'install-section' },
  { id: 'quick-start', label: 'Quick Start Guide', scrollTarget: 'quickstart-section' },
  { id: 'components', label: 'Components', scrollTarget: 'components-section' },
  { id: 'theming', label: 'Theming & Customization', scrollTarget: 'theming-section' },
  { id: 'accessibility', label: 'Accessibility', scrollTarget: 'a11y-section' },
  { id: 'testing', label: 'Testing', scrollTarget: 'testing-section' },
  { id: 'performance', label: 'Performance', scrollTarget: 'performance-section' },
  { id: 'deployment', label: 'Deployment', scrollTarget: 'deployment-section' },
  { id: 'troubleshooting', label: 'Troubleshooting', scrollTarget: 'troubleshooting-section' },
  { id: 'faq', label: 'FAQ', scrollTarget: 'faq-section' },
  { id: 'changelog', label: 'Changelog', href: '/changelog' },
  { id: 'github', label: 'GitHub Repository', href: 'https://github.com/sonatype/react-shared-components' }
];

export default function NxNavPillMenuResponsiveExample() {
  const handleItemClick = (item: NavPillMenuItem) => {
    console.log('Clicked:', item.label);
  };

  return (
    <div>
      <div style={{ marginBottom: '20px', padding: '16px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
        <h4>Responsive Navigation Pills with Contained Scroll</h4>
        <p>
          This example demonstrates the responsive behavior with many navigation items within a scrollable container. 
          The pills now scroll horizontally when there's overflow instead of wrapping to a second row.
        </p>
        <p>
          <strong>The navigation is contained within a fixed-height scrollable area</strong> to prevent conflicts with page scrolling.
        </p>
      </div>

      <div 
        data-scroll-container="true"
        style={{ 
          height: '600px', 
          overflow: 'hidden',
          padding: '20px'
        }}>
        <div style={{ position: 'relative' }}>
          <NxNavPillMenu 
            items={manyItems}
            onItemClick={handleItemClick}
            scrollBehavior="smooth"
            scrollOffset={0}
          />
        
          {/* Scrollable content container */}
          <div 
            data-nav-scroll-area="true"
            style={{ 
              height: 'calc(580px - 41px)', // Subtract nav height and container padding
              overflowY: 'auto',
              marginTop: '0px' // No gap between nav and content
            }}>
            <section id="intro-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <h3>Introduction</h3>
              <p>Welcome to the component library documentation. This responsive navigation makes it easy to jump between sections.</p>
            </section>
            
            <section id="install-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <h3>Installation</h3>
              <p>Learn how to install and set up the component library in your project.</p>
            </section>
            
            <section id="quickstart-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <h3>Quick Start Guide</h3>
              <p>Get up and running quickly with our step-by-step guide.</p>
            </section>
            
            <section id="components-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <h3>Components</h3>
              <p>Comprehensive documentation of all available components and their APIs.</p>
              <p>This section demonstrates the horizontal scrolling behavior when there are many navigation items.</p>
            </section>
            
            <section id="theming-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <h3>Theming & Customization</h3>
              <p>Learn how to customize the appearance of components to match your brand.</p>
            </section>
            
            <section id="a11y-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <h3>Accessibility</h3>
              <p>Guidelines and best practices for making your application accessible to all users.</p>
            </section>
            
            <section id="testing-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <h3>Testing</h3>
              <p>Testing strategies and utilities for components in your application.</p>
            </section>
            
            <section id="performance-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <h3>Performance</h3>
              <p>Optimization techniques and performance considerations for better user experience.</p>
            </section>
            
            <section id="deployment-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <h3>Deployment</h3>
              <p>Best practices for deploying applications that use this component library.</p>
            </section>
            
            <section id="troubleshooting-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <h3>Troubleshooting</h3>
              <p>Common issues and their solutions to help you resolve problems quickly.</p>
            </section>
            
            <section id="faq-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
              <h3>FAQ</h3>
              <p>Frequently asked questions and their answers.</p>
              <p>This approach provides the best user experience for navigation components.</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}