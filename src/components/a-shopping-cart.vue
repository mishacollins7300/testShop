<template>
  <div class="shopping_cart_block">
    <a href="/shopcartlist"><img src="../assets/shopping-bag_icon-icons.com_64546.png" alt="Корзинка">
      <span v-if="countInShopCart > 0" class="count">{{countInShopCart}}</span></a>
  </div>
</template>

<script>
export default {
  name: "aShoppingCart",
  props:{
    chooseProduct: {
      type: Array,
    }
  },
  data() {
    return {
      shopCart: [],
    }
  },
  computed: {
    countInShopCart() {
      return this.chooseProduct.length;
    }

  },

}
</script>

<style scoped>
img{
  width: 40px;
}
.count{
  position: fixed;
  background-color: red;
  padding: 0px 3px;
  border-radius: 24px;
  font-weight: bold;
  color: white;
}
</style>