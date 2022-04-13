/*
 * Copyright (c) 2019-present Sonatype, Inc.
 * This program and the accompanying materials are made available under
 * the terms of the Eclipse Public License 2.0 which accompanies this
 * distribution and is available at https://www.eclipse.org/legal/epl-2.0/.
 */

const DATA_POINT_NAMES = [
  'Bengal',
  'British Shorthair',
  'Callico',
  'Garfield',
  'Maine Coon',
  'Munchkin',
  'Persian',
  'Scottish Fold',
  'Siamese'
];

export const generateStringData = (numberOfLines: number, [min, max]: [number, number]) =>
  Array.from({ length: numberOfLines }).map((_, index) => ({
    id: `line-${index}`,
    data: DATA_POINT_NAMES.map(name => ({
      x: name,
      y: Math.floor(Math.random() * (max - min + 1) + min)
    }))
  }));

export const generateDateData = (numberOfLines: number, numberOfDataPoints: number, [min, max]: [number, number]) => {
  const dates = Array.from({ length: numberOfDataPoints }).map((_, index) => {
    const date = new Date();
    date.setDate(date.getDate() - index);
    return date;
  });

  return Array.from({ length: numberOfLines }).map((_, index) => ({
    id: `line-${index}`,
    data: dates.map(date => {
      const _year = date.getFullYear();
      const _month = (date.getMonth() + 1).toString().padStart(2, '0');
      const _date = date.getDate().toString().padStart(2, '0');
      return {
        x: `${_year}-${_month}-${_date}`,
        y: Math.floor(Math.random() * (max - min + 1) + min)
      };
    })
  }));
};

export const generateSpecialData = ([min, max]: [number, number]) => {
  const dates = Array.from({ length: new Date(2021, 4, 0).getDate() }).map((_, index) => {
    const date = new Date(2021, 3, index + 1);
    return date;
  });

  const lines = [
    'PyPI',
    'npm',
    'Other formats'
  ];

  return lines.map(line => ({
    id: line,
    data: dates.map(date => {
      const _year = date.getFullYear();
      const _month = (date.getMonth() + 1).toString().padStart(2, '0');
      const _date = date.getDate().toString().padStart(2, '0');
      return {
        x: `${_year}-${_month}-${_date}`,
        y: Math.floor(Math.random() * (max - min + 1) + min)
      };
    })
  }));
};
