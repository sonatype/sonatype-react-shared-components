/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { selectableColors, selectableColorClasses } from '../selectableColors';

describe('selectableColorClasses', function() {
  it('contains a modifier of nx-selectable-color for each selectable color, in the same order as selectableColors',
      function() {
        expect(selectableColors.length).toBeGreaterThan(0);
        expect(selectableColors.length).toBe(selectableColorClasses.length);

        for (let i = 0; i < selectableColors.length; i++) {
          const color = selectableColors[i],
              cls = selectableColorClasses[i],
              extractedColor = /^nx-selectable-color--(.*)$/.exec(cls)![1];

          expect(extractedColor).toBe(color);
        }
      }
  );
});
