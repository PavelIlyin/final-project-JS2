const cartStorage = require('../storage/cartStorage');
const journalStorage = require('../storage/journalStorage');
const moment = require('moment');

async function addProduct(product) {
    const cart = await cartStorage.getCart();
    const existingItem = cart.contents.find(cartItem => cartItem.id_product === Number(product.id_product));
    if (existingItem) {
        existingItem.quantity++;
    } else {
        const cartItem = {
            ...product,
            quantity: 1
        };
        cart.contents.push(cartItem);
    }
    await cartStorage.saveCart(cart);
    await addToJournal(product.id_product, 'add to cart');
}

async function deleteProduct(productId) {
    const cart = await cartStorage.getCart();
    const itemForDelete = cart.contents.find(cartItem => cartItem.id_product === Number(productId));
    cart.contents.splice(cart.contents.indexOf(itemForDelete), 1);
    await cartStorage.saveCart(cart);
    await addToJournal(productId, 'delete from cart');
}

async function updateCartItem(productId, quantity) {
    const cart = await cartStorage.getCart();
    const itemForUpdate = cart.contents.find(cartItem => cartItem.id_product === Number(productId));
    itemForUpdate.quantity = quantity;
    await cartStorage.saveCart(cart);
    await addToJournal(productId, 'update product');
}

async function addToJournal(productId, action) {
    const journal = await journalStorage.getJournal();
    journal.push({
        time: moment().format('DD MMM YYYY, h:mm:ss a'),
        product_id: productId,
        action: action,
    });
    await journalStorage.saveJournal(journal);
}

module.exports = {
    addProduct,
    deleteProduct,
    updateCartItem
}