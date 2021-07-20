const fileUtils = require('../fileUtils');

async function getProducts() {
    return fileUtils.readJsonFile('./db/products.json');
}

async function getProductById(productId) {
    const products = await getProducts();
    return products.find(product => product.id_product === Number(productId));
}

module.exports = {
    getProducts,
    getProductById
}