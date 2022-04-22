<template>
  <div v-for="product of filterProducts" :key="product.id" class="cart_block">
    <a href="javascript:void(0);" @click="goToShoppCart(product)">
      <!--      <img :src="require(`../assets${product.image}`)" alt="">-->
      <h3>{{ product.title }}</h3>
      <p>{{ product.brand_title }}</p>
      <p>{{ product.regular_price.value }}</p>
    </a>
  </div>
</template>

<script>

export default {
  name: "AProductCart",
  props: {
    products: {
      type: Array,
      default: null
    },
    filter: {
      type: Object,
    },
    brands: {
      type: Array,
      default: null
    }
  },
  data() {
    return{
      Products: this.products,
    }
  },
  created() {
    this.Products
        .map(Products => {
          this.brands
          .map(brands => {
            if(Products.brand === brands.id) {
              Products.brand_title = brands.title
            }
          })
        })
  },
  computed: {
    filterProducts() {
      return this.Products
          .filter(Products => {
            if (!this.filter.brand) {
              return this.Products
            } else {
              return Products.brand === this.filter.brand;
            }
          })
    }
  },
  methods: {
    goToShoppCart(product) {
      console.log(product)
      this.$emit('addShoppCart', {
        product: product,
      })
    }
  }
}
</script>

<style scoped>

</style>