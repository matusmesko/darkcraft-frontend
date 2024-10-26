const getMcServerInfo = async () => {
    return await fetch('https://api.mcsrvstat.us/2/mc.darkcraft.cz', {
        cache: 'no-cache'
    })
        .then(res => res.json())
        .then((result: any) => {
            return result;
        });
};

const getMinecraftServeryAPI = async () => {
    return await fetch('https://minecraftservery.eu/api/v1/server/gCddEMa8PgR7eHyl/info', {
        cache: 'no-cache'
    })
        .then(res => res.json())
        .then((result: any) => {
            return result;
        });
};

const getCzechCraftAPI = async () => {
    return await fetch('https://cors-anywhere.herokuapp.com/https://czech-craft.eu/api/server/darkcraft-9823/', {
        cache: 'no-cache',
        mode: 'cors',
        method: 'GET'
    })
        .then(res => res.json())
        .then((result: any) => {
            return result;
        });
};

const getCraftListAPI = async () => {
    return await fetch('https://api.craftlist.org/v1/vbb8c0n4bqnbphnmksf4/info', {
        cache: 'no-cache',
        mode: 'no-cors',
        method: 'GET',
    })
        .then(res => res.json())
        .then((result: any) => {
            return result;
        });
};

const getCraftBookAPI = async () => {
    return await fetch('https://api.craftbook.cz/votes/?id=74', {
        cache: 'no-cache'
    })
        .then(res => res.json())
        .then((result: any) => {
            return result;
        });
};

const getMinecraftListAPI = async () => {
    return await fetch('https://www.minecraft-list.cz/api/server/darkcraft', {
        cache: 'no-cache'
    })
        .then(res => res.json())
        .then((result: any) => {
            return result;
        });
};

const getCreeperListAPI = async () => {
    return await fetch('https://creeperlist.eu/api/getServerInfo?id=43', {
        cache: 'no-cache'
    })
        .then(res => res.json())
        .then((result: any) => {
            return result;
        });
};

const getMCSRVLISTAPI = async () => {
    return await fetch('https://mcserver-list.eu/api/server/464', {
        method: 'GET'
    })
        .then(res => res.json())
        .then((result: any) => {
            return result;
        });
};



export {
    getMcServerInfo,
    getMinecraftServeryAPI,
    getCzechCraftAPI,
    getCraftListAPI,
    getCraftBookAPI,
    getMinecraftListAPI,
    getCreeperListAPI,
    getMCSRVLISTAPI
}