let todayDate=new Date();
console.log(todayDate);
//2025-08-04T08:36:38.192Z

// That's an example of an ISO 8601 timestamp—a standardized way of representing date and time. Here's how it breaks down:

// 2025-08-04 → Date (Year-Month-Day)

// T → Separator between date and time (short for "Time")

// 08:36:38.192 → Time (Hours:Minutes:Seconds.Milliseconds)

// Z → Stands for Zulu time, which is another name for UTC (Coordinated Universal Time)

// 📘 This format is widely used in programming, APIs, databases, and international data exchange because it's unambiguous and sortable.

//UTC TIME FORMAT
// UTC stands for Coordinated Universal Time. It's the primary time standard by which the world regulates clocks and time.

// It's not a time zone, but a global time reference.

// Time zones around the world are defined by their offset from UTC (e.g., India Standard Time is UTC+5:30).

// UTC replaced GMT (Greenwich Mean Time) as the official standard, though GMT is still used informally.

// It doesn’t change with daylight saving time, making it ideal for international coordination.

let New = new Date('Sat Sep 06 2025 12:53:04 GMT+0530 (India Standard Time) ');
console.log(New);
//OUTPUT:
// 2025-09-06T07:23:04.000Z  this is iso format which it gave 5hours:30Min behind

console.log(New.toString());

//In JavaScript, the .toString() method on a Date object converts the date and time into a human-readable string based on your local timezone 🕒


let date1=new Date();
console.log("new date print the date value in the utc time format:" , date1);
console.log("printing date1 value:")
console.log(date1.toString());//convert the utc time format to the local time format

//using of the + in new Date ()
let newDate=+new Date();// the + is used to convert the date into the number which is the timestamp from 1st january 1970
console.log(newDate);