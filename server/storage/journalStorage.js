const fileUtils = require('../fileUtils');

async function getJournal() {
    return fileUtils.readJsonFile('./db/stats.json');
}

async function saveJournal(journal) {
    await fileUtils.writeJsonFile('./db/stats.json', journal);
}


module.exports = {
    getJournal,
    saveJournal
}