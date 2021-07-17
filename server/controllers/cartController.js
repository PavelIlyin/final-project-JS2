const cartService = require('../services/cartService');
const resUtils = require('../resUtils');
const cartStorage = require('../storage/cartStorage');
const productsStorage = require('../storage/productsStorage');

async function getCart(req, res) {
    try {
        const cart = await cartStorage.getCart();
        resUtils.success(res, cart);
    } catch (error) {
        resUtils.failure(res, error);
    }
}

async function updateCartItem(req, res) {
    try {
        const productId = req.params.id;
        const quantity = req.body.quantity;
        await cartService.updateCartItem(productId, quantity);
        resUtils.success(res);
    } catch (error) {
        resUtils.failure(res, error);
    }
}

async function addProduct(req, res) {
    try {
        const productId = req.body.productId;
        const product = await productsStorage.getProductById(productId);
        if (!product) {
            resUtils.failure(res, new Error(`${productId} Product not found!`), 404);
        } else {
            await cartService.addProduct(product);
            resUtils.success(res);
        }
    } catch (error) {
        resUtils.failure(res, error);
    }
}

async function deleteProduct(req, res) {
    try {
        const productId = req.params.id;
        await cartService.deleteProduct(productId);
        resUtils.success(res);
    } catch (error) {
        resUtils.failure(res, error);
    }
}

module.exports = {
    addProduct,
    deleteProduct,
    getCart,
    updateCartItem
}