import httpClient from "./http-client";

export default {
  addToCart(productId) {
    return httpClient.post("http://localhost:8082/api/cart", {
      productId,
    });
  },
  deleteFromCart(productId) {
    return httpClient.delete(`http://localhost:8082/api/cart/${productId}`);
  },
  updateCartItem(productId, quantity) {
    return httpClient.post(`http://localhost:8082/api/cart/${productId}`, {
      quantity,
    });
  },
  getProducts() {
    return httpClient.get("http://localhost:8082/api/products");
  },
  getCart() {
    return httpClient.get("http://localhost:8082/api/cart");
  },
};
