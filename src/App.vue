<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  methods: {
    ...mapActions(["getProductList", "getCartList"]),
  },
  mounted() {
    this.getProductList();
    this.getCartList();
  },
};
</script>

<style lang="sass">
*
  margin: 0
  padding: 0
  box-sizing: border-box

body
  font-family: 'Lato', sans-serif
  min-width: 375px

summary::-webkit-details-marker
  display: none

a
  text-decoration: none

button
  &:focus
    outline: none
  &:hover
    cursor: pointer
</style>
