<template>
  <div class="shopping_cart_block">
    <img src="../assets/shopping-bag_icon-icons.com_64546.png" alt="Корзинка">
    <span v-if="count !== 0">{{countInShopCart}}</span>
    <p>{{ chooseProduct }}</p>
  </div>
</template>

<script>
export default {
  name: "aShoppingCart",
  props:{
    chooseProduct: {
      type: Object,
    }
  },
  data() {
    return {
      shopCart: [],
      count: 0,
    }
  },
  created() {

  },
  computed: {
    countInShopCart() {

    }

  },
  watch:{
    countInShopCart() {
      return 0
    }
  }

}
</script>

<style scoped>

</style>