async function getIP() {
    return (await fetch('https://api.ipify.org/?format=json')).json();
}
async function main() {
    const s =  await getIP();
    console.log(s);
    
}
main();



