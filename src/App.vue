<template>
  <div class="header">
    <img class="logo" src="./assets/logo.png" alt="Логотип ASTRIO">
    <a-shopping-cart :choose-product="chooseProduct"></a-shopping-cart>
  </div>
  <div>
    <a-filter :brands="brand" @filterBrand="filterBrand"></a-filter>
    <div>
      <a-product-cart :products="product" :filter="filter" @addShoppCart="addShoppCart"></a-product-cart>
    </div>
  </div>
</template>

<script>
import AFilter from './components/a-filter.vue';
import AProductCart from './components/a-product-cart'
import AShoppingCart from './components/a-shopping-cart'
import brands from './assets/brands.json';
import products from './assets/products.json';

export default {
  name: 'App',
  components: {
    'a-filter': AFilter,
    'a-product-cart': AProductCart,
    'a-shopping-cart': AShoppingCart
  },
  data() {
    return {
      brand: [],
      product: [],
      filter: {},
      chooseProduct: {},

    }
  },
  mounted() {
    this.brand = brands;
    this.product = products;
  },
  methods: {
    filterBrand(filterBrand){
      this.filter = filterBrand;
    },
    addShoppCart(chooseProduct){
      this.chooseProduct = chooseProduct.product;
      console.log(this.chooseProduct)
    }
  },
}
</script>

<style>

</style>
