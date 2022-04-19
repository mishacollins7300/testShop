<template>
  <div>
    <div class="header">
      <div class="header-item">
        <div class="logo-title">
          <img class="logo" src="./assets/logo.png" alt="Логотип ASTRIO">
          <span class="header-title">SHOP</span>
        </div>
        <a-shopping-cart :choose-product="chooseProduct"></a-shopping-cart>
      </div>
    </div>
    <div class="main">
      <div>
        <a-filter :brands="brand" @filterBrand="filterBrand"></a-filter>
      </div>
      <div class="products-block">
        <a-product-cart :products="product" :filter="filter" @addShoppCart="addShoppCart"></a-product-cart>
      </div>
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
.header{
  width: 100%;
  height: 60px;
  position: fixed; /* Фиксированное позиционирование */
  left: 0;
  right: 0; /* Вся ширина */
  top: 0; /* Положение сверху */
  padding: 10px; /* Поля вокруг текста */
  background: #d9d9d9; /* Цвет фона */
}
.header-item{
  text-align: center;
  display: flex;
  height: 50px;
  width: 1280px;
  align-items: end;
  justify-content: space-between;
  align-content: center;
  margin: auto;
}
.logo{
  transition: 0.7s;
}
.logo:hover{
  transform: scale(1.1);
  cursor: pointer;
}
.logo-title{
  display: flex;
  height: 35px;
  align-items: baseline;
}
.header-title{
  font-family: Arial;
  font-weight: bold;
  font-size: 18px;
}
.main{
  margin-top: 100px;
  display: flex;
}
.products-block{
  margin-left: 100px;
}

</style>
