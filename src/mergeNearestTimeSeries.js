const nearest = require("nearest-date");

const configDefault = {
  dateKey1: "date",
  dateKey2: "date",
  insertedKey: "nearest",
};

module.exports = (series1, series2, configCustom) => {
  const config = configCustom
    ? {
        ...configDefault,
        ...configCustom,
      }
    : configDefault;

  const series2Dates = series2.map((d) => d[config.dateKey2]);

  return series1.map((d) => {
    const i = nearest(series2Dates, d[config.dateKey1]);

    const output = { ...d };
    output[config.insertedKey] = series2[i];

    return output;
  });
};
