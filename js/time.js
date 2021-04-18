// Date & Time

const dateNow = new Date();

console.log("getfullyear: " + dateNow.getFullYear());
console.log("Month: " + dateNow.getMonth());
console.log("date"+dateNow.getDate());
console.log("day"+dateNow.getDay());
console.log("hours"+dateNow.getHours());
console.log("min :"+dateNow.getMinutes());
console.log("sec :"+dateNow.getSeconds());

console.log("______________________________________________");
console.log(dateNow.toDateString())
console.log(dateNow.toTimeString())

console.log("______________________________________________");

// timestamps

console.log('timestamp: ', dateNow.getTime())

// comparison

const before = new Date('April 12 2021 8:12:15');
console.log(dateNow.getTime()+ before);


// 
const diff = dateNow.getTime() - before.getTime();
console.log(diff);

const mins = Math.round(diff /1000/60);
console.log(mins)


// 
const timestamp = 1231232141412; 
console.log(new Date(timestamp));



