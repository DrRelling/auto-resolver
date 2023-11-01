import { readFile } from 'xlsx';

export interface Config {
  pilot: {
    minMoraleIncreaseOnHit: number;
    maxMoraleIncreaseOnHit: number;
  };
}

const configRefs = {
  kaiju: {

  },
  pilot: {
    health: 'B1',
    morale: 'B2',
    maxMorale: 'B3',
  },
};

export function refreshConfig(): Config {
  const file = readFile('./testInput.xlsx');
  return Object.keys(configRefs).reduce((config, sheetName) => {
    config[sheetName] = Object.keys(configRefs[sheetName]).reduce(
      (sheet, key) => {
        const cellRef = configRefs[sheetName][key];
        sheet[key] = file.Sheets[sheetName][cellRef]?.v;
        return sheet;
      },
      {}
    );
    return config;
  }, {}) as Config;
}
