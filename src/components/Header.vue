<template>
  <header class="header center">
    <div class="header__left">
      <router-link to="/" class="header__logo" href="#"
        ><img src="../assets/logo.svg" alt="logo"
      /></router-link>
      <Search @search="onSearchProduct" />
    </div>
    <div class="header__right">
      <div class="header__box">
        <a class="header__cart" href="#" @click="showCart = !showCart"
          ><img src="../assets/cart.svg" alt="cart"
        /></a>
      </div>
      <CartPopup v-show="showCart" />
    </div>
  </header>
</template>

<script>
import CartPopup from "./CartPopup.vue";
import Search from "./Search.vue";
import { mapMutations } from "vuex";
export default {
  name: "Header",
  components: {
    CartPopup,
    Search,
  },
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    ...mapMutations(["setSearchLine"]),
    onSearchProduct(searchLine) {
      this.setSearchLine(searchLine);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.header
  background-color: #222
  height: 75px
  display: flex
  justify-content: space-between
  align-items: center

  &__left
    display: flex
    justify-content: space-between

  &__logo
    padding-right: 41px

    img:hover
      transition: 1s
      -moz-transform: rotate(360deg)
      -webkit-transform: rotate(360deg)
      -o-transform: rotate(360deg)
      -ms-transform: rotate(360deg)
      transform: rotate(360deg)

  &__box
    display: block
    &_nav
      display: none
  &__right
    display: flex
    justify-content: space-between
</style>
