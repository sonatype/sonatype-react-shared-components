/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxTileWithActionsExample = () =>
  <div className="nx-tile">
    <div className="nx-tile-header">
      <div className="nx-tile-header__title">
        <h2 className="nx-h2">NX Tile with Actions - and this line is meant to wrap so that we can test truncation</h2>
      </div>
      <div className="nx-tile-header__subtitle">The Subtitle</div>
      <div className="nx-tile__actions">
        <button className="nx-btn nx-btn--tertiary">Action 1</button>
        <button className="nx-btn nx-btn--tertiary">Action 2</button>
      </div>
    </div>
    <div className="nx-tile-content">
      Vehicle motion artisanal corrupted warehouse marketing jeans physical drone neon
      tiger-team physical. garage franchise stimulate euro-pop geodesic neon boy car
      geodesic math- youtube boy. hotdog physical crypto- concrete cardboard free-market
      assassin neon nodal point hacker military-grade soul-delay. numinous knife 3D-printed
      Tokyo engine narrative systemic media stimulate alcohol voodoo god ablative.
      face forwards nodal point sub-orbital grenade cardboard sub-orbital apophenia
      realism marketing boy otaku BASE jump. soul-delay San Francisco military-grade
      dolphin chrome wonton soup numinous futurity physical tanto j-pop wonton soup.
    </div>
    <div className="nx-tile-footer">
      <button className="nx-btn nx-btn--primary">Footer Button</button>
    </div>
  </div>;

export default NxTileWithActionsExample;
