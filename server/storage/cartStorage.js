const fileUtils = require('../fileUtils');


async function getCart() {
    return fileUtils.readJsonFile('./db/userCart.json');
}

async function saveCart(cart) {
    await fileUtils.writeJsonFile('./db/userCart.json', cart);
}

module.exports = {
    getCart,
    saveCart
}