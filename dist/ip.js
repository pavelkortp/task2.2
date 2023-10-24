import { func } from "./index.js";
/**
 * Makes get request on https://api.ipify.org/?format=json and returns ip.
 * @returns Promise with ip in json.
 */
async function getIP() {
    const response = await fetch('https://api.ipify.org/?format=json');
    const data = await response.json();
    return data.ip;
}
func();
console.log(await getIP());
