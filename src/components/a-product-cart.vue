<template>
  <div v-for="product of filterProducts" :key="product.id" @click="goToShoppCart(product)" class="cart_block">
    <a href="javascript:void(0);" @click="goToShoppCart(product)">
<!--      <img :src="require(`../assets${product.image}`)" alt="">-->
      <h3>{{ product.title }}</h3>
      <p>{{ product.brand }}</p>
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
    }
  },
  computed: {
    filterProducts() {
      return this.products
          .filter(products => {
            if (!this.filter.brand) {
              return this.products
            } else {
              return products.brand === this.filter.brand;
            }
          })
    }
  },
  methods: {
    goToShoppCart(product) {
      this.$emit('addShoppCart', {
        product: product,
      })
    }
  }
}
</script>

<style scoped>

</style>