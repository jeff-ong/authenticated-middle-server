const { cosmiconfig } = require('cosmiconfig');
const explorer = cosmiconfig('ams');

const getConfig = async () => {
    try {
        const result = await explorer.search();
        return result.config;
    } catch(error) {
        throw new Error('can\'t find config file');
    }
}

module.exports = { getConfig };