<template>
  <div class="cart">
    <p class="cart__info" v-if="!cart.contents.length">Your cart is empty</p>
    <div class="cart-items">
      <CartItem
        :size="size"
        v-for="item of cart.contents"
        :key="item.id_product"
        :cartItem="item"
        @delete-product="onDeleteProduct"
        @update-cart-item="onUpdateCartItem"
      />
    </div>
  </div>
</template>

<script>
import CartItem from "./CartItem.vue";
import { mapActions } from "vuex";

export default {
  name: "CartList",
  props: {
    cart: Object,
    size: String,
  },
  components: {
    CartItem,
  },
  methods: {
    ...mapActions(["deleteProduct", "updateCartItem"]),
    onDeleteProduct(item) {
      this.deleteProduct(item);
    },
    onUpdateCartItem(cartItem) {
      this.updateCartItem(cartItem);
    },
  },
};
</script>

<style scoped lang="sass">
.cart__info
  padding-bottom: 16px
</style>
