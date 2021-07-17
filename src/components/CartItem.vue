<template>
  <div
    :class="{
      'cart-item': true,
      'cart-item--small': size === 'small',
      'cart-item--big': size === 'big',
    }"
  >
    <img class="cart-item__img" :src="cartItem.product_img" alt="product" />
    <div class="cart-item__info">
      <h3 class="cart-item__heading">{{ cartItem.product_name }}</h3>
      <div class="cart-item__data">
        <p>
          Quantity:
          <input
            @change="onChange"
            class="cart-item__input"
            type="number"
            :value="cartItem.quantity"
            min="1"
            max="10"
            step="1"
          />
        </p>
        <p>
          Price: <span>{{ cartItem.price }}$</span>
        </p>
      </div>
    </div>
    <button class="del-btn" @click="deleteProduct()">&times;</button>
  </div>
</template>

<script>
export default {
  name: "CartItem",
  props: {
    size: String,
    cartItem: Object,
  },
  methods: {
    onChange(event) {
      if (event.target.value != this.cartItem.quantity) {
        this.updateCartItem(event.target.value);
      }
    },
    deleteProduct() {
      this.$emit("delete-product", this.cartItem);
    },
    updateCartItem(newQuantity) {
      const newCartItem = {
        ...this.cartItem,
        quantity: newQuantity,
      };
      this.$emit("update-cart-item", newCartItem);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.cart-item
  display: flex
  justify-content: left
  position: relative

  &__input
    border: 1px solid #EAEAEA
    text-align: center
    font-size: 18px
    line-height: 22px
    width: 43px
    &:focus
      outline: none

  &--small
    padding-bottom: 10px
    .cart-item__info
      width: 120px
      padding-left: 5px

    .cart-item__img
      width: 100px
      height: 130px

    .cart-item__heading
      font-size: 12px

    .del-btn
      position: absolute
      top: 10px
      right: 22px
      background-color: #fafafa
      padding: 5px 15px
      border: 1px solid #F16D7F
      color: #2f2a2d
      border-radius: 5px
      transition: all ease-in-out .4s
      &:hover
        background-color: #F16D7F

  &--big
    padding-bottom: 10px
    display: flex
    justify-content: space-between
    margin: 0px auto 40px auto
    box-shadow: 14px 12px 19px -2px rgba(0,0,0,0.32)
    width: 652px
    position: relative
    .cart-item__info
      font-size: 22px
      line-height: 26px
      color: #575757
      text-align: left
      width: 390px
      padding: 22px 31px

    .cart-item__img
      width: 262px
      height: 306px

    .cart-item__heading
      font-size: 24px
      line-height: 29px
      color: #222222
      padding-bottom: 42px
      width: 262px
      font-weight: 400

    .del-btn
      position: absolute
      top: 10px
      right: 22px
      background-color: #fafafa
      padding: 5px 15px
      border: 1px solid #F16D7F
      color: #2f2a2d
      border-radius: 5px
      transition: all ease-in-out .4s
      cursor: pointer
      &:focus
        outline: none
      &:hover
        background-color: #F16D7F
</style>
