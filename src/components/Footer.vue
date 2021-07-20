<template>
  <footer>
    <section class="info center">
      <div class="info-box">
        <div class="info__block">
          <img class="info__img" src="../assets/delivery.svg" alt="delyvery" />
          <h3 class="info__heading">Free Delivery</h3>
          <p class="info__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
        <div class="info__block">
          <img class="info__img" src="../assets/sales.svg" alt="sales" />
          <h3 class="info__heading">Sales & discounts</h3>
          <p class="info__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
        <div class="info__block">
          <img class="info__img" src="../assets/quality.svg" alt="quality" />
          <h3 class="info__heading">Quality assurance</h3>
          <p class="info__text">
            Worldwide delivery on all. Authorit tively morph next-generation
            innov tion with extensive models.
          </p>
        </div>
      </div>
    </section>

    <div class="rights center">
      <p class="rights__text">&copy; 2021 Brand All Rights Reserved.</p>
      <div class="footer__icons">
        <a href="#" class="footer__icon">
          <i class="fab fa-facebook-f"></i>
        </a>
        <a href="#" class="footer__icon">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="#" class="footer__icon">
          <i class="fab fa-pinterest-p"></i>
        </a>
        <a href="#" class="footer__icon">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
  // props: {
  //   msg: String,
  // },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
footer
  background-color: rgba(34, 34, 36, 1)

.info
  height: 341px

  &-box
    display: flex
    justify-content: space-between
    padding-top: 103px

  &__block
    display: flex
    flex-direction: column
    align-items: center
    justify-content: center
    color: #FBFBFB
    width: 360px

  &__heading
    padding-top: 28px
    padding-bottom: 16px
    font-size: 20px
    line-height: 24px
    color: #FBFBFB
    text-align: center

  &__text
    text-align: center
    font-size: 14px
    line-height: 17px
    color: #FBFBFB
    font-weight: 300

.rights
  display: flex
  justify-content: space-between
  height: 79px

.social
  display: flex
  justify-content: space-between
  padding-top: 24px

.rights__text
  padding: 30px 0
  font-size: 16px
  line-height: 19px
  color: #FBFBFB

.footer__icons
  display: flex
  align-items: center

.footer__icon
  display: block
  width: 32px
  height: 32px
  background-color: #fff
  color: black
  text-align: center
  line-height: 32px
  margin-left: 7px

  &:hover
    background-color: #F16D7F
    color: #fff
</style>
