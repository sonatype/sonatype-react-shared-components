/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React from 'react';

import { textContent } from '../childUtil';

describe('childUtil', function() {
  describe('textContent', function() {
    it('returns basic results', function() {
      expect(textContent(undefined)).toBe('');
      expect(textContent(null)).toBe('');
      expect(textContent(true)).toBe('');
      expect(textContent(false)).toBe('');
      expect(textContent('test')).toBe('test');
      expect(textContent(1)).toBe('1');
    });

    it('returns all text from complex jsx', function() {
      const jsx = <>
        1
        <span>2</span>
        <div><span>3</span></div>
      </>;
      expect(textContent(jsx)).toBe('123');
    });
  });
});
