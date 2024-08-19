const getMcServerInfo = async () => {

    return await fetch('https://api.mcsrvstat.us/2/mc.darkcraft.cz', {
        cache: 'no-cache'
    })
        .then(res => res.json())
        .then((result: any) => {
            return result;
        });
};


export {
    getMcServerInfo
}