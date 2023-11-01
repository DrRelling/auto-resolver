import { Region } from '../enums/region.enum';

export interface RegionData {
  label: string;
  bounds: number[];
  colour: string;
  population: number;
}

export const world: Record<Region, RegionData> = {
  [Region.africa]: {
    label: 'Africa',
    bounds: [469, 291, 725, 577],
    // bounds: [1633, 999, 2446, 1754],
    colour: 'rgba(158,4,4,1)',
    population: 1470668578,
  },
  [Region.south_america]: {
    label: 'South America',
    bounds: [247, 388, 467, 676],
    // bounds: [907, 1236, 1500, 2043],
    colour: 'rgba(48,204,16,1)',
    population: 0,
  },
};
