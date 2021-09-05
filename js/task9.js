// Массив имен (поле name) людей, отсортированных в зависимости от количества их друзей (поле friends)
import users from "./users.js";
const getNamesSortedByFriendsCount = users => {
const sortedByFriendsQty = [...users].sort(
    (prevUser, nextUser) => prevUser.friends.length - nextUser.friends.length,
);
return sortedByFriendsQty.map(user => user.name); 
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]