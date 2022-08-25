export const logger = () => {
    console.log("hello world!");
}

export const findOldestUserInArray = (array) => {
    let maxAgeUser = array[0]
    for(let user of array) {
        if(user.age > maxAgeUser.age) maxAgeUser = user;
    }
    return maxAgeUser;
}
