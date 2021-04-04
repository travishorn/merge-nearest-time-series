const merge = require("../src/mergeNearestTimeSeries");

test("pulls data from series 2 into series 1 based on nearest date", () => {
  const series1 = [
    { date: new Date("2021-04-03T13:17Z"), description: "Event A" },
    { date: new Date("2021-04-03T13:34Z"), description: "Event B" },
    { date: new Date("2021-04-03T13:51Z"), description: "Event C" },
    { date: new Date("2021-04-03T14:08Z"), description: "Event D" },
    { date: new Date("2021-04-03T14:25Z"), description: "Event E" },
  ];

  const series2 = [
    { date: new Date("2021-04-03T13:00Z"), value: 8 },
    { date: new Date("2021-04-03T13:06Z"), value: 1 },
    { date: new Date("2021-04-03T13:09Z"), value: 9 },
    { date: new Date("2021-04-03T13:12Z"), value: 3 },
    { date: new Date("2021-04-03T13:18Z"), value: 1 },
    { date: new Date("2021-04-03T13:24Z"), value: 6 },
    { date: new Date("2021-04-03T13:30Z"), value: 2 },
    { date: new Date("2021-04-03T13:36Z"), value: 8 },
    { date: new Date("2021-04-03T13:42Z"), value: 7 },
    { date: new Date("2021-04-03T13:48Z"), value: 10 },
    { date: new Date("2021-04-03T13:54Z"), value: 4 },
    { date: new Date("2021-04-03T14:00Z"), value: 10 },
    { date: new Date("2021-04-03T14:06Z"), value: 9 },
    { date: new Date("2021-04-03T14:09Z"), value: 9 },
    { date: new Date("2021-04-03T14:12Z"), value: 4 },
    { date: new Date("2021-04-03T14:18Z"), value: 10 },
    { date: new Date("2021-04-03T14:24Z"), value: 5 },
    { date: new Date("2021-04-03T14:30Z"), value: 3 },
    { date: new Date("2021-04-03T14:36Z"), value: 6 },
    { date: new Date("2021-04-03T14:42Z"), value: 8 },
  ];

  const expected = [
    {
      date: new Date("2021-04-03T13:17Z"),
      description: "Event A",
      nearest: { date: new Date("2021-04-03T13:18Z"), value: 1 },
    },
    {
      date: new Date("2021-04-03T13:34Z"),
      description: "Event B",
      nearest: { date: new Date("2021-04-03T13:36Z"), value: 8 },
    },
    {
      date: new Date("2021-04-03T13:51Z"),
      description: "Event C",
      nearest: { date: new Date("2021-04-03T13:48Z"), value: 10 },
    },
    {
      date: new Date("2021-04-03T14:08Z"),
      description: "Event D",
      nearest: { date: new Date("2021-04-03T14:09Z"), value: 9 },
    },
    {
      date: new Date("2021-04-03T14:25Z"),
      description: "Event E",
      nearest: { date: new Date("2021-04-03T14:24Z"), value: 5 },
    },
  ];

  const received = merge(series1, series2);

  expect(received).toStrictEqual(expected);
});

