// wat

const parse = (ceil = { unit: 'month', items: 3 },
               floor = { unit: 'day' },
               strategy = /around|before|after/,
               now = new Date()) => {
  console.log('ceil', ceil);
  console.log('floor', floor);
  console.log('strategy', strategy);
  console.log('now', now);
  throw new Error('not implemented yet');
};

function daysInMonth(date) {
  const d = new Date(date);
  d.setMonth(d.getMonth() + 1);
  d.setDate(0);
  return d.getDate();
}

function dayOfTheWeek(date, dayOfMonth) {
  const d = new Date(date);
  d.setDate(dayOfMonth);
  return [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
  ][d.getDay()];
}


export {
  parse,
  daysInMonth,
  dayOfTheWeek,
};
