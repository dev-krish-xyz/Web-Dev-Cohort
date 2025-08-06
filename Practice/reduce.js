let userActivity = [
    {user: 'Alice', activityCount: 45},
    {user:'bob', activityCount: 12},
    {user: 'charllie', activityCount: 33},
]

// find most acive user 

let mostActiveUser = userActivity.reduce((maxUser, user) =>
user.activityCount > maxUser.activityCount ? user : maxUser
);
console.log(mostActiveUser);