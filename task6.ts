export { };
/**
 * Makes get request on https://api.ipify.org/?format=json and returns ip.
 * @returns Promise with ip in json.
 */
async function getIP(): Promise<string> {
    return await (await fetch('https://api.ipify.org/?format=json')).json();
}


async function secondFunc(callback: Function) {
    const ip = await getIP();
    callback(ip);
}

secondFunc(console.log);
