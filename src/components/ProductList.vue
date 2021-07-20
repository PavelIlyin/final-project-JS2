<template>
  <section class="catalog center">
    <h2 class="catalog__heading">Featured items</h2>
    <p class="catalog__text">
      Shop for items based on what we featured in this week
    </p>
    <div class="product">
      <ProductItem
        v-for="product of products"
        :key="product.id_product"
        :product="product"
        @add-product="onAddProduct"
      />
    </div>
  </section>
</template>

<script>
import ProductItem from "./ProductItem.vue";
import { mapActions } from "vuex";
export default {
  name: "ProductList",
  props: {
    products: Array,
  },
  components: {
    ProductItem,
  },
  methods: {
    ...mapActions(["addProduct"]),
    onAddProduct(product) {
      this.addProduct(product.id_product);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.catalog__heading,
.catalog__text
  text-align: center

.catalog__heading
  font-size: 30px
  color: #222222
  padding-top: 96px
  font-weight: 400

.catalog__text
  font-size: 14px
  line-height: 17px
  color: #9F9F9F
  padding-top: 6px

.product
  padding-top: 48px
  display: flex
  flex-wrap: wrap
  justify-content: space-between
  @media screen and (max-width: 1180px)
    justify-content: space-around
</style>
