/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxNavPillMenu, NavPillMenuItem } from '@sonatype/react-shared-components';

const items: NavPillMenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', scrollTarget: 'dashboard-section' },
  { id: 'analytics', label: 'Analytics', scrollTarget: 'analytics-section' },
  { id: 'reports', label: 'Reports', scrollTarget: 'reports-section', disabled: true },
  { id: 'settings', label: 'Settings', scrollTarget: 'settings-section' },
  { id: 'help', label: 'Help Center', href: 'https://help.sonatype.com', disabled: false },
  { id: 'admin', label: 'Admin Panel', scrollTarget: 'admin-section', disabled: true }
];

export default function NxNavPillMenuDisabledExample() {
  const handleItemClick = (item: NavPillMenuItem) => {
    if (item.disabled) {
      console.log('Disabled item clicked:', item.label);
      return;
    }
    
    if (item.href) {
      console.log('External link clicked:', item.label, item.href);
    } else {
      console.log('Navigation pill clicked:', item.label);
    }
  };

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
          data-nav-scroll-area="true"
          style={{ 
            height: 'calc(480px - 41px)', // Subtract nav height and container padding
            overflowY: 'auto',
            marginTop: '0px' // No gap between nav and content
          }}>
          <section id="dashboard-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h3>Dashboard</h3>
            <p>Main dashboard view with key metrics and overview information.</p>
            <p>This example demonstrates disabled states within a scrollable container.</p>
          </section>
          
          <section id="analytics-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h3>Analytics</h3>
            <p>Detailed analytics and data visualization section.</p>
            <p>The navigation bar stays sticky at the top of this container.</p>
          </section>
          
          <section id="reports-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0', opacity: 0.6 }}>
            <h3>Reports (Disabled)</h3>
            <p>Reports section is currently disabled. The corresponding pill cannot be clicked.</p>
            <p>Disabled pills show proper visual feedback and prevent interaction.</p>
          </section>
          
          <section id="settings-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0' }}>
            <h3>Settings</h3>
            <p>Application settings and configuration options.</p>
            <p>The contained scroll area works seamlessly with all pill states.</p>
          </section>
          
          <div style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '2px dashed #1976d2' }}>
            <h3>External Link Example</h3>
            <p>The "Help Center" pill links to an external URL (https://help.sonatype.com).</p>
            <p>External links work normally even within the contained scroll area.</p>
          </div>
          
          <section id="admin-section" style={{ padding: '20px', marginBottom: '20px', backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e0e0e0', opacity: 0.6 }}>
            <h3>Admin Panel (Disabled)</h3>
            <p>Admin panel access is restricted. This pill is disabled for regular users.</p>
            <p>The scroll container ensures proper navigation behavior for all states.</p>
          </section>
        </div>
      </div>
    </div>
  );
}