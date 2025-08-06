const now = new Date();
console.log(now);
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());

console.log(now.getHours());        // 0–23
console.log(now.getMinutes());      // 0–59
console.log(now.getSeconds());      // 0–59
console.log(now.getMilliseconds()); // 0–999


console.log(now.getTime()); // Milliseconds since Jan 1, 1970

console.log(now.getTimezoneOffset()); // difference from UTC in minutes

// setter methods 

// now.setFullYear();
// now.setMonth();
// now.setDate();

// now.setDate(); // cant roll overs goes to the feb1

// now.setHours();
// now.setMinutes();
// now.setSeconds();


// utillity methods 

console.log(now.toISOString());  // "2025-08-04T14:50:00.000Z" : reliable for API and data bases

console.log(now.toLocaleDateString());  // "8/4/2025"
console.log(now.toLocaleTimeString());  // 8:16:30 PM
console.log(now.toLocaleString()); // full localized date-time

// difference of days between 2 dates

const start = new Date("2025-01-01");
const end = new Date("2025-08-01");

const diffInMs = end - start; // gives milliseconds
const diffInDays = diffInMs / (1000 * 60 * 60 * 24); // convert to days

console.log(diffInDays); // 212

// time stamping of user Actions

const timestamp = new Date().toISOString();  // save to API or local storage


// countdown timer

const eventTime = new Date("2025-08-05T10:00:00Z");
const today = new Date();

const diff = eventTime - today;
const minutesLeft = Math.floor(diff/60000);
const hrs = minutesLeft /60;
console.log(`event starts in ${hrs} hours`);


// scheduling and calender apps 
const selectedDate = new Date(dateInput.value);   // what is date input here

// expiring tokens (JWT, password reset, OTPs)

const expiresIn = 1000 * 60 * 15 ;
const expiryTime = new Date(Date.now() + expiresIn);
user.otpExpiry = expiryTime;

if( new Date() > user.otpExpiry){
    throw new Error("OTP expired");   // got to understand this
}

// Reports, Graphs, Filters ( filter by the date range)

// Social media post ( human readable time ago)

function timeAgo(date){
    const diff = Date.now() - new Date(date).getTime();
    const mins = Math.floor(diff / 60000);

    if(mins < 1) return 'Just now';
    if(mins > 1) return `${mins} minutes ago`;
    const hours = Math.floor(mins / 60);
    return `${hours} hours ago`;
}

console.log(timeAgo("2025-08-04T18:00:00Z"));

// liscence expiry system

const expiry = new Date(user.subscriptionEnd);
if (now > expiry){
    deactivateAccount(user);
}

// time zone conversions (for international users)

const options = {
    timeZone: "Asia/Kolkata",
    hour: '2-digit',
    minute: '2-digit'
};
console.log(new Date().toLocaleTimeString('en-IN',options));





