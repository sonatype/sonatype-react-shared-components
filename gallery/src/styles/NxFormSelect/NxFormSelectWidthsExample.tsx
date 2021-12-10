/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

const NxFormSelectWidthsExample = () =>
  <div className="form-select-width-variants">

    <div className="nx-form-group">
      <label className="nx-label">
        <span className="nx-label__text">Short Variant</span>
      </label>
      <select className="nx-form-select nx-form-select--short">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
      </select>
    </div>
    <div className="nx-form-group">
      <label className="nx-label">
        <span className="nx-label__text">Long Variant</span>
      </label>
      <select className="nx-form-select nx-form-select--long">
        <option value="1">Option 1</option>
        <option value="2">Option 2</option>
        <option value="3">Option 3</option>
        <option value="4">Option 4</option>
        <option value="5">Option 5</option>
      </select>
    </div>
  </div>;

export default NxFormSelectWidthsExample;
