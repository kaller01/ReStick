const { supermemo} = require('supermemo');
const dayjs = require('dayjs');

let item = {
  interval: 0,
  repetition: 0,
  efactor: 2.5,
};

console.log(item);

item = supermemo(item, 4);
console.log(item);
console.log(dayjs().add(item.interval, 'day').format("YYYY-MM-DD"));

item = supermemo(item, 4);
console.log(dayjs().add(item.interval, 'day').format("YYYY-MM-DD"));
item = supermemo(item, 4);
console.log(dayjs().add(item.interval, 'day').format("YYYY-MM-DD"));
item = supermemo(item, 4);
console.log(dayjs().add(item.interval, 'day').format("YYYY-MM-DD"));
item = supermemo(item, 4);
console.log(dayjs().add(item.interval, 'day').format("YYYY-MM-DD"));