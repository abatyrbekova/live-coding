const logger = () => {
    console.log("hello world!");
}

const findOldestUserInArray = (array) => {
    let maxAgeUser = array[0]
    for(user of array) {
        if(user.age > maxAgeUser.age) maxAgeUser = user;
    }
    return maxAgeUser;
}
module.exports = { findOldestUserInArray, logger };
// module.exports = logger; // unnamed export