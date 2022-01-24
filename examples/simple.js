const ripeConfig = require("..");

async function run() {
    await ripeConfig.API.load();
    const api = new ripeConfig.API();
    console.info(await api.getResource("info.json"));
}

run();
