/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { ReactNode, ReactText } from 'react';
import { findIndex, findLastIndex, includes } from 'ramda';

function isReactText(content: ReactNode): content is ReactText {
  return typeof content === 'string' || typeof content === 'number';
}

const isPrintable = (node: ReactNode) => !includes(node, [true, false, null, undefined]);
const getFirstPrintableIndex = findIndex(isPrintable);
const getLastPrintableIndex = findLastIndex(isPrintable);

/**
 * Ensure that if this ReactNode is something renderable, that it renders as an element, by wrapping in a <span> if
 * necessary. If `content` is already an element, or is something that doesn't render, like null or undefined, then
 * it is passed through.
 *
 * WARNING: this function does not dive into fragments, it assumes they will ultimately render an element
 */
export function ensureElement(content: ReactNode): Exclude<ReactNode, ReactText> {
  if (content == null) {
    return content;
  }
  else if (Array.isArray(content)) {
    const firstPrintableIndex = getFirstPrintableIndex(content),
        lastPrintableIndex = getLastPrintableIndex(content);

    if (isReactText(content[firstPrintableIndex]) || isReactText(content[lastPrintableIndex])) {
      return <span>{content}</span>;
    }
    else {
      return content;
    }
  }
  else if (isReactText(content)) {
    return <span>{content}</span>;
  }
  else {
    return content;
  }
}
