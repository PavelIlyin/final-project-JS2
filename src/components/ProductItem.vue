<template>
  <div class="product-item product_mb">
    <img class="product__img" :src="product.product_img" alt="photo product" />
    <div class="product__add" @click="addProduct()">
      <img src="../assets/product-cart.svg" alt="cart" /> Add to Cart
    </div>
    <div class="product__info">
      <a href="#" class="product__name">{{ product.product_name }}</a>
      <p class="product__text">
        {{ product.product_info }}
      </p>
      <p class="product__price">{{ product.price }}$</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductItem",
  props: {
    product: Object,
  },
  methods: {
    addProduct() {
      this.$emit("add-product", this.product);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
.product
  &__img
    transition: 0.6s

  &-item
    width: 360px
    background: #F8F8F8
    position: relative

  &-item:hover .product__img
    filter: brightness(50%)
    transform: scale(1.05)

  &-item:hover .product__add
    display: flex

  &_mb
    margin-bottom: 30px

  &__info
    padding: 24px 16px 20px

  &__name
    font-size: 13px
    font-weight: 300
    color: #000000

  &__text
    padding-top: 12px
    padding-bottom: 18px
    font-weight: 300
    font-size: 14px
    line-height: 17px
    color: #5D5D5D

  &__price
    font-size: 16px
    line-height: 19px
    color: #F16D7F

  &__add
    position: absolute
    top: 188px
    left: 111px
    width: 139px
    height: 44px
    border: 1px solid white
    align-items: center
    justify-content: center
    display: none
    color: #ffffff
    cursor: pointer
    &:hover
      box-shadow: 0 0 5px #fff
</style>
