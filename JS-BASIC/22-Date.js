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

let New = new Date('Mon Aug 04 2025 14:31:34 GMT+0530 ');
console.log(New.toString());

let date1=new Date();
console.log("printing date1 value:")
console.log(date1.toString());

let newDate=+new Date();
console.log(newDate);


