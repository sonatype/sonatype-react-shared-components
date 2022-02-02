const RAW = [
  { day: '2021-12-31', available: 4000, consumed: 2408, deleted: 24, added:	32, buffer:	0.6 },
  { day: '2022-01-01', available: 4000, consumed: 2391, deleted: 35, added:	26, buffer:	0.6 },
  { day: '2022-01-02', available: 4000, consumed: 2413, deleted: 14, added:	57, buffer:	0.6 },
  { day: '2022-01-03', available: 4000, consumed: 2433, deleted: 26, added:	59, buffer:	0.6 },
  { day: '2022-01-04', available: 4000, consumed: 2424, deleted: 35, added:	72, buffer:	0.6 },
  { day: '2022-01-05', available: 4000, consumed: 2427, deleted: 32, added:	65, buffer:	0.6 },
  { day: '2022-01-06', available: 4000, consumed: 2393, deleted: 25, added:	17, buffer:	0.6 },
  { day: '2022-01-07', available: 4000, consumed: 2441, deleted: 21, added:	63, buffer:	0.6 },
  { day: '2022-01-08', available: 4000, consumed: 2460, deleted: 15, added:	75, buffer:	0.6 },
  { day: '2022-01-09', available: 4000, consumed: 2394, deleted: 41, added:	35, buffer:	0.6 },
  { day: '2022-01-10', available: 4500, consumed: 2722, deleted: 192, added:	41, buffer:	0.6 },
  { day: '2022-01-11', available: 4500, consumed: 4275, deleted: 27, added:	2035, buffer:	0.95 },
  { day: '2022-01-12', available: 4500, consumed: 4275, deleted: 12, added:	65, buffer:	0.95 },
  { day: '2022-01-13', available: 4500, consumed: 4275, deleted: 33, added:	71, buffer:	0.95 },
  { day: '2022-01-14', available: 4500, consumed: 2700, deleted: 123, added:	24, buffer:	0.6 },
  { day: '2022-01-15', available: 4500, consumed: 2712, deleted: 24, added:	36, buffer:	0.6 },
  { day: '2022-01-16', available: 4500, consumed: 2726, deleted: 24, added:	50, buffer:	0.6 },
  { day: '2022-01-17', available: 4500, consumed: 2749, deleted: 24, added:	73, buffer:	0.6 },
  { day: '2022-01-18', available: 4500, consumed: 2755, deleted: 32, added:	87, buffer:	0.6 },
  { day: '2022-01-19', available: 4500, consumed: 2675, deleted: 50, added:	25, buffer:	0.6 },
  { day: '2022-01-20', available: 4500, consumed: 2749, deleted: 41, added:	90, buffer:	0.6 },
  { day: '2022-01-21', available: 5000, consumed: 3015, deleted: 26, added:	41, buffer:	0.6 },
  { day: '2022-01-22', available: 5000, consumed: 2984, deleted: 35, added:	19, buffer:	0.6 },
  { day: '2022-01-23', available: 5000, consumed: 3030, deleted: 34, added:	64, buffer:	0.6 },
  { day: '2022-01-24', available: 5000, consumed: 3001, deleted: 17, added:	18, buffer:	0.6 },
  { day: '2022-01-25', available: 5000, consumed: 2986, deleted: 32, added:	18, buffer:	0.6 },
  { day: '2022-01-26', available: 5000, consumed: 2990, deleted: 27, added:	17, buffer:	0.6 },
  { day: '2022-01-27', available: 5000, consumed: 2973, deleted: 44, added:	17, buffer:	0.6 },
  { day: '2022-01-28', available: 5000, consumed: 3023, deleted: 25, added:	48, buffer:	0.6 },
  { day: '2022-01-29', available: 5000, consumed: 3040, deleted: 26, added:	66, buffer:	0.6 },
  { day: '2022-01-30', available: 5000, consumed: 2978, deleted: 44, added:	22, buffer:	0.6 }
];

