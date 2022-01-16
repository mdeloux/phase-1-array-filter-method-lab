// Code your solution here
function findMatching(collection) {
    for (const user of collection) {
        if (firstName(user)) {
            return (user.name);
        }
    }
}
function firstName(user) {
    return user['drivers'];
}

Filter(drivers);