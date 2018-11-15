# Fiscal-fns

[![Build Status](https://travis-ci.org/Ed-ITSolutions/fiscal-fns.svg?branch=master)](https://travis-ci.org/Ed-ITSolutions/fiscal-fns) [![Coverage Status](https://coveralls.io/repos/github/Ed-ITSolutions/fiscal-fns/badge.svg?branch=master)](https://coveralls.io/github/Ed-ITSolutions/fiscal-fns?branch=master)

Fiscal-fns is a [date-fns](https://date-fns.org/) like package that provides functions for working with fiscal years.

## Install

```sh
npm install --save fiscal-fns
```

## Usage

### Options

All functions take an options object which looks like this:

```js
{
  startMonth: 3, // The month your fiscal year starts in. Be aware this is 0-indexed so 0 = january 11 = decemeber.
  startDay: 1 // The date in the month your year starts on.
}
```

### endOfFiscalYear

|Parameter|Default| Description |
|:---|:---|:---|
|date| - |The date to test, can be either a string or a `Date`. It is passed to `date-fns` internally so anything `date-fns` can parse can be used here.|
|options|`{startDay: 1, startMonth: 3}`| See Options above. |

### inFiscalYear

|Parameter|Default| Description |
|:---|:---|:---|
|date| - |The date to test, can be either a string or a `Date`. It is passed to `date-fns` internally so anything `date-fns` can parse can be used here.|
|startDate| - | The start of the fiscal year to test.|
|options|`{startDay: 1, startMonth: 3}`| See Options above. |

### startOfFiscalYear

|Parameter|Default| Description |
|:---|:---|:---|
|date| - |The date to test, can be either a string or a `Date`. It is passed to `date-fns` internally so anything `date-fns` can parse can be used here.|
|options|`{startDay: 1, startMonth: 3}`| See Options above. |