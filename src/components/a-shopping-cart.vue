<template>
  <div class="shopping_cart_block">
    <img src="../assets/shopping-bag_icon-icons.com_64546.png" alt="Корзинка">
    <span>{{countInShopCart}}</span>
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
      count: 0,
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
.hopping_cart_block{

}
</style>