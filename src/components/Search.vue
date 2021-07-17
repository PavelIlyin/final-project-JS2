<template>
  <form action="#" class="search" @submit.prevent="search()">
    <input
      class="search__input"
      type="text"
      maxlength="40"
      placeholder="Search..."
      v-model="searchLine"
    />
    <button class="search__button" type="submit">
      <img src="../assets/search.svg" alt="search" />
    </button>
  </form>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      searchLine: "",
    };
  },
  methods: {
    search() {
      this.$emit("search", this.searchLine);
    },
  },
};
</script>

<style scoped lang="sass">
.search
  display: flex
  align-items: center

  &__button
    background: #222222
    border: none

  &__input
    background: #222222
    font-size: 14px
    width: 100%
    height: 50%
    margin-right: 10px
    color: #F16D7F
    border: none
    &:focus
      outline: none
</style>
