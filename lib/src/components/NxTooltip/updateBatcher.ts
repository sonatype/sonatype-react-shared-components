/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
// eslint-disable-next-line camelcase
import { unstable_batchedUpdates } from 'react-dom';

type Queue = Array<() => void>;

const BATCH_SIZE = 100,
    MAX_WORK_TIME = 100; // max amount of time for work to wait in the queue before being dispatched, in ms

let queue: Queue = [],
    timeoutHandle: number | null;

/**
 * A simple React work batcher. It accumulates units of work until it has at least BATCH_SIZE of them, or it's been
 * MAX_WORK_TIME ms since the first one was submitted, and then executes them all in requestIdleTimeout. The
 * batched units of work are executed within React's unstable_batchedUpdates in order to signficantly cut down
 * on React overhead.  Note that adjusting BATCH_SIZE involves a tradeoff between minimizing react overhead
 * by using large batches, and keeping the page reasonably interactive. The current BATCH_SIZE is tuned to the
 * workloads and needs of NxTooltip (and NxOverflowTooltip) specifically.
 */
export default function batch(work: () => void) {
  queue.push(work);

  if (queue.length >= BATCH_SIZE) {

    // queue is full; dispatch work
    dispatch();

    if (timeoutHandle) {
      // queue filled up before MAX_WORK_TIME, cancel the timeout
      clearTimeout(timeoutHandle);
      timeoutHandle = null;
    }
  }
  else if (!timeoutHandle) {
    // queue is fresh, start a timeout to execute it after MAX_WORK_TIME
    timeoutHandle = window.setTimeout(() => {
      dispatch();
      timeoutHandle = null;
    }, MAX_WORK_TIME);
  }
}

function dispatch() {
  const q = queue;
  requestIdleCallback(() => { execute(q); });
  queue = [];
}

function execute(queue: Queue) {
  unstable_batchedUpdates(() => {
    for (const work of queue) {
      work();
    }
  });
}

function requestIdleCallback(fn: () => void) {
  // requestIdleCallback is not available in Safari
  if (typeof window !== 'undefined' && window.requestIdleCallback) {
    window.requestIdleCallback(fn);
  }
  else {
    setTimeout(fn, 0);
  }
}
