const { Temporal } = require('@js-temporal/polyfill'); // this line imports the Temporal API from the polyfill package

const now = Temporal.Now.plainDateTimeISO();
console.log(now.toString());

// adding of dates

const date = Temporal.PlainDate.from(now);
const next = date.add({days: 1});
console.log(next.toString());

// diffrence between the dates
const start = Temporal.PlainDate.from(now);
const end = Temporal.PlainDate.from('2025-08-25');
console.log(start.toString());

const diff = end.since(start);
console.log(diff.days);

// get current date and time in different timezone

const nyTime = Temporal.Now.zonedDateTimeISO('America/New_York');
console.log(nyTime.toString());
const nyTimeNow = Temporal.PlainTime.from(nyTime);
console.log(nyTimeNow.toString());
const nyDateNow = Temporal.PlainDate.from(nyTime);
console.log(nyDateNow.toString());
const nyDayNow = Temporal.PlainMonthDay.from(nyTime);
console.log(nyDayNow.toString());
const nyDateTime = Temporal.PlainDateTime.from(nyTime);
console.log(nyDateTime.toString());
// temporal creates a full object with timezone baked in

// creating a precise time stamp for API or DB

const timestamp = Temporal.Now.instant().toString();
console.log(timestamp);

// immutability 
const d1 = Temporal.PlainDate.from('2025-08-01');
const d2 = d1.with({ day: 25 }); // returns new object, original safe, with is a method used to create a modified copy of a temporal object by updating specific fields.
console.log(d2.toString());
console.log(d1.toString());

