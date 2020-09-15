const { cosmiconfig } = require('cosmiconfig');
const explorer = cosmiconfig('authmirrorserver');

const loadConfig = () => {
    explorer
    .search()
        .then(result => {
            console.log(result.config);
            console.log(result.filepath);
            return result.config;
        })
        .catch(error => {
            console.error(error);
        });
}
