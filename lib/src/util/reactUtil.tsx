/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import React, { HTMLAttributes, ReactElement, ReactNode, RefAttributes } from 'react';
import { findIndex, findLastIndex, includes } from 'ramda';

type ReactText = string | number;

// NOTE: while technically `true` would not be an expected value here, the inferred type of boolean-including
// expressions within JSX is `boolean` and not simply `false`, even when `true` cannot actually be a result.
// So it would be exceedingly inconvenient to calling code if this type was restricted to just `false` and not
// `boolean`.
export type OptionalReactElement<T = HTMLAttributes<HTMLElement> & RefAttributes<HTMLElement>> =
  ReactElement<T> | null | undefined | boolean;

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
  else if (Array.isArray(content) && content.length) {
    return <span>{content}</span>;
  }
  else if (isReactText(content)) {
    return <span>{content}</span>;
  }
  else {
    return content;
  }
}

/**
 * Ensure that if this ReactNode is something renderable, that the first and last things that it renders are elements.
 * by wrapping the whole thing in a <span> if necessary. If `content` is already an element, or is something that
 * doesn't render, like null or undefined, then it is passed through.
 *
 * WARNING: this function does not dive into fragments, it assumes they will ultimately render an element
 */
export function ensureStartEndElements(content: ReactNode): Exclude<ReactNode, ReactText> {
  if (Array.isArray(content)) {
    const firstPrintableIndex = getFirstPrintableIndex(content),
        lastPrintableIndex = getLastPrintableIndex(content);

    if (isReactText(content[firstPrintableIndex]) || isReactText(content[lastPrintableIndex])) {
      return ensureElement(content);
    }
    else {
      return content;
    }
  }
  else {
    return ensureElement(content);
  }
}
