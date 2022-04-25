<template>
  <div class="cart_list">
    <div v-for="product of filterProducts" :key="product.id" class="cart_block">
      <a href="javascript:void(0);" @click="goToShoppCart(product)">
        <img :src="require(`../assets${product.image}`)" alt="">
        <h3>{{ product.title }}</h3>
        <p>{{ product.brand_title }}</p>
        <p>${{ product.regular_price.value }}</p>
      </a>
    </div>
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
    return {
      Products: this.products,
    }
  },
  created() {
    this.products
        .map(products => {
          this.brands
              .map(brands => {
                if (products.brand === brands.id) {
                  products.brand_title = brands.title
                }
              })
        })
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
    },

  }
}
</script>

<style scoped>
.cart_list {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 2vw;
}

.cart_block {
  padding: 0 30px;
}

.cart_block a img {
  width: 200px;
}

.cart_block a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #333131;
  text-decoration: none;
  justify-content: flex-start;
}

.cart_block a p, .cart_block a h3 {
  margin: 10px;
}
</style>