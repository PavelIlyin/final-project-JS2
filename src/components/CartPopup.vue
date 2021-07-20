<template>
  <div class="cart-block">
    <CartList size="small" :cart="cart" />
    <router-link to="/cart" class="cart-block__button">Open cart</router-link>
  </div>
</template>

<script>
import CartList from "./CartList.vue";
export default {
  name: "CartPopup",
  components: {
    CartList,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
  },
};
</script>

<style scoped lang="sass">
.cart-block
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.62)
  border-radius: 5px
  box-sizing: border-box
  right: 0
  top: 70px
  position: absolute
  background-color: white
  padding: 16px
  color: black
  width: 330px
  z-index: 1

  &__button
    color: #F26376
    border: 1px solid #FF6A6A
    background-color: #FFFFFF
    font-size: 14px
    text-align: center
    padding: 7px
    margin-left: 35%
    margin-bottom: 16px
    &:hover
      background-color: #F16D7F
      border: 1px solid #ffffff
      color: #ffffff
</style>
