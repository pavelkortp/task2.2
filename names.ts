export { };
const link = 'https://random-data-api.com/api/name/random_name';

/**
 * Takes 3 names from https://random-data-api.com/api/name/random_name and returns all of it
 * in the same time (using Promise.all).
 * @returns 3 names.
 */
async function getNames1(): Promise<string[]> {
    const firstPromise = (await fetch(link)).json();
    const secondPromise = (await fetch(link)).json();
    const thirdPromise = (await fetch(link)).json();
    return (await Promise.all([firstPromise, secondPromise, thirdPromise])).map(e => e.name);
}

/**
 * Takes 3 names from https://random-data-api.com/api/name/random_name and returns all of it
 * in the same time (using only async/await).
 * @returns 3 names.
 */
async function getNames2(): Promise<string[]> {
    const names = [];
    const promise = ((await fetch(link)).json());
    for (let i = 0; i < 3; i++) {
        names.push((await promise).name);
    }
    return names;
}

/**
 * Takes 3 names from https://random-data-api.com/api/name/random_name and returns all of it
 * in the same time (using only then()).
 * @returns 3 names.
 */
function getNames3() {
    const names: string[] = [];
    return fetch(link)
        .then((response) => response.json())
        .then((data) => {
            names.push(data.name);
            return fetch(link);
        })
        .then((response) => response.json())
        .then((data) => {
            names.push(data.name);
            return fetch(link);
        }).then((response) => response.json())
        .then((data) => {
            names.push(data.name);
            return names;
        });
}

console.log(await getNames1());
console.log(await getNames2());
getNames3().then((arr) => {
    console.log(arr);
})