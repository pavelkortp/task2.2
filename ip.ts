import { func } from "./index";

type TypeData = {ip: string};

/**
 * Makes get request on https://api.ipify.org/?format=json and returns ip.
 * @returns Promise with ip in json.
 */
async function getIP(): Promise<string> {
    const response: Response = await fetch('https://api.ipify.org/?format=json');
    const data: TypeData = await response.json();
    return data.ip;
}
func();

console.log(await getIP());





