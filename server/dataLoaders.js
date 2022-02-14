const { local } = require('./config');
let localData = local ? require('./data') : {};

const dataLoaders = {};
if (local){
    const localDataLoaders = {
        Index: () => localData,
    };
    Object.assign(dataLoaders, localDataLoaders);
}

module.exports = dataLoaders;