interface RawDataType {
  day: string;
  available: number;
  consumed: number;
  deleted: number;
  added: number;
  buffer: number;
}

const toNivoData = (data: RawDataType[], key: keyof RawDataType, cut?: number) =>
  data.map(datum => ({ x: datum.day, y: datum[key] }))
      .slice(0, cut)
      .sort((a, b) => new Date(b.x).getTime() - new Date(a.x).getTime());

const TOP_CONSUMPTION = RAW.sort((a, b) => b.consumed - a.consumed);

export const STORAGE_CONSUMPTION_DATA = [
  {
    id: 'Available',
    data: toNivoData(TOP_CONSUMPTION, 'available', 10)
  },
  {
    id: 'Consumption',
    data: toNivoData(TOP_CONSUMPTION, 'consumed', 10)
  },
  {
    id: 'Deleted',
    data: toNivoData(TOP_CONSUMPTION, 'deleted', 10)
  },
  {
    id: 'Added',
    data: toNivoData(TOP_CONSUMPTION, 'added', 10)
  }
];

export const DATA_WITH_DATES = [
  {
    id: 'non-log4shell',
    data: [
      { x: '2022-02-01', y: 16 },
      { x: '2022-02-02', y: 12 },
      { x: '2022-02-03', y: 11 },
      { x: '2022-02-04', y: 9 },
      { x: '2022-02-05', y: 10 },
      { x: '2022-02-06', y: 11 },
      { x: '2022-02-07', y: 10 },
      { x: '2022-02-08', y: 12 },
      { x: '2022-02-09', y: 10 },
      { x: '2022-02-10', y: 9 },
      { x: '2022-02-11', y: 4 },
      { x: '2022-02-12', y: 9 },
      { x: '2022-02-13', y: 6 },
      { x: '2022-02-14', y: 2 },
      { x: '2022-02-15', y: 1 },
      { x: '2022-02-16', y: 16 },
      { x: '2022-02-17', y: 12 },
      { x: '2022-02-18', y: 11 },
      { x: '2022-02-19', y: 9 },
      { x: '2022-02-20', y: 10 },
      { x: '2022-02-21', y: 11 },
      { x: '2022-02-22', y: 10 },
      { x: '2022-02-23', y: 12 },
      { x: '2022-02-24', y: 10 },
      { x: '2022-02-25', y: 9 },
      { x: '2022-02-26', y: 4 },
      { x: '2022-02-27', y: 9 },
      { x: '2022-02-28', y: 6 }
    ]
  },
  {
    id: 'log4shell',
    data: [
      { x: '2022-02-01', y: 12 },
      { x: '2022-02-02', y: 13 },
      { x: '2022-02-03', y: 10 },
      { x: '2022-02-04', y: 9 },
      { x: '2022-02-05', y: 12 },
      { x: '2022-02-06', y: 13 },
      { x: '2022-02-07', y: 14 },
      { x: '2022-02-08', y: 15 },
      { x: '2022-02-09', y: 13 },
      { x: '2022-02-10', y: 12 },
      { x: '2022-02-11', y: 14 },
      { x: '2022-02-12', y: 11 },
      { x: '2022-02-13', y: 10 },
      { x: '2022-02-14', y: 12 },
      { x: '2022-02-15', y: 14 },
      { x: '2022-02-16', y: 12 },
      { x: '2022-02-17', y: 13 },
      { x: '2022-02-18', y: 10 },
      { x: '2022-02-19', y: 9 },
      { x: '2022-02-20', y: 12 },
      { x: '2022-02-21', y: 13 },
      { x: '2022-02-22', y: 14 },
      { x: '2022-02-23', y: 15 },
      { x: '2022-02-24', y: 13 },
      { x: '2022-02-25', y: 12 },
      { x: '2022-02-26', y: 14 },
      { x: '2022-02-27', y: 11 },
      { x: '2022-02-28', y: 10 }
    ]
  }
];
