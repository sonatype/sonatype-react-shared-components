/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';
import { NxFontAwesomeIcon } from '@sonatype/react-shared-components';
import {faSitemap} from '@fortawesome/free-solid-svg-icons';
import {faCloud} from '@fortawesome/free-solid-svg-icons';
import {faCalculator} from '@fortawesome/free-solid-svg-icons';
import './CustomWidthExample.scss';

const NxGridExample = () =>
  <>
    <hr className="nx-grid-h-keyline"/>
    <div className="nx-grid-row">
      <div className="nx-grid-col nx-grid-col--50">
        <div className="nx-grid-header">
          <h1 className="nx-h1 nx-grid-header__title">
            <NxFontAwesomeIcon icon={faCloud} className="nx-grid-header__icon"/>
            <span>H1 with .nx-grid-header</span>
          </h1>
        </div>
        50% width columns --- range-rover hacker disposable shoes shoes long-chain
        hydrocarbons hotdog grenade chrome rain bomb skyscraper weathered engine fetishism cardboard. bicycle knife
        refrigerator semiotics 3D-printed dome computer
      </div>
      <div className="nx-grid-col nx-grid-col--50">
        <div className="nx-grid-header">
          <h3 className="nx-h3 nx-grid-header__title">
            <NxFontAwesomeIcon icon={faSitemap} className="nx-grid-header__icon"/>
            <span>H3 with .nx-grid-header extra long title to see if truncation works</span>
          </h3>
        </div>
        50% width columns --- skyscraper weathered engine fetishism cardboard. bicycle knife
        refrigerator semiotics 3D-printed dome computer
      </div>
    </div>
    <hr className="nx-grid-h-keyline"/>
    <div className="nx-grid-row">
      <div className="nx-grid-col nx-grid-col--50">
        <div className="nx-grid-header">
          <h2 className="nx-h2 nx-grid-header__title">H2 with .nx-grid-header</h2>
          <hr className="nx-grid-header__hrule"/>
        </div>
        50% width columns --- range-rover hacker disposable shoes shoes long-chain
        hydrocarbons hotdog grenade chrome rain bomb skyscraper weathered engine fetishism cardboard. bicycle knife
        refrigerator semiotics 3D-printed dome computer
      </div>
      <div className="nx-grid-col nx-grid-col--50">
        <div className="nx-grid-header">
          <h3 className="nx-h3 nx-grid-header__title">
            <NxFontAwesomeIcon icon={faSitemap} className="nx-grid-header__icon"/>
            <span>H3 with .nx-grid-header</span>
          </h3>
          <hr className="nx-grid-header__hrule"/>
        </div>
        50% width columns --- skyscraper weathered engine fetishism cardboard. bicycle knife
        refrigerator semiotics 3D-printed dome computer
      </div>
    </div>
    <hr className="nx-grid-h-keyline"/>
    <div className="nx-grid-row">
      <div className="nx-grid-col nx-grid-col--50">
        <div className="nx-grid-header">
          <h2 className="nx-h2 nx-grid-header__title">
            <NxFontAwesomeIcon icon={faCalculator} className="nx-grid-header__icon"/>
            <span>Grid with .nx-grid-header</span>
          </h2>
          <div className="nx-grid-header__subtitle">
            This is a sub-title.
          </div>
          <hr className="nx-grid-header__hrule"/>
        </div>
        50% width columns --- range-rover hacker disposable shoes shoes long-chain
        hydrocarbons hotdog grenade chrome rain bomb skyscraper weathered engine fetishism cardboard. bicycle knife
        refrigerator semiotics 3D-printed dome computer
      </div>
      <div className="nx-grid-col nx-grid-col--50">
        <div className="nx-grid-header">
          <h3 className="nx-h3 nx-grid-header__title">
            <NxFontAwesomeIcon icon={faSitemap} className="nx-grid-header__icon"/>
            <span>Grid with .nx-grid-header</span>
          </h3>
          <div className="nx-grid-header__subtitle">
            This is a sub-title.
          </div>
          <hr className="nx-grid-header__hrule"/>
        </div>
        50% width columns --- skyscraper weathered engine fetishism cardboard. bicycle knife
        refrigerator semiotics 3D-printed dome computer
      </div>
    </div>
    <hr className="nx-grid-h-keyline"/>
    <div className="nx-grid-row">
      <div className="nx-grid-col nx-grid-col--25">25%</div>
      <div className="nx-grid-col nx-grid-col--25">
        25% -- range-rover hacker disposable shoes shoes long-chain hydrocarbons hotdog grenade chrome rain bomb
        skyscraper weathered engine fetishism cardboard. bicycle knife refrigerator semiotics 3D-printed dome computer
      </div>
      <div className="nx-grid-col nx-grid-col--25">25%</div>
      <div className="nx-grid-col nx-grid-col--25">25%</div>
    </div>
    <hr className="nx-grid-h-keyline"/>
    <div className="nx-grid-row">
      <div className="nx-grid-col nx-grid-col--50">50%</div>
      <div className="nx-grid-col nx-grid-col--50">50%</div>
    </div>
    <hr className="nx-grid-h-keyline"/>
    <div className="nx-grid-row">
      <div className="nx-grid-col nx-grid-col--25">25%</div>
      <div className="nx-grid-col">Expanding</div>
    </div>
    <hr className="nx-grid-h-keyline"/>
    <div className="nx-grid-row">
      <div className="nx-grid-col nx-grid-col--33">33%</div>
      <div className="nx-grid-col nx-grid-col--33">33%</div>
      <div className="nx-grid-col nx-grid-col--33">33%</div>
    </div>
    <div className="nx-grid-row">
      <div className="nx-grid-col nx-grid-col--33">33%</div>
      <div className="nx-grid-col nx-grid-col--67">
        67% - range-rover hacker disposable shoes shoes long-chain
        hydrocarbons hotdog grenade chrome rain bomb skyscraper weathered engine fetishism cardboard. bicycle knife
        refrigerator semiotics 3D-printed dome computer
      </div>
    </div>
    <div className="nx-grid-row">
      <div className="nx-grid-col nx-grid-col--33">33%</div>
      <div className="nx-grid-col nx-grid-col--67">
        67% column which includes two 50% columns
        <hr className="nx-grid-h-keyline"/>
        <div className="nx-grid-row">
          <div className="nx-grid-col nx-grid-col--50">50%</div>
          <div className="nx-grid-col nx-grid-col--50">50%</div>
        </div>
      </div>
    </div>
    <hr className="nx-grid-h-keyline"/>
    <div className="nx-grid-row">
      <div className="nx-grid-col nx-grid-col--25">25%</div>
      <div className="nx-grid-col nx-grid-col--25 nx-grid-col--noborder">25% no vertical keyline</div>
      <div className="nx-grid-col nx-grid-col--25 nx-grid-col--noborder">25% no vertical keyline</div>
      <div className="nx-grid-col nx-grid-col--25">25%</div>
    </div>
    <hr className="nx-grid-h-keyline"/>
    <div className="nx-grid-row">
      <div className="nx-grid-col nx-grid-col--200px">200px custom column - mixin code is shown below</div>
      <div className="nx-grid-col">
        Default column stretches to fill available space --- range-rover hacker disposable shoes shoes long-chain
        hydrocarbons hotdog grenade chrome rain bomb skyscraper weathered engine fetishism cardboard. bicycle knife
        refrigerator semiotics 3D-printed dome computer
      </div>
    </div>
    <hr className="nx-grid-h-keyline"/>
  </>;

export default NxGridExample;
