/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { map } from 'ramda';

import './selectableColors.scss';

export const selectableColors =
    ['purple', 'pink', 'blue', 'red', 'green', 'orange', 'yellow', 'lime', 'light-blue', 'indigo'] as const;

export const selectableColorClasses: readonly string[] =
    map(color => `nx-selectable-color--${color}`, selectableColors);

interface ColorValues {
  dark: string[];
  light: string[];
}

function retrieveColorValuesFromBody() {
  const bodyStyles = getComputedStyle(document.body),
      colorValues: ColorValues = { dark: [], light: [] };

  for (const color of selectableColors) {
    colorValues.dark.push(bodyStyles.getPropertyValue(`--nx-selectable-color-${color}-dark`));
    colorValues.light.push(bodyStyles.getPropertyValue(`--nx-selectable-color-${color}-light`));
  }

  return colorValues;
}

export const selectableColorValues: Promise<ColorValues> = new Promise(resolve => {
  function resolveIfReady() {
    if (document.readyState === 'complete') {
      resolve(retrieveColorValuesFromBody());

      return true;
    }
    else {
      return false;
    }
  }

  function onReadyStateChange() {
    const done = resolveIfReady();
    if (done) {
      document.removeEventListener('readystatechange', onReadyStateChange);
    }
  }

  const done = resolveIfReady();

  if (!done) {
    document.addEventListener('readystatechange', onReadyStateChange);
  }
});

export type SelectableColor = (typeof selectableColors)[number];
