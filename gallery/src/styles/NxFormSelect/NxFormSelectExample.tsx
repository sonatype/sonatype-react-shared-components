/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxSelectExample = () =>
  <>
    <div className="nx-form-row">
      <div className="nx-form-group">
        <label className="nx-label">
          <span className="nx-label__text">Select</span>
          <select className="nx-form-select">
            <option className="nx-form-select__option">Option 1</option>
            <option className="nx-form-select__option">Option 2</option>
            <option className="nx-form-select__option">Option 3</option>
            <option className="nx-form-select__option">Option 4</option>
            <option className="nx-form-select__option">Option 5</option>
          </select>
        </label>
      </div>
      <div className="nx-form-group">
        <label className="nx-label">
          <span className="nx-label__text">Select with option groups</span>
          <select className="nx-form-select">
            <optgroup label="First group">
              <option className="nx-form-select__option">Option 1</option>
              <option className="nx-form-select__option">Option 2</option>
              <option className="nx-form-select__option">Option 3</option>
            </optgroup>
            <optgroup label="Second group">
              <option className="nx-form-select__option">Option 4</option>
              <option className="nx-form-select__option">Option 5</option>
            </optgroup>
          </select>
        </label>
      </div>
    </div>
    <div className="nx-form-group">
      <label className="nx-label">
        <span className="nx-label__text">Disabled</span>
        <select className="nx-form-select disabled" disabled>
          <option className="nx-form-select__option">Option 1</option>
          <option className="nx-form-select__option">Option 2</option>
          <option className="nx-form-select__option">Option 3</option>
          <option className="nx-form-select__option">Option 4</option>
          <option className="nx-form-select__option">Option 5</option>
        </select>
      </label>
    </div>
  </>;

export default NxSelectExample;