test("uses custom date keys", () => {
  const series1 = [
    { t: new Date("2021-04-03T13:17Z"), description: "Event A" },
    { t: new Date("2021-04-03T13:34Z"), description: "Event B" },
    { t: new Date("2021-04-03T13:51Z"), description: "Event C" },
    { t: new Date("2021-04-03T14:08Z"), description: "Event D" },
    { t: new Date("2021-04-03T14:25Z"), description: "Event E" },
  ];

  const series2 = [
    { timestamp: new Date("2021-04-03T13:00Z"), value: 8 },
    { timestamp: new Date("2021-04-03T13:06Z"), value: 1 },
    { timestamp: new Date("2021-04-03T13:09Z"), value: 9 },
    { timestamp: new Date("2021-04-03T13:12Z"), value: 3 },
    { timestamp: new Date("2021-04-03T13:18Z"), value: 1 },
    { timestamp: new Date("2021-04-03T13:24Z"), value: 6 },
    { timestamp: new Date("2021-04-03T13:30Z"), value: 2 },
    { timestamp: new Date("2021-04-03T13:36Z"), value: 8 },
    { timestamp: new Date("2021-04-03T13:42Z"), value: 7 },
    { timestamp: new Date("2021-04-03T13:48Z"), value: 10 },
    { timestamp: new Date("2021-04-03T13:54Z"), value: 4 },
    { timestamp: new Date("2021-04-03T14:00Z"), value: 10 },
    { timestamp: new Date("2021-04-03T14:06Z"), value: 9 },
    { timestamp: new Date("2021-04-03T14:09Z"), value: 9 },
    { timestamp: new Date("2021-04-03T14:12Z"), value: 4 },
    { timestamp: new Date("2021-04-03T14:18Z"), value: 10 },
    { timestamp: new Date("2021-04-03T14:24Z"), value: 5 },
    { timestamp: new Date("2021-04-03T14:30Z"), value: 3 },
    { timestamp: new Date("2021-04-03T14:36Z"), value: 6 },
    { timestamp: new Date("2021-04-03T14:42Z"), value: 8 },
  ];

  const config = {
    dateKey1: "t",
    dateKey2: "timestamp",
  };

  const expected = [
    {
      t: new Date("2021-04-03T13:17Z"),
      description: "Event A",
      nearest: { timestamp: new Date("2021-04-03T13:18Z"), value: 1 },
    },
    {
      t: new Date("2021-04-03T13:34Z"),
      description: "Event B",
      nearest: { timestamp: new Date("2021-04-03T13:36Z"), value: 8 },
    },
    {
      t: new Date("2021-04-03T13:51Z"),
      description: "Event C",
      nearest: { timestamp: new Date("2021-04-03T13:48Z"), value: 10 },
    },
    {
      t: new Date("2021-04-03T14:08Z"),
      description: "Event D",
      nearest: { timestamp: new Date("2021-04-03T14:09Z"), value: 9 },
    },
    {
      t: new Date("2021-04-03T14:25Z"),
      description: "Event E",
      nearest: { timestamp: new Date("2021-04-03T14:24Z"), value: 5 },
    },
  ];

  const received = merge(series1, series2, config);

  expect(received).toStrictEqual(expected);
});

test("uses custom inserted key", () => {
  const series1 = [
    { date: new Date("2021-04-03T13:17Z"), description: "Event A" },
    { date: new Date("2021-04-03T13:34Z"), description: "Event B" },
    { date: new Date("2021-04-03T13:51Z"), description: "Event C" },
    { date: new Date("2021-04-03T14:08Z"), description: "Event D" },
    { date: new Date("2021-04-03T14:25Z"), description: "Event E" },
  ];

  const series2 = [
    { date: new Date("2021-04-03T13:00Z"), value: 8 },
    { date: new Date("2021-04-03T13:06Z"), value: 1 },
    { date: new Date("2021-04-03T13:09Z"), value: 9 },
    { date: new Date("2021-04-03T13:12Z"), value: 3 },
    { date: new Date("2021-04-03T13:18Z"), value: 1 },
    { date: new Date("2021-04-03T13:24Z"), value: 6 },
    { date: new Date("2021-04-03T13:30Z"), value: 2 },
    { date: new Date("2021-04-03T13:36Z"), value: 8 },
    { date: new Date("2021-04-03T13:42Z"), value: 7 },
    { date: new Date("2021-04-03T13:48Z"), value: 10 },
    { date: new Date("2021-04-03T13:54Z"), value: 4 },
    { date: new Date("2021-04-03T14:00Z"), value: 10 },
    { date: new Date("2021-04-03T14:06Z"), value: 9 },
    { date: new Date("2021-04-03T14:09Z"), value: 9 },
    { date: new Date("2021-04-03T14:12Z"), value: 4 },
    { date: new Date("2021-04-03T14:18Z"), value: 10 },
    { date: new Date("2021-04-03T14:24Z"), value: 5 },
    { date: new Date("2021-04-03T14:30Z"), value: 3 },
    { date: new Date("2021-04-03T14:36Z"), value: 6 },
    { date: new Date("2021-04-03T14:42Z"), value: 8 },
  ];

  const config = {
    insertedKey: "series2Data",
  };

  const expected = [
    {
      date: new Date("2021-04-03T13:17Z"),
      description: "Event A",
      series2Data: { date: new Date("2021-04-03T13:18Z"), value: 1 },
    },
    {
      date: new Date("2021-04-03T13:34Z"),
      description: "Event B",
      series2Data: { date: new Date("2021-04-03T13:36Z"), value: 8 },
    },
    {
      date: new Date("2021-04-03T13:51Z"),
      description: "Event C",
      series2Data: { date: new Date("2021-04-03T13:48Z"), value: 10 },
    },
    {
      date: new Date("2021-04-03T14:08Z"),
      description: "Event D",
      series2Data: { date: new Date("2021-04-03T14:09Z"), value: 9 },
    },
    {
      date: new Date("2021-04-03T14:25Z"),
      description: "Event E",
      series2Data: { date: new Date("2021-04-03T14:24Z"), value: 5 },
    },
  ];

  const received = merge(series1, series2, config);

  expect(received).toStrictEqual(expected);
});
