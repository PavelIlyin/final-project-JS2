const express = require("express");
const cors = require('cors');
const app = express();
const cartController = require('./controllers/cartController');
const productsController = require('./controllers/productsController');

app.use(cors({
    origin: 'http://localhost:8080'
}));

app.use(express.json());
app.use('/', express.static('../dist'));

app.get('/api/products', productsController.getProducts);
app.get('/api/cart', cartController.getCart);
app.post('/api/cart', cartController.addProduct);
app.post('/api/cart/:id', cartController.updateCartItem);
app.delete('/api/cart/:id', cartController.deleteProduct);

const port = 8082;
app.listen(port, () => {
    console.log(`Listening ${port} port`);
});