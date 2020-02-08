//Dummy of Calendar Data Dump from Google API Call
var eventOne = {
  kind: "calendar#event",
  etag: "3156314578854000",
  id:
    "6ss3gdr16pgjgb9mcpgj0b9k64r3cb9oc4s64bb669gm8p1o6th66cr460_20200208T160000Z",
  status: "confirmed",
  htmlLink:
    "https://www.google.com/calendar/event?eid=NnNzM2dkcjE2cGdqZ2I5bWNwZ2owYjlrNjRyM2NiOW9jNHM2NGJiNjY5Z204cDFvNnRoNjZjcjQ2MF8yMDIwMDIwOFQxNjAwMDBaIGllcmlja3NvbjI1QG0",
  created: "2020-01-04T17:00:20.000Z",
  updated: "2020-01-04T17:02:38.721Z",
  summary: "Coding bootcamp",
  location: "Kellogg Wieboldt Hall, 340 E Superior St, Chicago, IL 60611, USA",
  colorId: "2",
  creator: { email: "ierickson25@gmail.com", self: true },
  organizer: { email: "ierickson25@gmail.com", self: true },
  start: { dateTime: "2020-02-08T10:00:00-06:00", timeZone: "America/Chicago" },
  end: { dateTime: "2020-02-08T14:00:00-06:00", timeZone: "America/Chicago" },
  recurringEventId:
    "6ss3gdr16pgjgb9mcpgj0b9k64r3cb9oc4s64bb669gm8p1o6th66cr460",
  originalStartTime: {
    dateTime: "2020-02-08T10:00:00-06:00",
    timeZone: "America/Chicago"
  },
  iCalUID:
    "6ss3gdr16pgjgb9mcpgj0b9k64r3cb9oc4s64bb669gm8p1o6th66cr460@google.com",
  sequence: 0
};

var eventTwo = {
  kind: "calendar#event",
  etag: "3127997846504000",
  id:
    "c9gm8ohlcdh32b9p61gmcb9k71h34bb2chgm6b9jccr3gc1j60q62cr16c_20200211T010000Z",
  status: "confirmed",
  htmlLink:
    "https://www.google.com/calendar/event?eid=YzlnbThvaGxjZGgzMmI5cDYxZ21jYjlrNzFoMzRiYjJjaGdtNmI5amNjcjNnYzFqNjBxNjJjcjE2Y18yMDIwMDIxMVQwMTAwMDBaIGllcmlja3NvbjI1QG0",
  created: "2019-07-24T20:08:43.000Z",
  updated: "2019-07-24T20:08:43.288Z",
  summary: "DnD",
  colorId: "8",
  creator: { email: "ierickson25@gmail.com", self: true },
  organizer: { email: "ierickson25@gmail.com", self: true },
  start: { dateTime: "2020-02-10T19:00:00-06:00", timeZone: "America/Chicago" },
  end: { dateTime: "2020-02-10T21:30:00-06:00", timeZone: "America/Chicago" },
  recurringEventId:
    "c9gm8ohlcdh32b9p61gmcb9k71h34bb2chgm6b9jccr3gc1j60q62cr16c",
  originalStartTime: {
    dateTime: "2020-02-10T19:00:00-06:00",
    timeZone: "America/Chicago"
  },
  iCalUID:
    "c9gm8ohlcdh32b9p61gmcb9k71h34bb2chgm6b9jccr3gc1j60q62cr16c@google.com",
  sequence: 0
};

var eventThree = {
  kind: "calendar#event",
  etag: "3158452841033000",
  id: "68ojgd9l69gmabb5c5j32b9k6tgm8b9p71j30bb3c9hjgdr5cdgj6ohpc4",
  status: "confirmed",
  htmlLink:
    "https://www.google.com/calendar/event?eid=NjhvamdkOWw2OWdtYWJiNWM1ajMyYjlrNnRnbThiOXA3MWozMGJiM2M5aGpnZHI1Y2RnajZvaHBjNCBpZXJpY2tzb24yNUBt",
  created: "2020-01-17T02:00:20.000Z",
  updated: "2020-01-17T02:00:20.595Z",
  summary: "Bootcamp Presentations",
  colorId: "10",
  creator: { email: "ierickson25@gmail.com", self: true },
  organizer: { email: "ierickson25@gmail.com", self: true },
  start: { dateTime: "2020-02-11T20:00:00-06:00", timeZone: "America/Chicago" },
  end: { dateTime: "2020-02-11T21:00:00-06:00", timeZone: "America/Chicago" },
  iCalUID:
    "68ojgd9l69gmabb5c5j32b9k6tgm8b9p71j30bb3c9hjgdr5cdgj6ohpc4@google.com",
  sequence: 0
};

//array of calendar events
var calendarDump = [eventOne, eventTwo, eventThree];

//Function that is passed the calendar dump, checks availability, and returns availability
timeAvailCheck(calendarDump);

function timeAvailCheck(schedule) {
  console.log("Checking your availability");

  var timeNotFree = [];

  for (var i = 0; i < schedule.length; i++) {
    console.log(schedule[i].start.dateTime);
  }
}
