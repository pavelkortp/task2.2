
/**
 * Takes callback and call it with param ip.
 * @param callback function.
 */
async function firstFunc(callback: (ip: string) => any) {
    const ip = '192.168.0.1';
    callback(ip);
}

async function secondFunc() {
    return await firstFunc((ip) => {
        console.log('Мій поточний IP:', ip);
    });

}


secondFunc();