# Merge Nearest Time Series

Pulls data from one time series into another based on the nearest timestamp.

Say you have a series of data like this:

```js
const series1 = [
  { date: new Date("2021-04-03T13:17Z"), description: "Event A" },
  { date: new Date("2021-04-03T13:34Z"), description: "Event B" },
  { date: new Date("2021-04-03T13:51Z"), description: "Event C" },
  { date: new Date("2021-04-03T14:08Z"), description: "Event D" },
  { date: new Date("2021-04-03T14:25Z"), description: "Event E" },
];
```

And you have another series like this:

```js
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
```

If you want to pull in the values from `series2` into `series1`, you can use
this utility. It will find the nearest object in time and assign it to a key in
your original series.

```js
const merged = merge(series1, series2);
```

The resulting array will look like this:

```js
[
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
```

If multiple dates are equally distant, the first object found in the array will
be used.

## Installation

```bash
npm install merge-nearest-time-series
```

## Usage

```js
const merge = require("merge-nearest-time-series");

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

const merged = merge(series1, series2);
```

The value of `merged` will be:

```js
[
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
```

## Configuration

You can pass a configuration object as the third parameter.

```js
const config = {
  dateKey1: "t",
  dateKey2: "timestamp",
  insertedKey: "series2Data",
};

const merged = merge(series1, series2, config);
```

### `dateKey1`

The object key for the date in the first series.

Default: `date`

Example: If your first series looks like this:

```js
const series1 = [
  { t: new Date("2021-04-03T13:17Z"), description: "Event A" },
  // ... snip ...
];
```

You can set configuration like so:

```js
const config = { dateKey1: "t" };
```

### `dateKey2`

The object key for the date in the second series. This identical to `dateKey1`
except that it works on the second series instead of the first.

Default: `date`

### `insertedKey`

The name of the key where the second series's object should be stored in the
merged array.

Default: `nearest`

Example: If you want to store the second series data in a key called `series2Data` instead of the default `nearest`, you can set configuration like so:

```js
const config = { insertedKey: "series2Data" };
```

This will result in an array like this:

```js
[
  {
    date: new Date("2021-04-03T13:17Z"),
    description: "Event A",
    series2Data: { date: new Date("2021-04-03T13:18Z"), value: 1 },
  },
  // ... snip ...
];
```

## Development

Clone the repository.

```bash
git clone https://github.com/travishorn/merge-nearest-time-series.git
```

Change into the directory.

```bash
cd merge-nearest-time-series.git
```

Install dependencies

```bash
npm install
```

Write tests using Jest in `./test`.

Modify source code in `./src`.

## Tests

Run tests.

```bash
npm test
```

Run tests and see coverage information.

```bash
npm run test:coverage
```

## List

Lint all JavaScript files.

```bash
npm run lint
```

Automatically fix linting issues if possible.

```bash
npm run lint:fix
```

## License

The MIT License

Copyright 2021 Travis Horn

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
