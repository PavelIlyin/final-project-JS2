<template>
  <div class="cart">
    <Header />
    <div class="cart-block center">
      <CartList :cart="cart" size="big" />
      <div class="cart-total" v-if="cart.contents.length">
        <p class="cart-total__total">
          TOTAL <span>{{ getTotalPrice }}$</span>
        </p>
        <hr class="cart-total__hr" />
        <button class="cart-total__button">PROCEED TO CHECKOUT</button>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "../components/Header.vue";
import Footer from "../components/Footer.vue";
import CartList from "../components/CartList.vue";

export default {
  name: "Cart",
  components: {
    Header,
    Footer,
    CartList,
  },
  computed: {
    cart() {
      return this.$store.state.cart;
    },
    getTotalPrice() {
      return this.$store.getters.getTotalPrice;
    },
  },
};
</script>

<style scoped lang="sass">
.cart-block
  padding-top: 96px
  display: flex
  justify-content: space-between
.cart-total
  background: #F5F3F3
  text-align: right
  padding: 42px 44px
  height: 250px

  &__total
    font-weight: 300
    font-size: 16px
    line-height: 19px
    color: #222222
    padding-top: 12px
    padding-bottom: 21px

  &__total span
    color: #F16D7F


  &__hr
    border: none
    height: 1px
    width: 275px
    background: #E2E2E2
    margin-bottom: 17px

  &__button
    background-color: #fafafa
    font-weight: 300
    font-size: 16px
    text-align: center
    line-height: 19px
    color: #222
    padding: 16px 42px
    border: 1px solid #F16D7F
    border-radius: 5px
    cursor: pointer
    transition: all ease-in-out .4s
    &:hover
      background-color: #F16D7F
      color: #222
</style>
>
