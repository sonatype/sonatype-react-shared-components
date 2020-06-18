/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { ThreatLevelNumber, categoryByPolicyThreatLevel } from '../threatLevels';

describe('threatLevels utilities', function() {
  describe('categoryByPolicyThreatLevel', function() {
    it('returns the correct category for each valid index', function() {
      expect(categoryByPolicyThreatLevel[10]).toBe('critical');
      expect(categoryByPolicyThreatLevel[9]).toBe('critical');
      expect(categoryByPolicyThreatLevel[8]).toBe('critical');
      expect(categoryByPolicyThreatLevel[7]).toBe('severe');
      expect(categoryByPolicyThreatLevel[6]).toBe('severe');
      expect(categoryByPolicyThreatLevel[5]).toBe('severe');
      expect(categoryByPolicyThreatLevel[4]).toBe('severe');
      expect(categoryByPolicyThreatLevel[3]).toBe('moderate');
      expect(categoryByPolicyThreatLevel[2]).toBe('moderate');
      expect(categoryByPolicyThreatLevel[1]).toBe('low');
      expect(categoryByPolicyThreatLevel[0]).toBe('none');
    });

    it('returns undefined for other invalid indexes', function() {
      expect(categoryByPolicyThreatLevel[-1 as ThreatLevelNumber]).toBe(undefined);
      expect(categoryByPolicyThreatLevel[11 as ThreatLevelNumber]).toBe(undefined);
    });
  });
});
