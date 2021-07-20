<template>
  <div class="home">

    <Header />
    <ProductList :products="productsToShow" />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import ProductList from "@/components/ProductList.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Home",
  components: {
    Header,
    Footer,
    ProductList,
  },
  computed: {
    productsToShow() {
      return this.$store.getters.productsToShow;
    },
  },
};
</script>

<style lang="sass">
.center
  padding-left: calc(50% - 570px)
  padding-right: calc(50% - 570px)
</style>
