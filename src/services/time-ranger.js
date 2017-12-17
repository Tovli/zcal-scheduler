
const WEEK_DAYS = [
  'sunday',
  'monday',
  'tuesday',
  'wednesday',
  'thursday',
  'friday',
  'saturday',
];

const parse = (ceil = { unit: 'month', items: 3 },
               floor = { unit: 'day' },
               strategy = /around|before|after/,
               now = new Date()) => {
// eslint-disable-next-line no-console
  console.log('ceil', ceil);
// eslint-disable-next-line no-console
  console.log('floor', floor);
// eslint-disable-next-line no-console
  console.log('strategy', strategy);
// eslint-disable-next-line no-console
  console.log('now', now);
  throw new Error('not implemented yet');
};

function dayCountInMonth(date) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  return d.getDate();
}

function dayOfTheWeek(date, dayOfMonth) {
  const d = new Date(date);
  d.setDate(dayOfMonth);
  return WEEK_DAYS[d.getDay()];
}


export {
  WEEK_DAYS,
  parse,
  dayCountInMonth,
  dayOfTheWeek,
};
