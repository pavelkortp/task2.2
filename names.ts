export {};
/**
 * Takes 3 names from https://random-data-api.com/api/name/random_name and returns all of it
 * in the same time.
 * @returns 3 names.
 */
async function getNames1():Promise<string[]>{
    const link = 'https://random-data-api.com/api/name/random_name';
    const firstName = (await (await fetch(link)).json()).name;
    const secondName = (await (await fetch(link)).json()).name;
    const thirdName = (await (await fetch(link)).json()).name;
    return Promise.all([firstName, secondName, thirdName]);
}

async function getNames2():Promise<string[]>{
    const link = 'https://random-data-api.com/api/name/random_name';
    const firstName = (await (await fetch(link)).json()).name;
    const secondName = (await (await fetch(link)).json()).name;
    const thirdName = (await (await fetch(link)).json()).name;
    return [firstName, secondName, thirdName];
}


console.log(await getNames2());
