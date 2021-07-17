const resUtils = require('../resUtils');
const productsStorage = require('../storage/productsStorage');

async function getProducts(req, res) {
    try {
        const products = await productsStorage.getProducts();
        resUtils.success(res, products);
    } catch (error) {
        resUtils.failure(res, error);
    }
}

module.exports = {
    getProducts
}