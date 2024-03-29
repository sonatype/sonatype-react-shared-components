/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */
import { includes } from 'ramda';

const validThemeOverrides = [null, 'light', 'dark'] as const;
type ThemeOverride = (typeof validThemeOverrides)[number];

export let themingEnabled: boolean = localStorage.getItem('theming-enabled') === 'true',
    themeOverride: ThemeOverride = getThemeOverride();

export function setThemingEnabled(newThemingEnabled: boolean) {
  localStorage.setItem('theming-enabled', newThemingEnabled.toString());
  themingEnabled = newThemingEnabled;
  updateHtmlClasses();
}

export function setThemeOverride(newThemeOverride: ThemeOverride) {
  if (newThemeOverride) {
    localStorage.setItem('theme-override', newThemeOverride);
  }
  else {
    localStorage.removeItem('theme-override');
  }

  themeOverride = newThemeOverride;
  updateHtmlClasses();
}

function getThemeOverride(): ThemeOverride {
  const storedString = localStorage.getItem('theme-override');

  return includes(storedString, validThemeOverrides) ? storedString as ThemeOverride : null;
}

function updateHtmlClasses() {
  const { classList } = document.documentElement;

  classList.toggle('nx-html--enable-color-schemes', themingEnabled);
  classList.toggle('nx-html--dark-mode', themeOverride === 'dark' && themingEnabled);
  classList.toggle('nx-html--light-mode', themeOverride === 'light' && themingEnabled);
}

updateHtmlClasses();

// expose setters as globals so visual tests can call them
Object.assign(window, { setThemeOverride, setThemingEnabled });
