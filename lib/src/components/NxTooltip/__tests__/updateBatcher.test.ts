/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import batch from '../updateBatcher';

describe('NxTooltip updateBatcher', function() {
  beforeEach(function() {
    jest.useFakeTimers();
  });

  it('executes a single provided unit of work after 100 ms', function() {
    const work = jest.fn();

    batch(work);
    expect(work).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(work).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(work).toHaveBeenCalled();
  });

  it('executes a group of less than 100 units of work after 100 ms', function() {
    const work = jest.fn();

    for (let i = 0; i < 99; i++) {
      batch(work);
    }

    expect(work).not.toHaveBeenCalled();

    jest.advanceTimersByTime(100);
    expect(work).not.toHaveBeenCalled();

    jest.advanceTimersByTime(1);
    expect(work).toHaveBeenCalledTimes(99);
  });

  it('executes a group of 100 units immediately but asynchronously', function() {
    const work = jest.fn();

    for (let i = 0; i < 100; i++) {
      batch(work);
    }

    expect(work).not.toHaveBeenCalled();

    jest.advanceTimersByTime(0);
    expect(work).toHaveBeenCalledTimes(100);
  });

  it('executes the groups of 100 as soon as they fill up, and executes the final unfilled group 100 ms after its ' +
     'first unit arrives', function() {
    const work = jest.fn();

    for (let i = 0; i < 80; i++) {
      batch(work);
    }

    // 80 units submitted, no time elapsed
    expect(work).not.toHaveBeenCalled();

    for (let i = 0; i < 80; i++) {
      batch(work);
    }

    jest.advanceTimersByTime(0);

    // 160 units submitted, no time elapsed
    expect(work).toHaveBeenCalledTimes(100);

    for (let i = 0; i < 30; i++) {
      batch(work);
    }

    // 190 units submitted, no time elapsed
    expect(work).toHaveBeenCalledTimes(100);

    jest.advanceTimersByTime(101);

    // 190 units submitted, 101 ms elapsed
    expect(work).toHaveBeenCalledTimes(190);

    jest.advanceTimersByTime(50);

    // 190 units submitted, 151 ms elapsed
    expect(work).toHaveBeenCalledTimes(190);

    for (let i = 0; i < 5; i++) {
      batch(work);
    }

    jest.advanceTimersByTime(50);

    // 195 units submitted, 201 ms elapsed (50 ms since most recent units added)
    expect(work).toHaveBeenCalledTimes(190);

    jest.advanceTimersByTime(51);

    // 195 units submitted, 252 ms elapsed (101 ms since most recent units added)
    expect(work).toHaveBeenCalledTimes(195);

    for (let i = 0; i < 120; i++) {
      batch(work);
    }

    jest.advanceTimersByTime(0);

    // 315 units submitted, 252 ms elapsed (since last empty: 120 units, 0 ms)
    expect(work).toHaveBeenCalledTimes(295);

    jest.advanceTimersByTime(101);

    // 315 units submitted, 353 ms elapsed (since last empty: 120 units, 101 ms)
    expect(work).toHaveBeenCalledTimes(315);
  });
});
