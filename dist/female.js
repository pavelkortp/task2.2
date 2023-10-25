"use strict";
const LINK = 'https://random-data-api.com/api/users/random_user';
/**
 * Gets a female user for the minimum number of requests
 * (Using async/await).
 */
async function getFemale1() {
    let counter = 0;
    let gender;
    do {
        gender = (await ((await fetch(LINK)).json())).gender;
        counter++;
    } while (gender !== 'Female');
    console.log(`To find female it takes ${counter} times`);
}
/**
 * Gets user from server.
 * @returns new user.
 */
function getUser() {
    return fetch(LINK)
        .then((resp) => resp.json());
}
/**
 * Gets a female user for the minimum number of requests
 * (Using then()).
 */
function getFemale2(counter = 1) {
    getUser()
        .then((user) => {
        counter++;
        if (user.gender === 'Female') {
            console.log(`To find female it takes ${counter} times (Recursively)`);
        }
        else {
            getFemale2(counter);
        }
    });
}
getFemale1();
getFemale2();
