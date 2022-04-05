/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

// Math.random() * 100

const generateStringData = (id: string, itemNames: string[], [min, max]: [number, number]) => (
  {
    id,
    data: itemNames.map(name => ({ x: name, y: Math.round(Math.random() * (max - min) + min) }))
  }
);

const generateDateData = (id: string, [min, max]: [number, number]) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const numberOfDaysInMonth = new Date(year, month, 0).getDate();
  return {
    id,
    data: Array.from({ length: numberOfDaysInMonth }).map((_, index) => (
      {
        x: `${year}-${month}-${index + 1 < 10 ? `0${index + 1}` : index + 1}`,
        y: Math.round(Math.random() * (max - min) + min)
      }
    ))
  };
};

const itemNames = [
  'cats',
  'dogs',
  'pandas',
  'red-pandas',
  'wolves',
  'bears'
];

const time = Array.from({ length: 24 }).map((_, index) => {
  const hour = index + 1;
  const AMPM = hour >= 12 || hour === 24 ? 'pm' : 'am';
  const hourString = hour > 12 ? hour - 12 : hour;
  return `${hourString}${AMPM}`;
});

const days = [
  'Thu, March 31',
  'Fri, April 1',
  'Sat, April 2',
  'Sun, April 3',
  'Mon, April 4',
  'Tue, April 5',
  'Wed, April 6'
];

export const DATA_WITH_STRING = [
  generateStringData('item-0', itemNames, [0, 100]),
  generateStringData('item-1', itemNames, [0, 100]),
  generateStringData('item-2', itemNames, [0, 100])
];

export const DATA_WITH_STRING_TIME = [
  generateStringData('item-0', days, [0, 100])
];

export const DATA_WITH_DATE = [
  generateDateData('item-0', [0, 100])
];

// Line chart

// overall component consumption
// threats
// x ->
// y ->

